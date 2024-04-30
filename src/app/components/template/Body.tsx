interface BodyProp {
    children: React.ReactNode
    css?: string
}

export default function Body(prop: BodyProp) {

    return (
        // <div className={`p-[22px] ${pages.menuChildren ? 'pb-[90px]' : 'pb-[60px]'}`}>
        <div className={`h-svh p-[22px] pb-[60px] ${prop.css}}`}>
            {prop.children}
        </div>
    )
}