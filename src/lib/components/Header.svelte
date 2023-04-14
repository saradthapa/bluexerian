<script lang="ts">
    import { fly,fade } from 'svelte/transition';
    import {open} from "../stores/navigation";
    import logo from '$lib/img/logo.svg';
    import AnimatedHamburger from "./AnimatedHamburger.svelte";
    export let click = ():void => {
        $open = !$open;
    }

</script>
<header>
    <!-- Navbar -->
    <div class="w-screen relative container mx-auto p-6">
        <!-- Flex container -->
        <div class="flex items-center justify-between">
            <!-- Logo -->
            <div class="pt-2">
                <img src={logo} alt="logo"/>
            </div>
            <!-- Menu Items -->
            <div class="hidden space-x-6 md:flex">
                <a href="#" class="text-2xl font-bold hover:text-royalBlue">Home</a>
                <a href="#" class="text-2xl font-bold hover:text-royalBlue">Events</a>
                <a href="#" class="text-2xl font-bold hover:text-royalBlue">Gallery</a>
                <a href="#" class="text-2xl font-bold hover:text-royalBlue">About</a>
                <a href="#" class="text-2xl font-bold hover:text-royalBlue">Contact</a>
            </div>
            <!-- Button -->
            <a
                    href="#"
                    class="hidden p-3 px-6 pt-2 text-white bg-royalBlue rounded-full baseline hover:bg-classicBlue md:flex"
                    md:block
            >Get Started</a>
            <AnimatedHamburger {click}/>
        </div>
        {#if $open}
            <nav class="absolute z-10 sm:w-full flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:self-center left-6 right-6 drop-shadow-md text-2xl" transition:fly={{y: -300, duration: 500}} >
                <a href="#" class="text-royalBlue hover:text-classicBlue" on:click={click}>Home</a>
                <a href="#" class="text-royalBlue hover:text-classicBlue" on:click={click}>Events</a>
                <a href="#" class="text-royalBlue hover:text-classicBlue" on:click={click}>Gallery</a>
                <a href="#" class="text-royalBlue hover:text-classicBlue" on:click={click}>About</a>
                <a href="#" class="text-royalBlue hover:text-classicBlue" on:click={click}>Contact</a>
            </nav>
        {/if}
    </div>
</header>
