import logo from './assets/logo.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from 'react-bootstrap';
import Wallet from './components/Wallet.js'

function App() {
  return (
    <div className="App">
      <link href="//db.onlinewebfonts.com/c/ed6103f87d67647f670014e8bb40678b?family=Inter+ExtraBold" rel="stylesheet" type="text/css"/>
      <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'/>
      <Navbar bg='navbar-config' variant='navbar-config'>
        <Navbar.Brand className='navbar-brand'>
          <img src={logo} className='navbar-logo' alt='logo' />
        </Navbar.Brand>
        <Wallet/>
      </Navbar>
      <div className='Home-content'>
        <h1 id='home-title'>Blockchain,</h1>
        <h1 id='home-title'>IoT,</h1>
        <h1 id='home-title'>Inovação</h1>
        <p id='home-subtitle'>Mantenha o controle dos seus dispositivos de forma segura e transparente. </p>
      </div>
    </div>
  );
}

export default App;
