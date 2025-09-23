import './dimaStyles.css'

export function CardS() {
    return (
        <div className="item-dima">
            <div className='diamante'>
                <h2>Diamante</h2>
                <div className="img-produto">
                    <img src="https://cdn-icons-png.flaticon.com/512/122/122796.png" alt="img-diamante" />
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