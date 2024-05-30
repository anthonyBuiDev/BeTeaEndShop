"use server"

import { LoginSchema } from '@/types/login-schema'
import { eq } from 'drizzle-orm'
import { createSafeActionClient } from 'next-safe-action'
import { db } from '..'
import { users } from '../schema'

const action = createSafeActionClient()

export const emailSignIn = action(LoginSchema, async ({ email, password, code }) => {
  const existingUser = await db.query.users.findFirst({
    where: eq(users.email, email),
  })

  if (existingUser?.email !== email) {
    return { error: 'User does not found' }
  }

  // if (!existingUser.emailVerified)

  return { success: email }
})