import "./Footer.css";
import Funcionario from "./Funcionario";

function Footer({ funcionarios }) {

    return (
        <footer className="rodape">

            <div className="rodape-conteudo">

                <h2 className="titulo-funcionarios">
                    Nossa Equipe
                </h2>

                <div className="funcionarios-cards-wrapper">

                    {funcionarios.map(funcionario => (
                        <Funcionario
                            key={funcionario.id}
                            nome={funcionario.nome}
                            cargo={funcionario.cargo}
                            fotoUrl={funcionario.fotoUrl}
                        />
                    ))}

                </div>

            </div>

            <div className="rodape-info">
                <p>© 2025 Peruzzo Food — Todos os direitos reservados.</p>
            </div>

        </footer>
    );
}

export default Footer;
