import "./LoginPage.css";
import Login from "./Login";

function LoginPage({ voltar }) {

    return (
        <div className="login-page">

            <button
                className="btn-voltar"
                onClick={voltar}
            >
                ← Voltar
            </button>

            <div className="login-card">

                <h2 className="login-titulo">
                    Bem-vindo de volta!
                </h2>

                <p className="login-sub">
                    Acesse sua conta para continuar.
                </p>

                <Login login="Login" />

            </div>

        </div>
    );
}

export default LoginPage;
