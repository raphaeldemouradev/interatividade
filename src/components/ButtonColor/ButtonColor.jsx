import { useState, useEffect } from 'react'
import './Styles.css'

export function ButtonColor() {
    const [cor, setCor] = useState('#fff');
    const [txtCor, setTxtCor] = useState('#000000ff')

    useEffect(() => {
        document.body.style.backgroundColor = cor;
        document.body.style.color = txtCor
    }, [cor, txtCor]);

    function trocaCor() {
        setCor(cor === '#fff' ? '#000000ff' : '#fff');
        setTxtCor(txtCor === '#000000ff' ? '#fff' : '#000000ff')
    }

    return (
        <div className="botao">
            <button className="mudacor" onClick={trocaCor}>
                {cor === '#fff' ? 'Modo Escuro' : 'Modo Claro'}
            </button>
        </div>
    );
}