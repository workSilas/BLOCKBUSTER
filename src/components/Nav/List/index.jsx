import './index.scss';
import { useState } from 'react';

export default function List() {

    const [nav, setNav] = useState(true)

    function click() {
        setNav(!nav)
    }

    return (
        <div className='List'>

            { nav === true &&
                <img src="/assets/images/Nav.png" onClick={click} alt="Nav"/>
            }
            

            {nav === false && 
                <div className="container">
                    <img src="/assets/images/ESC.png" onClick={click} alt="ESC" />
                    <div className='sep'>
                    <ul>
                        <li><a href="/">Filmes</a></li>
                        <li><a href="/">Séries</a></li>
                    </ul>
                    </div>
                </div>
            }
        </div>
    )
}