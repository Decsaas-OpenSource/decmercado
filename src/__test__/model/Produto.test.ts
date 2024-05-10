import Produto from '@/app/model/Produto';
import { describe, expect, test } from '@jest/globals';

describe("Produto", () => {

    test("deve retornar o Json", () => {
        const p = new Produto("id", 1, "Produto", "comentario")

        const retorno = p.toJSON()

        expect(retorno).toStrictEqual(
            { "id": "id", "descricao": "Produto", "quantidade": 1, "comentario": "comentario" }
        )
    })

    test("deve recuperar o objeto", () => {

        const p = Produto.fromJSON(JSON.parse("{\"id\":\"idProduto\",\"descricao\":\"Produto A\",\"quantidade\":1,\"comentario\":\"\"}"))

        expect(p).toBeInstanceOf(Produto)
        expect(p).toMatchObject(
            { id: "idProduto", descricao: "Produto A", quantidade: 1, comentario: "" }
        )
    })

})