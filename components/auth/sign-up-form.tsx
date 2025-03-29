"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "@/components/ui/submit-button";
import Link from "next/link";

const SignUpForm = () => {
  return (
    <form>
      <input type="hidden" name="callbackUrl" />
      <div className="space-y-6">
        <div>
          <Label htmlFor="email">이름</Label>
          <Input id="name" name="name" type="text" autoComplete="name" />
        </div>
        <div>
          <Label htmlFor="email">이메일</Label>
          <Input id="email" name="email" type="text" autoComplete="email" />
        </div>
        <div>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="password"
          />
        </div>
        <div>
          <Label htmlFor="confirmPassword">비밀번호 확인</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            autoComplete="confirmPassword"
          />
        </div>
        <div>
          <SubmitButton>회원가입</SubmitButton>
        </div>
        <div className="text-sm text-center text-muted-foreground">
          계정이 이미 있으신가요?{" "}
          <Link
            href={"/login"}
            target="_self"
            className="text-foreground link hover:underline underline-offset-2"
          >
            로그인
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
