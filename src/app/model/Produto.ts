export default class Produto implements ListagemDTO {

    #id: string;
    #quantidade: number;
    #descricao: string;
    #comentario: string;

    constructor(id: string, quantidade: number, descricao: string, comentario: string) {
        this.#id = id;
        this.#quantidade = quantidade;
        this.#descricao = descricao;
        this.#comentario = comentario;
    }

    get id() {
        return this.#id
    }

    get quantidade() {
        return this.#quantidade
    }

    get descricao() {
        return this.#descricao
    }

    get comentario() {
        return this.#comentario
    }

    toJSON() {
        return {
            id: this.#id,
            descricao: this.#descricao,
            quantidade: this.#quantidade,
            comentario: this.#comentario
        }
    }

    static fromJSON(produtoParaConversao: Produto): Produto {
        return new Produto(
            produtoParaConversao.id,
            produtoParaConversao.quantidade,
            produtoParaConversao.descricao,
            produtoParaConversao.comentario
        )
    }
}