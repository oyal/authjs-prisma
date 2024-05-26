const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      {children}
    </div>
  )
}

export default AuthLayout
