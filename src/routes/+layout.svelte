<script lang="ts">
	import { onMount } from 'svelte';
    import type { LayoutData } from './$types';
    import jQuery from 'jquery';
	import { page } from '$app/stores';
    export let data: LayoutData;
    import '../styles/app.css';
    import '../styles/responsive.css';
    let preloader: HTMLDivElement;
    onMount(() => {
        // preloader
        window.$ = jQuery
        window.jQuery = jQuery
        jQuery(preloader).delay(0).fadeOut();
        window.readyFn(jQuery);
    })
</script>

<svelte:head>
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png">
    <!-- Place favicon.ico in the root directory -->
    <title>10G FORCE</title>
    <meta name="description" content="The Best simple blockchain networking platform">
    <!-- CSS here -->
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/css/animate.min.css">
    <link rel="stylesheet" href="/assets/css/magnific-popup.css">
    <link rel="stylesheet" href="/assets/css/fontawesome-all.min.css">
    <link rel="stylesheet" href="/assets/css/uicons-solid-rounded.css">
    <link rel="stylesheet" href="/assets/css/jquery.mCustomScrollbar.min.css">
    <link rel="stylesheet" href="/assets/css/flaticon.css">
    <link rel="stylesheet" href="/assets/css/slick.css">
    <link rel="stylesheet" href="/assets/css/default.css">
    <!-- <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/css/responsive.css"> -->
    <script defer src="assets/js/vendor/jquery-3.6.0.min.js"></script>
    <script defer src="assets/js/bootstrap.min.js"></script>
    <script defer src="assets/js/isotope.pkgd.min.js"></script>
    <script defer src="assets/js/imagesloaded.pkgd.min.js"></script>
    <script defer src="assets/js/jquery.magnific-popup.min.js"></script>
    <script defer src="assets/js/jquery.mCustomScrollbar.concat.min.js"></script>
    <script defer src="assets/js/slick.min.js"></script>
    <script defer src="assets/js/wow.min.js"></script>
    <script defer src="assets/js/plugins.js"></script>
    <script defer src="assets/js/main.js"></script>
</svelte:head>
<div class="">
    <div id="preloader" bind:this={preloader}>
        <div id="loading-center">
            <div id="loading-center-absolute">
                <div class="object" id="object_one"></div>
                <div class="object" id="object_two"></div>
                <div class="object" id="object_three"></div>
            </div>
        </div>
    </div>
    <button class="scroll-top scroll-to-target" data-target="html">
        <i class="fas fa-angle-up"></i>
    </button>
    <div class="sidebar">
        <div class="sidebar-logo mb-25">
            <a href="/"><img src="assets/img/logo/logo.png" alt=""></a>
        </div>
        <div class="sidebar-icon">
            <ul>
                <li class="active"><a href="/"><i class="fi-sr-apps-delete"></i></a></li>
                <li><a href="nft-live-bidding.html"><i class="fi-sr-book-alt"></i></a></li>
                <li><a href="collections.html"><i class="fi-sr-butterfly"></i></a></li>
                <li><a href="create-item.html"><i class="fi-sr-camping"></i></a></li>
                <li><a href="category.html"><i class="fi-sr-crown"></i></a></li>
                <li><a href="author-profile.html"><i class="fi-sr-settings"></i></a></li>
                <li><a href="#0" id="btnFullscreen"><i class="fi-sr-tool-marquee"></i></a></li>
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
                            <div class="mobile-nav-toggler"><i class="fas fa-bars"></i></div>
                            <div class="menu-wrap">
                                <nav class="menu-nav">
                                    <div class="logo"><a href="/"><img src="/assets/img/logo/naftmak.svg" alt=""></a></div>
                                    <div class="header-form">
                                        <form action="#">
                                            <button><i class="flaticon-search"></i></button>
                                            <input type="text" placeholder="Search Artwork">
                                        </form>
                                    </div>
                                    <div class="navbar-wrap main-menu d-none d-lg-flex">
                                        <ul class="navigation">
                                            <li class="active"><a href="/">Home</a></li>
                                            <li><a href="nft-marketplace.html">Explore</a></li>
                                            <li><a href="/guides">Guides</a></li>
                                        </ul>
                                    </div>
                                    <div class="header-action d-none d-md-block">
                                        <ul>
                                            <li class="header-btn"><a href="/auth" class="btn">GET IN!</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <!-- Mobile Menu  -->
                            <div class="mobile-menu">
                                <nav class="menu-box">
                                    <div class="close-btn"><i class="fas fa-times"></i></div>
                                    <div class="nav-logo"><a href="/"><img src="/assets/img/logo/logo.png" alt=""></a>
                                    </div>
                                    <div class="menu-outer">
                                        <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                                    </div>
                                    <div class="social-links">
                                        <ul class="clearfix">
                                            <li><a href="#0"><span class="fab fa-twitter"></span></a></li>
                                            <li><a href="#0"><span class="fab fa-facebook-f"></span></a></li>
                                            <li><a href="#0"><span class="fab fa-pinterest-p"></span></a></li>
                                            <li><a href="#0"><span class="fab fa-instagram"></span></a></li>
                                            <li><a href="#0"><span class="fab fa-youtube"></span></a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div class="menu-backdrop"></div>
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
        <slot/>


        </main>
        <!-- main-area-end -->


    <!-- footer-area -->
    <footer>
        <div class="copyright-wrap">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="copyright-text">
                            <p>All rights reserved © 2022 by <a href="#0">ThemeBeyond</a></p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <ul class="copyright-link-list">
                            <li><a href="login-register.html">Privacy Policy</a></li>
                            <li><a href="login-register.html">Terms And Condition</a></li>
                            <li><a href="login-register.html">Contact Us</a></li>
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
        padding: 160px 0 140px !important;
    }
</style>