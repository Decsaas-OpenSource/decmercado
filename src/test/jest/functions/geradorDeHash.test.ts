import { geradorDeHashComParametro } from '@/app/functions/geradorDeHash';
import { describe, expect, test } from '@jest/globals';

describe("geradorDeHash", () => {

    test("deve retornar valor correto", () => {
        const retorno = geradorDeHashComParametro("gerador")
        expect(retorno).toBe("160f29f8a6d541bc32143d7e186d5af109c63214ae12d26945a8c8691b37b31b")
    })

})