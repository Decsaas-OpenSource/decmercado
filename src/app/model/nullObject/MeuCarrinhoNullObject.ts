import { geradorDeHash } from "@/app/functions/geradorDeHash";
import MeuCarrinho from "../MeuCarrinho";

export default class MeuCarrinhoNullObject extends MeuCarrinho {

    constructor() {
       super(geradorDeHash(), [], [])
    }
}