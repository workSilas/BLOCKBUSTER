import './index.scss';
import Nav from '../../components/Nav';
import Rodape from '../../components/Rodape';
import List from '../../components/Nav/List';


export default function Home() {
  return (
    <div className="pagina-home">
      <List />
      <Nav />
      <main>
        <div className='sessaoInicial'>
          <div>
            <img src="/assets/images/imagens.png" alt="imagens"  />
          </div>
          <div className='align'>
            <h1>FILMES E SÉRIES DE TODAS AS ERAS</h1>
            <div className='direction'>
              <a href="">CADASTRE-SE</a>
              <div className='line' />
              <a href="">PLANOS</a>
            </div>
          </div>
        </div>

        <div className="sessaoFinal">
          <div className="side">
            <div className="square">
              <h2>ASSISTA EM QUALQUER <br />
                DISPOSITIVO</h2>
              <img src="/assets/images/dispositivosImg.png" alt="dispositivosImg" />
            </div>
            <div className="square">
              <img src="/assets/images/offline.png" alt="offline" />
              <h2>BAIXE SÉRIES E FILMES  <br />
                E ASSISTA OFFLINE</h2>
            </div>
          </div>
          <div className="up">
            <h2>ENCONTRE  GRANDES SUCESSOS <br />
              ANTIGOS E ATUAIS COM NOSSO <br />
              SERVIÇO DE STREAMING</h2>
            <div className="sep">
              <div className="info">
                <img src="/assets/images/batman.png" alt="batman" />
              </div>
              <div className="info">
                <h2>AÇÃO <br />
                  SUSPENSE <br />
                  ROMANCE</h2>
              </div>
            </div>
            <div className="sep">
              <div className="info">
                <h2>COMÉDIA <br />
                  TERROR <br />
                  E MUITO MAIS!</h2>
              </div>
              <div className="info">
                <img src="/assets/images/summer.png" alt="summer" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Rodape />
    </div>
  );
}