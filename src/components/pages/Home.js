import styles from './../layout/Home.module.css'
import homestart from './../layout/img/homestart.svg'
import Conteudo from './../layout/Conteudo'
import Cards from './../layout/Cards'
import Footer from '../layout/Footer'
import 'animate.css';



import Button from './../Button'

function Home(){
    return (
        <>
        
        <section class={styles.homeContainer}>

            <div class={styles.textHome}>
            <div class="animate__animated animate__fadeInLeft">

                <h1>Bem-Vindo ao <span class={styles.textEdit}>Need Projects</span></h1>
                <h2>Tire seu projeto do papel agora mesmo</h2>

              <button class={styles.btn1}>Conheça a idéia</button>
              <button class={styles.btn2}>Comece agora</button>

            </div>
            </div>


            <div class="animate__animated animate__fadeInUpBig">

            <div class={styles.imgHome}>
                <img src={homestart} alt="home" class={styles.homeStart }></img>
            </div>
            </div>
        </section>


        <Conteudo/>
        </>

    )
}
export default Home