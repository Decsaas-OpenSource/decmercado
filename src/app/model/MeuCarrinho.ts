import { ordernaProduto } from "../functions/ordernaProduto";
import Produto from "./Produto";

export default class MeuCarrinho {

    #id: string;
    #noCarrinho: Produto[];
    #paraComprar: Produto[];

    constructor(id: string, noCarrinho: Produto[], paraComprar: Produto[]) {
        this.#id = id
        this.#noCarrinho = noCarrinho
        this.#paraComprar = paraComprar
    }

    set id(id: string) {
        this.#id = id;
    }

    get id(): string {
        return this.#id
    }

    set noCarrinho(noCarrinho: Produto[]) {
        this.#noCarrinho = noCarrinho;
    }

    get noCarrinho(): Produto[] {
        return this.#noCarrinho.sort(ordernaProduto)
    }

    set paraComprar(paraComprar: Produto[]) {
        this.#paraComprar = paraComprar;
    }

    get paraComprar(): Produto[] {
        return this.#paraComprar.sort(ordernaProduto)
    }

    toJSON() {
        return {
            id: this.#id,
            noCarrinho: this.#noCarrinho.map((p) => JSON.stringify(p)),
            paraComprar: this.#paraComprar.map((p) => JSON.stringify(p))
        }
    }

    static fromJSON(storage: MeuCarrinho): MeuCarrinho {
        const novaInstancia = new MeuCarrinho(storage.id, [], [])

        function converteProduto(p: any) {
            if (p instanceof Object)
                return Produto.fromJSON(p)
            return Produto.fromJSON(JSON.parse(p))
        }

        novaInstancia.noCarrinho = storage.noCarrinho?.map((p) => {
            return converteProduto(p)
        })

        novaInstancia.paraComprar = storage.paraComprar?.map((p) => {
            return converteProduto(p)
        })

        return novaInstancia
    }

}