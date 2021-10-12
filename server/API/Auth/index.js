import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const Router = express.Router();

// Models
import { UserModel }  from '../../database/user';
import passport from 'passport';

/*
|==============================================|
| Route       | /signup                        |
| Description | Signup with email and password |
| Params      | None                           |
| Access      | Public                         |
| Method      | POST                           |
|==============================================|
*/

Router.post("/signup", async (req, res) => {
    try {
        await UserModel.findEmailAndPhone(req.body.credentials);

        // Database
        const newUser = await UserModel.create(req.body.credentials);

        // JWT Auth Token
        const token = newUser.generateJwtToken();
        return res.status(200).json({token});
    }
    
    catch (error) {
        return res.status(500).json({error: error.message});        
    }
});

/*
|==============================================|
| Route       | /signin                        |
| Description | Signin with email and password |
| Params      | None                           |
| Access      | Public                         |
| Method      | POST                           |
|==============================================|
*/

Router.post("/signin", async (req, res) => {
    try {
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);

        // JWT Auth Token
        const token = user.generateJwtToken();
        return res.status(200).json({token, status: "Success"});
    }
    
    catch (error) {
        return res.status(500).json({error: error.message});        
    }
});

/*
|==============================|
| Route       | /google        |
| Description | Google Signin  |
| Params      | None           |
| Access      | Public         |
| Method      | GET            |
|==============================|
*/

Router.get("/google", passport.authenticate("google", {
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
    ]
}));

/*
|=======================================|
| Route       | /google/callback        |
| Description | Google Signin Callback  |
| Params      | None                    |
| Access      | Public                  |
| Method      | GET                     |
|=======================================|
*/

Router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
    return res.json({ token: req.session.passport.user.token });
});

export default Router;