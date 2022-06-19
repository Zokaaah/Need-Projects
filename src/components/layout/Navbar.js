import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import Container from './Container'
import Logo from './img/rocket.png'

function Navbar(){
    
    return(
        <nav class={styles.navbar}>

            <div class={styles.divNav}>

               <div class={styles.divLogo}> 
                <ul class={styles.list}>
                    <li class={styles.item}>
                    <Link to="/">
                        <img src={Logo} alt="logo" class={styles.LogoNav}/>
                    </Link>
                    </li>
                    

                </ul>
                </div>

                <div class={styles.divMenu}>
                    <ul class={styles.list}>


                    <li class={styles.item}><Link to="/">Home</Link></li>
                    <li class={styles.item}><Link to="/Contato">Contato</Link></li>
                    <li class={styles.item}><Link to="/Sobre">Sobre</Link></li>
                    <li class={styles.item}><Link to="/Newproject">Novo Projeto</Link></li>
                    <li class={styles.item}><Link to="/Projetos">Projetos</Link></li>

                </ul>    
                </div>

               <div class={styles.divLogin}> 
             <button class={styles.btnLogin}>Login</button>
             <button class={styles.btnLogin}>Cadastro</button>

             </div>
                </div>
               

            
             

        

      </nav>
    )
}

export default Navbar