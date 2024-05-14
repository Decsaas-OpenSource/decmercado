import { render, screen } from '@testing-library/react'
import { describe, expect, test } from '@jest/globals';
import { CardConteudoCarrinho } from '@/app/components/home/cards/CardConteudo';

describe("CardConteudoCarrinho", () => {

    test("deve apresentar que o carrinho esta vazio", () => {
        render(
            <CardConteudoCarrinho titulo='Meu carrinho' totalNoCarrinho={0} totalParaComprar={0}/>
        )

        expect(screen.getByText("Meu carrinho")).toBeDefined()
        expect(screen.getByText("Vazio")).toBeDefined()
    })

    test("deve ter detalhe sobre total para compra igual a 10", () => {
        render(
            <CardConteudoCarrinho titulo='Meu carrinho' totalNoCarrinho={0} totalParaComprar={10}/>
        )

        expect(screen.getByText("Meu carrinho")).toBeDefined()
        expect(screen.getByText("Itens no carrinho (0)")).toBeDefined()
        expect(screen.getByText("Total de itens para compra (10)")).toBeDefined()
    })

    test("deve ter detalhe sobre itens de carrinho igual a 10", () => {
        render(
            <CardConteudoCarrinho titulo='Meu carrinho' totalNoCarrinho={10} totalParaComprar={0}/>
        )

        expect(screen.getByText("Meu carrinho")).toBeDefined()
        expect(screen.getByText("Itens no carrinho (10)")).toBeDefined()
        expect(screen.getByText("Total de itens para compra (0)")).toBeDefined()
    })
})