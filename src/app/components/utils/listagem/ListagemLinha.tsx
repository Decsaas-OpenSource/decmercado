interface ListagemLinhaProp {
    indice: number,
    ultimo: boolean,
    corPrimaria: string,
    corSecundaria: string,
    children: React.ReactNode
}

export default function ListagemLinha(prop: ListagemLinhaProp) {

    const i = prop.indice

    var cssDinamico = (i % 2 == 0) ? prop.corPrimaria : prop.corSecundaria

    if (i === 0)
        cssDinamico = cssDinamico.concat(" rounded-t-md")

    if (prop.ultimo)
        cssDinamico = cssDinamico.concat(" rounded-b-md")

    return (
        <div className={`flex h-[66px] pr-2 mb-2 ${cssDinamico} justify-between`}>
            {prop.children}
        </div>
    )
}