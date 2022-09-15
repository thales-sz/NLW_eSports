import { PrismaClient } from "@prisma/client";
import express  from "express";

const prisma = new PrismaClient({
  log: ['query'],
});

const adsRouter = express.Router();

adsRouter.get('/:id/discord', async (req, res) => {
  const adId = req.params.id;
  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    }
  });
  return res.status(200).json(ad);
});

export default adsRouter;