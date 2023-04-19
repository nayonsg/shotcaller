import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css'

const Formulario = ({ aoCadastrar, rotas, aoCriarRota }) => {

    const [nome, setNome] = useState('')
    const [apelido, setApelido] = useState('')
    const [imagem, setImagem] = useState('')
    const [rota, setRota] = useState('')
    const [nomeRota, setNomeRota] = useState('')
    const [corRota, setCorRota] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            nome,
            apelido,
            imagem,
            rota
        })
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do Jogador.</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <Campo
                    obrigatorio={true}
                    label='Apelido' 
                    placeholder='Digite seu Apelido (Nick) '
                    valor={apelido}
                    aoAlterado={valor => setApelido(valor)}/>
                <Campo
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem '
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Rota'
                    items={rotas} 
                    valor={rota}
                    aoAlterado={valor => setRota(valor)}/>
                <Botao texto='Criar card' />
            </form>
            <form className="formulario" onSubmit={(evento) => {
                evento.preventDefault()
                aoCriarRota({ nome: nomeRota, cor: corRota })
            }}>
                <h2>Preencha os dados para criar uma nova Rota.</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite o nome da Rota'
                    valor={nomeRota}
                    aoAlterado={valor => setNomeRota(valor)}/>
                <Campo
                    obrigatorio={true}
                    type='color'
                    label='Cor' 
                    placeholder='Digite sua cor'
                    valor={corRota}
                    aoAlterado={valor => setCorRota(valor)}/>
                <Botao texto='Criar Rota' />
            </form>
        </section>
    )
}

export default Formulario