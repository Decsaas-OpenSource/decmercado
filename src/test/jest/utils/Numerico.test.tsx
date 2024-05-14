import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, jest } from '@jest/globals';
import Numerico from '@/app/components/utils/Numerico';

describe("Numerico", () => {

    test("deve apresentar label e placeHolder", () => {
        render(
            <Numerico label='Minha label' onChange={() => {}}
                placeHolder='Digite alguma coisa' 
                valor={0} />
        )

        expect(screen.getByText("Minha label")).toBeDefined()
        expect(screen.getAllByPlaceholderText("Digite alguma coisa")).toBeDefined()
    })

    test("deve interagiar com input", () => {
        const handleOnChange = jest.fn();

        render(
            <Numerico label='Minha label' onChange={handleOnChange}
                placeHolder='Digite alguma coisa' 
                valor={10} />
        )

        const elemento = screen.getByLabelText("Minha label")

        fireEvent.change(elemento, { target : { valueAsNumber: "50"}})

        expect(handleOnChange).toBeCalledWith(50)
        expect(screen.getByLabelText("Minha label").getAttribute('inputMode')).toBe("decimal");
    })

})

