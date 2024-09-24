import './index.scss';
import Nav from '../../components/Nav';


export default function Home() {
  return (
    <div className="pagina-home">
      <Nav />
      <main>
        <div className='sessaoInicial'>
          <div>
            <img src="/assets/images/imagens.png" />
          </div>
          <div className='align'>
            <h1>FILMES E SÉRIES <br />
            DE TODAS AS ERAS</h1>
            <div className='direction'>
              <a href="">CADASTRE-SE</a>
              <div className='line' />
              <a href="">PLANOS</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}