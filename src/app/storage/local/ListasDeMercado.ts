import ListaDeMercadoNullObject from "@/app/model/nullObject/ListaDeMercadoNullObject";
import Dados from "./Dados";
import ListaDeMercado from "@/app/model/lista/ListaDeMercado";

export default class ListasDeMercado extends Dados<ListaDeMercado> {

    get nomeStorage(): string {
        return "listasDeMercado"
    }

    converterObjeto(id: string, descricao: string): ListaDeMercado {
        return new ListaDeMercado(id, descricao)
    }

    procurar(id: string) : ListaDeMercado {
        var encontrado = this.jaExiste(id)
        if (!encontrado)
            return new ListaDeMercadoNullObject()
        else
            return encontrado
    }
}