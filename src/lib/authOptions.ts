import { PrismaAdapter } from "@auth/prisma-adapter";
import { type AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AzureADProvider from "next-auth/providers/azure-ad";
import AppleProvider from "next-auth/providers/apple";
import EmailProvider from "next-auth/providers/email";
import { prisma } from "@/lib/db/client";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    // ----------------------------
    // MAGIC LINK (EMAIL SIGN IN)
    // ----------------------------
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT || 587),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),

    // ----------------------------
    // GOOGLE (ANDROID SSO)
    // ----------------------------
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),

    // ----------------------------
    // MICROSOFT AZURE AD (ENTERPRISE SSO)
    // ----------------------------
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID ?? "",
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET ?? "",
      tenantId: process.env.AZURE_AD_TENANT_ID ?? "",
    }),

    // ----------------------------
    // APPLE (iOS / macOS PREMIUM SSO)
    // ----------------------------
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID ?? "",
      clientSecret: {
        appleId: process.env.APPLE_CLIENT_ID ?? "",
        teamId: process.env.APPLE_TEAM_ID ?? "",
        privateKey: process.env.APPLE_PRIVATE_KEY ?? "",
        keyId: process.env.APPLE_KEY_ID ?? "",
      },
    }),
  ],

  // ----------------------------
  // SESSION CONFIG
  // ----------------------------
  session: {
    strategy: "jwt",
  },

  // ----------------------------
  // CALLBACKS
  // ----------------------------
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.provider = account.provider;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.provider = token.provider as string;
      }
      return session;
    },

    async redirect({ url, baseUrl }) {
      // After login, always redirect users to onboarding
      if (url.includes("/api/auth/signin") || url.includes("/login")) {
        return `${baseUrl}/onboarding`;
      }
      return url;
    },
  },

  pages: {
    signIn: "/login",
    error: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
