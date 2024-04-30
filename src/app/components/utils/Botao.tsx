import Link from "next/link"

interface BotaoProp {
    titulo: string,
    href?: string,
    color: string,
    css?: string,
    cssLink? : string,
    desabilitar? : boolean
    onClick?: (e:any) => void
}

//TODO: melhorar
export default function Botao(prop: BotaoProp) {

    return (
        prop.href ? (
            <Link href={prop.href} aria-disabled={prop.desabilitar} className={`${prop.cssLink}`}>
                <div className={`p-2 content-center text-center text-branco text-bold-label rounded-lg 
                    ${prop.color} ${prop.css} ${prop.desabilitar ? "opacity-40" : ""}`}>
                    {prop.titulo}
                </div>
            </Link>
        ) : (
            <button className="w-full" onClick={prop.onClick} disabled={prop.desabilitar}>
                <div className={`p-2 content-center text-center text-branco text-bold-label rounded-lg
                ${prop.color} ${prop.css} ${prop.desabilitar ? "opacity-40" : ""}`}>
                    {prop.titulo}
                </div>
            </button>
        )
    )
}