import { render, screen } from '@testing-library/react'
import { describe, expect, test } from '@jest/globals';
import ListaCards from '@/app/components/home/ListaCards';
import ListaDeMercadoNullObject from '@/app/model/nullObject/ListaDeMercadoNullObject';
import ReceitasCards from '@/app/components/home/ReceitasCards';
import ReceitaNullObject from '@/app/model/nullObject/ReceitaNullObject';

describe("ReceitasCards", () => {

    test("deve exibir titulo da sessao ", () => {

        render(
            <ReceitasCards receitas={[]} verMais={false}>conteudo</ReceitasCards>
        )

        const elemento = screen.getByRole("BotaoLinkReceitasCards")

        expect(elemento).toBeDefined()
        expect(elemento.getAttribute('href')).toBe('/app/receitas/nova');
        expect(screen.getByText("Nova receita")).toBeDefined()

        expect(screen.getByText("Minhas receitas")).toBeDefined()
    })

    test("deve exibir botao 'Adicione uma nova receita' quando array de receita está vazio", () => {

        render(
            <ReceitasCards receitas={[]} verMais={false}>conteudo</ReceitasCards>
        )

        expect(screen.getByText("Adicione uma nova receita")).toBeDefined()
    })

    test("deve exibir o conteudo children", () => {

        const receita = new ReceitaNullObject();

        render(
            <ReceitasCards receitas={[receita]} verMais={false}> conteudo </ReceitasCards>
        )

        expect(screen.getByText("conteudo")).toBeDefined()
    })

    test("deve exibir botao ver mais", () => {

        const receita = new ReceitaNullObject();

        render(
            <ReceitasCards receitas={[receita]} verMais> conteudo </ReceitasCards>
        )

        const link = screen.getByRole('BotaoLinkReceitasCardsVerMais');
        expect(link.getAttribute('href')).toBe('/app/receitas');
    })

    test("nao deve exibir botao ver mais", () => {

        const receita = new ReceitaNullObject()

        render(
            <ReceitasCards receitas={[receita]} verMais={false}> conteudo </ReceitasCards>
        )

        const botao = screen.queryByRole('BotaoLinkReceitasCardsVerMais');
        expect(botao).toBeNull()
    })

})