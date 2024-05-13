import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, jest } from '@jest/globals';
import ModalBotaoNao from '@/app/components/utils/modal/ModalBotaoNao';
import ModalBotaoSim from '@/app/components/utils/modal/ModalBotaoSim';

describe("ModalBotaoNao", () => {

    test("deve executar funcao ao clickar", () => {
        const handleOnClick = jest.fn();

        render(
            <ModalBotaoNao onClick={handleOnClick} />
        )

        const elemento = screen.getByRole("ModalBotaoNao")

        fireEvent.click(elemento)

        expect(handleOnClick).toBeCalledTimes(1)
        expect(screen.getByText("Não")).toBeDefined()
    })

    test("deve trocar label do botao", () => {

        render(
            <ModalBotaoNao onClick={() => {}} valor='Cancelar' />
        )

        expect(screen.getByText("Cancelar")).toBeDefined()
        expect(screen.queryByText("Não")).toBeNull()
    })
})

describe("ModalBotaoSim", () => {

    test("deve executar funcao ao clickar", () => {
        const handleOnClick = jest.fn();

        render(
            <ModalBotaoSim onClick={handleOnClick} />
        )

        const elemento = screen.getByRole("ModalBotaoSim")

        fireEvent.click(elemento)

        expect(handleOnClick).toBeCalledTimes(1)
        expect(screen.getByText("Sim")).toBeDefined()
    })

    test("deve trocar label do botao", () => {

        render(
            <ModalBotaoNao onClick={() => {}} valor='Confirmar' />
        )

        expect(screen.getByText("Confirmar")).toBeDefined()
        expect(screen.queryByText("Sim")).toBeNull()
    })
})

