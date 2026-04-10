import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PHome from './pages/PHome/PHome'
import PLogin from './components/PLogin/PLogin'
import PListagemAluno from './pages/PListagem/PLIstagemAluno/PListagemAluno'
import PListagemLivro from './pages/PListagem/PListagemLivro/PListagemLivro'
import PListagemEmprestimo from './pages/PListagem/PListagemEmprestimo/PListagemEmprestimo'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PHome />} />
        <Route path='/login' element={<PLogin />} />
        <Route path='/lista/aluno' element={<PListagemAluno />} />
        <Route path='/lista/livro' element={<PListagemLivro />} />
        <Route path='/lista/emprestimo' element={<PListagemEmprestimo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
