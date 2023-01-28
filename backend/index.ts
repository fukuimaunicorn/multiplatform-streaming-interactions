import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import twitchChat from './util/chat/twitchChat';

twitchChat();

dotenv.config();

const app: Express = express();
const port = process.env.PORT|| 4000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get("/get-config", ()=>{})

app.get("/set-config", ()=>{})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});