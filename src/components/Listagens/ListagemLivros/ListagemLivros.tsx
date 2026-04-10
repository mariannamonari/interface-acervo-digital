import { type JSX } from "react";

interface Livro {
    id: number;
    titulo: string;
    autor: string;
    editora: string;
    ano: string;
    isbn: string;
    quantTotal: number;
    quantDisponivel: number;
}

function ListagemLivros(): JSX.Element {
    const livros: Livro[] = [
        { id: 1, titulo: 'Dom Casmurro', autor: 'Machado de Assis', editora: 'Editora A', ano: '1899', isbn: '978-85-123456-78-9', quantTotal: 10, quantDisponivel: 8 },
        { id: 2, titulo: 'Memórias Póstumas de Brás Cubas', autor: 'Machado de Assis', editora: 'Editora B', ano: '1881', isbn: '978-85-987654-32-1', quantTotal: 5, quantDisponivel: 3 },
        { id: 3, titulo: 'O Cortiço', autor: 'Aluísio Azevedo', editora: 'Editora C', ano: '1890', isbn: '978-85-111111-11-1', quantTotal: 7, quantDisponivel: 5 },
        { id: 4, titulo: 'Iracema', autor: 'José de Alencar', editora: 'Editora D', ano: '1865', isbn: '978-85-222222-22-2', quantTotal: 12, quantDisponivel: 10 }
    ];

    return (
        <main className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Lista de Livros</h1>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <table className="border-collapse border border-gray-300 w-full">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Título</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Autor</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Editora</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Ano</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">ISBN</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Quant Total</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Quant Disponível</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {livros.map((livro, index) => (
                                <tr key={livro.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="border border-gray-300 px-4 py-2">{livro.id}</td>
                                    <td className="border border-gray-300 px-4 py-2">{livro.titulo}</td>
                                    <td className="border border-gray-300 px-4 py-2">{livro.autor}</td>
                                    <td className="border border-gray-300 px-4 py-2">{livro.editora}</td>
                                    <td className="border border-gray-300 px-4 py-2">{livro.ano}</td>
                                    <td className="border border-gray-300 px-4 py-2">{livro.isbn}</td>
                                    <td className="border border-gray-300 px-4 py-2">{livro.quantTotal}</td>
                                    <td className="border border-gray-300 px-4 py-2">{livro.quantDisponivel}</td>
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

export default ListagemLivros;