"use client";

import { ReactNode } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function AppShell({
  children,
  user,
}: {
  children: ReactNode;
  user: any;
}) {
  const initials = user?.name
    ? user.name
        .split(" ")
        .map((p: string) => p[0])
        .join("")
        .toUpperCase()
    : "U";

  return (
    <div className="min-h-screen flex bg-background text-foreground">

      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex w-64 flex-col border-r bg-white">
        <div className="p-4 border-b">
          <h1 className="text-xl font-semibold">WFSL Portal</h1>
          <p className="text-sm text-muted-foreground">Welcome back</p>
        </div>

        <nav className="flex flex-col gap-2 p-4">
          <a className="text-sm text-foreground/80 hover:text-foreground" href="/dashboard">
            Dashboard
          </a>
          <a className="text-sm text-foreground/80 hover:text-foreground" href="/onboarding">
            Onboarding
          </a>
          <a className="text-sm text-foreground/80 hover:text-foreground" href="/dashboard/engineer">
            Engineer Panel
          </a>
          <a className="text-sm text-foreground/80 hover:text-foreground" href="/dashboard/contractor">
            Contractor Portal
          </a>
          <a className="text-sm text-foreground/80 hover:text-foreground" href="/dashboard/admin">
            Admin Panel
          </a>
        </nav>

        <div className="mt-auto p-4 border-t">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-medium">{user?.name ?? "User"}</p>
              <p className="text-muted-foreground text-xs">{user?.email}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Navigation */}
      <div className="md:hidden p-2 border-b flex items-center justify-between bg-white">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">Menu</Button>
          </SheetTrigger>

          <SheetContent side="left">
            <div className="p-4">
              <h1 className="text-xl font-semibold mb-4">Menu</h1>

              <nav className="flex flex-col gap-4">
                <a href="/dashboard">Dashboard</a>
                <a href="/onboarding">Onboarding</a>
                <a href="/dashboard/engineer">Engineer</a>
                <a href="/dashboard/contractor">Contractor</a>
                <a href="/dashboard/admin">Admin</a>
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        <Avatar className="h-8 w-8">
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-background">
        {children}
      </main>
    </div>
  );
}
