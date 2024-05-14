import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, jest } from '@jest/globals';
import { FooterMenuBotoes, FooterMenuBotoesLink } from '@/app/components/template/footer/FooterMenuBotoes';

describe("FooterMenuBotoes", () => {

    test("Botão - Confirma click", () => {
        const handleOnClick = jest.fn();

        render(
            <FooterMenuBotoes role='FooterMenuBotoes' css='bg-red' titulo="Meu botão" onClick={handleOnClick} />
        )

        const elemento = screen.getByRole("FooterMenuBotoes")

        expect(elemento).toBeDefined()
        fireEvent.click(elemento)
        expect(handleOnClick).toBeCalledTimes(1)

        expect(screen.getByText("Meu botão")).toBeDefined()
    })

    test("Link - Confirma href", () => {

        render(
            <FooterMenuBotoesLink role='FooterMenuBotoesLink' css='bg-red' titulo="Meu botão" href='/app/outroLugar' />
        )

        const elemento = screen.getByRole("FooterMenuBotoesLink")

        expect(elemento).toBeDefined()
        expect(elemento.getAttribute('href')).toBe('/app/outroLugar');
        expect(screen.getByText("Meu botão")).toBeDefined()
    })

})