import { writable } from "svelte/store"

const config = {
    NETWORK: {
        id: 80001,
        add_data: {
            chainId: `0x${(80001).toString(16)}`,
            chainName: 'Mumbai Testnet',
            rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
            blockExplorerUrls: ['https://mumbai.polygonscan.com'],
            nativeCurrency: {
                name: 'Mumbai',
                symbol: 'MATIC', // 2-6 characters long
                decimals: 18,
            },
        }
    }
}
const messageType = {
    NOT_DETECTED: "Web3 not detected",
    LOADING: "loading",
    LOADED: "loaded",
    ERROR: "Internal server error",
}
const baseState = {
    isNetwork: false,
    isNetworkError: false,
    isLocked: false,
    message: messageType.LOADING,
    isMetamask: false,
    isTrust: false,
    isWeb3: false,
    isConnected: false,
    isConnectError: false,
    isSupportedWallet: false,
}
class MetamaskController {
    web3store;
    // hasMetamask:boolean;
    #appStore = writable<typeof baseState>({
        ...baseState
    });
    constructor() {
        this.web3store = {
            subscribe: this.#appStore.subscribe
        }
    }
    async init() {
        const { ethereum } = window
        console.log("ETH", ethereum);

        const isWeb3 = Boolean(ethereum);
        if (!isWeb3) {
            return this.#appStore.set({ ...baseState, message: messageType.NOT_DETECTED });
        }
        const isMetamask = Boolean(ethereum && ethereum.isMetaMask);
        const isTrust = Boolean(ethereum && ethereum.isTrust);
        this.#appStore.update(s => {
            s.isMetamask = isMetamask;
            s.isTrust = isTrust;
            s.isSupportedWallet = isTrust||isMetamask;
            s.isWeb3 = isWeb3;
            s.message = messageType.LOADED;
            s.isNetwork = (ethereum.networkVersion == config.NETWORK.id);
            return s;
        });
    }
    networkChanged(chainId: number) {
        let isNetwork = chainId == config.NETWORK.id;
        let isNetworkError = !(chainId == config.NETWORK.id);
        this.#appStore.update(s => ({
            ...s, isNetwork,isNetworkError
        }))
    }
    switchAddNetwork = async () => {
        const { ethereum } = window;
        if (ethereum.networkVersion != config.NETWORK.id) {
            console.log('ethereum!!!');
            try {
                try {
                    await ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: config.NETWORK.add_data.chainId }],
                    });
                    // this.#appStore.update(s => {
                    //     s.isNetworkError = false;
                    //     s.isNetwork = true;
                    //     return s;
                    // });
                } catch (switchError: any) {
                    if (switchError.code != 4001) {
                        await ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                                config.NETWORK.add_data,
                            ],
                        });
                        // this.#appStore.update(s => {
                        //     s.isNetworkError = false;
                        //     s.isNetwork = true;
                        //     return s;
                        // });
                    }
                }

            } catch (addError) {
                // This error code indicates that the chain has not been added to MetaMask.
                // console.log(switchError.code);
                // if (switchError.code == 4902) {

                // }
                this.#appStore.update(s => {
                    s.isNetworkError = !(ethereum.networkVersion == config.NETWORK.id);
                    s.isNetwork = (ethereum.networkVersion == config.NETWORK.id);
                    return s;
                });
                console.log(addError);
                // handle other "switch" errors
            } finally {
                // const { ethereum } = window;
                // console.log("finally",ethereum.networkVersion);
            }
        }
    }
    async connectWallet() {
        const { ethereum } = window;

        const goodToGo = Boolean(ethereum && (ethereum.isMetaMask || ethereum.isTrust) && (ethereum.networkVersion == config.NETWORK.id));
        if (!goodToGo) {
            // todo: send toast notification
            return this.#appStore.set({ ...baseState, message: messageType.NOT_DETECTED });
        }

        try {
            await ethereum.request({ method: "eth_requestAccounts" })
        } catch (error) {

        }
    }
}

export default new MetamaskController();