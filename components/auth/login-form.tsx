"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "@/components/ui/submit-button";
import Link from "next/link";

const LoginForm = () => {
  return (
    <form>
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
