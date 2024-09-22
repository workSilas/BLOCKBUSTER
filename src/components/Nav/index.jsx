import './index.scss';

function Nav() {
    return (
        <div className="Nav">
            <h1>BLOCKBUSTER</h1>
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

export default Nav;