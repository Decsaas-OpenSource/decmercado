import Lista from "./Lista";

export default class Receita extends Lista {

    instanciarNovoObjeto<Receita>(id: string, descricao: string): Receita {
        return <Receita> new Receita(id, descricao)
    }
}