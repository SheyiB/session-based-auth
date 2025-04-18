import dotenv from "dotenv-safe";

dotenv.config();

export const config = {
    server: {
        port: process.env.PORT,
        environment: process.env.NODE_ENV
    },
    database: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME
    }
}