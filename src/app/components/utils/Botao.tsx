import Link from "next/link"

const CSS_BASICO = "p-2 content-center text-center text-branco text-bold-label rounded-lg"

interface BotaoLinkProp {
    titulo: string,
    href: string,
    css?: string,
    cssLink?: string,
    desabilitar?: boolean
}

export function BotaoLink(prop: BotaoLinkProp) {

    return (
        <Link href={prop.href} aria-disabled={prop.desabilitar} className={`${prop.cssLink}`}>
            <div className={`${CSS_BASICO} ${prop.css} ${prop.desabilitar ? "opacity-40" : ""}`}>
                {prop.titulo}
            </div>
        </Link>
    )
}

interface BotaoProp {
    titulo: string,
    css?: string,
    cssLink?: string,
    desabilitar?: boolean
    onClick: (e: any) => void
}

export function Botao(prop: BotaoProp) {

    return (
        <button className="w-full" onClick={prop.onClick} disabled={prop.desabilitar}>
            <div className={`${CSS_BASICO} ${prop.css} ${prop.desabilitar ? "opacity-40" : ""}`}>
                {prop.titulo}
            </div>
        </button>
    )
}

interface BotaoIconeProp {
    css?: string,
    cssLink?: string,
    desabilitar?: boolean
    onClick: (e: any) => void
    icon: JSX.Element
}

export function BotaoComIcone(prop: BotaoIconeProp) {

    return (
        <button className="w-full" onClick={prop.onClick} disabled={prop.desabilitar}>
            <div className={`${CSS_BASICO} ${prop.css} ${prop.desabilitar ? "opacity-40" : ""}`}>
                {prop.icon}
            </div>
        </button>
    )
}

