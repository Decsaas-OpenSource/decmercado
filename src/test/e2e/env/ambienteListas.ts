import { ListaDeMercadoHelper } from "../helper/ListaDeMercadoHelper";

export async function criaLista(page :any, nomeMinhaLista: string) {
    await page.goto('/app/listas/nova', { waitUntil: "networkidle" });

    await ListaDeMercadoHelper.atribuirNome(page, nomeMinhaLista)
    await ListaDeMercadoHelper.criarProduto(page, "produto A", "comentario A", "5")
    await ListaDeMercadoHelper.criarProduto(page, "produto B", "comentario B", "10")
}

export async function criaQuatroListas(page: any) {
    await criaLista(page, "minha-lista")
    await criaLista(page, "minha-lista2")
    await criaLista(page, "minha-lista3")
    await criaLista(page, "minha-lista4")
}