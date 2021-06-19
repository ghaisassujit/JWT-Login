import express from "express";
import { sign } from "jsonwebtoken";
import usersRepository from "../middleware/users/usersRepository";

class AuthenticationApi {
    async login(req: express.Request, res: express.Response) {
        if (req.body.userName && req.body.password) {
            const user = usersRepository.getByUserNameAndPassword(req.body.userName, req.body.password);
            if (user) {
                const token = sign(user,process.env.TOKEN_SECRET,)
                res.json({accessToken: token});
            } else {
                res.status(400).send({ error: { code: 'NOT_FOUND', message: 'User not found.' } });
            }
        } else {
            res.status(401).send({ error: { code: 'INVALID_CREDENTIALS', message: 'Invalid user credentials.' } });
        }
    }
}

export default new AuthenticationApi();