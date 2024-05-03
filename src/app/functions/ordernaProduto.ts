import Produto from "../model/Produto";

export function ordernaProduto(produtoA: Produto, produtoB: Produto) {
    const descricaoA = produtoA.descricao?.toUpperCase()
    const descricaoB = produtoB.descricao?.toUpperCase()

    if (descricaoA > descricaoB) {
        return 1;
    }
    if (descricaoA < descricaoB) {
        return -1;
    }
    return 0;
}