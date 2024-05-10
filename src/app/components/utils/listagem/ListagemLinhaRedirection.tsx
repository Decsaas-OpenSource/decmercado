import Link from "next/link";
import { CSS_LISTAGEM_LINHA } from "./Listagem";

interface ListagemLinhaRedirectionProp {
    urlBase: string,
    children: React.ReactNode
}

export default function ListagemLinhaRedirection(prop: ListagemLinhaRedirectionProp) {

    return (
        <Link href={prop.urlBase} className={CSS_LISTAGEM_LINHA}>
            {prop.children}
        </Link>
    )
}