import './rubiStyles.css'

export function CardT() {
    return (
        <div className="item-rubi">
            <div className='rubi'> 
                <h2>Rubi</h2>
                <div className="img-produto">
                    <img src="https://cdn-icons-png.flaticon.com/512/895/895951.png" alt="img-rubi" />
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
