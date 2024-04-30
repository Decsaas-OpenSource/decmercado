interface CardBodyTemplateProp {
    children: React.ReactNode
    css: string
}

function CardBodyTemplate(prop: CardBodyTemplateProp) {

    return (
        <div className={`flex items-center rounded-lg m-1 ${prop.css}`}>
            {prop.children}
        </div>
    )
}

interface CardBodyProp {
    children: React.ReactNode
}

export function CardBodyMeuCarrinho(prop: CardBodyProp) {

    return (
        <CardBodyTemplate css="w-full bg-gradient-to-br from-carrinho-000-gradiente via-carrinho-056-gradiente to-carrinho-100-gradiente">
            {prop.children}
        </CardBodyTemplate>
    )
}

export function CardBodyMinhasListas(prop: CardBodyProp) {

    return (
        <CardBodyTemplate css="w-fit bg-gradient-to-br from-lista-000-gradiente via-lista-012-gradiente to-lista-100-gradiente">
            {prop.children}
        </CardBodyTemplate>
    )
}

export function CardBodyMinhasReceitas(prop: CardBodyProp) {

    return (
        <CardBodyTemplate css="w-40 bg-gradient-to-br from-receita-000-gradiente via-receita-067-gradiente to-receita-100-gradiente">
            {prop.children}
        </CardBodyTemplate>
    )
}