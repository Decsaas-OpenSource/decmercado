import { render, screen } from '@testing-library/react'
import { describe, expect, test } from '@jest/globals';
import { CardIconeLista, CardIconeReceita } from '@/app/components/home/cards/CardIcone';
import { ListaBullet } from '@/app/icons';

describe("CardIconeLista", () => {

    test("deve verificar que esta apresentando o icone correto da lista", () => {
        render(
            <CardIconeLista icon={ListaBullet}/>
        )

        expect(screen.getByRole("icon-ListaBullet")).toBeDefined()
    })
})

describe("CardIconeReceita", () => {

    test("deve verificar que esta apresentando o icone correto da receita", () => {
        render(
            <CardIconeReceita/>
        )

        expect(screen.getByRole("icon-Adicionar")).toBeDefined()
    })
})