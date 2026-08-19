import { useState } from "react";
import './Login.css'

function Login({ login, aoEntrar }) {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    function enviarLogin(evento) {
        evento.preventDefault();
        const entrou = aoEntrar(usuario.trim().toLowerCase(), senha);

        if (!entrou) {
            setErro("Usuário ou senha inválidos.");
        }
    }

    return(
        <form className='login' onSubmit={enviarLogin}>
            <h2>{login}</h2>
            <input
                type="text"
                name="usuario"
                id="id_usuario"
                placeholder='Usuário'
                value={usuario}
                onChange={(evento) => setUsuario(evento.target.value)}
                autoComplete="username"
            />
            <input
                type="password"
                name="senha"
                id="id_senha"
                placeholder='Senha'
                value={senha}
                onChange={(evento) => setSenha(evento.target.value)}
                autoComplete="current-password"
            />
            {erro && <p className="login-erro">{erro}</p>}
            <button id='bt_enviar' type="submit">Entrar</button>
            <p className="login-credenciais">
                Acessos de teste: admin/admin, cozinheiro/cozinheiro e cliente/cliente.
            </p>
        </form>
    )
}

export default Login
