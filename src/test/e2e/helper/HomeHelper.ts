import { Page, expect } from "@playwright/test";

export class HomeHelper {
    private constructor() {
    }

    static async abrePagina(page: Page) {
        await page.goto('/app/home', { waitUntil: "networkidle" });
    }

    static async clicaEmCarrinho(page: Page) {
        await page.getByTestId("card-meu-carrinho").click()
    }

    static async clicaNovaListaPeloBotao(page: Page) {
        await page.getByTestId("BotaoLinkListaCards").click()
    }

    static async clicaNovaListaPeloCard(page: Page) {
        await page.getByTestId("card-nova-lista").click()
    }

    static async editarLista(page: Page, indice: number) {
        await page.getByTestId(`card-lista-${indice}`).click()
    }

    static async verMaisListas(page: Page) {
        await page.getByTestId("card-ver-mais-listas").click()
    }
    
    static async verificarCardCarrinhoVazio(page: Page) {
        await expect(page.getByText("Itens no carrinho (0)")).not.toBeVisible()
        await expect(page.getByText("Total de itens para compra (0)")).not.toBeVisible()
        await expect(page.getByTestId("cart-conteudo-carrinho")).toHaveText("Vazio")
    }

    static async verificarCardCarrinhoEmAndamento(page: Page) {
        await expect(page.getByText("Itens no carrinho (2)")).toBeVisible()
        await expect(page.getByText("Total de itens para compra (1)")).toBeVisible()
    }
}