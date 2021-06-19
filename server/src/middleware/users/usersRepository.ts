import { DBStore } from '../../app_data/DBStore';
import { IUser } from '../../app_data/types';
class UsersRepository {

    private users: IUser[];

    constructor() {
        this.users = DBStore.getInstance().getUsers();
    }

    public getAll(): IUser[] {
        return { ...this.users };

    }

    public getById(id: string) {
        const user = this.users.find((item) => item.id === id);
        return user ? { ...user } : undefined;
    }

    public getByUserNameAndPassword(userName: string, password: string) {
        const user = this.users.find((item) => item.userName === userName && item.password === password);
        return user ? { ...user } : undefined;
    }

    public create(user: IUser) {
        this.users.push({ ...user });
    }

    public update(user: IUser) {
        const userIndex = this.users.findIndex((item) => item.id === user.id);
        if (userIndex >= 0) {
            this.users.splice(userIndex, 1, { ...user });
        }
    }

    public deleteById(id: string) {
        const userIndex = this.users.findIndex((item) => item.id === id);
        if (userIndex >= 0) {
            this.users.splice(userIndex, 1);
        }
    }
}

export default new UsersRepository();