import Botao from "../../utils/Botao"

interface FooterMenuBotoesProp {
    titulo: string,
    href?: string,
    color: string,
    css?: any
    onClick?: (e: any) => void
}

export default function FooterMenuBotoes(prop: FooterMenuBotoesProp) {

    return (
        <Botao color={prop.color} href={prop.href}
            titulo={prop.titulo}
            css={`rounded-none h-[40px] ${prop.css}`}
            onClick={prop.onClick}>
        </Botao>
    )
}