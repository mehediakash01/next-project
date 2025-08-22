import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt", // keeps sessions in JWT; no DB needed for now
  },
  pages: {
    signIn: "/login", // points to your custom login page
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
