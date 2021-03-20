<template>
    <div :class="classRendered">
        <div v-if="title" class="pb-tab-bar-title" v-text="title"></div>
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            require: true,
            validator(value) {
                return value.length > 0;
            }
        },
        classes: {
            type: Array,
            default() {
                return [];
            },
            validator(value) {
                return value.every(i => typeof i === "string" && i.length > 0);
            }
        }
    },
    computed: {
        classRendered() {
            return `pb-tab-bar ${this.classes.join(" ")}`;
        }
    }
};
</script>
