import { render, screen } from '@testing-library/react'
import { describe, expect, test } from '@jest/globals';
import { CardConteudoReceita } from '@/app/components/home/cards/CardConteudo';

describe("CardConteudoReceita", () => {

    test("deve ter informações do titulo e do detalhe", () => {
        render(
            <CardConteudoReceita titulo='Minha lista' detalhe='detalhe'/>
        )

        expect(screen.getByText("Minha lista")).toBeDefined()
        expect(screen.getByText("detalhe")).toBeDefined()
    })

})