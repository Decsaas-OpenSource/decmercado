import { geradorDeHash } from "@/app/functions/geradorDeHash";
import Produto from "../Produto";

export default class ProdutoNullObject extends Produto {

    constructor() {
       super(geradorDeHash(), 1.000, "", "")
    }
}