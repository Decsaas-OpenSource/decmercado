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

    static async importarLista(page: Page, indice: number) {
        await page.getByTestId("importar-lista").click()
        await page.getByTestId(`item-lista-${indice}-check`).click()
        await page.getByTestId("confirmar").click()
    }

    static async selecionaItemCompra(page: Page, indice: number) {
        await page.getByTestId(`item-compra-${indice}-check`).click()
    }
}