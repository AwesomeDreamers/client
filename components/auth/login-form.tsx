"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "@/components/ui/submit-button";
import { validateLoginForm } from "@/lib/actions/auth.actions";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginForm = () => {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const validationResult = await validateLoginForm(formData);
    const email = validationResult?.data?.email;
    const password = validationResult?.data?.password;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result?.status === 401) {
      toast.error("이메일 또는 비밀번호가 일치하지 않습니다.");
      return;
    }

    if (result?.status === 200) {
      router.push("/");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div>
          <Label htmlFor="email" className="mb-2">
            이메일
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>
        <div>
          <Label htmlFor="email" className="mb-2">
            비밀번호
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="password"
          />
        </div>
        <div>
          <SubmitButton>로그인</SubmitButton>
        </div>
        <div className="text-sm text-center text-muted-foreground">
          계정이 없으신가요?{" "}
          <Link
            href={"/sign-up"}
            target="_self"
            className="text-foreground link hover:underline underline-offset-2"
          >
            회원가입
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
