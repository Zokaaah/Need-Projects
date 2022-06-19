
import Colab from './../layout/img/colab.svg'
import Time from './../layout/img/time.svg'
import Prod from './../layout/img/produtividade.svg'


import styles from './../layout/Conteudo.module.css'


  function Cards(){
    return(

      <div>
        <h1>Vantagens</h1>
      <div class={styles.containerCard}>
        

        <div class={styles.card}>
          <img src={Colab} alt="Colab" class={styles.imgCard}/>
      <div >
        <h4><b>Trabalhe em equipe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>


    <div class={styles.card}>
          <img src={Time} alt="Time" class={styles.imgCard}/>
      <div >
        <h4><b>Organize seu tempo</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>


    <div class={styles.card}>
          <img src={Prod} alt="Prod" class={styles.imgCard}/>
      <div >
        <h4><b>Trabalhe em equipe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
      </div>
      </div>
    )
  } export default Cards