import LoginForm from "@/components/auth/login-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "로그인",
};
console.log("SERVER_URL", process.env.SERVER_URL);
console.log("NEXTAUTH_SECRET", process.env.NEXTAUTH_SECRET);
console.log("NEXTAUTH_JWT_SECRET", process.env.NEXTAUTH_JWT_SECRET);
console.log("NEXTAUTH_URL", process.env.NEXTAUTH_URL);
const Login = async () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="bg-[#121216]">
        <CardHeader className="space-y-4">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/images/logo.png"
              width={100}
              height={100}
              alt={`logo`}
              priority={true}
            />
          </Link>
          <CardTitle className="text-center">로그인</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
