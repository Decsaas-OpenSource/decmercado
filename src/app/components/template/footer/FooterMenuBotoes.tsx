import { Botao, BotaoLink } from "../../utils/Botao"

interface FooterMenuBotoesLinkProp {
    role?: string,
    titulo: string,
    href: string,
    css: string,
    desabilitar?: boolean
}

export function FooterMenuBotoesLink(prop: FooterMenuBotoesLinkProp) {

    return (
        <BotaoLink role={prop.role} href={prop.href} titulo={prop.titulo} css={`rounded-none h-[40px] ${prop.css}`} desabilitar={prop.desabilitar} />
    )
}

interface FooterMenuBotoesProp {
    role?: string,
    titulo: string,
    css: string,
    onClick: (e: any) => void
}


export function FooterMenuBotoes(prop: FooterMenuBotoesProp) {

    return (
        <Botao role={prop.role} titulo={prop.titulo} css={`rounded-none h-[40px] ${prop.css}`} onClick={prop.onClick} />
    )
}