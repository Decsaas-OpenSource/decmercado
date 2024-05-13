interface NumericoProp {
    role?: string, 
    label: string,
    placeHolder: string,
    valor: number,
    onChange: (e: number) => void
}

export default function Numerico(prop: NumericoProp) {

    return (
        <div className="text-primario-500">
            <label className="text-bold-paragrafo">{prop.label}</label>
            <br />
            <input
                role={prop.role}
                aria-label={prop.label}
                className="w-full border-b-2 rounded-none border-x-primario-500 text-regular-paragrafo
                            focus:outline-none pl-2 pb-1"
                type='number'
                placeholder={prop.placeHolder}
                value={prop.valor}
                onChange={(e) => {
                    prop.onChange(e.target.valueAsNumber)
                }} 
                inputMode="decimal"/>
        </div>
    )
}