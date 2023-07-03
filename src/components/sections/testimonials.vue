<script setup lang="ts">
    import Carousel from '../carousel.vue';
</script>

<template>
    <section id="testimonials" class="bg-grey-light px-6 py-8 md:py-16 lg:py-12 md:p-6 xl:py-20 xl:px-24 3xl:px-80 4xl:px-4sl 5xl:px-4tl">
        <h1 class="text-black text-3xl xl:text-4xl font-normal text-center">
            What’s Our Clients Saying About <br>
            <b class="font-normal text-brand-light">Farm Assist</b>
        </h1>
        <div class="flex flex-col md:flex-row mt-6 xl:mt-12">
            <Carousel />
            <div class="w-80 xl:w-450 h-96 md:h-450 my-0 mx-auto md:mx-6 xl:mx-12 bg-[url(/src/assets/images/pngs/people/woman.jpg)] bg-center bg-cover"></div>
        </div>
        
    </section>
</template>

<style scoped></style>