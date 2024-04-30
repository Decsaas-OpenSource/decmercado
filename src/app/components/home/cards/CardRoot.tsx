import Link from "next/link"

interface CardRootProp {
    children: React.ReactNode
    urlRedirect : string
}

export default function CardRoot(prop: CardRootProp) {

    return (
        <Link href={prop.urlRedirect}>
            {prop.children}
        </Link>
    )
}