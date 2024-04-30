import Body from "@/app/components/template/Body"
import { Footer } from "@/app/components/template/footer/Footer"
import { Header } from "@/app/components/template/header/Header"

const urlBase = "/app/receitas/"

export default function Sobre() {

    return (
        <>
            <Header.Root>
                <Header.Conteudo>
                    <Header.Titulo valor="Informações"></Header.Titulo>
                </Header.Conteudo>
            </Header.Root>

            <Body>
                <div>ssss</div>
            </Body>

            <Footer.Root>
                <Footer.Menu focoHome />
            </Footer.Root>
        </>


    )
}