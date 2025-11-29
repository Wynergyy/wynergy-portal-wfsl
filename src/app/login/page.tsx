"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

// Brand icons
import { MicrosoftIcon } from "@/components/icons/MicrosoftIcon";
import { AppleIcon } from "@/components/icons/AppleIcon";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { MagicIcon } from "@/components/icons/MagicIcon";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-wfsl-background p-6">
      <Card className="w-full max-w-md border border-wfsl-border shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold tracking-tight">
            Sign in to WFSL Portal
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">

          {/* MICROSOFT */}
          <Button
            className="w-full flex items-center gap-3 bg-[#0078D4] hover:bg-[#006CBE] text-white"
            onClick={() => signIn("azure-ad")}
          >
            <MicrosoftIcon className="h-5 w-5" />
            <span>Sign in with Microsoft</span>
          </Button>

          {/* APPLE */}
          <Button
            variant="outline"
            className="w-full flex items-center gap-3"
            onClick={() => signIn("apple")}
          >
            <AppleIcon className="h-5 w-5" />
            <span>Sign in with Apple</span>
          </Button>

          {/* GOOGLE */}
          <Button
            variant="outline"
            className="w-full flex items-center gap-3"
            onClick={() => signIn("google")}
          >
            <GoogleIcon className="h-5 w-5" />
            <span>Sign in with Google</span>
          </Button>

          <Separator className="my-4" />

          {/* MAGIC LINK EMAIL */}
          <Input
            type="email"
            placeholder="you@example.com"
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            className="w-full flex items-center gap-3"
            onClick={() => signIn("email", { email })}
          >
            <MagicIcon className="h-5 w-5" />
            <span>Send Magic Link</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
