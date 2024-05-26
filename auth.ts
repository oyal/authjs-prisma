import { PrismaAdapter } from '@auth/prisma-adapter'
import bcrypt from 'bcryptjs'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

import db from '@/lib/db'
import { SignInSchema } from '@/schemas'

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt',
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = await SignInSchema.parseAsync(credentials)

        const user = await db.user.findUnique({
          where: {
            email,
          },
        })

        if (!user) {
          throw new Error('No user found')
        }

        const isValid = bcrypt.compareSync(password, user.password!)

        if (!isValid) {
          throw new Error('Invalid password')
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
        }
      },
    }),
    GitHub,
    Google,
  ],
  callbacks: {
    session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }
      return session
    },
  },
  debug: process.env.NODE_ENV === 'development',
})
