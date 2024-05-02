interface BodyProp {
    children: React.ReactNode
    css?: string
}

export default function Body(prop: BodyProp) {

    return (
        <div className={`h-screen p-[12px] pb-[60px] ${prop.css}}`}>
            {prop.children}
        </div>
    )
}