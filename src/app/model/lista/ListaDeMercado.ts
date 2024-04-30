import Lista from "./Lista";

export default class ListaDeMercado extends Lista {

    instanciarNovoObjeto<ListaDeMercado>(id: string, descricao: string): ListaDeMercado {
        return <ListaDeMercado> new ListaDeMercado(id, descricao)
    }
}