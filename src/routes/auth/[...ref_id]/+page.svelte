<script lang="ts">
    import type { PageData } from './$types';
    import MetamaskController from '$lib/controllers/MetamaskController';
    import JsonViewer from '$lib/components/JsonViewer.svelte';
	import { onMount } from 'svelte';
    const {store} = MetamaskController;
    const svgs = {
        coldIdle: `<svg class="t10g-pending-svg flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#fff" xmlns="http://www.w3.org/2000/svg"><path stroke-width="1.5" stroke-linecap="round" stroke-linejoin="" d="M12 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM12"></path></svg>`,
        hotIdle: `<svg class="flex-shrink-0 t10g-pending-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" stroke="#59606b"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g></svg>`,
        pending: `<svg class="flex-shrink-0 t10g-pending-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" stroke="var(--purple-color)"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g></svg>`,
        warning: `<svg class="t10g-pending-svg flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#fae054" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM12 7.667v4.334M12 16.333h.012" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
        success: `<svg class="t10g-pending-svg flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#2CFF4E" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="m9 12 2 2 4-4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
        error: `<svg class="t10g-pending-svg flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#E1444D" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM12 7.667v4.334M12 16.333h.012" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
    };
    
    export let data: PageData;
    onMount(async ()=>{
        // await MetamaskController.init()
    });
</script>

    <section class="login-welcome-area t10g-top">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="login-welcome-wrap">
                        <div class="login-welcome-content">
                            <h2 class="title">Welcome to 10G FORCE</h2>
                            <p>The Best simple blockchain networking platform<a href="login-register.html">statistics.</a></p>
                        </div>
                        <div class="welcome-rating">
                            <img src="/assets/img/icons/three_star.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <JsonViewer data={$store}/>
            <div class="row">
                <div class="col-md-6">
                    <div class="another-way-signup">
                        <h4 class="title">Connect your wallet, let's get you in!</h4>
                        <ul class="another-way-list">
                            <li>
                                <a href="#" class="py-2 py-md-3">
                                    <img class="t10g-sm-icon" src="/assets/img/icons/nfts_02.png" alt="">
                                    Connect wallet <span>{@html svgs.pending}</span>
                                </a>
                                <div class="mt-2 d-md-none t10g-auth-info-sm t10g-pending-border"></div>
                            </li>
                            <li>
                                <a href="#" class="py-2 py-md-3">
                                    <img src="/assets/img/icons/signup_icon02.png" alt="">
                                    Polygon Network
                                    <span>{@html svgs.hotIdle}</span>
                                </a>
                                <div class="mt-2 d-md-none t10g-auth-info-sm t10g-pending-border"></div>
                            </li>
                            <li>
                                <a href="#" class="py-2 py-md-3">
                                    <img class="t10g-sm-icon" src="/assets/img/icons/nfts_01.png" alt="">
                                    Login/Register
                                    <span>{@html svgs.hotIdle}</span>
                                </a>
                                <div class="mt-2 d-md-none t10g-auth-info-sm t10g-pending-border"></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="another-way-signup d-md-block d-none">
                        <h4 class="title">10G FORCE</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p class="text-info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque a, ab ratione unde debitis illo sint animi optio quasi alias nulla aut aliquid esse nesciunt facilis exercitationem qui est labore?</p>
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