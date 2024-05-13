import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, jest } from '@jest/globals';
import Input from '@/app/components/utils/Input';

describe("Input", () => {

    test("deve apresentar label e placeHolder", () => {
        render(
            <Input label='Minha label' onChange={() => {}}
                placeHolder='Digite alguma coisa' 
                valor='' />
        )

        expect(screen.getByText("Minha label")).toBeDefined()
        expect(screen.getAllByPlaceholderText("Digite alguma coisa")).toBeDefined()
    })

    test("deve interagiar com input", () => {
        const handleOnChange = jest.fn();

        render(
            <Input label='Minha label' onChange={handleOnChange}
                placeHolder='Digite alguma coisa' 
                valor='' />
        )

        const elemento = screen.getByLabelText("Minha label")

        fireEvent.change(elemento, { target : { value : "Minha informacao"}})

        expect(handleOnChange).toBeCalledWith("Minha informacao")
    })

    test("deve atribuir valor ao maxLength", () => {
        render(
            <Input label='Minha label' onChange={() => {}}
                placeHolder='Digite alguma coisa' 
                valor='' tamanhoMaximo={10} />
        )

        expect(screen.getByLabelText("Minha label").getAttribute('maxLength')).toBe("10");
    })
})

