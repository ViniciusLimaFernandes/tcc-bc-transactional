import React, { useEffect, useState } from 'react';
import phantomLogo from '../assets/phantom_logo.png'
import '../App.css'

const Wallet = () => {
    const [walletAddress, setWalletAddress] = useState(null);

    const walletIsConnected = async () => {
        try {
            const { solana } = window;

            if (solana) {
                console.log(solana)
                if (solana.isPhantom) {
                    console.log("Phantom wallet found.")
                    const response = await solana.connect({ onlyIfTrusted: true });
                    console.log(
                        'Connected with Public Key:',
                        response.publicKey.toString()
                    );
                    setWalletAddress(response.publicKey.toString());
                }
            } else {
                console.log("Phantom wallet not found!")
            }
        } catch (error) {
            console.error(error)
        }
    }

    const connectWallet = async () => { };

    const connectWalletButton = () => (
        <button
            className="cta-button connect-wallet-button"
            onClick={connectWallet}
        >
            <img src={phantomLogo} className='wallet-logo' alt='logo' />
            <span className='wallet-text'>conectar carteira</span>
        </button>
    );

    useEffect(() => {
        const onLoad = async () => {
            await walletIsConnected();
        }
        window.addEventListener('load', onLoad);
        return () => window.removeEventListener('load', onLoad);
    }, [])

    return connectWalletButton()
}

export default Wallet