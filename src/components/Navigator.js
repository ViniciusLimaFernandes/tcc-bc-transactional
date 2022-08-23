import logo from '../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from 'react-bootstrap';
import Wallet from './Wallet.js'
import '../App.css';

const Navigator = () => {
    return (
        <Navbar bg='navbar-config' variant='navbar-config'>
            <Navbar.Brand className='navbar-brand'>
                <img src={logo} className='navbar-logo' alt='logo' />
            </Navbar.Brand>
            <Wallet/>
        </Navbar>
    );
}

export default Navigator