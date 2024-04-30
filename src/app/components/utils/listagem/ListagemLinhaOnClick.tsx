import Produto from "@/app/model/Produto"

interface ListagemLinhaOnClickProp {
    item: Produto,
    onClick?: (item: Produto) => void
    children: React.ReactNode
}

export default function ListagemLinhaOnClick(prop: ListagemLinhaOnClickProp) {

    return (
        <div className="flex items-center w-full"
            onClick={() => {
                if (!prop.onClick)
                    throw new Error("Metodo onClick nao definido")
                prop.onClick(prop.item)
            }}>

            {prop.children}
        </div>
    )
}