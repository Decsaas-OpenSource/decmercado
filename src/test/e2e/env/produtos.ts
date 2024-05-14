import { Page } from "@playwright/test"
import { ProdutoHelper } from "../helper/Produto"

export async function criaProduto(page: Page, nome: string, comentario: string, qtde: string) {
    await ProdutoHelper.criarNovo(page)

    await ProdutoHelper.atribuirNome(page, nome)
    await ProdutoHelper.atribuirComentario(page, comentario)
    await ProdutoHelper.atribuirQuantidade(page, qtde)
    await ProdutoHelper.confirmar(page)
}