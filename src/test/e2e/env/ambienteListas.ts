import { ListaDeMercadoHelper } from "../helper/ListaDeMercadoHelper";

export async function criarLista(page :any, nomeMinhaLista: string) {
    await page.goto('/app/listas/nova', { waitUntil: "networkidle" });

    await ListaDeMercadoHelper.atribuirNome(page, nomeMinhaLista)
    await ListaDeMercadoHelper.criarProduto(page, "produto A", "comentario A", "5")
    await ListaDeMercadoHelper.criarProduto(page, "produto B", "comentario B", "10")
}

export async function criarListaComTresProdutos(page :any, nomeMinhaLista: string) {
    await criarLista(page, nomeMinhaLista)
    await ListaDeMercadoHelper.criarProduto(page, "produto C", "comentario C", "15")
}

export async function criarQuatroListas(page: any) {
    await criarLista(page, "minha-lista")
    await criarLista(page, "minha-lista2")
    await criarLista(page, "minha-lista3")
    await criarLista(page, "minha-lista4")
}