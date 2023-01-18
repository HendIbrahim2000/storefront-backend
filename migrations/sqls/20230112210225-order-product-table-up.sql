CREATE TABLE prodect_order (
    id SERIAL PRIMARY KEY, 
    quantity INTEGER NOT NULL, 
    orderid INTEGER REFERENCES orders(id),
    productid INTEGER REFERENCES products(id)
    );