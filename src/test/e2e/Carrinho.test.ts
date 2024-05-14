import { test } from '@playwright/test';
import { CarrinhoHelper } from './helper/CarrinhoHelper';
import { criarLista, criarListaComTresProdutos } from './env/ambienteListas';

test('deve importar uma lista', async ({ page }) => {
    await criarLista(page, "minha-lista")

    await CarrinhoHelper.abrePagina(page)
    await CarrinhoHelper.importarLista(page)
    await CarrinhoHelper.importarListaSelecionar(page, 0)
    await CarrinhoHelper.importarListaConfirmar(page)
    
    await CarrinhoHelper.verificarItenCompraDescricao(page, 0, "produto A")
    await CarrinhoHelper.verificarItenCompraQuantidade(page, 0, "5.000")
    await CarrinhoHelper.verificarItenCompraComentario(page, 0, "comentario A")
    
    await CarrinhoHelper.verificarItenCompraDescricao(page, 1, "produto B")
    await CarrinhoHelper.verificarItenCompraQuantidade(page, 1, "10.000")
});

test('deve importar duas lista e clica em ver detalhes', async ({ page }) => {
    await criarLista(page, "minha-lista")
    await criarLista(page, "minha-lista2")

    await CarrinhoHelper.abrePagina(page)
    await CarrinhoHelper.importarLista(page)
    await CarrinhoHelper.importarListaSelecionar(page, 0)
    await CarrinhoHelper.importarListaSelecionar(page, 1)
    await CarrinhoHelper.importarListaConfirmar(page)
    
    await CarrinhoHelper.verificarItenCompraDescricao(page, 0, "produto A")
    await CarrinhoHelper.verificarItenCompraQuantidade(page, 0, "10.000")
    await CarrinhoHelper.verificarItenCompraComentario(page, 0, "Mostrar detalhes!")
    
    await CarrinhoHelper.verificarItenCompraDescricao(page, 1, "produto B")
    await CarrinhoHelper.verificarItenCompraQuantidade(page, 1, "20.000")

    await CarrinhoHelper.abreDetalhesProdutoCompra(page, 0)
    await CarrinhoHelper.validaDetalhesProduto(page, "comentario A", "comentario A")
});

test('deve importar uma lista e depois outra lista e manter os produtos', async ({ page }) => {
    await criarLista(page, "minha-lista")
    await criarLista(page, "minha-lista2")
    await criarListaComTresProdutos(page, "minha-lista3")

    await CarrinhoHelper.abrePagina(page)
    await CarrinhoHelper.importarLista(page)
    await CarrinhoHelper.importarListaSelecionar(page, 0)
    await CarrinhoHelper.importarListaSelecionar(page, 1)
    await CarrinhoHelper.importarListaConfirmar(page)
    
    await CarrinhoHelper.verificarItenCompraDescricao(page, 0, "produto A")
    await CarrinhoHelper.verificarItenCompraQuantidade(page, 0, "10.000")
    
    await CarrinhoHelper.verificarItenCompraDescricao(page, 1, "produto B")
    await CarrinhoHelper.verificarItenCompraQuantidade(page, 1, "20.000")

    await CarrinhoHelper.importarLista(page)
    await CarrinhoHelper.importarListaSelecionar(page, 2)
    await CarrinhoHelper.importarListaConfirmar(page)

    await CarrinhoHelper.verificarItenCompraDescricao(page, 0, "produto A")
    await CarrinhoHelper.verificarItenCompraQuantidade(page, 0, "15.000")
    
    await CarrinhoHelper.verificarItenCompraDescricao(page, 1, "produto B")
    await CarrinhoHelper.verificarItenCompraQuantidade(page, 1, "30.000")

    await CarrinhoHelper.verificarItenCompraDescricao(page, 2, "produto C")
    await CarrinhoHelper.verificarItenCompraQuantidade(page, 2, "15.000")
});

test('deve impedir a importacao de nova lista com produtos no carrinho', async ({ page }) => {
    await criarLista(page, "minha-lista")
    await criarLista(page, "minha-lista2")

    await CarrinhoHelper.abrePagina(page)
    await CarrinhoHelper.importarLista(page)
    await CarrinhoHelper.importarListaSelecionar(page, 0)
    await CarrinhoHelper.importarListaConfirmar(page)

    await CarrinhoHelper.selecionaItemCompra(page, 0)

    await CarrinhoHelper.importarListaDesabilitado(page)
});

test('deve finalizar carrinho', async ({ page }) => {
    await criarLista(page, "minha-lista")

    await CarrinhoHelper.abrePagina(page)
    await CarrinhoHelper.importarLista(page)
    await CarrinhoHelper.importarListaSelecionar(page, 0)
    await CarrinhoHelper.importarListaConfirmar(page)
    
    await CarrinhoHelper.finalizarCarrinho(page)
    await CarrinhoHelper.verificarListasVazias(page)
});

test('deve devolver item do carrinho para lista de compras', async ({ page }) => {
    await criarLista(page, "minha-lista")

    await CarrinhoHelper.abrePagina(page)
    await CarrinhoHelper.importarLista(page)
    await CarrinhoHelper.importarListaSelecionar(page, 0)
    await CarrinhoHelper.importarListaConfirmar(page)

    await CarrinhoHelper.verificarItenCompraDescricao(page, 0, "produto A")
    await CarrinhoHelper.verificarItenCompraQuantidade(page, 0, "5.000")
    await CarrinhoHelper.verificarItenCompraComentario(page, 0, "comentario A")
    
    await CarrinhoHelper.verificarItenCompraDescricao(page, 1, "produto B")
    await CarrinhoHelper.verificarItenCompraQuantidade(page, 1, "10.000")
    
    await CarrinhoHelper.selecionaItemCompra(page, 0)

    await CarrinhoHelper.verificarItenCarrinhoDescricao(page, 0, "produto A")
    await CarrinhoHelper.verificarItenCarrinhoQuantidade(page, 0, "5.000")
    await CarrinhoHelper.verificarItenCarrinhoComentario(page, 0, "comentario A")
    
    await CarrinhoHelper.verificarItenCompraDescricao(page, 0, "produto B")
    await CarrinhoHelper.verificarItenCompraQuantidade(page, 0, "10.000")

    await CarrinhoHelper.selecionaItemCompra(page, 0)

    await CarrinhoHelper.verificarItenCarrinhoDescricao(page, 0, "produto A")
    await CarrinhoHelper.verificarItenCarrinhoQuantidade(page, 0, "5.000")
    await CarrinhoHelper.verificarItenCarrinhoComentario(page, 0, "comentario A")

    await CarrinhoHelper.verificarItenCarrinhoDescricao(page, 1, "produto B")
    await CarrinhoHelper.verificarItenCarrinhoQuantidade(page, 1, "10.000")
    await CarrinhoHelper.verificarItenCarrinhoComentario(page, 1, "comentario B")

    await CarrinhoHelper.selecionaItemCarrinho(page, 0)

    await CarrinhoHelper.verificarItenCarrinhoDescricao(page, 0, "produto B")
    await CarrinhoHelper.verificarItenCarrinhoQuantidade(page, 0, "10.000")
    await CarrinhoHelper.verificarItenCarrinhoComentario(page, 0, "comentario B")

    await CarrinhoHelper.verificarItenCompraDescricao(page, 0, "produto A")
    await CarrinhoHelper.verificarItenCompraQuantidade(page, 0, "5.000")
    await CarrinhoHelper.verificarItenCompraComentario(page, 0, "comentario A")
    

});