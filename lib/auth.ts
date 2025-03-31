import { getServerSession, NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { SERVER_URL } from "./constants";

async function refreshToken(token: JWT): Promise<JWT> {
  try {
    const res = await fetch(`${SERVER_URL}/auth/refresh`, {
      method: "POST",
      headers: {
        authorization: `Refresh ${token.serverTokens.refresh_token}`,
      },
    });

    console.log("refrershed");

    const response = await res.json();

    return {
      ...token,
      serverTokens: response,
    };
  } catch (error) {
    console.error("Failed to refresh token", error);
    return { ...token, error: "RefreshToken Error" };
  }
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const { email, password } = credentials;

        const res = await fetch(`${SERVER_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (res.status === 401) {
          console.log(res.statusText);
          return null;
        }
        const member = await res.json();
        return member;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user: member, trigger, session }) {
      if (member) return { ...token, ...member };
      if (new Date().getTime() < token.serverTokens.expiresIn) return token;
      if (trigger === "update" && session !== null) {
        const { name, profile_url, role } = session;
        token.member.name = name;
        token.member.role = role;
        token.member.profile_url = profile_url;
      }

      return await refreshToken(token);
    },

    async session({ session, token }) {
      session.member = token.member;
      session.serverTokens = token.serverTokens;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  cookies: {
    sessionToken: {
      name: "trexgames.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
} satisfies NextAuthOptions;

export const auth = () => getServerSession(authOptions);
