import { Page } from "@playwright/test";

export class ProdutoHelper {

    private constructor() {
    }

    static async atribuirNome(page: Page, nome: string) {
        await page.getByTestId("nome-produto").fill(nome)
    }

    static async atribuirComentario(page: Page, comentario: string) {
        await page.getByTestId("produto-comentario").fill(comentario)
    }

    static async atribuirQuantidade(page: Page, quantidade: string) {
        await page.getByTestId("produto-quantidade").fill(quantidade)
    }

    static async criarNovo(page: Page) {
        await page.getByTestId("adicionar-novo-produto").click()
    }

    static async confirmar(page: Page) {
        await page.getByTestId("produto-confirmar").click()
    }
}