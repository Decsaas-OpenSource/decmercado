import Link from "next/link";
import { CSS_LISTAGEM_LINHA } from "./Listagem";

interface ListagemLinhaRedirectionProp {
    role?: string,
    urlBase: string,
    children: React.ReactNode
}

export default function ListagemLinhaRedirection(prop: ListagemLinhaRedirectionProp) {

    return (
        <Link role={`${prop.role}-link`} href={prop.urlBase} className={CSS_LISTAGEM_LINHA}>
            {prop.children}
        </Link>
    )
}