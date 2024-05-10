import MeuCarrinho from '@/app/model/MeuCarrinho';
import Produto from '@/app/model/Produto';
import { describe, expect, test } from '@jest/globals';

describe("MeuCarrinho", () => {

    test("deve retornar o Json", () => {
        const meuCarrinho = new MeuCarrinho("id", [
            new Produto("idProduto", 1, "Produto A", ""),
            new Produto("idProduto1", 1, "Produto B", ""),
            new Produto("idProduto2", 1, "Produto C", "")
        ], [
            new Produto("idProduto3", 1, "Produto D", ""),
            new Produto("idProduto4", 1, "Produto E", ""),
            new Produto("idProduto5", 1, "Produto F", "")
        ])

        const retorno = meuCarrinho.toJSON()

        expect(retorno).toStrictEqual(
            {
                "id": "id",
                "noCarrinho": [
                    "{\"id\":\"idProduto\",\"descricao\":\"Produto A\",\"quantidade\":1,\"comentario\":\"\"}",
                    "{\"id\":\"idProduto1\",\"descricao\":\"Produto B\",\"quantidade\":1,\"comentario\":\"\"}",
                    "{\"id\":\"idProduto2\",\"descricao\":\"Produto C\",\"quantidade\":1,\"comentario\":\"\"}"
                ],
                "paraComprar": [
                    "{\"id\":\"idProduto3\",\"descricao\":\"Produto D\",\"quantidade\":1,\"comentario\":\"\"}",
                    "{\"id\":\"idProduto4\",\"descricao\":\"Produto E\",\"quantidade\":1,\"comentario\":\"\"}",
                    "{\"id\":\"idProduto5\",\"descricao\":\"Produto F\",\"quantidade\":1,\"comentario\":\"\"}"
                ]
            }
        )
    })

    test("deve recuperar  os produtos do carrinho", () => {
        const meuCarrinhoStoreage = new MeuCarrinho("id", [
            new Produto("idProduto", 1, "Produto A", ""),
            new Produto("idProduto1", 1, "Produto B", ""),
            new Produto("idProduto2", 1, "Produto C", "")
        ], [
            new Produto("idProduto3", 1, "Produto D", ""),
            new Produto("idProduto4", 1, "Produto E", ""),
        ])

        const retorno = MeuCarrinho.fromJSON(JSON.parse(JSON.stringify(meuCarrinhoStoreage)))

        expect(retorno.noCarrinho.length).toBe(3)
        expect(retorno.paraComprar.length).toBe(2)

        function validaDadosNoCarrinho(indice: number, resposta: {}) {
            expect(retorno.noCarrinho[indice]).toBeInstanceOf(Produto)
            expect(retorno.noCarrinho[indice]).toMatchObject(
                resposta
            )
        }

        validaDadosNoCarrinho(0, { id: "idProduto", descricao: "Produto A", quantidade: 1, comentario: "" })
        validaDadosNoCarrinho(1, { id: "idProduto1", descricao: "Produto B", quantidade: 1, comentario: "" })
        validaDadosNoCarrinho(2, { id: "idProduto2", descricao: "Produto C", quantidade: 1, comentario: "" })

        function validaDadosParaComprar(indice: number, resposta: {}) {
            expect(retorno.paraComprar[indice]).toBeInstanceOf(Produto)
            expect(retorno.paraComprar[indice]).toMatchObject(
                resposta
            )
        }
        
        validaDadosParaComprar(0, { id: "idProduto3", descricao: "Produto D", quantidade: 1, comentario: "" })
        validaDadosParaComprar(1, { id: "idProduto4", descricao: "Produto E", quantidade: 1, comentario: "" })
    })

})