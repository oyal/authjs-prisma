import Link from 'next/link'

import { FaGithub } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'

import { signIn } from '@/auth'
import SignUpForm from '@/components/sign-up-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const SignUpPage = () => {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle className="text-center text-xl">Sign Up</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <SignUpForm />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <form
          action={async () => {
            'use server'
            await signIn('github', {
              redirectTo: '/',
            })
          }}
        >
          <Button type="submit" variant="outline" className="w-full">
            <FaGithub className="mr-2 size-5" />
            GitHub
          </Button>
        </form>
        <form
          action={async () => {
            'use server'
            await signIn('google', {
              redirectTo: '/',
            })
          }}
        >
          <Button type="submit" variant="outline" className="w-full">
            <FcGoogle className="mr-2 size-5" />
            Google
          </Button>
        </form>
        <div className="text-center text-sm">
          Already have an account?{' '}
          <Link href="/auth/sign-in" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default SignUpPage
