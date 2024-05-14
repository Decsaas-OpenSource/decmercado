import Link from "next/link"

const CSS_BASICO = "p-2 pl-4 pr-4 content-center text-center text-branco text-bold-label rounded-lg"

interface BotaoLinkProp {
    role?: string,
    titulo: string,
    href: string,
    css?: string,
    cssLink?: string,
    desabilitar?: boolean
}

export function BotaoLink(prop: BotaoLinkProp) {

    const stylePoint = prop.desabilitar ? "none" : "auto"

    return (
        <Link role={prop.role} href={prop.href}
            aria-disabled={prop.desabilitar} style={{ pointerEvents: stylePoint, touchAction: stylePoint }}
            className={`${prop.cssLink}`} >
            <div className={`${CSS_BASICO} ${prop.css} ${prop.desabilitar ? "line-through" : ""}`}>
                {prop.titulo}
            </div>
        </Link>
    )
}

interface BotaoProp {
    role?: string,
    titulo: string,
    css?: string,
    cssLink?: string,
    desabilitar?: boolean
    onClick: (e: any) => void
}

export function Botao(prop: BotaoProp) {

    return (
        <button role={prop.role} className="w-full" onClick={prop.onClick} disabled={prop.desabilitar}>
            <div className={`${CSS_BASICO} ${prop.css} ${prop.desabilitar ? "line-through" : ""}`}>
                {prop.titulo}
            </div>
        </button>
    )
}

interface BotaoIconeProp {
    role?: string,
    css?: string,
    cssLink?: string,
    desabilitar?: boolean
    onClick: (e: any) => void
    icon: JSX.Element
}

export function BotaoComIcone(prop: BotaoIconeProp) {

    return (
        <button role={prop.role} className="w-full" onClick={prop.onClick} disabled={prop.desabilitar}>
            <div className={`${CSS_BASICO} ${prop.css} ${prop.desabilitar ? "opacity-40" : ""}`}>
                {prop.icon}
            </div>
        </button>
    )
}

