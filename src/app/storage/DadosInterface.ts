export default interface DadosInterface<T> {
    carregar(): void
    salvar(objeto: T): void,
    deletar(objeto: T): void
}

export interface InterfaceComBusca<T> {
    jaExiste(id: string): T | false,
    procurar(id: string): T,
    converterObjeto(id: string, descricao: string): T
}