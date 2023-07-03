<script setup lang="ts">
    import { Ref, ref } from "vue";

    type Data = Ref<{
        id: number,
        title: string,
        description: string
    }[]>

    const features: Data = ref([
        {
            id: 0, 
            title: "Daily Notifications On How To Carry Out Farm Activities", 
            description: "Get daily notifications on your daily farm activities from the comfort of your home, we make farming very easy and modernized for you so you can get the best harvest possible."
        },
        {
            id: 1, 
            title: "Speaking And Chatting With Top Farm Consultants", 
            description: "Speak and chat with the best consultants you will find around the globe about your farming problems and get quick solutions on how to make your farming experience better."
        },
        {
            id: 2, 
            title: "Join Farm Community And Speak With Other Farmers", 
            description: "Get the chance to join numerous farm communities where you can meet different farmers and meet farmers close to you and also talk about the latest trends in the agricultural industry."
        }
    ])
</script>

<template>
    <section id="features" class="bg-white flex flex-col w-full md:flex-row p-8 xl:py-20 xl:px-24 3xl:px-80 4xl:px-4sl 5xl:px-4tl">
        <div class="pt-5 xl:pt-10"> 
            <h1 class="text-brand-light font-medium text-4xl mb-10">What Features We offer</h1>  
            <ul class="list-none w-full xl:w-600">
                <li v-for="feat in features" :key="feat.id" class="flex gap-3 mb-7">
                    <img src="/src/assets/images/svgs/icons/tick-square.svg" class="flex self-start"/>
                    <div class="md:w-4/5 text-justify">
                        <h3 class="font-semibold text-black">{{ feat.title }}</h3>
                        <p class="text-grey">{{ feat.description }}</p>
                    </div>
                </li>
            </ul>     
        </div>
        <div class="flex justify-center items-center w-full xl:w-1/2">
            <img src="/src/assets/images/pngs/mockups/features-img.png" class="w-48 2xs:w-60 h-auto md:w-80 md:h-auto">
        </div>
    </section>
</template>

<style scoped></style>