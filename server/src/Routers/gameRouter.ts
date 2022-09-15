import express  from "express";
import { PrismaClient } from "@prisma/client";
import { convertHourStringToMinutes, convertMinutesToHourString } from "../utils";

const prisma = new PrismaClient({
  log: ['query']
});

const gameRouter = express.Router();

gameRouter.get('/', async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        }
      }
    }
  });
  return res.status(200).json(games);
});

gameRouter.get('/:id/ads', async (req, res) => {
  const gameId = req.params.id;
  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hoursStart: true,
      hoursEnd: true, 
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc',
    }
  });
  return res.status(200).json(ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hoursStart: convertMinutesToHourString(ad.hoursStart),
      hoursEnd: convertMinutesToHourString(ad.hoursEnd),
    }
  }));

});

gameRouter.post('/:id/ads', async (req, res) => {
  const gameId: string = req.params.id;
  const body: any = req.body;
  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hoursStart: convertHourStringToMinutes(body.hoursStart),
      hoursEnd: convertHourStringToMinutes(body.hoursEnd),
      useVoiceChannel: body.useVoiceChannel
    }
  })

  res.status(201).json(ad)
});

export default gameRouter;

