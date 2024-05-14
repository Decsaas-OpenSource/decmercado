import ListagemLinhaConteudo from '@/app/components/utils/listagem/ListagemLinhaConteudo';
import Produto from '@/app/model/Produto';
import { describe, expect, test } from '@jest/globals';
import { render, screen} from '@testing-library/react';

describe("ListagemLinhaConteudo", () => {

    test("deve aparecer conteudo informado nas props", () => {

        const item = new Produto("id", 5, "produto teste", "comentario")

        render(
            <ListagemLinhaConteudo item={item}>
                conteudo extra
            </ListagemLinhaConteudo>
        )

        expect(screen.getByText("5")).toBeDefined()
        expect(screen.getByText("produto teste")).toBeDefined()
        expect(screen.getByText("conteudo extra")).toBeDefined()
    })

    test("deve aparecer quantidade com numeros decimais", () => {

        const item = new Produto("id", 5, "produto teste", "comentario")

        render(
            <ListagemLinhaConteudo item={item} comDecimais>
                conteudo extra
            </ListagemLinhaConteudo>
        )

        expect(screen.getByText("5.000")).toBeDefined()
    })
    
})