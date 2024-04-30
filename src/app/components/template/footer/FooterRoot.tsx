interface MenuFooterProp {
    children: React.ReactNode
}

export default function FooterRoot(prop: MenuFooterProp) {

    return (
        <div className='fixed bottom-0 left-0 right-0 justify-center'>
            {prop.children}
        </div>
    )
}