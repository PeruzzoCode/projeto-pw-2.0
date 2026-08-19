import "./LoginPage.css";
import Login from "./Login";

function LoginPage({ aoEntrar }) {

    return (
        <div className="login-page">

            <div className="login-card">

                <h2 className="login-titulo">
                    Bem-vindo de volta!
                </h2>

                <p className="login-sub">
                    Acesse sua conta para continuar.
                </p>

                <Login login="Login" aoEntrar={aoEntrar} />

            </div>

        </div>
    );
}

export default LoginPage;
