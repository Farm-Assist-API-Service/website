<script lang="ts">
    import { defineComponent, ref } from 'vue/composition-api';

    interface Props {
    icon: string
    }

    export default defineComponent<Props>({
        name: 'Icon',
        props: {
            icon: {
                type: String as () => string,
                required: true,
            },
        },
        setup(props: { icon: any; }) {
            const loadedIcon = ref(null);
            // loads the icon dynamically
            // assumes you have the ability to reference SVG as a component
            import(`assets/images/svgs/icons/${props.icon}.svg`)
                .then((module) => {
                    loadedIcon.value = module.default;
                })
                .catch(console.error.bind(console));

            return { props, loadedIcon };
        },
    });
</script>

<template>
    <transition name="fade" mode="out-in">
      <div v-if="!loadedIcon" class="w-4">&nbsp;</div>
      <component :is="loadedIcon" v-else v-once class="icon-wrapper" :name="icon" v-bind="$attrs" v-on="$listeners" />
    </transition>
</template>
  
