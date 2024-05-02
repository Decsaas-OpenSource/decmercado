"use client"

import { useState } from "react"
import ListasDeMercado from "@/app/storage/local/ListasDeMercado"
import ListaDeMercadoNullObject from "@/app/model/nullObject/ListaDeMercadoNullObject"
import CadastroCompartilhado from "@/app/components/CadastroCompartilhado"
import { URL_LISTA } from "@/app/constants"

export default function CadastroLista() {

    return (
        <CadastroCompartilhado
            lista={useState(new ListaDeMercadoNullObject())}
            storage={useState(new ListasDeMercado())}
            urlOrigem={URL_LISTA}
        />
    )
}