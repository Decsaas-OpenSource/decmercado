import { render, screen } from '@testing-library/react'
import { describe, expect, test } from '@jest/globals';
import ListagemRoot from '@/app/components/utils/listagem/ListagemRoot';

describe("ListagemRoot", () => {

    test("deve aprensentar mensagem de vazio", () => {

        render(
            <ListagemRoot mensagemVazio='mensagem vazio' exibirListagem={false} >
                conteudo extra
            </ListagemRoot>
        )

        expect(screen.getByText("mensagem vazio")).toBeDefined()
        expect(screen.queryByText("conteudo extra")).toBeNull()
    })

    test("deve aprensentar o children", () => {

        render(
            <ListagemRoot mensagemVazio='mensagem vazio' exibirListagem={true} >
                conteudo extra
            </ListagemRoot>
        )

        expect(screen.queryByText("mensagem vazio")).toBeNull()
        expect(screen.getByText("conteudo extra")).toBeDefined()
    })

})

