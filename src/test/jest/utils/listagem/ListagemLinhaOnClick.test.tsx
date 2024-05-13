import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, jest } from '@jest/globals';
import ListagemLinhaOnClick from '@/app/components/utils/listagem/ListagemLinhaOnClick';
import Produto from '@/app/model/Produto';

describe("ListagemLinhaOnClick", () => {

    test("deve executar funcao ao clicar ", () => {
        const handleOnClick = jest.fn();
        const item = new Produto("id", 5, "produto teste", "comentario")

        render(
            <ListagemLinhaOnClick role='listagem-linha' item={item} onClick={handleOnClick}>
                conteudo extra
            </ListagemLinhaOnClick>
        )

        const elemento = screen.getByRole("listagem-linha-click")

        fireEvent.click(elemento)

        expect(handleOnClick).toBeCalledTimes(1)
        expect(handleOnClick).toBeCalledWith(item)
    })

})

