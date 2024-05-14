import Link from "next/link"

interface CardRootProp {
    role?: string,
    children: React.ReactNode
    urlRedirect : string
}

export default function CardRoot(prop: CardRootProp) {

    return (
        <Link role={prop.role} href={prop.urlRedirect}>
            {prop.children}
        </Link>
    )
}