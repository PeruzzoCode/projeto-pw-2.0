import './Header.css'

function Header({ quantidade, mostrarCardapio, mostrarCarrinho, mostrarLogin }) {

    return (
        <header className="titulo">

            <div className="logo-container">

                <h1 className="logo-titulo">
                      Peruzzo Food
                </h1>

                <p className="logo-subtitulo">
                 Chegou!
                </p>

            </div>

            <nav className="menu-header">

                <button
                    className="btn-header"
                    onClick={mostrarCardapio}
                >
                    🍔 Cardápio
                </button>

<button
                    className="btn-header btn-carrinho"
                    onClick={mostrarCarrinho}
                >
                    🛒 Carrinho ({quantidade})
                </button>

                <button
                    className="btn-header btn-login"
                    onClick={mostrarLogin}
                >
                    👤 Login
                </button>

            </nav>

        </header>
    )
}

export default Header