import MeuCarrinho from "@/app/model/MeuCarrinho"
import DadosInterface from "../DadosInterface"
import MeuCarrinhoNullObject from "@/app/model/nullObject/MeuCarrinhoNullObject";

export default class StoregeMeuCarrinho implements DadosInterface<MeuCarrinho> {

    #instancia: MeuCarrinho;

    constructor() {
        this.#instancia = new MeuCarrinhoNullObject()
    }

    get meuCarrinho(): MeuCarrinho {
        return this.#instancia
    }

    get nomeStorage(): string {
        return "meuCarrinho"
    }

    jaExiste(id: string): MeuCarrinho | false {
        return this.#instancia
    }

    carregar(): void {
        const listaStorage = localStorage.getItem(this.nomeStorage);
        if (listaStorage) {
            var parseMeuCarrinho: MeuCarrinho = MeuCarrinho.fromJSON(JSON.parse(listaStorage))
            this.#instancia = parseMeuCarrinho
        }
    }

    salvar(meuCarrinho: MeuCarrinho): void {
        this.#instancia = meuCarrinho
        localStorage.setItem(this.nomeStorage, JSON.stringify(meuCarrinho));
    }

    deletar(): void {
        localStorage.removeItem(this.nomeStorage)
    }

}