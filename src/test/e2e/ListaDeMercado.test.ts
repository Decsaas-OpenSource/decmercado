import { Page, test } from '@playwright/test';
import { criaLista } from './env/ambienteListas';
import { ListaDeMercadoHelper } from './helper/ListaDeMercadoHelper';
import { MinhasListasHelper } from './helper/MinhasListasHelper';
import { ProdutoHelper } from './helper/Produto';

test('deve criar uma lista com dois produtos', async ({ page }) => {
    await ListaDeMercadoHelper.abrePagina(page)
    await ListaDeMercadoHelper.atribuirNome(page, "minha lista")
    await ListaDeMercadoHelper.verificaListaDeProdutoVazia(page)
    await ListaDeMercadoHelper.criarProduto(page, "produto A", "comentario A", "5")
    await ListaDeMercadoHelper.verificaListaDeProdutoNaoEstaVazia(page)

    await ListaDeMercadoHelper.verificaProdutoDescricao(page, 0, "produto A")
    await ListaDeMercadoHelper.verificaProdutoComentario(page, 0, "comentario A")
    await ListaDeMercadoHelper.verificaProdutoQuantidade(page, 0, "5.000")

    await ListaDeMercadoHelper.criarProduto(page, "produto B", "comentario B", "10")

    await ListaDeMercadoHelper.verificaProdutoDescricao(page, 0, "produto A")
    await ListaDeMercadoHelper.verificaProdutoComentario(page, 0, "comentario A")
    await ListaDeMercadoHelper.verificaProdutoQuantidade(page, 0, "5.000")

    await ListaDeMercadoHelper.verificaProdutoDescricao(page, 1, "produto B")
    await ListaDeMercadoHelper.verificaProdutoComentario(page, 1, "comentario B")
    await ListaDeMercadoHelper.verificaProdutoQuantidade(page, 1, "10.000")
});

test('deve conseguir editar uma lista', async ({ page }) => {
    await criaLista(page, "minha-lista")

    selecionaUmaListaParaEdicao(page, 0)

    await ListaDeMercadoHelper.verificaNomeDaLista(page, "minha-lista")
    await ListaDeMercadoHelper.verificaProdutoDescricao(page, 0, "produto A")
    await ListaDeMercadoHelper.verificaProdutoComentario(page, 0, "comentario A")
    await ListaDeMercadoHelper.verificaProdutoQuantidade(page, 0, "5.000")

    await ListaDeMercadoHelper.verificaProdutoDescricao(page, 1, "produto B")
    await ListaDeMercadoHelper.verificaProdutoComentario(page, 1, "comentario B")
    await ListaDeMercadoHelper.verificaProdutoQuantidade(page, 1, "10.000")
});

test('deve editar o segundo produto de uma lista com dois produtos', async ({ page }) => {
    await criaLista(page, "minha-lista")

    selecionaUmaListaParaEdicao(page, 0)

    await ListaDeMercadoHelper.editarProduto(page, 1)

    await ProdutoHelper.atribuirNome(page, "produto alterado")
    await ProdutoHelper.atribuirComentario(page, "outro comentario")
    await ProdutoHelper.atribuirQuantidade(page, "99")
    await ProdutoHelper.confirmar(page)

    await ListaDeMercadoHelper.verificaProdutoDescricao(page, 0, "produto A")
    await ListaDeMercadoHelper.verificaProdutoComentario(page, 0, "comentario A")
    await ListaDeMercadoHelper.verificaProdutoQuantidade(page, 0, "5.000")

    await ListaDeMercadoHelper.verificaProdutoDescricao(page, 1, "produto alterado")
    await ListaDeMercadoHelper.verificaProdutoComentario(page, 1, "outro comentario")
    await ListaDeMercadoHelper.verificaProdutoQuantidade(page, 1, "99.000")
});

test('deve excluir o produto A de uma lista', async ({ page }) => {
    await criaLista(page, "minha-lista")

    selecionaUmaListaParaEdicao(page, 0)

    await ListaDeMercadoHelper.excluirProduto(page, 0)

    await ListaDeMercadoHelper.verificaProdutoDescricao(page, 0, "produto B")
    await ListaDeMercadoHelper.verificaProdutoComentario(page, 0, "comentario B")
    await ListaDeMercadoHelper.verificaProdutoQuantidade(page, 0, "10.000")
});

test('deve excluir a propria lista', async ({ page }) => {
    await criaLista(page, "minha-lista")

    selecionaUmaListaParaEdicao(page, 0)

    await ListaDeMercadoHelper.excluirLista(page)
    await ListaDeMercadoHelper.verificaListaInicializacao(page)
});

async function selecionaUmaListaParaEdicao(page: Page, indiceListaParaEdicao: number) {
    await MinhasListasHelper.abrePagina(page)
    await MinhasListasHelper.editaLista(page, indiceListaParaEdicao)
}