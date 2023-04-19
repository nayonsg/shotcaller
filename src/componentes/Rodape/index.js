import './Rodape.css';

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/imagens/fb.png" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/imagens/tw.png" alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
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
                <p className="trademark">Base do projeto criada por ALURA. As logos de rotas (topo, selva, meio, atirador e suporte) são propriedade da Riot Games&trade;. Todos os direitos reservados.</p>
            </section>
        </footer>
    )
}

export default Rodape