import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Rota from "./componentes/Rota";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [rotas, setRotas] = useState([
    {
      id: uuidv4(),
      nome: 'Topo',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Selva',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Meio',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Atirador',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'Suporte',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Coach/Staff',
      cor: '#A6D157'
    }
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'MANUELA ANDRADE',
      apelido: 'Eitamanuela',
      imagem: 'https://pbs.twimg.com/profile_images/1645130444571115520/iwzEYr9P_400x400.jpg',
      rota: rotas[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'VICTOR SALES',
      apelido: 'Vladinario2022',
      imagem: 'https://pbs.twimg.com/profile_images/1604228755429416960/mV4ZNf7v_400x400.jpg',
      rota: rotas[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NAYON SILVA',
      apelido: 'Oxe Nayon',
      imagem: 'https://pbs.twimg.com/profile_images/1625875462336413696/p3kLk_I3_400x400.jpg',
      rota: rotas[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JONGHOON PARK',
      apelido: 'LLL Croc',
      imagem: 'https://pbs.twimg.com/profile_images/1647387661009580033/SBthZvC2_400x400.jpg',
      rota: rotas[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'VINÍCIUS RODRIGUES',
      apelido: 'Sunchoosen',
      imagem: 'https://pbs.twimg.com/profile_images/1431812039182278656/jO07nAsy_400x400.jpg',
      rota: rotas[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANILO MELO',
      apelido: 'Avatarmelo',
      imagem: 'https://pbs.twimg.com/profile_images/1618266257429598208/6rwJR1Mp_400x400.jpg',
      rota: rotas[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LUCAS FLORES',
      apelido: 'LOS Netuno',
      imagem: 'https://pbs.twimg.com/profile_images/1632402407941349376/IT85z2cV_400x400.jpg',
      rota: rotas[3].nome
    },
    {
      nome: 'VINÍCIUS PEDROSO',
      apelido: 'Vini o Caster',
      imagem: 'https://pbs.twimg.com/profile_images/1643563396053319684/mecOpQvr_400x400.jpg',
      rota: rotas[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Mohamad Oliveira',
      apelido: 'Mamed',
      imagem: 'https://pbs.twimg.com/profile_images/1097672124687413249/Oqsdrvnu_400x400.jpg',
      rota: rotas[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'FREDERICO NEVES',
      apelido: 'Raikage Carioca',
      imagem: 'https://pbs.twimg.com/profile_images/1486508338368155648/7asRHC5u_400x400.jpg',
      rota: rotas[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME ANTUNES',
      apelido: 'Head Coach',
      imagem: 'https://pbs.twimg.com/profile_images/1647409130653483008/iO_Pt7Jt_400x400.jpg',
      rota: rotas[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DOUGLAS GOMES',
      apelido: 'Head Coach',
      imagem: 'https://pbs.twimg.com/profile_images/1467263287305940992/VwGxGW85_400x400.jpg',
      rota: rotas[5].nome
    }
  ]

  const [jogadores, setJogadores] = useState(inicial);

  function deletarJogador(id) {
    setJogadores(jogadores.filter(jogador => jogador.id !== id));
  }

  function mudarCor(cor, id) {
    setRotas(rotas.map(rota => {
      if(rota.id === id) {
        rota.cor = cor;
      }
      return rota;
    }));
  }

  function cadastrarRota({ nome, cor }) {
    setRotas([...rotas, { nome, cor, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setJogadores(jogadores.map(jogador => {
      if(jogador.id === id) jogador.favorito = !jogador.favorito;
      return jogador
    }))
  }

  return (
    <div>
      <Banner />
      <Formulario aoCriarRota={cadastrarRota} rotas={rotas.map(rota => rota.nome)} aoCadastrar={jogador => setJogadores([...jogadores, jogador])} />
      <section className="rotas">
        <h1>Minha Equipe</h1>
        {rotas.map((rota, indice) => 
          <Rota
            aoFavoritar={resolverFavorito} 
            mudarCor={mudarCor} 
            key={indice} 
            rota={rota}
            jogadores={jogadores.filter(jogador => jogador.rota === rota.nome)} 
            aoDeletar={deletarJogador} 
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;