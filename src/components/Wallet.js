import "../App.css";
import React, { useEffect, useState } from "react";
import phantomLogo from "../assets/phantom_logo.png";
import walletIsConnected from "../utils/walletUtils";

const Wallet = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const walletAlreadyConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log("Phantom wallet found.");
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            "Connected with Public Key:",
            response.publicKey.toString()
          );
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        console.log("Phantom wallet not found!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log("Connected with Public Key:", response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

  const disconnectWallet = async () => {
    const { solana } = window;

    if (solana) {
      await solana.disconnect();
      console.log("Disconnected");
      setWalletAddress(undefined);
    }
  };

  const connectWalletButton = () => (
    <button
      className="cta-button connect-wallet-button"
      onClick={connectWallet}
    >
      <img src={phantomLogo} className="wallet-logo" alt="logo" />
      <span className="wallet-text">conectar carteira</span>
    </button>
  );

  const disconnectWalletButton = () => (
    <button
      className="cta-button connect-wallet-button"
      onClick={disconnectWallet}
    >
      <img src={phantomLogo} className="wallet-logo" alt="logo" />
      <span className="wallet-text">sair</span>
    </button>
  );

  useEffect(() => {
    const onLoad = async () => {
      await walletAlreadyConnected();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  if (walletIsConnected) {
    return disconnectWalletButton();
  }

  return connectWalletButton();
};

export default Wallet;
