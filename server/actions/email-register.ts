"use server"
import { RegisterSchema } from "@/types/register-schema"
import bcrpyt from "bcrypt"
import { eq } from "drizzle-orm"
import { createSafeActionClient } from "next-safe-action"
import { db } from ".."
import { users } from "../schema"
import { sendVerificationEmail } from "./email"
import { generateEmailVerificationToken } from "./token"

const action = createSafeActionClient()

export const emailRegister = action(RegisterSchema,
  async ({ email, name, password }) => {
    const hashedPassword = await bcrpyt.hash(password, 10)
    console.log(hashedPassword);
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    })

    if (existingUser) {
      if (!existingUser.emailVerified) {
        const verificationToken = await generateEmailVerificationToken(email)
        await sendVerificationEmail(
          verificationToken[0].email,
          verificationToken[0].token
        )
        return { success: "Email confirmation resent " }
      }
      return { error: 'User already exists' }
    }
    await db.insert(users).values({
      email,
      name,
      password: hashedPassword,
    })

    const verificationToken = await generateEmailVerificationToken(email)

    await sendVerificationEmail(
      verificationToken[0].email,
      verificationToken[0].token
    )

    return { success: "Confirmation Email Sent!" }

  })