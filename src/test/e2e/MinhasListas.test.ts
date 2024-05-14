import { test } from '@playwright/test';
import { criarQuatroListas } from './env/ambienteListas';
import { MinhasListasHelper } from './helper/MinhasListasHelper';

test.beforeEach(async ({ page }) => {
    await criarQuatroListas(page)
})

test('deve mostrar todas as listas', async ({ page }) => {
    await MinhasListasHelper.abrePagina(page)

    await MinhasListasHelper.verificaLista(page, 0, "minha-lista", "2")
    await MinhasListasHelper.verificaLista(page, 1, "minha-lista2", "2")
    await MinhasListasHelper.verificaLista(page, 2, "minha-lista3", "2")
    await MinhasListasHelper.verificaLista(page, 3, "minha-lista4", "2")

    await MinhasListasHelper.verificaListasVaziasNaoExibe(page)
});

test('deve ver todas as listas e excluir uma lista', async ({ page }) => {
    await MinhasListasHelper.abrePagina(page)

    await MinhasListasHelper.verificaLista(page, 0, "minha-lista", "2")
    await MinhasListasHelper.verificaLista(page, 1, "minha-lista2", "2")
    await MinhasListasHelper.verificaLista(page, 2, "minha-lista3", "2")
    await MinhasListasHelper.verificaLista(page, 3, "minha-lista4", "2")

    await MinhasListasHelper.excluirListaDadoIndice(page, 1)

    await MinhasListasHelper.verificaTitulo(page)
    await MinhasListasHelper.verificaLista(page, 0, "minha-lista", "2")
    await MinhasListasHelper.verificaLista(page, 1, "minha-lista3", "2")
    await MinhasListasHelper.verificaLista(page, 2, "minha-lista4", "2")
});

test('deve ver todas as listas e conseguir criar uma lista nova', async ({ page }) => {
    await MinhasListasHelper.abrePagina(page)
    await MinhasListasHelper.criarNova(page)
    await MinhasListasHelper.verificaCriacaoNovaLista(page)
});