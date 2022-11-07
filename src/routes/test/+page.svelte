<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    const connectMetamask = async () => {
        await window.ethereum.enable();
    }
</script>
<div class="mh-50">
    <button type="button" on:click={connectMetamask}>Connect</button>
</div>