import React from 'react'

interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

function GameBanner({ bannerUrl, title, adsCount }: GameBannerProps) {
  return (
    <a href='' className="relative overflow-hidden rounded-lg">
        <img src={bannerUrl}/>
        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white">{title}</strong>
          <span className="text-zinc-300 text-sm block mt-1">{`${adsCount} anúncio(s)`}</span>
        </div>
    </a>
  )
}

export default GameBanner