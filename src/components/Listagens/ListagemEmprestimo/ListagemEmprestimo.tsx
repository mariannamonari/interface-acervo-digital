import { type JSX } from "react";

interface Emprestimo {
    id: number;
    aluno: string;
    livro: string;
    dataEmprestimo: string;
    dataDevolucao: string;
    status: string;
}

function ListagemEmprestimo(): JSX.Element {
    const emprestimos: Emprestimo[] = [
        { id: 1, aluno: 'Marianna Monari', livro: 'Dom Casmurro', dataEmprestimo: '2023-10-01', dataDevolucao: '2023-10-15', status: 'Devolvido' },
        { id: 2, aluno: 'Isa Francis', livro: 'Memórias Póstumas de Brás Cubas', dataEmprestimo: '2023-10-05', dataDevolucao: '-', status: 'Emprestado' },
        { id: 3, aluno: 'João Silva', livro: 'O Cortiço', dataEmprestimo: '2023-10-10', dataDevolucao: '2023-10-20', status: 'Devolvido' },
        { id: 4, aluno: 'Ana Costa', livro: 'Iracema', dataEmprestimo: '2023-10-12', dataDevolucao: '-', status: 'Emprestado' }
    ];

    return (
        <main className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Lista de Empréstimos</h1>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <table className="border-collapse border border-gray-300 w-full">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Aluno</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Livro</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Data Empréstimo</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Data Devolução</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {emprestimos.map((emprestimo, index) => (
                                <tr key={emprestimo.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="border border-gray-300 px-4 py-2">{emprestimo.id}</td>
                                    <td className="border border-gray-300 px-4 py-2">{emprestimo.aluno}</td>
                                    <td className="border border-gray-300 px-4 py-2">{emprestimo.livro}</td>
                                    <td className="border border-gray-300 px-4 py-2">{emprestimo.dataEmprestimo}</td>
                                    <td className="border border-gray-300 px-4 py-2">{emprestimo.dataDevolucao}</td>
                                    <td className="border border-gray-300 px-4 py-2">{emprestimo.status}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <div className="flex gap-2">
                                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm font-medium">Atualizar</button>
                                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">Detalhes</button>
                                            <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm font-medium">Deletar</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

export default ListagemEmprestimo;