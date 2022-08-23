const walletIsConnected = () => {
    return window.solana.isConnected;
}

const walletPubKey = () => {
    return window.solana.publicKey.toString();
}

export default {
    walletIsConnected,
    walletPubKey
}