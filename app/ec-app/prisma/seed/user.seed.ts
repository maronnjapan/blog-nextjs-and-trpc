import { PrismaClient } from "@prisma/client";

async function userSeed(prisma: PrismaClient) {
    await prisma.user.createMany({
        data: [
            {
                email: 'test1@example.com',
                password: 'test1',
                user_name: 'Bob'
            },
            {
                email: 'test2@example.com',
                password: 'test2',
                user_name: 'Alice',
                email_veryfied: true
            }
        ]
    })
}

export default userSeed