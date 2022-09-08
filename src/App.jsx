import './App.css'
import Artists from './components/Artists'
import Building from './components/Building'
import CallToAction from './components/CallToAction'
import Companies from './components/Companies'
import Navbar from './components/Navbar'
import Recommended from './components/Recommended'
import Tickets from './components/Tickets'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
import Modal from './components/Modal'
import { useState } from 'react'
import WalletCard from './components/WalletCard'
import {ethers} from 'ethers'

function App() {
  const [openModal, setOpenModal] = useState(false)

  const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	// const [connButtonText, setConnButtonText] = useState('Connect Wallet');

  function onOpen() {
    setOpenModal(true)
  }

  function onClose() {
    setOpenModal(false)
  }



  const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
				getAccountBalance(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}


	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);

  return (
    <>
      <Navbar onOpen={onOpen}/>
      <Welcome />
      <Modal openModal={openModal} onClose={onClose} connectWalletHandler={connectWalletHandler} />
      <WalletCard 
        defaultAccount={defaultAccount}
        userBalance={userBalance}
        errorMessage={errorMessage}
      />
      {/* <Companies />
      <Tickets />
      <Artists />
      <Recommended />
      <Building />
      <CallToAction />
      <Footer /> */}
    </>
    
  )
}

export default App
