<script lang="ts">
    import logoWhite from '$lib/img/logo-white.svg';
    import iconFacebook from '$lib/img/icon-facebook.svg';
    import iconTwitter from '$lib/img/icon-twitter.svg';
    import iconYoutube from '$lib/img/icon-youtube.svg';
    import iconInstagram from '$lib/img/icon-instagram.svg';
</script>
<!-- Footer -->
<footer class="bg-veryDarkBlue">
    <div class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <!-- Logo and Social Links-->
        <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">

            <div class="mx-auto my-6 text-center text-white md:hidden">
                Copyright &copy; 2023, All Rights Reserved
            </div>
            <!-- Logo -->
            <div>
                <img src={logoWhite} class="h-8" alt=""/>
            </div>
            <!-- Social Links Container-->
            <div class="flex justify-center space-x-4">
                <!-- Link 1-->
                <a href="#">
                    <img src={iconFacebook} alt="" class="h-8"/>
                </a>
                <a href="#">
                    <img src={iconTwitter} alt="" class="h-8"/>
                </a>
                <a href="#">
                    <img src={iconYoutube} alt="" class="h-8"/>
                </a>
                <a href="#">
                    <img src={iconInstagram} alt="" class="h-8"/>
                </a>
            </div>
        </div>
        <!-- List Container -->
        <div class="flex justify-around space-x-32">
            <div class="flex flex-col space-y-3 text-white">
                <a href="#" class="hover:text-brighRed">Home</a>
                <a href="#" class="hover:text-brighRed">Events</a>
                <a href="#" class="hover:text-brighRed">Gallery</a>
                <a href="#" class="hover:text-brighRed">About</a>
            </div>
            <div class="flex flex-col space-y-3 text-white">
                <a href="#" class="hover:text-brighRed">Contact</a>
                <a href="#" class="hover:text-brighRed">Privacy Policy</a>
            </div>
        </div>
        <!-- Input Container -->
        <div class="flex flex-col justify-between">
            <form>
                <div class="flex space-x-3">
                    <input
                            type="text"
                            class="flex-1 px-4 rounded-full focus:outline-none"
                            placeholder="Updated in your inbox"
                    />
                    <button
                            class="px-6 py-2 text-white rounded-full bg-royalBlue hover:bg-classicBlue focus:outline-none"
                    >
                        Go
                    </button>
                </div>
            </form>
            <div class="hidden text-white md:block">
                Copyright &copy; 2023, All Rights Reserved
            </div>
        </div>
    </div>
</footer>