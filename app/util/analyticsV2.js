const generateOpt = name => ({ category: name });

export const ANALYTICS_EVENTS_V2 = {
	// Approval
	APPROVAL_STARTED: generateOpt('Approval Started'),
	APPROVAL_COMPLETED: generateOpt('Approval Completed'),
	APPROVAL_CANCELLED: generateOpt('Approval Cancelled'),
	APPROVAL_PERMISSION_UPDATED: generateOpt('Approval Permission Updated'),
	// Fee changed
	GAS_FEE_CHANGED: generateOpt('Gas Fee Changed'),
	// Dapp Transaction
	DAPP_TRANSACTION_STARTED: generateOpt('Dapp Transaction Started'),
	DAPP_TRANSACTION_COMPLETED: generateOpt('Dapp Transaction Completed'),
	DAPP_TRANSACTION_CANCELLED: generateOpt('Dapp Transaction Cancelled'),
	// Sign request
	SIGN_REQUEST_STARTED: generateOpt('Sign Request Started'),
	SIGN_REQUEST_COMPLETED: generateOpt('Sign Request Completed'),
	SIGN_REQUEST_CANCELLED: generateOpt('Sign Request Cancelled'),
	// Connect request
	CONNECT_REQUEST_STARTED: generateOpt('Connect Request Started'),
	CONNECT_REQUEST_COMPLETED: generateOpt('Connect Request Completed'),
	CONNECT_REQUEST_CANCELLED: generateOpt('Connect Request Cancelled'),
	// Wallet
	WALLET_OPENED: generateOpt('Wallet Opened'),
	TOKEN_ADDED: generateOpt('Token Added'),
	COLLECTIBLE_ADDED: generateOpt('Collectible Added'),
	// Network
	NETWORK_SWITCHED: generateOpt('Network Switched'),
	NETWORK_ADDED: generateOpt('Network Added'),
	NETWORK_REQUESTED: generateOpt('Network Requested'),
	NETWORK_REQUEST_REJECTED: generateOpt('Network Request Rejected'),
	NETWORK_SWITCH_REJECTED: generateOpt('Network Switch Rejected'),
	// Send transaction
	SEND_TRANSACTION_STARTED: generateOpt('Send Transaction Started'),
	SEND_TRANSACTION_COMPLETED: generateOpt('Send Transaction Completed')
};

export default ANALYTICS_EVENTS_V2;