import logo from './assets/logo.png'
import bgvideo from './assets/bg-vid.mp4'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg='navbar-config' variant='navbar-config'>
        <Navbar.Brand className='navbar-brand'>
          <img src={logo} className='navbar-logo' alt='logo' />
        </Navbar.Brand>
      </Navbar>
      <video src={bgvideo} type='video/mp4' autoplay='true' muted loop className='bg-video' />
    </div>
  );
}

export default App;
