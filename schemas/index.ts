import * as zod from 'zod'

export const SignInSchema = zod.object({
  email: zod.string().email({
    message: 'Invalid email address',
  }),
  password: zod.string().min(6, {
    message: 'Password must be at least 6 characters long',
  }),
})

export type SignInSchemaType = zod.infer<typeof SignInSchema>

export const SignUpSchema = zod.object({
  name: zod.string().min(3, {
    message: 'Name must be at least 3 characters long',
  }),
  email: zod.string().email({
    message: 'Invalid email address',
  }),
  password: zod.string().min(6, {
    message: 'Password must be at least 6 characters long',
  }),
})

export type SignUpSchemaType = zod.infer<typeof SignUpSchema>
