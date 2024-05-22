import { UserRole } from "@prisma/client"
import NextAuth, { type DefaultSession } from "next-auth"

export type ExtendedUser = DefaultSession["user"] & {
    id: string
    role: UserRole
    isTwoFactorEnabled: boolean
    isOAuth: boolean
}

declare module "next-auth" {
    interface Session {
        user: ExtendedUser
    }
}

// import { JWT } from "next-auth/jwt"

// declare module "next-auth/jwt" {
//     interface JWT {
//         role?: "ADMIN" | "USER"
//     }
// }