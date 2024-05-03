interface CardBodyTemplateProp {
    children: React.ReactNode
    css: string
}

function CardBodyTemplate(prop: CardBodyTemplateProp) {

    return (
        <div className={`flex items-center rounded-lg shadow-default max-w-[366px] ${prop.css}`}>
            {prop.children}
        </div>
    )
}

interface CardBodyProp {
    children: React.ReactNode
}

export function CardBodyMeuCarrinho(prop: CardBodyProp) {

    return (
        <CardBodyTemplate css="w-full h-28 p-4 bg-gradient-to-br from-carrinho-000-gradiente via-carrinho-056-gradiente to-carrinho-100-gradiente">
            {prop.children}
        </CardBodyTemplate>
    )
}

export function CardBodyMinhasListas(prop: CardBodyProp) {

    return (
        <CardBodyTemplate css="min-w-64 mb-3 mr-3 bg-gradient-to-br from-lista-000-gradiente via-lista-012-gradiente to-lista-100-gradiente">
            {prop.children}
        </CardBodyTemplate>
    )
}

export function CardBodyMinhasReceitas(prop: CardBodyProp) {

    return (
        <CardBodyTemplate css="w-[176px] mb-3 bg-gradient-to-br from-receita-000-gradiente via-receita-067-gradiente to-receita-100-gradiente">
            {prop.children}
        </CardBodyTemplate>
    )
}