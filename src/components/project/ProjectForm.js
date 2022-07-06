import Input from '../form/Input'
import styles from '../layout/Newproject.module.css'
import Select from '../form/Select'
import Submit from '../form/Submit'
import {useEffect, useState} from 'react'

function ProjectForm(handleSubmit, projectData){
    const [categories, setCategories] = useState([])
    const [project, setProject]= useState(projectData || {})

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setCategories(data)
          })
      }, [])
      const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
      }
    
      function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
      }
    
      function handleCategory(e) {
        setProject({
          ...project,
          category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
          },
        })
      }
    return(
        <form class={styles.newProjectContainer} onSubmit={submit}>
            <div>
                <Input type="text"
                 text="Nome do projeto"
                  name="name" 
                  placeholder="Insira o nome do projeto"
                  handleOnChange={handleChange}
                  />
            </div>

            <div>
            <Input type="Number"
             text="Orçamento" 
             name="budget" 
             placeholder="Insira o orçamento para o projeto"
             handleOnChange={handleChange}

             />
            </div>

            <div>
                <Select text="Selecione a categoria"
                 name="category_id"
                  options={categories}
                  handleOnChange={handleChange}

                  />
            </div>

            <div>
                <Submit text="Criar projeto"/>
            </div>

            {/* <div>
            <input type="submit" class={styles.btn}>Enviar</input>
            </div> */}
        </form>


        
    )
}export default ProjectForm