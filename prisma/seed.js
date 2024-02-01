const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


async function main() {

    const users = await prisma.users.upsert({
        where: { email: 'start"gmail.com' },
        update: {},
        create: {
            name: 'star',
            email: 'star@gmail.com'
        }
    })
    console.log(`users :`, users);
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect()
        process.exit()
    })