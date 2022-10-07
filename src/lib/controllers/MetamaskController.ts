import { writable } from "svelte/store"

const config = {
    NETWORK:8001
}
const messageType = {
    NOT_INSTALLED: "Metamask not installed",
    LOADING: "loading",
    LOADED: "loaded",
    ERROR: "Internal server error",
}
const baseState={
    isWrongNetwork:false,
    isLocked:false,
    message:messageType.LOADING,
    isMetamask:false,
}
class MetamaskController{
    store:any;
    // hasMetamask:boolean;
    #appStore = writable({
        ...baseState
    });
    constructor(){
        this.store = {
            subscribe:this.#appStore.subscribe
        }
    }
    async init() {
        const {ethereum} = window
        console.log("ETH", ethereum);
        
        const hasMetamask = Boolean(ethereum && ethereum.isMetaMask);
        if (!hasMetamask) {
            return this.#appStore.set({...baseState,message:messageType.NOT_INSTALLED});
        }

        try {
            await ethereum.request({method: "eth_requestAccounts"})
        } catch (error) {
            
        }
    }
}

export default new MetamaskController();