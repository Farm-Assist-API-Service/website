<script setup lang="ts">
    import { Ref, ref } from "vue";
    import ThreeStar from '/src/assets/images/svgs/icons/three-star.svg';
    import FourStar from '/src/assets/images/svgs/icons/four-star.svg';
    import FiveStar from '/src/assets/images/svgs/icons/five-star.svg';

    type Feedback = Ref<{
        id: number,
        rating: number,
        review: string,
        name: string,
        occupation: string
    }[]>

    const reviews: Feedback = ref([
        {
            id: 0,
            rating: 5,
            review: "“Farm assist have been a great help in my daily farming activities, they have made farming relatively easy and straight forward. Also, organic food produced far away and shipped is more likely to require a certification label to promote customer trust, which I easily get with Farm Assist.”",
            name: "Melissa Johnathan ",
            occupation: "Crop Farmer"
        },
        // {
        //     id: 1, 
        //     rating: 4,
        //     review: "“I can easy get answers by contacting a consultant or communicating with other farmers, I can proudly say I have become a better farmer because of Farm Assist. Farm Assist is doing an amazing job at being both a consultancy provider and sponsorship boost.”",
        //     name: "Aaron Peterson",
        //     occupation: "Poultry Farmer"
        // },
        // {
        //     id: 2, 
        //     rating: 3,
        //     review: "“Farm Assist is doing an amazing job at being both a consultancy provider and sponsorship boost. The app is easy to use, while it has more helpful features than I though I needed.”",
        //     name: "Festus Gbenga",
        //     occupation: "Agriculturist"
        // }
    ])

    const rateChecker = ref((rate: number) => {
        if (rate == 3) {
            return ThreeStar
        } else if (rate == 4) {
            return FourStar
        } else{
            return FiveStar
        }
    })
</script>

<template>
    <div id="testimonial-carousel" class="w-full md:w-500 lg:w-575 pt-4 pb-14 md:py-14 px-11">
        <div class="py-5 px-0 xs:px-5 md:p-0 md:w-400 lg:w-450 xl:w-5/5" v-for="item in reviews" :key="item.id">
            <h4 class="text-xl mb-1 text-black">Review</h4>
            <img :src="rateChecker(item.rating)" class="" />
            <p class="my-5 mx-0 text-grey">{{ item.review }}</p>
            <h4 class="text-black font-medium">{{ item.name }}</h4>
            <h4 class="font-light text-grey">{{ item.occupation }}</h4>
        </div>
        <div class="flex justify-center gap-1 mt-4">
            <div class="">
                <!-- <img src="../assets/images/svgs/icons/arrow-square-left-green.svg" /> -->
                <img src="../assets/images/svgs/icons/arrow-square-left.svg" />
            </div>
            <div class="">
                <!-- <img src="../assets/images/svgs/icons/arrow-square-right.svg" /> -->
                <img src="../assets/images/svgs/icons/arrow-square-right-green.svg" />
            </div>
            
        </div>
    </div>
</template>

<style scoped></style>