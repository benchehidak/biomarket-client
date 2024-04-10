import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign-in form (e.g., "Sign in with...")
      name: 'Credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const user = await prisma.util.findFirst({ where: { email } });
        if (user) {
          // return res.status(401).json({ message: 'Invalid email or password' });
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) {
            console.log(user)
            return user
          }
        }
        return null;
      },
      Profile(
        profile
      ){
        return {
          name: profile.user,
          role: profile.adminlvl,
        };
      }
    }),
  ],
  callbacks: {
    jwt({ token, user, session }) {
      if(user) token.id = user.id
      return token
    },
    session({ session, token }) {
      session.user.id = token.id
      return session
    }
  },
  pages: {
    signIn: '/signin',
  },
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
    
    
  },
  
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
