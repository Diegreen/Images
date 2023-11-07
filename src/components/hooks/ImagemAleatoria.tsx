import Image from "next/image"
import { useState } from "react"

export default function ImagemAleatoria () {

    const url = 'https://source.unsplash.com/featured/'

    const [pesquisa, alterarPesquisa] = useState<string>('abstract')
    const [tamanho, alterarTamanho] = useState<number>(300)
    function renderizarBotao (valor: string) {
        return (
            <button className={`
            bg-red-500 px-4 py-2 rounded-md`} onClick={() => { alterarPesquisa(valor)}}>
                {valor}
            </button>
        )
    }



    return (
        <div className={`
        flex justify-center items-center h-screen
        gap-3 flex-col border border-zinc-500 p-7 rounded-md
        `}>
           <Image src={`${url}${tamanho}x${tamanho}?${pesquisa}`} height={200} width={200} alt="Imagem"/>
            <div className="flex gap-5">
           {renderizarBotao('abstract')}
           {renderizarBotao('city')}
           {renderizarBotao('person')}
            </div>
            <div>
                <input type="number" value={tamanho} 
                className="bg-zinc-800 rounded-md p-2" />
            </div>
        </div>
    )
}