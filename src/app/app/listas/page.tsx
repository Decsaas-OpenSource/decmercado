import Body from "@/app/components/template/Body"
import { Footer } from "@/app/components/template/footer/Footer"
import { Header } from "@/app/components/template/header/Header"


const urlBase = "/app/listas/"

export default function Listas() {

    return (
        <>
            <Header.Root>
                <Header.Conteudo>
                    <Header.Titulo valor="Minhas listas"></Header.Titulo>
                </Header.Conteudo>
            </Header.Root>

            <Body css="text-primario-500">
                <div>ssss</div>
            </Body>

            <Footer.Root>
                <Footer.Botao color="bg-neutro-400" href={`${urlBase}nova`} titulo="Adicionar nova lista"/>
                <Footer.Menu focoHome />
            </Footer.Root>
        </>


    )
}