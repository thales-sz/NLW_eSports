import { MagnifyingGlassPlus} from 'phosphor-react';
import './styles/main.css';
import logoImg from './assests/logo.svg';

function App() {
  return (
    <div className='mx-auto max-w-[1344px] flex flex-col items-center my-20'>
      <img src={logoImg} alt="Logo NLW Esports"/>
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu 
        {' '}
        <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span>
        {' '}
        está aqui.
      </h1>
      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href='' className="relative overflow-hidden rounded-lg">
          <img src='./image_1.png'/>
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white">League of Legends</strong>
            <span className="text-zinc-300 text-sm block mt-1">anunc</span>
          </div>
        </a>
        <a href='' className="relative overflow-hidden rounded-lg">
          <img src='./image_2.png'/>
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white">League of Legends</strong>
            <span className="text-zinc-300 text-sm block mt-1">cnauc</span>
          </div>
        </a>
        <a href='' className="relative overflow-hidden rounded-lg">
          <img src='./image_3.png'/>
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white">League of Legends</strong>
            <span className="text-zinc-300 text-sm block mt-1">Anuncios</span>
          </div>
        </a>
        <a href='' className="relative overflow-hidden rounded-lg">
          <img src='./image_5.png'/>
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white">League of Legends</strong>
            <span className="text-zinc-300 text-sm block mt-1">cascasc</span>
          </div>
        </a>
        <a href='' className="relative overflow-hidden rounded-lg">
          <img src='./image_6.png'/>
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white">League of Legends</strong>
            <span className="text-zinc-300 text-sm block mt-1">dasdea</span>
          </div>
        </a>
        <a href='' className="relative overflow-hidden rounded-lg">
          <img src='./image_7.png'/>
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white">League of Legends</strong>
            <span className="text-zinc-300 text-sm block mt-1">eqwretwrey</span>
          </div>
        </a>
      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch mt-8 rounded-lg overflow-hidden'>
        <div className="bg-[#2A2634] px-8 py-6 rounded-lg flex justify-between items-center">
          <div>
            <strong className="text-white font-black text-2xl">Não encontrou seu duo?</strong>
            <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className="py-3 px-4 text-white bg-violet-500 rounded hover:bg-violet-600 flex items-center gap-3">
            <MagnifyingGlassPlus size={24}/>
            Publicar Anúncio
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default App
