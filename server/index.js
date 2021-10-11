require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import googleAuthConfig from './config/google.config'; // config
import Auth from "./API/Auth"; // API
import ConnectDB from "./database/connection"; // DB

const zomato = express();
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

googleAuthConfig(passport); // passport configuration

zomato.use("/auth", Auth); // For Application routes --> localhost:PORT/auth/signup

zomato.get("/", (req, res) => {
  res.json({ message: "Successful" });
});

zomato.listen(5000, () =>
  ConnectDB()
    .then(() => console.log("Server is up and running"))
    .catch(() => console.log("DB Connection Failed"))
);

// {
//   "credentials" : {
//       "fullName" : "Rushabh Koradia",
//       "email" : "abc@example.com",
//       "password" : "abc123",
//       "address" : "lol street",
//       "phoneNumber" : 7208222666
//   }
// }