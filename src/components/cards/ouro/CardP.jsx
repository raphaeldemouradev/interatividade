import './ouroStyles.css'
import '../midia-cards.css'

export function CardP() {
    return (
        <div className='item-ouro'>
            <div className='ouro'>
                <h2>Ouro</h2>
                <div className="img-produto">
                    <img src="https://cdn-icons-png.flaticon.com/512/4002/4002224.png" alt="img-ouro" />
                </div>

                <div className="operacao">
                    <button className="mais">+</button>
                    <div className="area"></div>
                    <button className="menos">-</button>
                </div>

                <div className="comprar">
                    <button className="botao-comprar">Comprar</button>
                </div>
            </div>
        </div>
    )
}
