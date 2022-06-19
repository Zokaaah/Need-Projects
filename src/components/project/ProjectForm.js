import Input from '../form/Input'
import styles from '../layout/Newproject.module.css'
import Select from '../form/Select'
import Submit from '../form/Submit'
import {useEffect, useState} from 'react'

function ProjectForm(){
    const [categories, setCategories] = useState([])


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
    
    return(
        <form class={styles.newProjectContainer}>
            <div>
                <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto"/>
            </div>

            <div>
            <Input type="Number" text="Orçamento" name="budget" placeholder="Insira o orçamento para o projeto"/>
            </div>

            <div>
                <Select text="Selecione a categoria" name="category_id" options={categories}/>
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