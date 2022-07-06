import styles from './../layout/Newproject.module.css'
import ProjectForm from '../project/ProjectForm'
import FormComp from '../project/FormComp'
import { useHistory } from 'react-router-dom'

function Newproject(){
    function createPost(project) {
        // initialize cost and services
        project.need = 0
        project.services = []
    
        fetch('http://localhost:5000/projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(project),
        })
          .then((resp) => resp.json())
          .then((data) => {
            history.push('/projects', { message: 'Projeto criado com sucesso!' })
          })
      }
    const history = useHistory()
    return (
        <div class={styles.newProjectContainer}>
            <h1>Criar projeto</h1>
            <ProjectForm handleSubmit={createPost}/>
            </div>
    )
}
export default Newproject