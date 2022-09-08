export default function Modal(props) {
    
    if(!props.openModal) return null
    
    return (
        <div onClick={props.onClose} className="overlay" >
            
            <div onClick={e => e.stopPropagation()} className="modal">
                <a onClick={props.onClose} className="modal--close">✖</a>
                <h3>Sign In</h3>
                <p>Select your method to sign in, you could add another way.</p>
                <span>Connect Wallet</span>
                <div className="modal--btn">
                    <a onClick={props.connectWalletHandler}><img src="https://fellaz.xyz/img/icon-sign-metamask.ecf6606d.svg" alt="" /> MetaMask</a>
                    <a href="#"><img src="https://fellaz.xyz/img/icon-sign-walletconnect.4458141a.svg" alt="" /> WalletConnect</a>
                </div>
                <span>Sign In with</span>
                <div className="modal--btn">
                    <a href="#"><img src="https://fellaz.xyz/img/icon-sign-google.420f0f1b.svg" alt="" /> Google</a>
                    <a href="#"><img src="https://fellaz.xyz/img/icon-sign-twitter.06ae8f5b.svg" alt="" /> Twitter</a>
                </div>
                <span>By connecting, you agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.</span>
            </div>
        </div>
        
    )
}