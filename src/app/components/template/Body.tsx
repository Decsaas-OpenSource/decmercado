interface BodyProp {
    children: React.ReactNode
    css?: string
}

export default function Body(prop: BodyProp) {

    return (
        <div className={`h-full w-full p-[12px] ${prop.css}`}>
            {prop.children}
        </div>
    )
}