<script setup lang="ts">
    import { Ref, ref } from "vue";

    type Data = Ref<{
        id: number
        title: string,
        description: string,
        isOpen: boolean,
        icon: any,
    }[]>

    let services: Data = ref([
        {
            id: 1,
            title: "Virtual Assistance:", 
            description: "Day to day reminders on daily farm activities to boost your farming skills are available.",
            isOpen: false, 
            icon: '/src/assets/images/svgs/icons/minus-circle.svg'
        },
        {
            id: 2,
            title: " Data Collection & Insights:", 
            description: "Insights are shared by consultants via chats and Farmers have access to the specific kind of consultant they need and a community of other farmers.",
            isOpen: false,
            icon: '/src/assets/images/svgs/icons/minus-circle.svg'
        },
        {
            id: 3,
            title: "Digital Marketplace:", 
            description: "We handle transactions on Farm Assist that involves moving goods to the final consumers.",
            isOpen: false,
            icon: '/src/assets/images/svgs/icons/minus-circle.svg', 
        }
    ])

    const accordionImages = ref({
        open: "/src/assets/images/svgs/icons/plus-circle.svg",
        openActive: "/src/assets/images/svgs/icons/plus-circle-green.svg",
        close: "/src/assets/images/svgs/icons/minus-circle.svg",
        closeActive: "/src/assets/images/svgs/icons/minus-circle-green.svg",
        main: "/src/assets/images/svgs/icons/minus-circle.svg"
    })
</script>

<template>
    <div id="services-carousel" class="md:w-500 mt-9 mx-0 mb-5">
        <div class="my-5 mx-0 h-20 overflow-hidden" v-for="({id, title, description, icon, isOpen}, index) in services" :key="id">
            <div class="flex justify-between">
                <h3 class="text-black font-medium">{{ title }}</h3>
                <!-- <img :src="icon = accordionImages.main" v-if @mouseover="accordionImages.main = accordionImages.closeActive"/> -->
                <img src="/src/assets/images/svgs/icons/minus-circle.svg" />
            </div>
            <p class="text-grey w-11/12">{{ description }}</p>
        </div>
    </div>
</template>

<style scoped></style>