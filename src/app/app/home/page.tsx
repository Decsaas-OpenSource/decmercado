import Link from "next/link";
import { Sobre } from "../../icons";
import { Header } from "@/app/components/template/header/Header";
import { Footer } from "@/app/components/template/footer/Footer";

import Body from "../../components/template/Body";

export default function Home() {

    return (
        <>
            <Header.Root>
                <Header.Conteudo>
                    <Header.Titulo valor="Bem vindo"></Header.Titulo>
                    <Header.SubTitulo valor="Site criado por decsaas.dev.br"></Header.SubTitulo>
                </Header.Conteudo>
                <Header.Botao>
                    <Link href={"/app/sobre"} className="m-auto">
                        {Sobre}
                    </Link>
                </Header.Botao>
            </Header.Root>

            <Body>
                <div>ss</div>
            </Body>

            <Footer.Root>
                <Footer.Menu focoHome/>
            </Footer.Root>
        </>
    )
}