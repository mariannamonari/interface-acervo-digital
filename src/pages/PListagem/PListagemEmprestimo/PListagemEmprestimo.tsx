import { type JSX } from "react";
import Navegacao from "../../../components/Navegacao/Navegacao";
import ListagemEmprestimo from "../../../components/Listagens/ListagemEmprestimo/ListagemEmprestimo";
import Rodape from "../../../components/Rodape/Rodape";

function PListagemEmprestimo(): JSX.Element {
    return (
        <>
        <Navegacao/>
        <ListagemEmprestimo/>
        <Rodape/>
        </>
    );
}

export default PListagemEmprestimo;