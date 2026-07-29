import type AlunoDTO from "../dto/AlunoDTO";

const API_URL =
    import.meta.env.VITE_API_URL || "https://api-acervo-digital.onrender.com";

// Classe responsável por fazer requisições à API - aluno
class AlunoRequests {
    private serverUrl: string;
    private endpointAlunos: string;

    constructor() {
        this.serverUrl = API_URL;
        this.endpointAlunos = "/api/alunos";
    }

    // Lista todos os alunos
    async listarAlunos() {
        try {
            const response = await fetch(
                `${this.serverUrl}${this.endpointAlunos}`
            );

            if (!response.ok) {
                throw new Error("Não foi possível listar os alunos.");
            }

            return await response.json();
        } catch (error) {
            console.error("Erro ao fazer consulta à API:", error);
            return null;
        }
    }

    // Busca um aluno pelo ID
    async obterAlunoPorId(id_aluno: number): Promise<AlunoDTO | null> {
        try {
            const response = await fetch(
                `${this.serverUrl}${this.endpointAlunos}/${id_aluno}`
            );

            if (!response.ok) {
                throw new Error("Aluno não encontrado.");
            }

            return await response.json();
        } catch (error) {
            console.error("Erro ao buscar aluno:", error);
            return null;
        }
    }

    // Cadastra um aluno
    async enviarFormularioAluno(formAluno: AlunoDTO): Promise<boolean> {
        try {
            const token = localStorage.getItem("token");

            const respostaAPI = await fetch(
                `${this.serverUrl}${this.endpointAlunos}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "x-access-token": `${token}`,
                    },
                    body: JSON.stringify(formAluno),
                }
            );

            if (!respostaAPI.ok) {
                throw new Error(
                    `Erro ${respostaAPI.status}: ${respostaAPI.statusText}`
                );
            }

            return true;
        } catch (error) {
            console.error("Erro ao fazer consulta à API:", error);
            return false;
        }
    }
}

export default new AlunoRequests();