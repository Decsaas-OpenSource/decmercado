import { geradorDeHash } from "@/app/functions/geradorDeHash";
import Receita from "../lista/Receita";

export default class ReceitaNullObject extends Receita {

    constructor() {
       super(geradorDeHash(), "Nova receita")
    }
}