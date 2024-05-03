"use client"

import CadastroCompartilhado from "@/app/components/CadastroCompartilhado";
import { URL_RECEITA } from "@/app/constants";
import ReceitaNullObject from "@/app/model/nullObject/ReceitaNullObject";
import Receitas from "@/app/storage/local/Receitas";
import { useState } from "react";

export default function CadastroReceita() {

    return (
        <CadastroCompartilhado
            lista={useState(new ReceitaNullObject())}
            storage={useState(new Receitas())}
            urlOrigem={URL_RECEITA}
        />
    )
}