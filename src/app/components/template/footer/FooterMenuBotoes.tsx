import { Botao, BotaoLink } from "../../utils/Botao"

interface FooterMenuBotoesLinkProp {
    titulo: string,
    href: string,
    css: string
}

export function FooterMenuBotoesLink(prop: FooterMenuBotoesLinkProp) {

    return (
        <BotaoLink role="FooterMenuBotoesLink" href={prop.href} titulo={prop.titulo} css={`rounded-none h-[40px] ${prop.css}`} />
    )
}

interface FooterMenuBotoesProp {
    titulo: string,
    css: string,
    onClick: (e: any) => void
}


export function FooterMenuBotoes(prop: FooterMenuBotoesProp) {

    return (
        <Botao role="FooterMenuBotoes" titulo={prop.titulo} css={`rounded-none h-[40px] ${prop.css}`} onClick={prop.onClick} />
    )
}