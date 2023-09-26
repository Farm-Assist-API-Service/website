<script setup lang="ts">
    import Accordion from '../accordion.vue';
</script>

<template>
    <section id="services" class="bg-grey-light p-8 xl:py-20 xl:px-24 3xl:px-80 4xl:px-4sl 5xl:px-4tl min-h-700 h-full lg:h-900">
        <h3 class="text-3xl lg:text-2xl text-black text-center font-medium">Why Farm Assist?</h3>
        <main class="flex flex-col lg:flex-row justify-around mt-16 lg:mt-8">
            <div class="w-full xl:w-1/2 max-h-425 lg:max-h-675">
                <img src="../../assets/images/pngs/people/male-farmers.png" class="w-60 md:w-72 lg:w-80 xl:w-400 absolute lg:relative z-20 left-24 xxs:left-36 xs:left-48 md:left-28 xl:left-20 lg:top-16 xl:top-12" alt="Two Rarmers"/>
                <div class="block w-60 md:w-72 xl:w-400 h-72 md:h-3sl lg:h-[22rem] xl:h-4sl relative left-20 xs:left-32 md:left-28 lg:left-40 xl:left-28 bottom-6 lg:bottom-3sl xl:bottom-4sl m-0 bg-transparent z-10 border border-solid border-brand-light"></div>

                <img src="../../assets/images/pngs/people/woman-002.jpg" class="w-60 md:w-72 xl:w-400 relative z-40 bottom-16 xs:bottom-20 md:bottom-32 lg:bottom-3sl xl:bottom-6xl right-[-2rem] sm:left-[23rem] md:left-[22rem] lg:left-6 xl:left-[-2rem] md:right-8" alt="Female Farm Consultant"/>
                <div class="block w-60 md:w-72 xl:w-96 h-40 md:h-48 xl:h-64 relative z-30 bottom-60 xs:bottom-64 md:bottom-[22rem] lg:bottom-5sl xl:bottom-5tl left-2 xxs:left-0 xs:left-4 sm:left-3sl md:left-96 lg:left-12 bg-transparent border border-solid border-brand xl:left-4 "></div>
            </div>
            <div class="md:my-10 w-full xl:w-525">
                <p class="text-base text-black">Agricultural Modernization</p>
                <p class="text-4xl sm:text-5xl lg:text-4xl font-light text-black md:w-4/5">
                    Providing You With The Means To Become A 
                    <b class="font-light text-brand">Modern Day</b> 
                    Farmer.
                </p>
                <p class="my-2 mx-0 w-full md:w-500 text-grey">Farm Assist is set up as a handy virtual assistant, providing step-by-step in depth advice on farm development</p>
                <Accordion />
                <div class="flex justify-start gap-6">
                    <a target="_blank" href="https://drive.google.com/u/0/uc?id=1-7ZK79KH4FSmJBj3umfmF6o4fXp5Fc_Y&export=download" class="text-brand-dark no-underline hover:underline">
                        <img src="../../assets/images/pngs/download/play-store.png" class="w-40"/>
                    </a>
                    <a href="#" class="text-brand-dark no-underline hover:underline">
                        <img src="../../assets/images/pngs/download/app-store.png" class="w-40"/>
                    </a>
                </div>
            </div>
        </main>
    </section>
</template>

<style scoped></style>