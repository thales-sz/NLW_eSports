import { MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog';

function CreateAdBanner() {
  return (
    <div className='pt-1 bg-nlw-gradient self-stretch mt-8 rounded-lg overflow-hidden'>
        <div className="bg-[#2A2634] px-8 py-6 rounded-lg flex justify-between items-center">
          <div>
            <strong className="text-white font-black text-2xl">Não encontrou seu duo?</strong>
            <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
          </div>
          <Dialog.Trigger className="py-3 px-4 text-white bg-violet-500 rounded hover:bg-violet-600 flex items-center gap-3">
            <MagnifyingGlassPlus size={24}/>
            Publicar Anúncio
          </Dialog.Trigger>
        </div>
      </div>
  )
}

export default CreateAdBanner
