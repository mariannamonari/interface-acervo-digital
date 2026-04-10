// Classe responsável por fazer requisições à API - autenticação
class AuthRequests {

    private serverUrl: string;
    private endpointLogin: string;

    constructor() {
    this.serverUrl = 'http://localhost:3333';
this.endpointLogin = 'api/login';
    }

    async login(login: { email: string, senha: string}) {
        try {
            const response = await fetch(`${this.serverUrl}${this.endpointLogin}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(login)
            });

            if (!response.ok) {
                console.log('Erro na autenticação');
                throw new Error('Falha no login');
            }

            const data = await response.json();
            console.log(data);

            if (data.usuario) {
                this.persistToken(data.usuario.nome, data.usuario.id, data.usuario.role);
            }

            return true;
        } catch (error) {
            console.error('Erro: ', error);
            throw error;
        }
    }

    persistToken(username: string, idUsuario: number, role: string) {
        localStorage.setItem('username', username);
        localStorage.setItem('idUsuario', idUsuario.toString());
        localStorage.setItem('role', role);
        localStorage.setItem('isAuth', 'true');
    }

    removeToken() {
        localStorage.removeItem('username');
        localStorage.removeItem('idUsuario');
        localStorage.removeItem('role');
        localStorage.removeItem('isAuth');
        window.location.href = `/login`;
    }

    checkTokenExpiry() {
        const isAuth = localStorage.getItem('isAuth');
        return isAuth === 'true';
    }
}

export default new AuthRequests();