import Produto from '@/app/model/Produto';
import Lista from '@/app/model/lista/Lista';
import ListaDeMercado from '@/app/model/lista/ListaDeMercado';
import { describe, expect, test } from '@jest/globals';

describe("Lista", () => {

    test("deve retornar o Json", () => {
        const lista = new ListaDeMercado("id", "minha lista")
        lista.produtos = [new Produto("idProduto", 1, "Produto A", "")]

        const retorno = lista.toJSON()

        expect(retorno).toStrictEqual({
            "id": "id",
            "descricao": "minha lista",
            "produtos": [
                "{\"id\":\"idProduto\",\"descricao\":\"Produto A\",\"quantidade\":1,\"comentario\":\"\"}"
            ]
        })
    })

    test("deve recuperar os produtos", () => {
        const listaStorage = new ListaDeMercado("id", "minha lista")
        listaStorage.produtos = [new Produto("idProduto", 1, "Produto A", "")]
        
        var listaNovaInstancia = new ListaDeMercado("id", "minha lista")

        listaNovaInstancia = Lista.fromJSON(listaNovaInstancia, JSON.parse(JSON.stringify(listaStorage)))

        expect(listaNovaInstancia.produtos.length).toBe(1)
        expect(listaNovaInstancia.produtos[0]).toBeInstanceOf(Produto)
        expect(listaNovaInstancia.produtos[0]).toMatchObject(
            { id : "idProduto", descricao : "Produto A", quantidade :1, comentario :""}
        )
    })

})