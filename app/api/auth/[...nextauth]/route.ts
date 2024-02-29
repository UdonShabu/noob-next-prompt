import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],

  async signIn({ profile }: any) {
    try {
      // TODO: Connect to mongodb
    } catch (error) {}
  },
});

export { handler as GET, handler as POST };
