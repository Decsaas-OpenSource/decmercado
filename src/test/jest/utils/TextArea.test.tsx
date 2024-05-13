import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, jest } from '@jest/globals';
import TextArea from '@/app/components/utils/TextArea';

describe("TextArea", () => {

    test("deve apresentar label e placeHolder", () => {
        render(
            <TextArea label='Minha label' onChange={() => {}}
                placeHolder='Digite alguma coisa' 
                valor='' />
        )

        expect(screen.getByText("Minha label")).toBeDefined()
        expect(screen.getAllByPlaceholderText("Digite alguma coisa")).toBeDefined()
    })

    test("deve interagiar com input", () => {
        const handleOnChange = jest.fn();

        render(
            <TextArea label='Minha label' onChange={handleOnChange}
                placeHolder='Digite alguma coisa' 
                valor='' />
        )

        const elemento = screen.getByLabelText("Minha label")

        fireEvent.change(elemento, { target : { value : "Minha informacao"}})

        expect(handleOnChange).toBeCalledWith("Minha informacao")
    })
})

