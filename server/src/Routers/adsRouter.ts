import express  from "express";

const adsRouter = express.Router();

adsRouter.get('/', (req, res) => {
  return res.status(200).json({ message: 'Sucesso rota de ADS'});
});

export default adsRouter;