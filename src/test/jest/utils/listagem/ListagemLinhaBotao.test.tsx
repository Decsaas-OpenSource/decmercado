import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, jest } from '@jest/globals';
import ListagemLinhaBotao from '@/app/components/utils/listagem/ListagemLinhaBotao';
import { Adicionar } from '@/app/icons';

describe("ListagemLinhaBotao", () => {

    test("deve aparecer o icone ", () => {
        render(
            <ListagemLinhaBotao css='bg-branco' icon={Adicionar} onClick={()=> {}} />
        )

        expect(screen.getByRole("icon-Adicionar")).toBeDefined()
    })

    test("deve executar funcao ao clicar ", () => {
        const handleOnClick = jest.fn();

        render(
            <ListagemLinhaBotao role='botao' css='bg-branco' icon={Adicionar} onClick={handleOnClick} />
        )

        const elemento = screen.getByRole("botao")

        fireEvent.click(elemento)

        expect(handleOnClick).toBeCalledTimes(1)
    })

})

