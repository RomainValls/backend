require("dotenv/config");
require("../db/index");
const Service = require("../models/Service.model");

const service = {
  name: "Garder de chien",
  provider: "64789981dc1754a3ac3c10a3",
  requester: "6475ee916536be87920540a7",
  skill: "6475ee97a255725bb3b6c161",
};

async function seed() {
  try {
    await Service.deleteMany();
    await Service.create(service);
    console.log("Created all the services!");
    process.exit();
  } catch (error) {
    console.log(error);
  }
}

seed();
