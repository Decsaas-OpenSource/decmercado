import { render, screen } from '@testing-library/react'
import { describe, expect, test } from '@jest/globals';
import ListaCards from '@/app/components/home/ListaCards';
import ListaDeMercadoNullObject from '@/app/model/nullObject/ListaDeMercadoNullObject';

describe("ListaCards", () => {

    test("deve exibir titulo da sessao ", () => {

        render(
            <ListaCards listas={[]} verMais={false}>conteudo</ListaCards>
        )

        const elemento = screen.getByRole("BotaoLinkListaCards")

        expect(elemento).toBeDefined()
        expect(elemento.getAttribute('href')).toBe('/app/listas/nova');
        expect(screen.getByText("Nova lista")).toBeDefined()

        expect(screen.getByText("Minhas listas")).toBeDefined()
    })

    test("deve exibir botao 'Adicione uma lista' quando array de lista está vazio", () => {

        render(
            <ListaCards listas={[]} verMais={false}>conteudo</ListaCards>
        )

        expect(screen.getByText("Adicione uma lista")).toBeDefined()
        expect(screen.getByText("Nenhum item adicionado")).toBeDefined()
    })   

    test("deve exibir o conteudo children", () => {

        const lista = new ListaDeMercadoNullObject();

        render(
            <ListaCards listas={[lista]} verMais={false}> conteudo </ListaCards>
        )

        expect(screen.getByText("conteudo")).toBeDefined()
    })

    test("deve exibir botao ver mais", () => {

        const lista = new ListaDeMercadoNullObject();

        render(
            <ListaCards listas={[lista]} verMais> conteudo </ListaCards>
        )

        expect(screen.getByRole("link")).toBeDefined()
        expect(screen.getByText("Ver mais")).toBeDefined()
    })

    test("nao deve exibir botao ver mais", () => {

        const lista = new ListaDeMercadoNullObject();

        render(
            <ListaCards listas={[lista]} verMais={false}> conteudo </ListaCards>
        )

        expect(screen.queryByText("link")).toBeNull()
        expect(screen.queryByText("Ver mais")).toBeNull()
    })

})