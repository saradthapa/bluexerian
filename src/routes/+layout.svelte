<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from "$lib/components/Header.svelte";
</script>

<Header/>
<section>
	<slot/>
</section>
<Footer/>