import dotenv from 'dotenv';
dotenv.config();

const config = {
    POSTGRES_HOST: process.env.POSTGRES_HOST||"127.0.0.1",
    POSTGRES_DB: process.env.POSTGRES_HOST||"store_app",
    POSTGRES_TEST_DB: process.env.POSTGRES_HOST||"store_app_test",
    POSTGRES_USER: process.env.POSTGRES_HOST||"store_user",
    POSTGRES_PASSWORD: process.env.POSTGRES_HOST||"password123",
    JWT_SECRET: process.env.POSTGRES_HOST||"pingopingo",
    BCRYPT_PASSWORD: process.env.POSTGRES_HOST||"your - secret - password",
    SALT_ROUNDS: process.env.POSTGRES_HOST||10,
    ENV: process.env.POSTGRES_HOST||"dev",
}

export default config