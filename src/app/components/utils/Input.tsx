interface InputProp {
    label: string,
    placeHolder: string,
    valor: string,
    onChange: (e: string) => void,
    tamanhoMaximo?: number
}

export default function Input(prop: InputProp) {

    return (
        <div className="text-primario-500">
            <label className="text-bold-paragrafo">{prop.label}</label>
            <br />
            <input
                className="w-full border-b-2 rounded-none border-x-primario-500 text-regular-paragrafo
                            focus:outline-none pl-2 pb-1"
                type="text"
                placeholder={prop.placeHolder}
                value={prop.valor}
                onChange={(e) => {
                    prop.onChange(e.target.value)
                }}
                maxLength={prop.tamanhoMaximo} />
        </div>
    )
}