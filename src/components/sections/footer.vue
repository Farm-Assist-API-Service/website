<script setup lang="ts">
    import { Ref, ref } from "vue";
    import { pageLinksFst, pageLinksSnd } from '../../data/l-page-conent';

    const currentYear: Ref = ref(new Date().getFullYear())

    const sociaLinks = ref([
        {
            id: 1,
            icon: "/src/assets/images/pngs/social/linkedin.png",
            link: "https://www.linkedin.com/in/jk-agerland-141a061bb"
        },
        {
            id: 2,
            icon: "/src/assets/images/pngs/social/instagram.png",
            link: "https://instagram.com/_jkagerland?igshid=ZDdkNTZiNTM="
        },
        {
            id: 3,
            icon: "/src/assets/images/pngs/social/twitter.png",
            link: "https://twitter.com/AgerlandJk?t=nwkbXXpscSV-vsggFcnPBg&s=08"
        }, 
    ])
</script>

<template>
    <section id="footer" class="px-6 pt-6 pb-0 xl:pt-20 xl:pb-0 xl:px-24 bg-[#F4F2F2]">
        <div class="flex flex-col lg:flex-row mb-3 xl:mb-12">
            <div class="w-1/2 md:w-1/4 mb-8">
                <a href="/" class="text-brand-dark no-underline">
                    <img src="../../assets/farmassist.png" class="w-44" alt="Vite logo" />
                </a>
            </div>
            <div class="flex flex-col sm:flex-row w-full lg:w-3/4">
                <!-- Features and Company -->
                <div class="flex mb-6 w-full sm:w-1/2">
                    <div class="w-6/12 sm:w-full" v-for="({id, group}) in pageLinksFst" :key="id">
                        <h2 class="text-black text-lg font-medium text-md mb-4">{{ group.name }}</h2>
                        <ul>
                            <li class="mb-2" v-for="({id, name, link}) in group.pages" :key="id" >
                                <a :href="link" class="text-brand-dark no-underline hover:text-brand hover:underline">{{ name }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Help and Legal -->
                <div class="flex w-full sm:w-1/2">
                    <div class="w-6/12 sm:w-full" v-for="({id, group}) in pageLinksSnd" :key="id" >
                        <h2 class="text-black text-lg font-medium text-md mb-4">{{ group.name }}</h2>
                        <ul>
                            <li class="mb-2" v-for="({id, name, link}) in group.pages" :key="id" >
                                <a :href="link" class="text-brand-dark no-underline hover:text-brand hover:underline">{{ name }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[#3C7C43] py-4 px-12 flex flex-col-reverse sm:flex-row justify-between">
            <div class="flex sm:flex-row mx-auto sm:mx-0">
                <a v-for="({id, icon, link}) in sociaLinks" :href="link" :key="id" class="text-brand-dark no-underline">
                    <img :src="icon" alt="social-links" class="w-4 mt-4 sm:mt-0 mr-7"/>
                </a>
            </div>
            <p class="flex text-center text-white mx-auto sm:mx-0 sm:text-left">© 2022 - {{ currentYear }} Farm Assist.&nbsp;</p>
        </div>
        
    </section>
</template>

<style scoped></style>