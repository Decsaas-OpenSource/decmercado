import { Page, expect } from "@playwright/test";
import { criaProduto } from "../env/produtos";

export class ListaDeMercadoHelper {
    
    private constructor() {
    }

    static async abrePagina(page: Page) {
        await page.goto('/app/listas/nova', { waitUntil: "networkidle" });
    }

    static async atribuirNome(page: Page, nome: string) {
        await page.getByTestId("nome-lista").fill(nome)
    }

    static async verificaListaDeProdutoVazia(page: Page) {
        expect(page.getByTestId("lista-produtos-vazia")).toBeVisible()
    }

    static async verificaListaDeProdutoNaoEstaVazia(page: Page) {
        expect(page.getByTestId("lista-produtos-vazia")).not.toBeVisible()
    }

    static async verificaNomeDaLista(page: Page, nomeDaLista: string) {
        await expect(page.getByTestId("nome-lista")).toHaveValue(nomeDaLista);
    }

    static async verificaProdutoDescricao(page: Page, indice: number, nomeProduto: string) {
        await expect(page.getByTestId(`produto-${indice}-descricao`)).toHaveText(nomeProduto);
    }

    static async verificaProdutoQuantidade(page: Page, indice: number, quantidade: string) {
        await expect(page.getByTestId(`produto-${indice}-quantidade`)).toHaveText(quantidade);
    }

    static async verificaProdutoComentario(page: Page, indice: number, comentario: string) {
        await expect(page.getByTestId(`produto-${indice}-comentario`)).toHaveText(comentario);
    }

    static async verificaListaInicializacao(page: Page) {
        await expect(page.getByTestId("titulo-pagina")).toHaveText("Minhas listas");
        expect(page.getByTestId("minhas-listas-vazia")).toBeVisible()
    }

    static async criarProduto(page: Page, nomeProduto: string, comentario: string, quantidade: string) {
        await criaProduto(page, nomeProduto, comentario, quantidade)
    }

    static async editarProduto(page: Page, indice: number) {
        await page.getByTestId(`produto-${indice}-click`).click()
    }

    static async excluirProduto(page: Page, indice: number) {
        await page.getByTestId(`produto-${indice}-excluir`).click()
        await page.getByTestId("ModalBotaoSim").click()
    }

    static async excluirLista(page: Page) {
        await page.getByTestId("excluir-cadastro").click()
        await page.getByTestId("ModalBotaoSim").click()
    }
}