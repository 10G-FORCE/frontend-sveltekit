<script lang="ts">
	import { onMount } from 'svelte';
    import jQuery from 'jquery';
    let countdown: HTMLElement;
    onMount(() => {
        // countdown
        // window.readyFn(jQuery);
    })
</script>
<main>

    <div class="banner-bg">
        <!-- banner-area -->
        <div class="banner-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-8">
                        <div class="banner-content">
                            <h2 class="title">Buy and sell digital art <br> <span>NFT</span> collection</h2>
                            <p>Everything you need to build, host, scale amazing dapps free by creating account today</p>
                            <a href="login-register.html" class="banner-btn">Let’s get started <i class="fi-sr-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- banner-area-end -->

        <!-- top-seller-area -->
        <div class="top-seller-area">
            <div class="container">
                <div class="top-seller-wrap">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title mb-40">
                                <h2 class="title">Top Seller <img src="/assets/img/icons/title_icon01.png" alt=""></h2>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="top-seller-item">
                                <div class="top-seller-img">
                                    <img src="/assets/img/others/top-seller-img.jpg" alt="">
                                </div>
                                <div class="top-seller-content">
                                    <h5 class="title"><a href="author-profile.html">Alan walker</a></h5>
                                    <p>885.5 <span>Eth</span></p>
                                    <ul class="icon">
                                        <li><a href="collections.html"><i class="fi-sr-pharmacy"></i></a></li>
                                        <li><a href="login-register.html"><i class="fi-sr-share"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="top-seller-item">
                                <div class="top-seller-img">
                                    <img src="/assets/img/others/top-seller-img02.jpg" alt="">
                                </div>
                                <div class="top-seller-content">
                                    <h5 class="title"><a href="author-profile.html">Mazanov Sky</a></h5>
                                    <p>885.5 <span>Eth</span></p>
                                    <ul class="icon">
                                        <li><a href="collections.html"><i class="fi-sr-pharmacy"></i></a></li>
                                        <li><a href="login-register.html"><i class="fi-sr-share"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="top-seller-item">
                                <div class="top-seller-img">
                                    <img src="/assets/img/others/top-seller-img03.jpg" alt="">
                                </div>
                                <div class="top-seller-content">
                                    <h5 class="title"><a href="author-profile.html">Alvin Nov</a></h5>
                                    <p>885.5 <span>Eth</span></p>
                                    <ul class="icon">
                                        <li><a href="collections.html"><i class="fi-sr-pharmacy"></i></a></li>
                                        <li><a href="login-register.html"><i class="fi-sr-share"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="top-seller-item">
                                <div class="top-seller-img">
                                    <img src="/assets/img/others/top-seller-img04.jpg" alt="">
                                </div>
                                <div class="top-seller-content">
                                    <h5 class="title"><a href="author-profile.html">Jimmy Dom</a></h5>
                                    <p>885.5 <span>Eth</span></p>
                                    <ul class="icon">
                                        <li><a href="collections.html"><i class="fi-sr-pharmacy"></i></a></li>
                                        <li><a href="login-register.html"><i class="fi-sr-share"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- top-seller-area-end -->
    </div>

    <div class="area-bg">
        <!-- week-features-area -->
        <!-- sell-nfts-area -->
        <section class="sell-nfts-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title mb-45">
                            <h2 class="title">Create And Sell Your NFTs <img src="/assets/img/icons/title_icon03.png" alt=""></h2>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="sell-nfts-item">
                            <img src="/assets/img/icons/nfts_01.png" alt="" class="icon">
                            <span class="step-count">go step 1</span>
                            <h5 class="title">Create And Sell</h5>
                            <p>Wallet that is functional for NFT purchasing. You have Coinbase account at this point.</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="sell-nfts-item">
                            <img src="/assets/img/icons/nfts_02.png" alt="" class="icon">
                            <span class="step-count">go step 2</span>
                            <h5 class="title">Create Collection</h5>
                            <p>Wallet that is functional for NFT purchasing. You have Coinbase account at this point.</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="sell-nfts-item">
                            <img src="/assets/img/icons/nfts_03.png" alt="" class="icon">
                            <span class="step-count">go step 3</span>
                            <h5 class="title">Add Your NFTs</h5>
                            <p>Wallet that is functional for NFT purchasing. You have Coinbase account at this point.</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="sell-nfts-item">
                            <img src="/assets/img/icons/nfts_04.png" alt="" class="icon">
                            <span class="step-count">go step 4</span>
                            <h5 class="title">List Them For Sale</h5>
                            <p>Wallet that is functional for NFT purchasing. You have Coinbase account at this point.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- sell-nfts-area-end -->
    </div>

    <!-- latest-news -->
    <section class="latest-news-area">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <div class="section-title mb-45">
                        <h2 class="title">Resources <img src="/assets/img/icons/title_icon01.png" alt=""></h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-4 col-md-6 col-sm-9">
                    <div class="latest-news-item">
                        <div class="latest-news-thumb">
                            <img src="/assets/img/blog/news_thumb01.png" alt="">
                        </div>
                        <div class="latest-news-content">
                            <ul class="latest-news-meta">
                                <li><i class="flaticon-user"></i><a href="blog.html">Admin</a></li>
                                <li><i class="fi-sr-calendar"></i> Jan 12, 2022</li>
                            </ul>
                            <h4 class="title"><a href="blog-details.html">Top 5 Most Popular NFT Games world most powerful ?</a></h4>
                            <a href="blog-details.html" class="btn">read more</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 col-sm-9">
                    <div class="latest-news-item">
                        <div class="latest-news-thumb">
                            <img src="/assets/img/blog/news_thumb02.png" alt="">
                        </div>
                        <div class="latest-news-content">
                            <ul class="latest-news-meta">
                                <li><i class="flaticon-user"></i><a href="blog.html">Admin</a></li>
                                <li><i class="fi-sr-calendar"></i> Jan 19, 2022</li>
                            </ul>
                            <h4 class="title"><a href="blog-details.html">NFTs, rare digital items worlds crypto collectibles</a></h4>
                            <a href="blog-details.html" class="btn">read more</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 col-sm-9">
                    <div class="latest-news-item">
                        <div class="latest-news-thumb">
                            <img src="/assets/img/blog/news_thumb03.png" alt="">
                        </div>
                        <div class="latest-news-content">
                            <ul class="latest-news-meta">
                                <li><i class="flaticon-user"></i><a href="blog.html">Admin</a></li>
                                <li><i class="fi-sr-calendar"></i> Jan 19, 2022</li>
                            </ul>
                            <h4 class="title"><a href="blog-details.html">Crypto enthusiasts on a single platform to create</a></h4>
                            <a href="blog-details.html" class="btn">read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- latest-news-end -->

    <!-- design-ways-area -->
    <section class="design-ways-area">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                    <div class="design-ways-item">
                        <div class="overlay-icon"><i class="flaticon-download"></i></div>
                        <div class="icon"><i class="flaticon-download"></i></div>
                        <div class="content">
                            <h3 class="title">Free</h3>
                            <p>Only two download</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                    <div class="design-ways-item">
                        <div class="overlay-icon"><i class="flaticon-download-1"></i></div>
                        <div class="icon"><i class="flaticon-download-1"></i></div>
                        <div class="content">
                            <h3 class="title">Unlimited</h3>
                            <p>Personal & commercial use</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                    <div class="design-ways-item">
                        <div class="overlay-icon"><i class="flaticon-help"></i></div>
                        <div class="icon"><i class="flaticon-help"></i></div>
                        <div class="content">
                            <h3 class="title">Support</h3>
                            <p>You can download</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                    <div class="design-ways-item">
                        <div class="overlay-icon"><i class="flaticon-repairing-service"></i></div>
                        <div class="icon"><i class="flaticon-repairing-service"></i></div>
                        <div class="content">
                            <h3 class="title">Private</h3>
                            <p>Personal data collection</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- design-ways-area-end -->

    <!-- testimonial-area -->
    <section class="testimonial--area">
        <div class="container">
            <div class="testimonial-shape-wrap">
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-9 col-md-10">
                        <div class="testimonial-active">
                            <div class="testimonial--item text-center">
                                <div class="testimonial-rating">
                                    <img src="/assets/img/others/star.png" alt="">
                                </div>
                                <div class="testimonial--content">
                                    <p>“ What even is an NFT? NFT stands for non-fungible token, which basically means that it's one kind digital asset that belongs to you and you only. The most popular NFTs right include artwork and music, include videos and even tweets “</p>
                                    <div class="testimonial--avatar--info">
                                        <h5 class="title">Alexandra Pilot</h5>
                                        <a href="contact.html" class="see-all">See All Reviews</a>
                                    </div>
                                </div>
                            </div>
                            <div class="testimonial--item text-center">
                                <div class="testimonial-rating">
                                    <img src="/assets/img/others/star.png" alt="">
                                </div>
                                <div class="testimonial--content">
                                    <p>“ What even is an NFT? NFT stands for non-fungible token, which basically means that it's one kind digital asset that belongs to you and you only. The most popular NFTs right include artwork and music, include videos and even tweets “</p>
                                    <div class="testimonial--avatar--info">
                                        <h5 class="title">Alexandra Pilot</h5>
                                        <a href="contact.html" class="see-all">See All Reviews</a>
                                    </div>
                                </div>
                            </div>
                            <div class="testimonial--item text-center">
                                <div class="testimonial-rating">
                                    <img src="/assets/img/others/star.png" alt="">
                                </div>
                                <div class="testimonial--content">
                                    <p>“ What even is an NFT? NFT stands for non-fungible token, which basically means that it's one kind digital asset that belongs to you and you only. The most popular NFTs right include artwork and music, include videos and even tweets “</p>
                                    <div class="testimonial--avatar--info">
                                        <h5 class="title">Alexandra Pilot</h5>
                                        <a href="contact.html" class="see-all">See All Reviews</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- testimonial-area-end -->

</main>
