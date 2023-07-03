<script setup lang="ts">
    import { ref } from 'vue';

    const farming = ref([
        {
            id: 1, 
            url: "/src/assets/images/pngs/farm/crop-farming.png", 
            type: "Crop Farming"
        },
        {
            id: 2, 
            url: "/src/assets/images/pngs/farm/fish-farming.png", 
            type: "Fish Farming"},
        {
            id: 3, 
            url: "/src/assets/images/pngs/farm/poultry-farming.png", 
            type: "Poultry Farming"
        }
    ])
    
</script>

<template>
    <section id="about-us" class="flex flex-col-reverse lg:flex-row gap-3 bg-white p-8 xl:py-24 xl:px-24 3xl:px-80 4xl:px-4sl 5xl:px-4tl">
        <div class="h-96 md:h-450 lg:h-auto">
            <img src="/src/assets/images/pngs/mockups/about-us.png" class="relative bottom-16 lg:bottom-0 w-96 md:w-450 lg:w-full mt-7 md:my-4 mx-auto h-auto"/>
        </div>
        <div class="w-full lg:mt-16">
            <span class="highlight text-brand flex before:w-6 before:h-0.5 before:relative before:top-3 before:mr-3 before:bg-brand">
                <p class="text-brand">About us</p></span>
            <h2 class="text-3xl xl:text-5xl text-black font-normal">
                The best app to help follow up your 
                <b class="font-normal text-brand">farm activities</b>
            </h2>
            <p class="leading-relaxed text-base mt-2 mb-10 text-grey w-full lg:w-550"> 
                Farm Assist is a 21st century ultra-modern business solution for the agricbusiness space in Nigeria leveraging on technological advancement. 
                <a href="" class="text-brand-dark no-underline hover:underline">Read more</a>
                <transition-group tag="ul" name="slide" class="w-full sm:w-600 flex list-none gap-5 sm:gap-9 md:justify-around lg:justify-start md:mx-auto lg:mx-0 md:gap-0 lg:gap-5" appear>
                    <li v-for="farm in farming" :key="farm.id">
                        <img :src="farm.url" :alt="farm.type" class="mt-5 w-24 xs:w-28 2xs:w-40 xl:w-44"/>
                        <p class="text-black mt-2">{{ farm.type }}</p> 
                    </li>
                </transition-group>
            </p>
        </div>
    </section>
</template>

<style scoped>
    .slide-enter-from {
        opacity: 0;
        transform: translateY(160px)
    }
    .slide-enter-active {
        transition: transform 1.4s ease, opacity 1.8s ease;
    }
</style>