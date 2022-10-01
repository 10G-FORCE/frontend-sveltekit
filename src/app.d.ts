// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
/// <reference types="@sveltejs/kit" />

import type { AccessToken, User } from '$lib/interfaces/user.interface';
declare global {
	declare namespace App {
		// interface Locals {}
		// interface PageData {}
		// interface Error {}
		// interface Platform {}
	}
	interface Window {
		$: any;
		jQuery: any;
		readyFn: any;
		runParticles: any;
		closeMobileMenu: any;
		openMobileMenu: any;
		toggleMobileMenu: any;
		QRCode: any;
	}
}
export {};
declare module 'wowjs';
