import { type JSX } from "react";

interface Aluno {
    id: number;
    ra: string;
    nome: string;
    email: string;
    telefone: string;
}

function ListagemAlunos(): JSX.Element {
    const alunos: Aluno[] = [
        { id: 1, ra: 'A123456', nome: 'Marianna Monari', email: 'marimonari@gmail.com', telefone: '(16) 9 9999-9999' },
        { id: 2, ra: 'A654321', nome: 'Isa Francis', email: 'isafrancis@gmail.com', telefone: '(16) 7 7777-8888' },
        { id: 3, ra: 'A111111', nome: 'João Silva', email: 'joao.silva@email.com', telefone: '(11) 9 8888-7777' },
        { id: 4, ra: 'A222222', nome: 'Ana Costa', email: 'ana.costa@email.com', telefone: '(21) 9 7777-6666' }
    ];

    return (
        <main className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Lista de Alunos</h1>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <table className="border-collapse border border-gray-300 w-full">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">RA</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Nome</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Telefone</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alunos.map((aluno, index) => (
                                <tr key={aluno.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="border border-gray-300 px-4 py-2">{aluno.id}</td>
                                    <td className="border border-gray-300 px-4 py-2">{aluno.ra}</td>
                                    <td className="border border-gray-300 px-4 py-2">{aluno.nome}</td>
                                    <td className="border border-gray-300 px-4 py-2">{aluno.email}</td>
                                    <td className="border border-gray-300 px-4 py-2">{aluno.telefone}</td>
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

export default ListagemAlunos;


