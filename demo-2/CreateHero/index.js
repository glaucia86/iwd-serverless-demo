/**
 * File: CreateHero/index.js
 * Description: file responsible for creating a new Hero and persists in MongoDB
 * Date: 04/23/2020
 * Author: Glaucia Lemos <glaucia86>
 */

const createMongoClient = require("../shared/mongo");

module.exports = async function (context, req) {
  const hero = req.body || {};

  if (hero) {
    context.res = {
      status: 400,
      body: "Fields are required!",
    };
  }

  const { client: MongoClient } = await createMongoClient();
  const Heroes = MongoClient.collection("heroes");

  try {
    const heroes = await Heroes.insert(hero);
    context.res = { status: 201, body: heroes.ops[0] };
  } catch (error) {
    context.res = {
      status: 500,
      body: "Error on create new Hero!",
    };
  }
};
