<script setup lang="ts">
  // import { onMounted } from "vue";
  import Header from '../components/sections/header.vue';
  import Banner from '../components/sections/banner.vue';
  import AboutUs from '../components/sections/about-us.vue';
  import Services from '../components/sections/services.vue';
  import Features from '../components/sections/features.vue';
  import Testimonials from '../components/sections/testimonials.vue';
  import Download from '../components/sections/download.vue';
  import Footer from '../components/sections/footer.vue';

  // onMounted(() => {
  //   const script = document.createElement("script");
  //   script.src = "";
  //   script.async = true;
  //   document.body.appendChild(script);
  // });

</script>

<template>
  <!-- <router-view /> -->
  <div class="">
    <Header/>
    <Banner/>  
    <AboutUs/>
    <Services/>
    <Features/>
    <Testimonials/>
    <Download/>
    <Footer/>
  </div>
  
</template>

<style>
* {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
}
/* scroll-smooth m-0 p-0 */
</style>
