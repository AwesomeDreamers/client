import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "../../../components/auth/sign-up-form";

export const metadata: Metadata = {
  title: "회원가입",
};

const SignUpPage = async () => {
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
          <CardTitle className="text-center">회원가입</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
