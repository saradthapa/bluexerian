<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<section>
	<slot />
</section>
<Footer />

<style lang="postcss">
	:global(body) {
		background-image: url('img/bg-tablet-pattern.svg');
		background-repeat: no-repeat;
		background-size: 800px;
		background-position: 90% -25%;
	}

	:global(#cta) {
		background-image: url('img/bg-simplify-section-desktop.svg');
		background-repeat: no-repeat;
	}

	@media (max-width: 576px) {
		:global(body) {
			background-position: 50px -50px;
			background-size: 500px;
		}

		:global(#cta) {
			background-image: url('img/bg-simplify-section-mobile.svg');
		}
	}
</style>
