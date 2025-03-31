import { useFormStatus } from "react-dom";
import { Button } from "./button";

interface SignUpButtonProps {
  children: React.ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  className?: string;
}

export function SubmitButton({
  children,
  variant,
  className,
}: SignUpButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      className={`${className ? className : "w-full"} cursor-pointer`}
      variant={variant}
    >
      {pending ? "로딩중" : children}
    </Button>
  );
}
