const fetch = require("node-fetch");
const chalk = require("chalk");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

const seedUsers = async () => {
    console.log("");
    console.log(chalk.yellow("Seeding Users..."));
    console.log("");

    let hashword = await bcrypt.hash("login", 10);

    const users = [
        {
            username: "imre",
            email: "imre@gmail.com",
            hashword,
            role: "ADMIN",
        },
        {
            username: "nick",
            email: "nick@gmail.com",
            hashword,
            role: "ADMIN",
        }
    ]

    await prisma.user.createMany({
        data: users,
    })
    

    await prisma.$disconnect();
    console.log("");
    console.log("");
    console.log(chalk.green("----------------------"));
    console.log(chalk.green("FINISHED SEEDING USERS"));
    console.log(chalk.green("----------------------"));    
}




module.exports = seedUsers;