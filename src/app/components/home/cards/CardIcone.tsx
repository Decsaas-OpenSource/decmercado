import { Adicionar, CarrinhoCard } from "@/app/icons"

interface CardIconePropTemplate {
    icon: JSX.Element
    css: string
}

function CardIcone(prop: CardIconePropTemplate) {
    return (
        <div className={`${prop.css}`}>
            {prop.icon}
        </div>
    )
}

export function CardIconeCarrinho() {
    return (
        <CardIcone css="m-auto text-branco" icon={CarrinhoCard} />
    )
}

export function CardIconeReceita() {
    return (
        <CardIcone css="p-5 text-branco" icon={Adicionar} />
    )
}

interface CardIconeProp {
    icon: JSX.Element
}

export function CardIconeLista(prop: CardIconeProp) {
    return (
        <CardIcone css="p-5 text-primario-500" icon={prop.icon} />
    )
}
