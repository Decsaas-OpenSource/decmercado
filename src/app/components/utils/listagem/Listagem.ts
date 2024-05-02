import ListagemLinhaOnClick from "./ListagemLinhaOnClick";
import ListagemLinhaBotao from "./ListagemLinhaBotao";
import ListagemLinhaRedirection from "./ListagemLinhaRedirection";
import ListagemRoot from "./ListagemRoot";
import ListagemLinhaConteudo from "./ListagemLinhaConteudo";
import ListagemLinhaConteudoComentario from "./ListagemLinhaConteudoComentario";
import ListagemLinhaBotaoExcluir from "./ListagemLinhaBotaoExcluir";
import ListagemLinha from "./ListagemLinha";
import ListagemLinhaSemAcao from "./ListagemLinhaSemAcao";
import ListagemLinhaBotaoCheck from "./ListagemLinhaBotaoCheck";

export const CSS_LISTAGEM_LINHA = "flex items-center w-full"

export const Listagem = {
    Root: ListagemRoot,
    Linha: ListagemLinha,
    LinhaConteudo: ListagemLinhaConteudo,
    LinhaComentario: ListagemLinhaConteudoComentario,

    LinhaOnClick: ListagemLinhaOnClick,
    LinhaSemAcao: ListagemLinhaSemAcao,
    LinhaRedirection: ListagemLinhaRedirection,
    ListaBotao: ListagemLinhaBotao,
    ListaBotaoExcluir: ListagemLinhaBotaoExcluir,
    ListaBotaoCheck: ListagemLinhaBotaoCheck
}