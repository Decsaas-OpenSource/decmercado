import Lista from "../model/lista/Lista";

export default interface DadosInterface {
    jaExiste(id: string): Lista | false,
    procurar(id: string): Lista,
    salvar(objeto: Lista): void,
    carregar(): Lista[]
    converterObjeto(id: string, descricao: string): Lista
}
