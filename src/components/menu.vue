<script setup lang="ts">
    import { Ref, ref } from 'vue'
    import MenuItem from './menu-item.vue';
    import { menu } from '../data/l-page-conent';

    const props = defineProps(['collapsed']);

    const hideMenu = ref(() => {
        !props.collapsed
        location.reload();
    })

</script>

<template>

    <aside :class="['bg-white h-screen fixed right-0 top-0 py-8', props.collapsed ? 'w-64' : 'hidden']" class="z-50">

        <div class="flex mx-auto justify-end">
            <button class="w-16 h-16 border-none bg-transparent mx-0 block" @click="hideMenu()">
                <img src="../assets/images/svgs/icons/back.svg" class="w-10 rotate-180" />       
            </button>
        </div>

        <div class="">
            <ul class="list-none p-0 m-0">
                <MenuItem v-for="part in menu.items" :key="part.id" :item="part" />
            </ul>
            <router-link to="/request-access" class="items-center">
                <button class="block md:hidden text-[0.875rem] m-5 py-4 px-3 w-44 text-center rounded-2.5xl text-white bg-brand-dark hover:bg-transparent hover:text-brand-dark hover:border-2 hover:border-solid hover:border-brand-dark">
                    Request early access
                </button>
            </router-link>
        </div>

    </aside>

</template>

<style scoped></style>