import { render, screen } from '@testing-library/react'
import { describe, expect, test } from '@jest/globals';
import HeaderSubTitulo from '@/app/components/template/header/HeaderSubTitulo';
import HeaderTitulo from '@/app/components/template/header/HeaderTitulo';

describe("HeaderSubTitulo", () => {

    test("Confirma valor", () => {
        render(
            <HeaderSubTitulo valor='Meu valor' />
        )

        expect(screen.getByText('Meu valor')).toBeDefined()
    })

})

describe("HeaderTitulo", () => {

    test("Confirma valor", () => {
        render(
            <HeaderTitulo valor='Meu valor' />
        )

        expect(screen.getByText('Meu valor')).toBeDefined()
    })

})