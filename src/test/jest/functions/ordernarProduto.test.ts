import { ordernaProduto } from '@/app/functions/ordernaProduto';
import Produto from '@/app/model/Produto';
import { describe, expect, test } from '@jest/globals';

describe("ordernaProduto", () => {

    test("deve retornar valor correto", () => {

        expect(ordernaProduto(
            new Produto("id", 1, "produtoA", ""),
            new Produto("id", 1, "produtoB", ""))).toBe(-1)

        expect(ordernaProduto(
            new Produto("id", 1, "produtoC", ""),
            new Produto("id", 1, "produtoB", ""))).toBe(1)

        expect(ordernaProduto(
            new Produto("id", 1, "produtoC", ""),
            new Produto("id", 1, "produtoC", ""))).toBe(0)
    })

    test("deve retornar os produtos em ordem alfabetica", () => {
        const produtos = [
            new Produto("id", 1, "produtoC", ""),
            new Produto("id", 1, "produtoA", ""),
            new Produto("id", 1, "produtoD", ""),
            new Produto("id", 1, "produtoB", "")
        ]

        const novaOrdenacao = produtos.sort(ordernaProduto)

        expect(novaOrdenacao[0].descricao).toBe("produtoA")
        expect(novaOrdenacao[1].descricao).toBe("produtoB")
        expect(novaOrdenacao[2].descricao).toBe("produtoC")
        expect(novaOrdenacao[3].descricao).toBe("produtoD")
    })

})