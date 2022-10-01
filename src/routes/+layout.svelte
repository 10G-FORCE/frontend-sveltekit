<script lang="ts">
	import { onMount } from 'svelte';
    import type { LayoutData } from './$types';
    import jQuery from 'jquery';
    export let data: LayoutData;
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
        <link rel="stylesheet" href="/assets/css/style.css">
        <link rel="stylesheet" href="/assets/css/responsive.css">
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
    <!-- <div class="offcanvas-wrapper">
        <div class="menu-trigger"><i class="fi-sr-angle-small-left"></i></div>
        <div class="menu-close"><i class="fi-sr-angle-small-right"></i></div>
        <div class="offcanvas-inner scroll">
            <div class="author-profile text-center mb-30">
                <div class="author-img">
                    <img src="assets/img/others/author_img.png" alt="">
                </div>
                <div class="author-content">
                    <h4 class="title">Author Profile</h4>
                    <p>Super Author</p>
                    <a href="login-register.html" class="btn">Checkout</a>
                </div>
            </div>
            <div class="sidebar-slider text-center mb-25">
                <div class="sidebar-active">
                    <div class="sidebar-img">
                        <a href="market-single.html"><img src="assets/img/others/sidebar_img01.png" alt=""></a>
                    </div>
                    <div class="sidebar-img">
                        <a href="market-single.html"><img src="assets/img/others/sidebar_img02.png" alt=""></a>
                    </div>
                    <div class="sidebar-img">
                        <a href="market-single.html"><img src="assets/img/others/sidebar_img03.png" alt=""></a>
                    </div>
                </div>
            </div>
            <div class="overview">
                <div class="overview-title">
                    <h4 class="title">Overview</h4>
                </div>
                <div class="overview-item-wrap">
                    <div class="overview-item">
                        <div class="overview-icon">
                            <i class="fi-sr-box-alt"></i>
                        </div>
                        <div class="overview-content">
                            <h4 class="title">Open project</h4>
                            <span>820</span>
                        </div>
                        <a href="nft-marketplace.html"><i class=" fi-sr-angle-small-right"></i></a>
                    </div>
                    <div class="overview-item">
                        <div class="overview-icon">
                            <i class="fi-sr-mountains"></i>
                        </div>
                        <div class="overview-content">
                            <h4 class="title">Successful Completed</h4>
                            <span>546</span>
                        </div>
                        <a href="nft-marketplace.html"><i class=" fi-sr-angle-small-right"></i></a>
                    </div>
                    <div class="overview-item">
                        <div class="overview-icon">
                            <i class=" fi-sr-hourglass-end"></i>
                        </div>
                        <div class="overview-content">
                            <h4 class="title">trending</h4>
                            <span>32</span>
                        </div>
                        <a href="nft-marketplace.html"><i class=" fi-sr-angle-small-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="offcanvas-overly"></div> -->
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
                                            <li><a href="/posts">Guides</a></li>
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
    <slot/>
        <!-- main-area-end -->


    <!-- footer-area -->
    <footer>
        <div class="footer-top-wrap">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-xl-3 col-lg-4 col-md-5 col-sm-9">
                        <div class="footer-widget">
                            <div class="footer-logo mb-25">
                                <a href="/"><img src="/assets/img/logo/logo.png" alt=""></a>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus veritatis sequi doloribus fuga.</p>
                            <ul class="footer-social">
                                <li><a href="#0"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#0"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#0"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#0"><i class="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6">
                        <div class="footer-widget">
                            <h4 class="fw-title">Useful Links</h4>
                            <ul class="fw-links">
                                <li><a href="nft-marketplace.html">All NFTs</a></li>
                                <li><a href="login-register.html">How It Works</a></li>
                                <li><a href="create-item.html">Create</a></li>
                                <li><a href="nft-marketplace.html">Explore</a></li>
                                <li><a href="login-register.html">Privacy & Terms</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6">
                        <div class="footer-widget">
                            <h4 class="fw-title">Community</h4>
                            <ul class="fw-links">
                                <li><a href="login-register.html">Help Center</a></li>
                                <li><a href="login-register.html">Partners</a></li>
                                <li><a href="login-register.html">Suggestions</a></li>
                                <li><a href="/posts">Guides</a></li>
                                <li><a href="login-register.html">Newsletter</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="footer-widget">
                            <h4 class="fw-title">Subscribe Us</h4>
                            <form action="#" class="newsletter-form">
                                <input type="email" placeholder="info@youmail.com">
                                <button type="submit"><i class="flaticon-small-rocket-ship-silhouette"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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