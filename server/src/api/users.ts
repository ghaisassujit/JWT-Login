import express from "express";
import usersRepository from "../middleware/users/usersRepository";

class UsersApi {
    async getAll(req: express.Request, res: express.Response) {
        res.status(200).send(usersRepository.getAll());
    }
}

export default new UsersApi();