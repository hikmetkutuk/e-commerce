import dotenv from "dotenv";

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 5000;
const MONGO_URL = "mongodb+srv://hikmetis:DsllmLW6NnxnJFgP@cluster0.xv3oi.mongodb.net/<dbname>?retryWrites=true&w=majority";
const JWT_SECRET = "E-COMMERCESECRET"


const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
    uri: MONGO_URL,
    secret: JWT_SECRET
}

const config = {
    server: SERVER
}

export default config;
