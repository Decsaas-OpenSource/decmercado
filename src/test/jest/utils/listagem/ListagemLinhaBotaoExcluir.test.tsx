import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, jest } from '@jest/globals';
import ListagemLinhaBotaoExcluir from '@/app/components/utils/listagem/ListagemLinhaBotaoExcluir';
import ProdutoNullObject from '@/app/model/nullObject/ProdutoNullObject';

describe("ListagemLinhaBotaoExcluir", () => {

    test("deve aparecer o icone de excluir", () => {

        const p = new ProdutoNullObject()

        render(
            <ListagemLinhaBotaoExcluir item={p} onClickSim={() => {}} />
        )

        expect(screen.getByRole("icon-Excluir")).toBeDefined()
    })

    test("deve aparecer a modal ao clicar", () => {
        const p = new ProdutoNullObject()

        render(
            <ListagemLinhaBotaoExcluir role='botao' item={p} onClickSim={()=> {}} />
        )

        const elemento = screen.getByRole("botao-excluir")

        fireEvent.click(elemento)

        expect(screen.getByRole("Modal")).toBeDefined()

    })

    test("deve executar funcao ao clicar em SIM na modal", () => {
        const handleOnClick = jest.fn();

        const p = new ProdutoNullObject()

        render(
            <ListagemLinhaBotaoExcluir role='botao' item={p} onClickSim={handleOnClick} />
        )

        const elemento = screen.getByRole("botao-excluir")

        fireEvent.click(elemento)

        const botaoSim = screen.getByRole("ModalBotaoSim")

        fireEvent.click(botaoSim)

        expect(handleOnClick).toBeCalledTimes(1)        
    })
})

