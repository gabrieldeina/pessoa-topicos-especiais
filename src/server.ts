import express from "express";
import { router } from "./config/routes";
import { mongoose } from "./config/database";

const app = express();
const database = mongoose;

app.use(express.json());
app.use(router);

console.clear();

app.listen(1234, () => {
  console.log(`The server is running with ts-node-dev on port 1234!`);
});
