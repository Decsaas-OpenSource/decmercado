import { test } from '@playwright/test';
import { HomeHelper } from './helper/HomeHelper';
import { CarrinhoHelper } from './helper/CarrinhoHelper';
import { MinhasListasHelper } from './helper/MinhasListasHelper';
import { ListaDeMercadoHelper } from './helper/ListaDeMercadoHelper';
import { criaLista, criaListaComTresProdutos, criaQuatroListas } from './env/ambienteListas';

test.beforeEach(async ({ page }) => {
    await HomeHelper.abrePagina(page)
});

test('deve abrir pagina de carrinho', async ({ page }) => {
    await HomeHelper.clicaEmCarrinho(page)
    await CarrinhoHelper.verificaPaginaAberta(page)
});

test('deve validar que o card do carrinho esta vazio', async ({ page }) => {
    await HomeHelper.verificarCardCarrinhoVazio(page)
});

test('deve validar que o card do carrinho esta em andamento', async ({ page }) => {
    await criaListaComTresProdutos(page, "minha-lista")
    await CarrinhoHelper.abrePagina(page)
    await CarrinhoHelper.importarLista(page, 0)
    await CarrinhoHelper.selecionaItemCompra(page, 0)
    await CarrinhoHelper.selecionaItemCompra(page, 1)

    await HomeHelper.abrePagina(page)

    await HomeHelper.verificarCardCarrinhoEmAndamento(page)
});

test('deve abrir pagina de nova lista (botao)', async ({ page }) => {
    await HomeHelper.clicaNovaListaPeloBotao(page)
    await MinhasListasHelper.verificaCriacaoNovaLista(page)
});

test('deve abrir pagina de nova lista (card)', async ({ page }) => {
    await HomeHelper.clicaNovaListaPeloCard(page)
    await MinhasListasHelper.verificaCriacaoNovaLista(page)
});

test('deve abrir pagina de edicao de uma lista', async ({ page }) => {
    await criaLista(page, "minha-lista-da-home")

    await HomeHelper.abrePagina(page)
    await HomeHelper.editarLista(page, 0)
    await ListaDeMercadoHelper.verificaNomeDaLista(page, "minha-lista-da-home")
    await ListaDeMercadoHelper.verificaProdutoDescricao(page, 0, "produto A")
    await ListaDeMercadoHelper.verificaProdutoDescricao(page, 1, "produto B")
});

test('deve abrir pagina de ver mais (listas)', async ({ page }) => {
    await criaQuatroListas(page)

    await HomeHelper.abrePagina(page)
    await HomeHelper.verMaisListas(page)

    await MinhasListasHelper.verificaLista(page, 0, "minha-lista", "2")
    await MinhasListasHelper.verificaLista(page, 1, "minha-lista2", "2")
    await MinhasListasHelper.verificaLista(page, 2, "minha-lista3", "2")
    await MinhasListasHelper.verificaLista(page, 3, "minha-lista4", "2")
});