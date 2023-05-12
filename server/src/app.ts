import express, { Request, Response } from "express";
import router from "./routes/routes";
import DBconnection from "./database/database";
const app = express();
const PORT = 3001;

app.use(express.json());
app.use("/api", router);
app.listen(PORT, () => {
  DBconnection()
    .then(() => {
      console.log(`Server running at ${PORT}`);
    })
    .catch((error) => {
      console.log(error);
      console.log(`The app cant be started`);
    });
});
