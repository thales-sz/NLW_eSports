import express from "express";
import { adsRouter, gameRouter } from "./Routers";
import cors from 'cors';

const PORT = 3333;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/games', gameRouter);

app.use('/ads', adsRouter)

app.listen(PORT, () => {
  console.log(`App rodando em ${PORT}`);
});