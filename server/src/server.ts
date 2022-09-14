import express from "express";
import { adsRouter, gameRouter } from "./Routers";

const PORT = 3333;
const app = express();

app.use(express.json());

app.use('/games', gameRouter);

app.use('/ads', adsRouter)

app.listen(PORT, () => {
  console.log(`App rodando em ${PORT}`);
});