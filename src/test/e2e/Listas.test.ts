import { test, expect } from '@playwright/test';
import { criaLista, criaProduto, criaQuatroListas } from './env/ambienteListas';

test.beforeEach(async ({ page }) => {
    await page.goto('/app/home', { waitUntil: "networkidle" });
});

test('deve criar uma lista com dois produtos', async ({ page }) => {
    const botaoNovoCard = page.getByTestId("card-nova-lista")
    await botaoNovoCard.click()

    await page.getByTestId("nome-lista").fill("minha lista")

    expect(page.getByTestId("lista-produtos-vazia")).toBeVisible()

    await criaProduto(page, "produto A", "comentario A", "5")

    expect(page.getByTestId("lista-produtos-vazia")).not.toBeVisible()

    await expect(page.getByTestId("produto-0-descricao")).toHaveText("produto A");
    await expect(page.getByTestId("produto-0-quantidade")).toHaveText("5.000");
    await expect(page.getByTestId("produto-0-comentario")).toHaveText("comentario A");

    criaProduto(page, "produto B", "comentario B", "10")

    await expect(page.getByTestId("produto-0-descricao")).toHaveText("produto A");
    await expect(page.getByTestId("produto-0-quantidade")).toHaveText("5.000");
    await expect(page.getByTestId("produto-0-comentario")).toHaveText("comentario A");

    await expect(page.getByTestId("produto-1-descricao")).toHaveText("produto B");
    await expect(page.getByTestId("produto-1-quantidade")).toHaveText("10.000");
    await expect(page.getByTestId("produto-1-comentario")).toHaveText("comentario B");
});

test('deve abrir uma lista com dois produtos', async ({ page }) => {
    await criaLista(page, "minha-lista")

    await page.getByTestId("botao-home").click()
    await page.getByTestId("card-lista-0").click()

    await expect(page.getByTestId("nome-lista")).toHaveValue("minha-lista");

    await expect(page.getByTestId("produto-0-descricao")).toHaveText("produto A");
    await expect(page.getByTestId("produto-0-quantidade")).toHaveText("5.000");
    await expect(page.getByTestId("produto-0-comentario")).toHaveText("comentario A");

    await expect(page.getByTestId("produto-1-descricao")).toHaveText("produto B");
    await expect(page.getByTestId("produto-1-quantidade")).toHaveText("10.000");
    await expect(page.getByTestId("produto-1-comentario")).toHaveText("comentario B");
});

test('deve abrir uma lista com dois produtos e editar o segundo', async ({ page }) => {
    await criaLista(page, "minha-lista")

    await page.getByTestId("botao-home").click()
    await page.getByTestId("card-lista-0").click()

    page.getByTestId("produto-1-click").click()

    await page.getByTestId("nome-produto").fill("produto alterado")
    await page.getByTestId("produto-comentario").fill("outro comentario")
    await page.getByTestId("produto-quantidade").fill("99")
    await page.getByTestId("produto-confirmar").click()

    await expect(page.getByTestId("produto-0-descricao")).toHaveText("produto A");
    await expect(page.getByTestId("produto-0-quantidade")).toHaveText("5.000");
    await expect(page.getByTestId("produto-0-comentario")).toHaveText("comentario A");

    await expect(page.getByTestId("produto-1-descricao")).toHaveText("produto alterado");
    await expect(page.getByTestId("produto-1-quantidade")).toHaveText("99.000");
    await expect(page.getByTestId("produto-1-comentario")).toHaveText("outro comentario");
});

test('deve abrir uma lista com dois produtos e exclui produto A', async ({ page }) => {
    await criaLista(page, "minha-lista")

    await page.getByTestId("botao-home").click()
    await page.getByTestId("card-lista-0").click()

    await page.getByTestId("produto-0-excluir").click()

    await page.getByTestId("ModalBotaoSim").click()

    await expect(page.getByTestId("produto-0-descricao")).toHaveText("produto B");
    await expect(page.getByTestId("produto-0-quantidade")).toHaveText("10.000");
    await expect(page.getByTestId("produto-0-comentario")).toHaveText("comentario B");
});

test('deve abrir uma lista e excluir ela', async ({ page }) => {
    await criaLista(page, "minha-lista")

    await page.getByTestId("botao-home").click()
    await page.getByTestId("card-lista-0").click()

    await page.getByTestId("excluir-cadastro").click()
    await page.getByTestId("ModalBotaoSim").click()

    await expect(page.getByTestId("titulo-pagina")).toHaveText("Minhas listas");
    expect(page.getByTestId("minhas-listas-vazia")).toBeVisible()
});

test('deve clicar em ver mais e mostrar todas as listas', async ({ page }) => {
    await criaQuatroListas(page)

    await page.getByTestId("card-ver-mais-listas").click()

    await expect(page.getByTestId("minha-lista-0-descricao")).toHaveText("minha-lista");
    await expect(page.getByTestId("minha-lista-0-quantidade")).toHaveText("2");
    await expect(page.getByTestId("minha-lista-1-descricao")).toHaveText("minha-lista2");
    await expect(page.getByTestId("minha-lista-1-quantidade")).toHaveText("2");
    await expect(page.getByTestId("minha-lista-2-descricao")).toHaveText("minha-lista3");
    await expect(page.getByTestId("minha-lista-2-quantidade")).toHaveText("2");
    await expect(page.getByTestId("minha-lista-3-descricao")).toHaveText("minha-lista4");
    await expect(page.getByTestId("minha-lista-3-quantidade")).toHaveText("2");

    await expect(page.getByTestId("titulo-pagina")).toHaveText("Minhas listas");
    expect(page.getByTestId("minhas-listas-vazia")).not.toBeVisible()
});

test('deve clicar em ver mais e excluir uma lista', async ({ page }) => {
    await criaQuatroListas(page)

    await page.getByTestId("card-ver-mais-listas").click()

    await expect(page.getByTestId("minha-lista-0-descricao")).toHaveText("minha-lista");
    await expect(page.getByTestId("minha-lista-0-quantidade")).toHaveText("2");
    await expect(page.getByTestId("minha-lista-1-descricao")).toHaveText("minha-lista2");
    await expect(page.getByTestId("minha-lista-1-quantidade")).toHaveText("2");
    await expect(page.getByTestId("minha-lista-2-descricao")).toHaveText("minha-lista3");
    await expect(page.getByTestId("minha-lista-2-quantidade")).toHaveText("2");
    await expect(page.getByTestId("minha-lista-3-descricao")).toHaveText("minha-lista4");
    await expect(page.getByTestId("minha-lista-3-quantidade")).toHaveText("2");

    await page.getByTestId("minha-lista-1-excluir").click()
    await page.getByTestId("ModalBotaoSim").click()

    await expect(page.getByTestId("titulo-pagina")).toHaveText("Minhas listas");
    await expect(page.getByTestId("minha-lista-0-descricao")).toHaveText("minha-lista");
    await expect(page.getByTestId("minha-lista-0-quantidade")).toHaveText("2");
    await expect(page.getByTestId("minha-lista-1-descricao")).toHaveText("minha-lista3");
    await expect(page.getByTestId("minha-lista-1-quantidade")).toHaveText("2");
    await expect(page.getByTestId("minha-lista-2-descricao")).toHaveText("minha-lista4");
    await expect(page.getByTestId("minha-lista-2-quantidade")).toHaveText("2");
});

test('deve clicar em ver mais e conseguir criar uma lista nova', async ({ page }) => {
    await criaQuatroListas(page)

    await page.getByTestId("card-ver-mais-listas").click()

    await page.getByTestId("FooterMenuBotoesLink").click()

    await expect(page.getByTestId("nome-lista")).toHaveValue("Nova lista");
    expect(page.getByTestId("lista-produtos-vazia")).toBeVisible()
    expect(page).toHaveURL("/app/listas/nova")
});

test('deve clicar em ver mais e conseguir editar uma lista', async ({ page }) => {
    await criaQuatroListas(page)

    await page.getByTestId("card-ver-mais-listas").click()

    await page.getByTestId("minha-lista-1-link").click()

    await expect(page.getByTestId("nome-lista")).toHaveValue("minha-lista2");

    await expect(page.getByTestId("produto-0-descricao")).toHaveText("produto A");
    await expect(page.getByTestId("produto-0-quantidade")).toHaveText("5.000");
    await expect(page.getByTestId("produto-0-comentario")).toHaveText("comentario A");

    await expect(page.getByTestId("produto-1-descricao")).toHaveText("produto B");
    await expect(page.getByTestId("produto-1-quantidade")).toHaveText("10.000");
    await expect(page.getByTestId("produto-1-comentario")).toHaveText("comentario B");
});