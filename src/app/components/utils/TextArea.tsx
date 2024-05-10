interface TextAreaProp {
    label: string,
    placeHolder: string,
    valor: string,
    onChange: (e: string) => void
}

export default function TextArea(prop: TextAreaProp) {

    return (
        <div className="text-primario-500">
            <label className="text-bold-paragrafo">{prop.label}</label>
            <br />
            <textarea
                aria-label={prop.label}
                className="w-full border-b-2 rounded-none border-x-primario-500 text-regular-paragrafo
                            focus:outline-none pl-2 pb-1 max-h-20"
                placeholder={prop.placeHolder}
                value={prop.valor}
                onChange={(e) => {
                    prop.onChange(e.target.value)
                }} />
        </div>
    )
}