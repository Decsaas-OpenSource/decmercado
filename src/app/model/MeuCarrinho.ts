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
        return this.#noCarrinho
    }

    set paraComprar(noCarrinho: Produto[]) {
        this.#paraComprar = noCarrinho;
    }

    get paraComprar(): Produto[] {
        return this.#paraComprar
    }


    toJSON() {
        return {
            id: this.#id,
            noCarrinho: this.#noCarrinho.map((p) => JSON.stringify(p)),
            paraComprar: this.#paraComprar.map((p) => JSON.stringify(p))
        }
    }
}