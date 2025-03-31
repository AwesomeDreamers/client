import "next-auth";

declare module "next-auth" {
  interface Session {
    member: {
      id: string;
      name: string;
      email: string;
      role: string;
      profile_url: string;
    };

    serverTokens: {
      access_token: string;
      refresh_token: string;
      expiresIn: number;
    };
  }
}

import "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    member: {
      id: string;
      name: string;
      email: string;
      role: string;
      profile_url: string;
    };

    serverTokens: {
      access_token: string;
      refresh_token: string;
      expiresIn: number;
    };
  }
}
