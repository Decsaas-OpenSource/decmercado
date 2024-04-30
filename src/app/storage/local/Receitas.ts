import Receita from "@/app/model/lista/Receita";
import Dados from "./Dados";
import ReceitaNullObject from "@/app/model/nullObject/ReceitaNullObject";

export default class Receitas extends Dados<Receita> {
    
    get nomeStorage(): string {
        return "receitas"
    }

    converterObjeto(id: string, descricao: string): Receita {
        return new Receita(id, descricao)
    }

    procurar(id: string) : Receita {
        var encontrado = this.jaExiste(id)
        if (!encontrado)
            return new ReceitaNullObject()
        else
            return encontrado
    }
}