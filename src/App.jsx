import { ButtonColor } from "./components/ButtonColor/ButtonColor"
import { CardP } from "./components/cards/ouro/CardP"
import { CardS } from "./components/cards/diamante/CardS"
import { CardT } from "./components/cards/rubi/CardT"
import { CoinButton } from "./components/CoinButton/CoinButton"
import { Footer } from "./components/footer/Footer"


function App() {

  return (
    <div className="App">
        <header>
          <h1>Interatividade</h1>
        </header>
        <nav>
            <a href="#">Inicio</a>
            <a href="#">Produto</a>
            <a href="#">Contato</a>
            <a href="#">Ajuda</a>
        </nav>
        <div className="principal">
          <ButtonColor />
          <main>
            <section>
              <h1>Hello World</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, debitis corrupti. Necessitatibus atque quod cupiditate perspiciatis sint laudantium nisi obcaecati, rerum aliquid veniam! Neque voluptas debitis ab nam recusandae odit?</p>
            </section>

            <section className="produto">
              <CardP />
              <CardS />
              <CardT />
            </section>

            <section className="coin-area">
              <div className="total-coin">
                <p>Saldo: 0</p>
              </div>
              <CoinButton />
              <p className="txt-indica">Clique para conseguir os coins!</p>
            </section>

            <section>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt architecto odio hic ex. Eum nulla dolor sapiente quas doloribus neque deserunt blanditiis, ipsa praesentium, cupiditate maxime eligendi quod quisquam porro!</p>
            </section>
            <footer>
              <Footer />
              <div class="footer-copyright">
                  &#169
                  2025 all rights reserved
              </div>
          </footer>
          </main>
        </div>
    </div>
  )
}

export default App
