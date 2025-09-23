import './Styles.css'

export function Footer() {
    return (
        <div className="footer-content">
            <div className="footer-logo">
                <h1>Logo</h1>
            </div>
            <div className="footer-social-media">
                <h3>Sociais</h3>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
            </div>
            <ul className="footer-list">
                <li><h3>Creditos</h3></li>
                <li>Ouro: <a className="footer-link" href="https://www.flaticon.com/br/icones-gratis/diamante" title="diamante ícones" target='_blank'>Diamante ícones criados por Freepik - Flaticon</a></li>
                <li>Diamante: <a className="footer-link" href="https://www.flaticon.com/br/icones-gratis/barras-de-ouro" title="barras de ouro ícones">Barras de ouro ícones criados por surang - Flaticon</a></li>
                <li>Rubi: <a className="footer-link" href="https://www.flaticon.com/free-icons/gem" title="gem icons">Gem icons created by Freepik - Flaticon</a></li>
            </ul>
            <ul className="footer-list">
                <li><h3>Titulo</h3></li>
                <li><a href="#" className="footer-link">Texto</a></li>
                <li><a href="#" className="footer-link">Texto</a></li>
                <li><a href="#" className="footer-link">Texto</a></li>
            </ul>
        </div>
    )
}