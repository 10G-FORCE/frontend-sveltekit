<script lang="ts">
	import type { PageData } from './$types';
	import MetamaskController from '$lib/controllers/MetamaskController';
	import JsonViewer from '$lib/components/JsonViewer.svelte';
	import { onMount } from 'svelte';
	import mmask_svg from '$lib/assets/svgs/metamask.svg';
	import trust_svg from '$lib/assets/svgs/trustwallet.svg';
	import wallet_svg from '$lib/assets/svgs/wallet-connect.svg';
	import idle_svg from '$lib/assets/svgs/cold-idle.svg';
	import pending_svg from '$lib/assets/svgs/pending.svg';
	import error_svg from '$lib/assets/svgs/error.svg';
	import success_svg from '$lib/assets/svgs/success.svg';
	import coldPending_svg from '$lib/assets/svgs/hot-idle.svg';
	import polygon_icon from '$lib/assets/images/icons/polygon.png';
	const { web3store } = MetamaskController;
	const svgs = {
		coldIdle: ``,
		hotIdle: ``,
		pending: ``,
		warning: ``,
		success: ``,
		error: ``
	};
	// 3-pending, 0-idle, 2-error, 1-success
	enum statusType {
		PENDING = 3,
		ERROR = 2,
		SUCCESS = 1,
		IDLE = 0
	}
	enum iconType {
		PENDING = 3,
		ERROR = 2,
		SUCCESS = 1,
		IDLE = 0
	}

	let processState = {
		network_icon: pending_svg,
		connect_icon: coldPending_svg,
	};
	const onChainChanged = (chainId:any) => {
		chainId = parseInt(chainId,16);
		MetamaskController.networkChanged(chainId);
	}

	$: ({ isNetwork,isNetworkError,isMetamask,isTrust,isConnected,isConnectError } = $web3store);
	$: {
		isNetworkError && (processState.network_icon = processState.connect_icon = error_svg);
		!isNetwork && (processState.network_icon = pending_svg);
		isNetwork && (processState.network_icon = success_svg) && (processState.connect_icon = pending_svg);
		isNetwork && isConnected && (processState.connect_icon = success_svg);
	}
    let walletIcon = wallet_svg;
    $:{isMetamask && (walletIcon = mmask_svg);
    isTrust && (walletIcon = trust_svg);}
	export let data: PageData;
	onMount(async () => {
		await MetamaskController.init();
		if ($web3store.isSupportedWallet) {
			window.ethereum.on("chainChanged",onChainChanged)
		}
	});
</script>

<section class="login-welcome-area t10g-top">
	<div class="container">
		<!-- <JsonViewer data={$web3store} /> -->
		<div class="row mt-md-5">
			<div class="col-md-6">
				<div class="another-way-signup">
					<h4 class="title">Connect your wallet, let's get you in!</h4>
					<ul class="another-way-list">
						<li>
							<a href="#0" class="py-2 py-md-3">
								<img class="t10g-sm-icon" src={polygon_icon} alt="" />
								Polygon Network
								<span><img class="t10g-sm-icon" src={processState.network_icon} alt="" /></span>
							</a>
							{#if !isNetwork}
								<div class="mt-2 px3 py-3 d-md-none t10g-auth-info-sm t10g-pending-border text-center">
									{#if !isNetworkError}
                                    <p class="text-white mb-1">
										Click the button below to connect your wallet and proceed.
									</p>
                                    <div class="text-center">
                                        <button class="btn btn-success" on:click={async ()=>{await MetamaskController.switchAddNetwork()}}>switch/add</button>
                                    </div>
                                    {:else}
                                    <p class="text-white mb-1">
										Couldn't connect to your wallet
									</p>
                                    <div class="text-center">
                                        <a class="btn btn-danger" href="/guides">Check</a>
                                    </div>
                                    OR
                                    <div class="text-center">
                                        <button class="btn btn-danger" on:click={async ()=>{await MetamaskController.switchAddNetwork()}}>try again</button>
                                    </div>
                                    {/if}
								</div>
							{/if}
						</li>
						<li>
							<a href="#0" class="py-2 py-md-3">
								<img class="t10g-sm-icon" src={walletIcon} alt="" />

								Connect wallet <span><img class="t10g-sm-icon" src={processState.connect_icon} alt="" /></span>
							</a>
							{#if !isConnected && isNetwork}
								<div class="mt-2 px3 py-3 d-md-none t10g-auth-info-sm t10g-pending-border text-center">
									{#if !isConnectError}
                                    <p class="text-white mb-1">
										Your wallet is not connected, click the button below to connect your wallet.
									</p>
                                    <div class="text-center">
                                        <button class="btn btn-danger" on:click={async ()=>{await MetamaskController.connectWallet()}}>Connect Wallet</button>
                                    </div>
                                    {:else}
                                    <p class="text-white mb-1">
										Couldn't connect you to polygon network, check our guides on how to enable polygon network.
									</p>
                                    <div class="text-center">
                                        <a class="btn btn-danger" href="/guides">Check</a>
                                    </div>
                                    OR
                                    <div class="text-center">
                                        <button class="btn btn-danger" on:click={async ()=>{await MetamaskController.switchAddNetwork()}}>try again</button>
                                    </div>
                                    {/if}
								</div>
							{/if}
						</li>
						<li>
							<a href="#0" class="py-2 py-md-3">
								<img class="t10g-sm-icon" src="/assets/img/icons/nfts_01.png" alt="" />
								Login/Register
								<span>{@html svgs.hotIdle}</span>
							</a>
							<div class="mt-2 d-md-none t10g-auth-info-sm t10g-pending-border" />
						</li>
					</ul>
				</div>
			</div>
			<div class="col-md-6">
				<div class="another-way-signup d-md-block d-none">
					<h4 class="title">10G FORCE</h4>
					<p>Lorem ipsum dolor sit amet.</p>
					<p class="text-info">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque a, ab ratione unde
						debitis illo sint animi optio quasi alias nulla aut aliquid esse nesciunt facilis
						exercitationem qui est labore?
					</p>
				</div>
			</div>
		</div>
		<!-- <div class="row mt-5">
			<div class="col-12">
				<div class="login-welcome-wrap">
					<div class="login-welcome-content">
						<h2 class="title">Need Help?</h2>
						<p>
							The Best simple blockchain networking platform<a href="login-register.html"
								>Here.</a
							>
						</p>
					</div>
					<div class="welcome-rating">
						<img src="/assets/img/icons/three_star.png" alt="" />
					</div>
				</div>
			</div>
		</div> -->
	</div>
</section>
<section class="latest-news-area">
	<div class="container">
		<div class="row">
			<div class="col-md-7">
				<div class="section-title mb-45">
					<h2 class="title">Follow Our Guides <img src="assets/img/icons/title_icon01.png" alt=""></h2>
				</div>
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-xl-4 col-md-6 col-sm-9">
				<div class="latest-news-item">
					<div class="latest-news-thumb">
						<img src="/assets/img/others/top_collection05.jpg" alt="">
					</div>
					<div class="latest-news-content">
						<ul class="latest-news-meta">
							<li><i class="flaticon-user"></i><a href="blog.html">Admin</a></li>
							<li><i class="fi-sr-calendar"></i> Jan 12, 2022</li>
						</ul>
						<h4 class="title"><a href="blog-details.html">How to add polygon to trust wallet</a></h4>
						<a href="blog-details.html" class="btn">read more</a>
					</div>
				</div>
			</div>
			<div class="col-xl-4 col-md-6 col-sm-9">
				<div class="latest-news-item">
					<div class="latest-news-thumb">
						<img src="/assets/img/others/top_collection05.jpg" alt="">
					</div>
					<div class="latest-news-content">
						<ul class="latest-news-meta">
							<li><i class="flaticon-user"></i><a href="blog.html">Admin</a></li>
							<li><i class="fi-sr-calendar"></i> Jan 19, 2022</li>
						</ul>
						<h4 class="title"><a href="blog-details.html">How to add polygon to trust wallet</a></h4>
						<a href="blog-details.html" class="btn">read more</a>
					</div>
				</div>
			</div>
			<div class="col-xl-4 col-md-6 col-sm-9">
				<div class="latest-news-item">
					<div class="latest-news-thumb">
						<img src="/assets/img/others/top_collection05.jpg" alt="">
					</div>
					<div class="latest-news-content">
						<ul class="latest-news-meta">
							<li><i class="flaticon-user"></i><a href="blog.html">Admin</a></li>
							<li><i class="fi-sr-calendar"></i> Jan 19, 2022</li>
						</ul>
						<h4 class="title"><a href="blog-details.html">How to add polygon to trust wallet</a></h4>
						<a href="blog-details.html" class="btn">read more</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.t10g-auth-info-sm {
		min-height: 50px;
	}
	.t10g-pending-border {
		border: 1px solid #302b50;
	}
	:global(.t10g-pending-svg) {
		height: 1.5rem;
		width: 1.5rem;
	}
	:global(.t10g-sm-icon) {
		height: 1.5rem;
		width: 1.5rem;
	}
</style>
