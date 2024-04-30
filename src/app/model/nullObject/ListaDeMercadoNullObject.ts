import { geradorDeHash } from "@/app/functions/geradorDeHash";
import ListaDeMercado from "../lista/ListaDeMercado";

export default class ListaDeMercadoNullObject extends ListaDeMercado {

    constructor() {
       super(geradorDeHash(), "Nova lista")
    }
}