import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        email: {
          label: "Email:",
          type: "text",
          placeholder: "your-cool-Email",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        const user = {
          id: "42",
          name: process.env.AUTH_NAME,
          password: process.env.AUTH_PASSWORD,
          email: process.env.AUTH_EMAIL,
        };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password &&
          credentials?.email === user.email
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
