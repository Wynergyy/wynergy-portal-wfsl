"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import GoogleIcon from "@/components/icons/GoogleIcon";
import AppleIcon from "@/components/icons/AppleIcon";
import MicrosoftIcon from "@/components/icons/MicrosoftIcon";
import MagicIcon from "@/components/icons/MagicIcon";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-wfsl-background">
      <Card className="w-full max-w-md shadow-xl border-wfsl-border">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Sign in to WFSL Portal
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              className="w-full mt-2"
              onClick={() => signIn("email", { email })}
            >
              <MagicIcon className="w-5 h-5 mr-2" />
              Continue with Email
            </Button>
          </div>

          <Separator className="my-4" />

          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center"
              onClick={() => signIn("google")}
            >
              <GoogleIcon className="w-5 h-5 mr-2" />
              Continue with Google
            </Button>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center"
              onClick={() => signIn("microsoft")}
            >
              <MicrosoftIcon className="w-5 h-5 mr-2" />
              Continue with Microsoft
            </Button>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center"
              onClick={() => signIn("apple")}
            >
              <AppleIcon className="w-5 h-5 mr-2" />
              Continue with Apple
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
