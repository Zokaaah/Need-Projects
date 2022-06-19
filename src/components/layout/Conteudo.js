import Gif from './../layout/img/ProjectM.gif'
import Colab from './../layout/img/colab.svg'

import Cards from './../layout/Cards'
import styles from './../layout/Conteudo.module.css'
import Footer from './Footer'

function Conteudo(){
    return(
        <div>
            <div class={styles.conteudoBkg}>
            <h1 class={styles.recursoTitle}>Gerencie seus projetos</h1>
            <div class={styles.TextoRecurso}>
            <p>Com o Need Projects você Organiza seus projetos em conjunto com os demais envolvidos de forma simples de acordo com a sua necessidade</p>
                <button class={styles.btn1}>Saiba mais</button>
            </div>
            {/* <div>
            <img src={Gif} class={styles.gif}/>
            </div> */}
            </div>

            <Cards/>

            {/* <div class={styles.containerCard}>
                    <div class="card">
                        <img src={Colab} alt="colab"/>
                     <div class="container">
                     <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
        </div>
        </div>
            </div> */}
                        {/* <Footer/> */}

        </div>
        

    )
}export default Conteudo