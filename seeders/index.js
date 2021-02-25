const seedUsers = require("./users");

const seed = async () => {
    await seedUsers();
}

module.exports = seed;