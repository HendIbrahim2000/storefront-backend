
## Installation
`yarn` or `npm install`

## For extra installation

bcrypt: `npm i --save-dev @types/bcrypt`
jsonwebtoken: `npm i --save-dev @types/jsonwebtoken`
cors: `npm i --save-dev @types/cors`

## Set up Database
### Create Databases
We shall create the dev and test database.

- connect to the default postgres database using psql powershel 
- In psql it will ask for some credentials: 
    localhost: `localhost`
    port: `5432`
    database: `store_app`
    username: `store_user`
    password: `password123`
- or you will need to create them using following code
    - `CREATE USER store_user WITH PASSWORD 'password123';`
- In psql run the following to create the dev and test database
    - `CREATE DATABASE store_app;`
    - `CREATE DATABASE store_app_test;`
- Connect to the databases and grant all privileges
    - Grant for dev database
        - `\c store_app`
        - `GRANT ALL PRIVILEGES ON DATABASE store_app TO store_user;`
    - Grant for test database
        - `\c store_app`
        - `GRANT ALL PRIVILEGES ON DATABASE store_app_test TO store_user;`

### Migrate Database

To migrate use code below
`db-migrate up`

## Enviromental Variables Set up
Below are the environmental variables that needs to be set in a `.env` file.

POSTGRES_HOST=127.0.0.1
POSTGRES_DB=store_app
POSTGRES_TEST_DB= store_app_test
POSTGRES_USER=store_user
POSTGRES_PASSWORD=password123
JWT_SECRET=pingopingo
BCRYPT_PASSWORD=your-secret-password
SALT_ROUNDS=10
TOKEN_TEST = eyJhbGciOiJIUzI1NiJ9.MQ.Dmp0wYy90KljWQMOVMcIUb90Fr6OY5N7g8H6ta0bdlo
ENV=dev

## Start App
`yarn watch` or `npm run watch`

### Running Ports 
After start up, the server will start on port `3000` and the database on port `5432`

## Database schema and columns
In requirments.md file.

## API Endpoints
#### Products
- Index: `'products/' [GET]`
- Show: `'products/:id' [GET]`
- Create [token required]: `'products/' [POST] (token)`
- Delete: `'products/:id  [DELETE]`

#### Users
- Index [token required]: `'users/' [GET] (token)`
- Show [token required]: `'users/:id' [GET] (token)`
- Create (args: User)[token required]: `'users/' [POST] (token)`
- Delete [token required]: `'users/:id' [DELETE] (token)`

#### Orders
- Index [token required]: `'orders/:user_id' [GET] (token)`
- Current Order by user [token required]: `'orders/current/:user_id' [GET] (token)`
- [ADDED] Active Orders by user [token required]: `'orders/active/:user_id' [GET] (token)`
- [ADDED] Update order's status [token required]: `'orders?status=<status>&orderId=<order id> [PUT] (token)`
- [ADDED] Delete [token required]: `'orders/:id [DELETE] (token)`

## Testing
Run test with 

`yarn test`
