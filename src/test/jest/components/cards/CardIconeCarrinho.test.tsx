import { render, screen } from '@testing-library/react'
import { describe, expect, test } from '@jest/globals';
import { CardIconeCarrinho } from '@/app/components/home/cards/CardIcone';

describe("CardIconeCarrinho", () => {

    test("deve ter o icone correto do carrinho", () => {
        render(
            <CardIconeCarrinho/>
        )

        expect(screen.getByRole("icon-CarrinhoCard")).toBeDefined()
    })

})