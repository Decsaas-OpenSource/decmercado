import { Page, expect } from "@playwright/test";

export class CarrinhoHelper {
    private constructor() {
    }

    static async abrePagina(page: Page) {
        await page.goto('/app/carrinho', { waitUntil: "networkidle" });
    }

    static async verificaPaginaAberta(page: Page) {
        await expect(page.getByTestId("titulo-pagina")).toHaveText("Meu carrinho");
    }

    static async importarLista(page: Page) {
        await page.getByTestId("importar-lista").click()
    }

    static async importarListaDesabilitado(page: Page) {
        await expect(page.getByTestId("importar-lista")).toBeDisabled()
    }

    static async importarListaSelecionar(page: Page, indice: number) {
        await page.getByTestId(`item-lista-${indice}-check`).click()
    }

    static async importarListaConfirmar(page: Page) {
        await page.getByTestId("confirmar").click()
    }

    static async selecionaItemCompra(page: Page, indice: number) {
        await page.getByTestId(`item-compra-${indice}-check`).click()
    }

    static async selecionaItemCarrinho(page: Page, arg1: number) {
        await page.getByTestId(`item-carrinho-${arg1}-check`).click()
    }

    static async verificarItenCompraQuantidade(page: Page, indice: number, quantidade: string) {
        await expect(page.getByTestId(`item-compra-${indice}-quantidade`)).toHaveText(quantidade)
    }

    static async verificarItenCompraDescricao(page: Page, indice: number, descricao: string) {
        await expect(page.getByTestId(`item-compra-${indice}-descricao`)).toHaveText(descricao)
    }

    static async verificarItenCompraComentario(page: Page, indice: number, comentario: string) {
        await expect(page.getByTestId(`item-compra-${indice}-comentario`)).toHaveText(comentario)
    }

    static async verificarItenCarrinhoDescricao(page: Page, indice: number, descricao: string) {
        await expect(page.getByTestId(`item-carrinho-${indice}-descricao`)).toHaveText(descricao)
    }

    static async verificarItenCarrinhoQuantidade(page: Page, indice: number, quantidade: string) {
        await expect(page.getByTestId(`item-carrinho-${indice}-quantidade`)).toHaveText(quantidade)
    }

    static async verificarItenCarrinhoComentario(page: Page, indice: number, comentario: string) {
        await expect(page.getByTestId(`item-carrinho-${indice}-comentario`)).toHaveText(comentario)
    }

    static async finalizarCarrinho(page: Page) {
        await page.getByTestId("finalizar-carrinho").click()
        await page.getByTestId("ModalBotaoSim").click()
    }

    static async verificarListasVazias(page: Page) {
        await expect(page.getByTestId("lista-compra-vazia")).toBeVisible()
        await expect(page.getByTestId("lista-carrinho-vazia")).toBeVisible()
    }

    static async abreDetalhesProdutoCompra(page: Page, indice: number) {
        await page.getByTestId(`item-compra-${indice}-comentario`).click()
    }

    static async validaDetalhesProduto(page: Page, ...mensagens: string[]) {
        mensagens.map(async (mensagem, i) => {
            await expect(page.getByTestId(i.toString())).toHaveText(mensagem)
        })
    }
}