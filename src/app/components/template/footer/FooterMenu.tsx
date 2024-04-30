import { Carrinho, CarrinhoSolid, Home, HomeSolid } from "@/app/icons"
import Link from "next/link"

interface MenuFooterProp {
    focoHome?: boolean
    focoCarrinho?: boolean
}

export default function FooterMenu(prop: MenuFooterProp) {

    return (
        <div className="flex bg-primario-500 text-branco justify-center space-x-32 w-f h-[47px]">
            <Link href={"/app/home"} className="content-center">
                {prop.focoHome ? HomeSolid : Home}
            </Link>
            <Link href={"/app/carrinho"} className="content-center">
                {prop.focoCarrinho ? CarrinhoSolid : Carrinho}
            </Link>
        </div>
    )
}