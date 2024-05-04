interface BodyProp {
    children: React.ReactNode
    css?: string
}

export default function Body(prop: BodyProp) {

    return (
        <div className={`relative flex flex-col grow h-full w-full p-3 pb-28 ${prop.css}`}>
            {prop.children}
        </div>
    )
}