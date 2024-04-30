import Produto from "@/app/model/Produto";
import Link from "next/link";

interface ListagemLinhaRedirectionProp {
    item: Produto,
    urlBase?: string
    cssDinamico?: string
}

//TODO corrigir componente
export default function ListagemLinhaRedirection(prop: ListagemLinhaRedirectionProp) {

    function desenhaCorpoDaLinha() {
        return (
            <>
                <div className="min-w-[70px] text-center">
                    <div className="text-bold-label">{prop.item.quantidade}</div>
                    <div className="text-regular-label">Iten(s)</div>
                </div>

                <div className="text-left w-full max-w-[200px]">
                    <div className="text-bold-paragrafo text-ellipsis overflow-hidden">{prop.item.descricao}</div>
                    <div className="text-regular-label text-ellipsis overflow-hidden">
                        {/* {prop.item.comentario} */}
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className={`flex space-x-3 h-[66px] pr-2 mb-2 ${prop.cssDinamico} justify-between`}>
            <Link href={`${prop.urlBase}${prop.item.id}`} className="w-full flex items-center">
                {desenhaCorpoDaLinha()}
            </Link>
        </div>
    )
}