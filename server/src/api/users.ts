import express from "express";
import usersRepository from "../middleware/users/usersRepository";

class UsersApi {
    async getUser(req: express.Request, res: express.Response) {
        if(req.params.userId){
            const user = usersRepository.getById(req.params.userId);
            if(user) {
                return res.status(200).send(user);
            } else {
                return res.status(404).send({ error: { code: 'NOT_FOUND', message: 'User not found.' } });
            }
        } else {
            return res.status(400).send('Please provide user id.');
        }
    }
    async getUsers(req: express.Request, res: express.Response) {
        return res.status(200).send(usersRepository.getAll());
    }
}

export default new UsersApi();