import { ordernaProduto } from "@/app/functions/ordernaProduto";
import Produto from "../Produto";

export default abstract class Lista implements ListagemDTO {

    #id: string;
    #produtos: Produto[];
    #descricao: string;

    constructor(id: string, descricao: string) {
        this.#id = id;
        this.#descricao = descricao;
        this.#produtos = []
    }

    get id() {
        return this.#id
    }

    get descricao() {
        return this.#descricao
    }

    set descricao(descricao: string) {
        this.#descricao = descricao
    }

    set produtos(produtos: Produto[]) {
        this.#produtos = produtos
    }

    get produtos(): Produto[] {
        return this.#produtos.sort(ordernaProduto);
    }

    get quantidade(): number {
        if (this.#produtos)
            return this.#produtos?.length

        return 0
    }

    toJSON() {
        return {
            id: this.#id,
            descricao: this.#descricao,
            produtos: this.#produtos.map((p) => JSON.stringify(p))
        }
    }

    static fromJSON(novaInstancia: Lista, listaParaConversao: Lista): Lista {
        novaInstancia.produtos = listaParaConversao.produtos.map((p: Produto) => {
            return Produto.fromJSON(JSON.parse(p.toString()))
        })
        return novaInstancia
    }

    abstract instanciarNovoObjeto<T>(id: string, descricao: string): T

}