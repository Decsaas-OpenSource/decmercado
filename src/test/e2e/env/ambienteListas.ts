export async function criaLista(page :any, nomeMinhaLista: string) {
    const botaoNovoCard = page.getByTestId("BotaoLinkListaCards")
    await botaoNovoCard.click()

    await page.getByTestId("nome-lista").fill(nomeMinhaLista)

    await criaProduto(page, "produto A", "comentario A", "5")
    await criaProduto(page, "produto B", "comentario B", "10")
}

export async function criaProduto(page :any, nome:string, comentario: string, qtde : string) {
    var adicionarProduto = page.getByTestId("FooterMenuBotoes")
    await adicionarProduto.click()

    await page.getByTestId("nome-produto").fill(nome)
    await page.getByTestId("produto-comentario").fill(comentario)
    await page.getByTestId("produto-quantidade").fill(qtde)
    await page.getByTestId("produto-confirmar").click()
}

export async function criaQuatroListas(page: any) {
    await criaLista(page, "minha-lista")
    await page.getByTestId("botao-home").click()

    await criaLista(page, "minha-lista2")
    await page.getByTestId("botao-home").click()

    await criaLista(page, "minha-lista3")
    await page.getByTestId("botao-home").click()

    await criaLista(page, "minha-lista4")
    await page.getByTestId("botao-home").click()
}