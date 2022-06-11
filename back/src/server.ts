import express, { json } from "express";
import cors from "cors";
import db from "../models";
import { users } from "./routes/Users.routes";

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(json());

app.use(users);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at ${port}`);
  });
});

// docker run --name database -e POSTGRES_PASSWORD=1234 -p 5432:5432 -d postgres
