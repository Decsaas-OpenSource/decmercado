import Lista from "../../model/lista/Lista"
import DadosInterface from "../DadosInterface"

export default abstract class Dados<T extends Lista> implements DadosInterface {

    #todos: T[]

    constructor() {
        this.#todos = []
    }

    set todos(todos: T[]) {
        this.#todos = todos
    }

    get todos(): T[] {
        return this.#todos
    }

    jaExiste(id: string): T | false {
        const encontrados = this.#todos.filter((l) => l.id == id)
        return encontrados.length === 1 ? encontrados[0] : false
    }

    salvar(objeto: T): void {
        if (!objeto.descricao) return

        var todosNoCache = this.#todos

        const encontrado = this.jaExiste(objeto.id)

        if (encontrado)
            todosNoCache = todosNoCache.filter((l) => l.id != objeto.id)

        todosNoCache.push(objeto)

        localStorage.setItem(this.nomeStorage, JSON.stringify(todosNoCache));
        this.#todos = todosNoCache
    }

    carregar(): T[] {
        const listaStorage = localStorage.getItem(this.nomeStorage);
        if (listaStorage) {
            var parseLista: T[] = JSON.parse(listaStorage)
            parseLista = parseLista.map((l) => {
                return <T>Lista.fromJSON(<T>this.converterObjeto(l.id, l.descricao), l)
            })
            this.#todos = parseLista
        }

        return this.#todos
    }

    deletar(objeto: T): void {
        var todosNoCache = this.#todos

        const encontrado = this.jaExiste(objeto.id)

        if (encontrado)
            todosNoCache = todosNoCache.filter((l) => l.id != objeto.id)

        localStorage.setItem(this.nomeStorage, JSON.stringify(todosNoCache));
        this.#todos = todosNoCache
    }

    abstract get nomeStorage(): string

    abstract converterObjeto(id: string, descricao: string): Lista

    abstract procurar(id: string): T
}