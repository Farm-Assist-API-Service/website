<script setup lang="ts">
    import { Ref, ref } from 'vue'

    import Menu from '../menu.vue';
    import { menu } from '../../data/l-page-conent';

    let collapsed: Ref = ref(false);

    const showMenu = (e: any) => {
      collapsed.value = e
    }
</script>

<template>
  <header id="header" class="flex justify-between p-8 xl:py-6 xl:px-24 3xl:px-80 4xl:px-4sl 5xl:px-4tl bg-white"> 
    <span class="inline w-1/5">
      <a href="/" class="">
        <img src="../../assets/farmassist.png" class="min-w-44 max-w-[200px] w-44 py-3 px-0" alt="Farm Assist Logo" />
      </a>
    </span>
    <div class="flex">
      <ul class="hidden lg:flex flex-row pl-16 mt-4" >
        <li class="list-none mr-0 lg:mr-8 xl:mr-12 2xl:mr-16" v-for="({id, title, url}, index) in menu.items" :key="id">
          <a :href="url" class="text-black no-underline hover:underline hover:text-brand-dark">{{ title }}</a>
        </li>
      </ul>
      <div class="flex gap-6">
        <router-link to="/request-access" class="items-center">
          <button class="hidden md:block text-base p-4 w-52 text-center rounded-2.5xl text-white bg-brand-dark hover:bg-transparent hover:text-brand-dark hover:border-2 hover:border-solid hover:border-brand-dark">
            Request early access
          </button>
        </router-link>
        <button class="flex lg:hidden w-16 h-16 border-none bg-transparent mx-0 items-center" @click="showMenu(true)">
          <img src="../../assets/images/svgs/icons/menu.svg" :class="['w-10', collapsed ? 'opacity-5' : 'opacity-100']" />
        </button>
      </div>
    </div>
  </header>
  <Menu :collapsed="collapsed" />
  <!-- <Menu /> -->
</template>

<style scoped></style>
