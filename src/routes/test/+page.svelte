<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    import {
		accountChainId,
		connected,
		connectMetamask,
		connectWalletConnect,
		disconnect,
		walletAddress
	} from '$lib/stores/provider';
	import { balanceOnBlock } from '$lib/stores/state';
	import { formatEther } from 'ethers/lib/utils';
</script>
<div class="mh-50">
    <button type="button" on:click={connectMetamask}>Connect</button>
</div>