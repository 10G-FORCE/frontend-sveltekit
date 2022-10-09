<script lang="ts">
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';
	import jQuery from 'jquery';
	import { page } from '$app/stores';
	export let data: LayoutData;
	import '../styles/app.css';
	import '../styles/responsive.css';
	let preloader: HTMLDivElement;
	import MetamaskController from '$lib/controllers/MetamaskController';
	const { web3store } = MetamaskController;
	const onChainChanged = (chainId: any) => {
		chainId = parseInt(chainId, 16);
		MetamaskController.networkChanged(chainId);
	};
	const onAccountsChanged = (accounts: any) => {
		console.log(accounts);
		MetamaskController.init();
	};
	// preloader
	onMount(async () => {
		window.$ = jQuery;
		window.jQuery = jQuery;
		jQuery(preloader).delay(0).fadeOut();
		await MetamaskController.init();
		if ($web3store.isSupportedWallet) {
            window.ethereum.on('chainChanged', onChainChanged);
			window.ethereum.on('accountsChanged', onAccountsChanged);
		}
        window.readyFn(jQuery);
	});
</script>

<svelte:head>
	<link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png" />
	<!-- Place favicon.ico in the root directory -->
	<title>10G FORCE</title>
	<meta name="description" content="The Best simple blockchain networking platform" />
	<!-- CSS here -->
	<link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
	<link rel="stylesheet" href="/assets/css/animate.min.css" />
	<link rel="stylesheet" href="/assets/css/magnific-popup.css" />
	<link rel="stylesheet" href="/assets/css/fontawesome-all.min.css" />
	<link rel="stylesheet" href="/assets/css/uicons-solid-rounded.css" />
	<link rel="stylesheet" href="/assets/css/jquery.mCustomScrollbar.min.css" />
	<link rel="stylesheet" href="/assets/css/flaticon.css" />
	<link rel="stylesheet" href="/assets/css/slick.css" />
	<link rel="stylesheet" href="/assets/css/default.css" />
	<!-- <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/css/responsive.css"> -->
	<script defer src="/assets/js/vendor/jquery-3.6.0.min.js"></script>
	<script defer src="/assets/js/bootstrap.min.js"></script>
	<script defer src="/assets/js/isotope.pkgd.min.js"></script>
	<script defer src="/assets/js/imagesloaded.pkgd.min.js"></script>
	<script defer src="/assets/js/jquery.magnific-popup.min.js"></script>
	<script defer src="/assets/js/jquery.mCustomScrollbar.concat.min.js"></script>
	<script defer src="/assets/js/slick.min.js"></script>
	<script defer src="/assets/js/wow.min.js"></script>
	<script defer src="/assets/js/plugins.js"></script>
	<script defer src="/assets/js/main.js"></script>
</svelte:head>
<div class="">
	<div id="preloader" bind:this={preloader}>
		<div id="loading-center">
			<div id="loading-center-absolute">
				<div class="object" id="object_one" />
				<div class="object" id="object_two" />
				<div class="object" id="object_three" />
			</div>
		</div>
	</div>
	<button class="scroll-top scroll-to-target" data-target="html">
		<i class="fas fa-angle-up" />
	</button>
	<div class="sidebar">
		<div class="sidebar-logo mb-25">
			<a href="/"><img src="" alt="10G" /></a>
		</div>
		<div class="sidebar-icon">
			<ul>
				<li class="active"><a href="/"><i class="fi-sr-apps-delete" /></a></li>
				<li><a href="/"><i class="fi-sr-book-alt" /></a></li>
				<li><a href="/"><i class="fi-sr-butterfly" /></a></li>
				<li><a href="/"><i class="fi-sr-camping" /></a></li>
				<li><a href="/"><i class="fi-sr-crown" /></a></li>
				<li><a href="/"><i class="fi-sr-settings" /></a></li>
				<li><a href="#0" id="btnFullscreen"><i class="fi-sr-tool-marquee" /></a></li>
			</ul>
		</div>
	</div>
	<div class="main-content">
		<!-- header-area -->
		<header>
			<div class="menu-area">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="mobile-nav-toggler"><i class="fas fa-bars" /></div>
							<div class="menu-wrap">
								<nav class="menu-nav">
									<div class="logo"><a href="/"><img src="" alt="10GLOGO" /></a></div>
									<div class="header-form">
										<form action="#">
											<button><i class="flaticon-search" /></button>
											<input type="text" placeholder="Search Artwork" />
										</form>
									</div>
									<div class="navbar-wrap main-menu d-none d-lg-flex">
										<ul class="navigation">
											<li class="active"><a href="/">Home</a></li>
											<!-- <li><a href="/">Explore</a></li> -->
											<li><a href="/guides">Guides</a></li>
											<li><a href="/auth">LOGIN</a></li>
											<li><a href="/auth">SIGNUP</a></li>
										</ul>
									</div>
									<!-- <div class="header-action d-none d-md-block">
                                        <ul>
                                            <li class="header-btn"><a href="/auth" class="btn">GET IN!</a></li>
                                        </ul>
                                    </div> -->
								</nav>
							</div>
							<!-- Mobile Menu  -->
							<div class="mobile-menu">
								<nav class="menu-box">
									<div class="close-btn"><i class="fas fa-times" /></div>
									<div class="nav-logo">
										<a href="/"><img src="/assets/img/logo/logo.png" alt="" /></a>
									</div>
									<div class="menu-outer">
										<!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
									</div>
									<div class="social-links">
										<ul class="clearfix">
											<li><a href="#0"><span class="fab fa-twitter" /></a></li>
											<li><a href="#0"><span class="fab fa-facebook-f" /></a></li>
											<li><a href="#0"><span class="fab fa-pinterest-p" /></a></li>
											<li><a href="#0"><span class="fab fa-instagram" /></a></li>
											<li><a href="#0"><span class="fab fa-youtube" /></a></li>
										</ul>
									</div>
								</nav>
							</div>
							<div class="menu-backdrop" />
							<!-- End Mobile Menu -->
						</div>
					</div>
				</div>
			</div>
		</header>
		<!-- header-area-end -->

		<!-- main-area -->
		<main>
			<!-- breadcrumb-area -->
			{#if $page.data.breadcrumb}
				<section class="breadcrumb-area breadcrumb-bg">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-lg-6 col-md-8">
								<div class="breadcrumb-content text-center">
									<h3 class="title">Latest News</h3>
								</div>
							</div>
						</div>
					</div>
				</section>
			{/if}
			<slot />
		</main>
		<!-- main-area-end -->

		<!-- footer-area -->
		<footer>
			<div class="copyright-wrap">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-md-6">
							<div class="copyright-text">
								<p>All rights reserved © 2022 by <a href="#0">T10G Network</a></p>
							</div>
						</div>
						<div class="col-md-6">
							<ul class="copyright-link-list">
								<li><a href="/">Privacy Policy</a></li>
								<li><a href="/">Terms And Condition</a></li>
								<li><a href="/">Contact Us</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
		<!-- footer-area-end -->
	</div>
</div>

<style>
	:global(.t10g-top) {
		padding: 160px 0 80px !important;
	}
</style>
