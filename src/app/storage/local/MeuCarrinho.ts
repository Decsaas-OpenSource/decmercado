import MeuCarrinho from "@/app/model/MeuCarrinho"
import DadosInterface from "../DadosInterface"
import Produto from "@/app/model/Produto"
import MeuCarrinhoNullObject from "@/app/model/nullObject/MeuCarrinhoNullObject";

export default class StoregeMeuCarrinho implements DadosInterface<MeuCarrinho> {

    #instancia: MeuCarrinho;

    constructor() {
        this.#instancia = new MeuCarrinhoNullObject()
    }

    get meuCarrinho() {
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

            var parseMeuCarrinho: MeuCarrinho = JSON.parse(listaStorage)

            parseMeuCarrinho.noCarrinho = parseMeuCarrinho.noCarrinho?.map((p) => {
                return Produto.fromJSON(p)
            })

            parseMeuCarrinho.paraComprar = parseMeuCarrinho.paraComprar?.map((p) => {
                return Produto.fromJSON(p)
            })

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