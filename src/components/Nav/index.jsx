import './index.scss';

export default function Nav() {
    return (
        <div className="Nav">
            <img className='img' src="/assets/images/blockbusterLogo.png" />
            <div className="sec">
                <a href="">Filmes</a>
                <a href="">Séries</a>
            </div>
            <div className="line" />
            <div className="input">
                <img src="/assets/images/Search.png" />
                <input type="text" placeholder='Procurar' />
            </div>
            <a href=""><img src="/assets/images/user.png" /></a>
        </div>
    );
}