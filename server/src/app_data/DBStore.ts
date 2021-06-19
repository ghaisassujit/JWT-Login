import { IUser } from './types';
import * as utility from './util';
export class DBStore {

    private static dbStore: DBStore;

    private users: IUser[];


    public static getInstance() {
        if (!this.dbStore) {
            this.dbStore = new DBStore();
            this.dbStore.users = [];
            utility.populateUsers(this.dbStore.users);
        }

        return this.dbStore;
    }

    public getUsers(): IUser[] {
        return this.users;
    }
}