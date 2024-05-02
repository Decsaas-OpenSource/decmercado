interface CardIconePropTemplate {
    icon: JSX.Element
    css: string
}

function CardIcone(prop: CardIconePropTemplate) {
    return (
        <div className={`${prop.css} pr-2`}>
            {prop.icon}
        </div>
    )
}

interface CardIconeProp {
    icon: JSX.Element
}

export function CardIconeCarrinho(prop: CardIconeProp) {
    return (
        <CardIcone css="m-auto text-branco" icon={prop.icon} />
    )
}

export function CardIconeLista(prop: CardIconeProp) {
    return (
        <CardIcone css="text-primario-500" icon={prop.icon} />
    )
}

export function CardIconeReceita(prop: CardIconeProp) {
    return (
        <CardIcone css="text-branco" icon={prop.icon} />
    )
}