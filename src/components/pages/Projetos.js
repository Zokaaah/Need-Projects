import projects from './../layout/img/projects.png'
import styles from './../layout/Container.module.css'

function Projetos (){
    return(
        <div>
            <h1>Meus projetos</h1>

            <img src={projects} alt="projects" class={styles.imgProject}></img>
        </div>
    )       
    
}
export default Projetos