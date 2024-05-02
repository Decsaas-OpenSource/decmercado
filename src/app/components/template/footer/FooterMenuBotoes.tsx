import { Botao, BotaoLink } from "../../utils/Botao"

interface FooterMenuBotoesLinkProp {
    titulo: string,
    href: string,
    color: string,
    css?: any
}

export function FooterMenuBotoesLink(prop: FooterMenuBotoesLinkProp) {

    return (
        <BotaoLink href={prop.href} titulo={prop.titulo} css={`rounded-none h-[40px] ${prop.color} ${prop.css}`} />
    )
}

interface FooterMenuBotoesProp {
    titulo: string,
    color: string,
    css?: any
    onClick: (e: any) => void
}


export function FooterMenuBotoes(prop: FooterMenuBotoesProp) {

    return (
        <Botao titulo={prop.titulo} css={`rounded-none h-[40px] ${prop.color} ${prop.css}`} onClick={prop.onClick} />
    )
}