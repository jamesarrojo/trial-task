

const WalletCard = (props) => {



	
	
	return (
		<div className='walletCard'>
		<h4> {"Connection to MetaMask using window.ethereum methods"} </h4>
			<div className='accountDisplay'>
				<h3>Address: {props.defaultAccount}</h3>
			</div>
			<div className='balanceDisplay'>
				<h3>Balance: {props.userBalance}</h3>
			</div>
			{/* {props.errorMessage} */}
		</div>
	);
}

export default WalletCard;