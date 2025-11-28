"use client";

import { signIn } from "next-auth/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Sign in to WFSL Portal</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <Button onClick={() => signIn("google")} className="w-full">
            Continue with Google
          </Button>

          <Button onClick={() => signIn("github")} className="w-full">
            Continue with GitHub
          </Button>

          <Button
            onClick={() =>
              signIn("email", { email: "example@example.com" })
            }
            className="w-full"
          >
            Email Magic Link
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
