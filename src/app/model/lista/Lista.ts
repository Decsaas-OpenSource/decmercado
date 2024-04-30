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
        return this.#produtos
    }

    get quantidade(): number {
        if (this.#produtos)
            return this.#produtos?.length 
        
        return 0
    }

    adicionarProduto(p: Produto): Lista { 
        const novaInstancia = this.removerProduto(p)
        novaInstancia.produtos.push(p)
        return novaInstancia
    }

    removerProduto(p: Produto): Lista {
        const novaInstancia = this.instanciarNovoObjeto<Lista>(this.#id, this.#descricao)
        novaInstancia.produtos = this.produtos
        novaInstancia.produtos = novaInstancia.produtos.filter((produto) => produto.id != p.id)
        return novaInstancia
    }

    toJSON() {
        return {
            id: this.#id,
            descricao: this.#descricao,
            produtos: this.#produtos.map((p) => JSON.stringify(p))
        }
    }

    static fromJSON(listaParaConversao: Lista): Lista {
        listaParaConversao.produtos = listaParaConversao.produtos.map((p: Produto) => {
            return Produto.fromJSON(JSON.parse(p.toString()))
        })
        return listaParaConversao
    }

    abstract instanciarNovoObjeto<T>(id: string, descricao : string) : T

}