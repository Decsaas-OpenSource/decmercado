import { render, screen } from '@testing-library/react'
import { describe, expect, test } from '@jest/globals';
import { CardConteudoLista } from '@/app/components/home/cards/CardConteudo';

describe("CardConteudoLista", () => {

    test("deve ter informações do titulo e do detalhe", () => {
        render(
            <CardConteudoLista titulo='Minha lista' detalhe='detalhe'/>
        )

        expect(screen.getByText("Minha lista")).toBeDefined()
        expect(screen.getByText("detalhe")).toBeDefined()
    })

})