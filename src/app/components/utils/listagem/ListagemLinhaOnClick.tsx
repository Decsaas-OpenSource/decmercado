interface ListagemLinhaOnClickProp {
    item: ListagemDTO,
    onClick: (item: ListagemDTO) => void
    children: React.ReactNode
}

export default function ListagemLinhaOnClick(prop: ListagemLinhaOnClickProp) {

    return (
        <div className="flex items-center w-full"
            onClick={() => {
                prop.onClick(prop.item)
            }}>

            {prop.children}
        </div>
    )
}