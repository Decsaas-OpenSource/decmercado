import { render, screen } from '@testing-library/react'
import { describe, expect, test } from '@jest/globals';
import FooterMenu from '@/app/components/template/footer/FooterMenu';


describe("FooterMenu", () => {

    test("verifica URLs", () => {
        render(
            <FooterMenu />
        )

        const link = screen.getByRole('botao-home');
        expect(screen.getByRole('botao-home').getAttribute('href')).toBe('/app/home');
        expect(screen.getByRole('botao-carrinho').getAttribute('href')).toBe('/app/carrinho');
    })

    test("focoHome", () => {
        render(
            <FooterMenu focoHome />
        )

        expect(screen.getByRole("icon-HomeSolid")).toBeDefined()
    })

    test("focoCarrinho", () => {
        render(
            <FooterMenu focoCarrinho />
        )

        expect(screen.getByRole("icon-CarrinhoSolid")).toBeDefined()
    })

})