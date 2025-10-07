import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/app/(auth)/sign-in/login-form";
import { Logo } from "@/components/logo";
import HomePage from "@/app/page";

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="/" className="flex items-center gap-2 self-center font-medium">
          <Logo />
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
