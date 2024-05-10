import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, jest } from '@jest/globals';
import Produto from '@/app/model/Produto';
import ListagemLinhaRedirection from '@/app/components/utils/listagem/ListagemLinhaRedirection';

describe("ListagemLinhaRedirection", () => {

    test("deve conter as informacoes de children e de url", () => {
        const item = new Produto("id", 5, "produto teste", "comentario")

        render(
            <ListagemLinhaRedirection urlBase='/teste' >
                conteudo extra
            </ListagemLinhaRedirection>
        )

        expect(screen.getByRole("link").getAttribute('href')).toBe('/teste');
        expect(screen.getByText("conteudo extra")).toBeDefined()
    })

})

