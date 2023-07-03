<script setup lang="ts">

const props = defineProps(['item']);

</script>

<template>
    <li>
        <a :href=props.item.url class="no-underline block my-2 mx-0"> 
            <!-- @click.prevent="props.item.onClick" -->
            <div class="flex items-center px-6 py-1 gap-8">
                <p class="p-2 rounded-2xl text-black no-underline hover:underline hover:text-brand-dark">
                    {{ props.item.title }}
                </p>
            </div>
        </a>
    </li>

</template>

<style scoped></style>