import express from "express";
import { verify } from "jsonwebtoken";

export const authenticationCheck = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    verify(token,process.env.TOKEN_SECRET,(err: any, user: any) => {
        if(err) {
            res.sendStatus(403);
        }
        next();
    })
};