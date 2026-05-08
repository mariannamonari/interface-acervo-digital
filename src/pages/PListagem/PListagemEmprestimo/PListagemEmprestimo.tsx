import { type JSX } from "react";
import Navegacao from "../../../components/Navegacao/Navegacao";
<<<<<<< HEAD
import ListagemEmprestimos from "../../../components/Listagens/ListagemEmprestimo/ListagemEmprestimo";
=======
import ListagemEmprestimo from "../../../components/Listagens/ListagemEmprestimo/ListagemEmprestimo";
>>>>>>> features
import Rodape from "../../../components/Rodape/Rodape";

function PListagemEmprestimo(): JSX.Element {
    return (
<<<<<<< HEAD
        <div className="min-h-screen flex flex-col">
            <Navegacao />
            <ListagemEmprestimos />
            <Rodape />
        </div>
=======
        <>
        <Navegacao/>
        <ListagemEmprestimo/>
        <Rodape/>
        </>
>>>>>>> features
    );
}

export default PListagemEmprestimo;