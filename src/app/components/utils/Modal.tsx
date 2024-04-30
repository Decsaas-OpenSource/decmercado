import Botao from "./Botao"
import SubJanela from "./subJanela/SubJanela"


interface ModalProp {
    exibir: boolean
    objeto: any //TODO: tipar
    onClickNao: () => void
    onClickSim: (e: any) => void
}

export default function Modal(prop: ModalProp) {

    return (
        <SubJanela exibir={prop.exibir} >
            <div className="bg-perigo-200 text-bold-sub-titulo text-branco h-[41px] items-center justify-center flex">Atenção</div>
            <div className="text-primario-500 text-regular-label h-[66px] items-center justify-center flex m-5 text-center">
                Deseja realmente remover o {`'${prop.objeto?.descricao}'`} ?
            </div>
            <div className="w-full flex">
                <Botao titulo="Não" color="bg-perigo-300"
                    css={"rounded-none w-full h-[47px]"}
                    onClick={() => prop.onClickNao()}>
                </Botao>
                <Botao titulo="Sim" color="bg-neutro-400"
                    css={"rounded-none w-full h-[47px]"}
                    onClick={() => prop.onClickSim(prop.objeto)}>
                </Botao>
            </div>
        </SubJanela>
    )
}