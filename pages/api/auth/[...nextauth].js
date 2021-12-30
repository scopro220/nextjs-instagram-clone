import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  // Regular page
  // theme: {
  //   logo: "https://i.imgur.com/bXQ0yOj.jpg",
  //   brandColor: "#f13287",
  //   colorScheme: "auto",
  // },

  // Custom SignIn
  pages: {
    signIn: "/auth/signin",
  },
});
