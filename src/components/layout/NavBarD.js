import responsivo from './responsivo.module.css'
import Logo from './img/rocket.png'
import { Link } from 'react-router-dom'


function NavBarD(){
    return(
        <div>
            <header class={responsivo.header}>
            <img src={Logo} class={responsivo.logo}/>
        <input class={responsivo.side_menu} type="checkbox" id="side_menu"/>
        <label class={responsivo.hamb} for="side_menu"><span class={responsivo.hamb_line}></span></label>
        <nav class={responsivo.nav}>
            <ul class={responsivo.menu}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Contato">Contato</Link></li>
                    <li><Link to="/Sobre">Sobre</Link></li>
                    <li><Link to="/Newproject">Novo Projeto</Link></li>
                    <li><Link to="/Projetos">Projetos</Link></li>
            </ul>
        </nav>
    </header>
        </div>
    )
}export default NavBarD