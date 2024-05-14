const QUEBRA_DE_LINHA = "\r";

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

    get comentarioDetalhes() {
        return this.#comentario.indexOf(QUEBRA_DE_LINHA) > 0
    }

    toJSON() {
        return {
            id: this.#id,
            descricao: this.#descricao,
            quantidade: this.#quantidade,
            comentario: this.#comentario,
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

    concatenaComentario(comentario: string) {
        this.#comentario += QUEBRA_DE_LINHA + comentario
    }
    acrescentaQuantidade(quantidade: number) {
        this.#quantidade += quantidade
    }
}