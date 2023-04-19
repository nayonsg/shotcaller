import './Rodape.css';

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="Facebook" target="https://www.facebook.com/nayon.gomes">
                            <img src="/imagens/fb.png" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="Twitter" target="https://twitter.com/nayonsg">
                            <img src="/imagens/tw.png" alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="Instagram" target="instagram.com/nayonsg">
                            <img src="/imagens/ig.png" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img className='shotcaller' src='/imagens/logo.png' alt='Logo da Shotcaller' />
            </section>
            <section>
                <p>
                    Desenvolvido por Nayon S.
                </p>            
            </section>
            <section>
                <p className="trademark">Projeto baseado no "Organo", desenvolvido pela ALURA. As logos de rotas (topo, selva, meio, atirador e suporte) são propriedade da Riot Games&trade;. Todos os direitos reservados.</p>
            </section>
        </footer>
    )
}

export default Rodape