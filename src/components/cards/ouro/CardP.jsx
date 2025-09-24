import './ouroStyles.css'
import '../midia-cards.css'
import { useState } from 'react'

export function CardP() {
    const [num, setNum] = useState(0)

    function adicionar() {
        setNum(num + 1)
    }

    function remover() {
        setNum(num > 0 ? num - 1 : 0)
    } 

    return (
        <div className='item-ouro'>
            <div className='ouro'>
                <h2>Ouro</h2>
                <div className="img-produto">
                    <img src="https://cdn-icons-png.flaticon.com/512/4002/4002224.png" alt="img-ouro" />
                </div>

                <div className="operacao">
                    <button className="mais" onClick={adicionar}>+</button>
                    <div className="area">{num}</div>
                    <button className="menos" onClick={remover}>-</button>
                </div>

                <div className="comprar">
                    <button className="botao-comprar">Comprar</button>
                </div>
            </div>
        </div>
    )
}
