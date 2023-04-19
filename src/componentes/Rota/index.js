import Jogador from '../Jogador';
import hexToRgba from 'hex-to-rgba';
import './Rota.css'

const Rota = ({ rota, jogadores, aoDeletar, mudarCor, aoFavoritar }) => {
    return (

        jogadores.length > 0 && <section className='rota' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(rota.cor, '0.6') }}>
            <input type='color' className='input-cor' value={rota.cor} onChange={evento => {
                mudarCor(evento.target.value, rota.id);
            }} />
            <h3 style={{ borderColor: rota.cor }}>{rota.nome}</h3>
            <div className='jogadores'>
                {jogadores.map((jogador, indice) => {
                    return (
                        <Jogador 
                            key={indice} 
                            jogador={jogador} 
                            corDeFundo={rota.cor} 
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                            );
                })}
            </div>
        </section>

    )
}

export default Rota