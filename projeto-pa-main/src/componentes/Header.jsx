import './Header.css'

function Header({ quantidade, perfil, mostrarCardapio, mostrarCarrinho, mostrarPedidos, sair }) {

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

                {(perfil === "admin" || perfil === "cliente") && (
                    <button className="btn-header" onClick={mostrarCardapio}>
                        🍔 Cardápio
                    </button>
                )}

                {(perfil === "admin" || perfil === "cliente") && (
                    <button className="btn-header btn-carrinho" onClick={mostrarCarrinho}>
                        🛒 Carrinho ({quantidade})
                    </button>
                )}

                {(perfil === "admin" || perfil === "cozinheiro") && (
                    <button className="btn-header" onClick={mostrarPedidos}>
                        👨‍🍳 Pedidos
                    </button>
                )}

                <button className="btn-header btn-login" onClick={sair}>
                    Sair ({perfil})
                </button>

            </nav>

        </header>
    )
}

export default Header
