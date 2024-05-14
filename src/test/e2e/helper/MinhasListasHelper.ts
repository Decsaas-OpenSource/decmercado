import { Page, expect } from "@playwright/test";

export class MinhasListasHelper {
    private constructor() {
    }

    static async abrePagina(page: Page) {
        await page.goto('/app/listas', { waitUntil: "networkidle" });
    }

    static async verificaLista(page: Page, indice: number, descricao: string, quantidade: string) {
        await expect(page.getByTestId(`minha-lista-${indice}-descricao`)).toHaveText(descricao);
        await expect(page.getByTestId(`minha-lista-${indice}-quantidade`)).toHaveText(quantidade);
    }

    static async verificaListasVaziasNaoExibe(page: Page) {
        await expect(page.getByTestId("titulo-pagina")).toHaveText("Minhas listas");
        await expect(page.getByTestId("minhas-listas-vazia")).not.toBeVisible()
    }

    static async verificaTitulo(page: Page) {
        await expect(page.getByTestId("titulo-pagina")).toHaveText("Minhas listas");
    }

    static async verificaCriacaoNovaLista(page: Page) {
        await expect(page.getByTestId("nome-lista")).toHaveValue("Nova lista");
        await expect(page.getByTestId("lista-produtos-vazia")).toBeVisible()
        await expect(page).toHaveURL("/app/listas/nova")
    }

    static async excluirListaDadoIndice(page: Page, indice: number) {
        await page.getByTestId(`minha-lista-${indice}-excluir`).click()
        await page.getByTestId("ModalBotaoSim").click()
    }

    static async editaLista(page: Page, indice: number) {
        await page.getByTestId(`minha-lista-${indice}-link`).click()
    }

    static async criarNova(page: Page) {
        await page.getByTestId("nova-lista-footer").click()
    }
}