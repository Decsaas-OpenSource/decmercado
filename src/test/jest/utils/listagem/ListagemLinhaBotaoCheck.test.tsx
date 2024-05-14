import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, jest } from '@jest/globals';
import ListagemLinhaBotaoCheck from '@/app/components/utils/listagem/ListagemLinhaBotaoCheck';

describe("ListagemLinhaBotaoCheck", () => {

    test("deve aparecer o icone de check", () => {
        render(
            <ListagemLinhaBotaoCheck onClick={() => {}} />
        )

        expect(screen.getByRole("icon-Check")).toBeDefined()
    })

    test("deve aparecer o icone de checked", () => {
        render(
            <ListagemLinhaBotaoCheck onClick={() => {}} selecionado />
        )

        expect(screen.getByRole("icon-Checked")).toBeDefined()
    })

    test("deve trocar os icones ao clicar", () => {
        const handleOnClick = jest.fn();

        render(
            <ListagemLinhaBotaoCheck role='botao' onClick={handleOnClick}/>
        )

        const elemento = screen.getByRole("botao-check")

        fireEvent.click(elemento)

        expect(handleOnClick).toBeCalledTimes(1)
        expect(screen.getByRole("icon-Checked")).toBeDefined()

        fireEvent.click(elemento)

        expect(handleOnClick).toBeCalledTimes(2)
        expect(screen.getByRole("icon-Check")).toBeDefined()        
    })
})

