import Client from '../database'

export type Order = {
    id?: number;
    userID: number;
    complete: boolean;
}

export type orderProduct = {
    id?: number;
    quantity: number;
    productID: number;
    orderID: number;
}

export class OrderStore {

    async create(orderConst: Order): Promise<Order> {
        try {
            const { userID, complete } = orderConst;
            const sql = 'INSERT INTO orders (userid, complete) VALUES($1, $2) RETURNING *'
            const conn = await Client.connect()

            const result = await conn
                .query(sql, [userID, complete])

            const Order = result.rows[0]

            conn.release()
            return Order
        } catch (err) {
            throw new Error(`Could not add new order ${name}. Error: ${err}`)
        }
    }

    async addProduct(quantity: number, productID: number, orderID: number): Promise<orderProduct> {
        try {
            const orderSql = 'SELECT * FROM orders WHERE id=($1)';
            const conn = await Client.connect();
            const result = await conn.query(orderSql, [orderID]);
            const Order = result.rows[0];
            if(Order.complete === true) {
                throw new Error(`Could not add product ${productID} to order`)
            }
            conn.release();

            
            
        } catch (err) {
            throw new Error(`Could not add new order`)
        }

        try {
            const sql = 'INSERT INTO prodect_order (quantity, orderid, productid) VALUES($1, $2, $3) RETURNING *';
            const conn = await Client.connect();
            const result = await conn.query(sql, [quantity, orderID, productID]);
            const Order:  orderProduct = result.rows[0];
            conn.release();
            return Order;
            
        } catch (err) {
            throw new Error(`Could not add new order`)
        }
    }


    async getUserOrder(userID: number): Promise<Order[]> {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM orders WHERE userid=$1';

            const result = await conn.query(sql, [userID])
            conn.release();

            
            return result.rows
        } catch (err) {
            throw new Error(`Could not add new order ${name}. Error: ${err}`)
        }
    }
}