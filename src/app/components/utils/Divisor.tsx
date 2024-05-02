interface DivisorTemplateProp {
    css: string
}

function DivisorTemplate(prop: DivisorTemplateProp) {
    return (
        <hr className={`opacity-25 border-spacing-1 border-primario-500 ${prop.css}`} />
    )
}

export function Divisor() {
    return (
        <DivisorTemplate css="mt-4 mb-4" />
    )
}

interface DivisorComTextoProp {
    texto: string
}

export function DivisorSomenteTexto(prop: DivisorComTextoProp) {
    return (
        <>
            <div className="text-bold-paragrafo text-center m-3 text-primario-500">
                {prop.texto}
            </div>
        </>
    )
}

export function DivisorComTexto(prop: DivisorComTextoProp) {
    return (
        <>
            <DivisorSomenteTexto texto={prop.texto} />

            <DivisorTemplate css="mb-4" />
        </>
    )
}