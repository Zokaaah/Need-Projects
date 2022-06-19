import styles from './../layout/Newproject.module.css'
import ProjectForm from '../project/ProjectForm'
import FormComp from '../project/FormComp'
function Newproject(){
    return (
        <div class={styles.newProjectContainer}>
            <h1>Criar projeto</h1>
            <ProjectForm/>
            </div>
    )
}
export default Newproject