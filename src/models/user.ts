import Client from '../database'
import bcrypt from 'bcrypt';
import { userToken } from '../utilities/tokenUtil';

export type User = {
    id?: number;
    username: string;
    password: string;
}

export type Auth = {
    auth: boolean;
    token: string;
}

export class UserStore {
    async index(): Promise<User[]> {
        try {
            const conn = await Client.connect()
            const sql = 'SELECT * FROM users'

            const result = await conn.query(sql)

            conn.release()

            return result.rows
        } catch (err) {
            throw new Error(`Could not get users. Error: ${err}`)
        }
    }

    async show(id: string): Promise<User> {
        try {
            const sql = 'SELECT * FROM users WHERE id=($1)'
            const conn = await Client.connect()

            const result = await conn.query(sql, [id])

            conn.release()

            return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find user ${id}. Error: ${err}`)
        }
    }

    async create(UserConst: User): Promise<Auth> {
        try {
            const { username, password } = UserConst;
            const pepper = process.env.BCRYPT_PASSWORD;
            const saltRounds = process.env.SALT_ROUNDS as string;
            const hash = bcrypt.hashSync(
                password + pepper,
                parseInt(saltRounds)
            );
            const sql = 'INSERT INTO users (username, password) VALUES($1, $2) RETURNING *'

            const conn = await Client.connect()

            const result = await conn
                .query(sql, [username, hash])

            const User = result.rows[0]

            conn.release()
            const id: number = result.rows[0].id;
            const token: string = userToken(id);
            return {
                auth: true,
                token
            }
        } catch (err) {
            throw new Error(`Could not add new user. Error: ${err}`)
        }
    }

    async delete(id: string): Promise<User> {
        try {
            const sql = 'DELETE FROM users WHERE id=($1)'
            // @ts-ignore
            const conn = await Client.connect()

            const result = await conn.query(sql, [id])

            const User = result.rows[0]

            conn.release()

            return User
        } catch (err) {
            throw new Error(`Could not delete user ${id}. Error: ${err}`)
        }
    }
}