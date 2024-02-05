import express, { Express } from 'express'
import { conntectToDatabase } from '../config/connect-database'
import cors from 'cors'
import { zodMiddleware } from '../middleware/zod-middleware';
import morgan from "morgan";
import { errorMiddleware } from '../middleware/error-handeler';
import authRouter from '../routes/authRoute/auth-route'

export const app: Express = express()

app.use(express.json({ limit: "50mb" }));
conntectToDatabase()

//middleware config
const corsOptions = {
    origin: ['http://localhost:3000',],
    methods: ['*'],
    credentials: true,
};

//middlewares 
app.use(cors(corsOptions))
app.use(morgan('dev'));
app.use(zodMiddleware);

//routes for auth
app.use("/admin-api/v1", authRouter)




//test
app.get('/', (req, res) =>
{
    res.json({ message: "Server is working just fine" })
})

app.use(errorMiddleware)




