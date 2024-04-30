import Link from "next/link";

interface ListagemLinhaRedirectionProp {
    item: ListagemDTO,
    urlBase: string,
    children: React.ReactNode
}

export default function ListagemLinhaRedirection(prop: ListagemLinhaRedirectionProp) {

    return (
        <Link href={prop.urlBase} className="w-full flex items-center">
            {prop.children}
        </Link>
    )
}