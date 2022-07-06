import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import Sobre from './components/pages/Sobre'
import Newproject from './components/pages/Newproject'
import Projetos from './components/pages/Projetos'


import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Topo from './components/layout/Topo'
import Newnav from './components/layout/Newnav';
import { ThemeProvider } from '@mui/material';
import theme from './components/theme';
import NavBarD from './components/layout/NavBarD';
import gridHome from './components/layout/gridHome';



function App() {
  return (
  <div className='App'>
    <Router>
      {/* <Topo/> */}
      {/* <Navbar/> */}
      {/* <Newnav/> */}
      <NavBarD/>
      <Switch>
       <Container> 
        <Route exact path='/'>
          <Home/>
        </Route>

        

        <Route path='/Contato'>
          <Contato/>
        </Route>

        <Route path='/Sobre'>
          <Sobre/>
        </Route>

        <Route path='/Newproject'>
          <Newproject/>
        </Route>

        <Route path='/Projetos'>
          <Projetos/>
        </Route>

      <gridHome/>
      </Container> 

      </Switch>

    </Router>
    <Footer/>

  </div>

  )
}

export default App;
