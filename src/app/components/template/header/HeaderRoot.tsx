interface HeaderProp {
    children: React.ReactNode
}

export default function HeaderRoot(prop: HeaderProp) {

    return (
        <div className="bg-primario-500 pt-[8px] pb-[8px] pl-[22px] pr-[22px] flex h-[70px] items-center">
            {prop.children}
        </div>
    )
}