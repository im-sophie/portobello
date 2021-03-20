<template>
    <div :class="classRendered">
        <div v-if="icon" class="pb-hamburger-menu-item-icon material-icons" v-text="icon"></div>
        <div class="pb-hamburger-menu-item-text" v-text="text"></div>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            require: true,
            validator(value) {
                return value.length > 0;
            }
        },
        text: {
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
            return `pb-hamburger-menu-item ${this.classes.join(" ")}`;
        }
    }
};
</script>
