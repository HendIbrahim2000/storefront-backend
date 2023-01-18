
## Data Shapes
#### Products
-  id
- name
- price

Table: products (id SERIAL PRIMARY KEY, name VARCHAR(100), price INTEGER)

#### Users
- id
- username
- password

Table: users (id SERIAL PRIMARY KEY, username VARCHAR(70) NOT NULL, password VARCHAR(70) NOT NULL)

#### Orders
- id
- userid
- complete

Table: orders  (id SERIAL PRIMARY KEY, userid INTEGER, complete BOOLEAN, FOREIGN KEY (userid) REFERENCES users(id))

#### Orders products
- id
- quantity
- orderid
- productid

Table: prodect_order (id SERIAL PRIMARY KEY,quantity INTEGER NOT NULL,orderid INTEGER REFERENCES orders(id),productid INTEGER REFERENCES products(id))