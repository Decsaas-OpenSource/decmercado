interface SubJanelaProp {
    exibir: boolean
    children?: React.ReactNode
}

export default function SubJanela(prop: SubJanelaProp) {

    return (
        prop.exibir ? (
            <div className="fixed h-full w-full left-0 top-0 bottom-0 right-0 bg-neutro-800 bg-opacity-50 z-10">
                <div className="fixed top-1/2 left-1/2 bg-branco rounded-lg shadow-default min-w-80"
                    style={{ transform: "translate(-50%,-50%)" }}>
                    {prop.children}
                </div>
            </div>

        ) : false
    )

}