import { auth, signOut } from '@/auth'
import { Button } from '@/components/ui/button'

export default async function Home() {
  const session = await auth()

  return (
    <div>
      <form
        action={async () => {
          'use server'
          await signOut()
        }}
      >
        <Button type="submit" variant="destructive">
          Sign out
        </Button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}
