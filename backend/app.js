import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import textRoute from './routes/textRoute.js';

const app = express(); // allows us to create the server using express

// make environment variables accessible
dotenv.config({ path: './config.env' });

// log some request data so that we can see that the request was sent
app.use(morgan('dev'));

// configure cors for our frontend
app.use(cors({ origin: process.env.FRONTEND_BASE_URL }));

// allow communication with json
app.use(express.json());

app.use('/api/texts', textRoute); // handle api/text route requests with textRoute

// export the app variable to that we can use it in other files
export default app;
