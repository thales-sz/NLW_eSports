import express  from "express";

const gameRouter = express.Router();

gameRouter.get('/', (req, res) => {
  return res.status(200).json({ message: 'Sucesso rota de GAMES'});
});

export default gameRouter;