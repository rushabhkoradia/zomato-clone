require("dotenv").config;

import express from "express";
import cors from "cors";
import helmet from "helmet";
import Auth from "./API/Auth"; // API
import ConnectDB from "./database/connection"; // DB

const zomato = express();
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use("/auth", Auth); // For Application routes --> localhost:4000/auth/signup

zomato.get("/", (req, res) => {
  res.json({ message: "Successful" });
});

zomato.listen(4000, () =>
  ConnectDB()
    .then(() => console.log("Server is up and running"))
    .catch(() => console.log("DB Connection Failed"))
);