<template>
    <div
        :class="classRendered"
        :style="styleRendered"
        v-click-outside="onClickOutside">
        <div
            class="pb-hamburger-menu-icon material-icons"
            :style="styleRenderedIconExpand"
            @click="onClick">
            menu
        </div>
        <div
            class="pb-hamburger-menu-icon pb-hamburger-menu-icon-close material-icons"
            :style="styleRenderedIconCollapse"
            @click="onClick">
            close
        </div>
        <slot />
    </div>
</template>

<script>
import core from "../../../scss/core.scss";

export default {
    props: {
        classes: {
            type: Array,
            default() {
                return [];
            },
            validator(value) {
                return value.every(i => typeof i === "string" && i.length > 0);
            }
        },
        widthExpanded: {
            type: Number,
            required: true,
            validator(value) {
                return value > 0;
            }
        }
    },
    data() {
        return {
            expanded: false
        };
    },
    computed: {
        _widthCollapsed() {
            return this._heightCollapsed;
        },
        _heightCollapsed() {
            return Number.parseInt(core.hamburgerMenuHeaderHeight);
        },
        _heightExpanded() {
            return Number.parseInt(core.hamburgerMenuHeaderHeight) +
                Number.parseInt(core.hamburgerMenuPaddingSize) + (
                Number.parseInt(core.hamburgerMenuItemHeight) * this.$slots.default
                    .filter(i => i.tag?.indexOf("pb-hamburger-menu-item") >= 0)
                    .length
            );
        },
        classRendered() {
            return `pb-hamburger-menu ${this.classes.join(" ")}`;
        },
        styleRendered() {
            return `height: ${this.expanded ? this._heightExpanded : this._heightCollapsed}pt; width: ${this.expanded ? this.widthExpanded : this._widthCollapsed}pt;`;
        },
        styleRenderedIconExpand() {
            return `opacity: ${this.expanded ? 0 : 1};`;
        },
        styleRenderedIconCollapse() {
            return `opacity: ${this.expanded ? 1 : 0};`;
        }
    },
    methods: {
        onClick() {
            this.expanded = !this.expanded;
        },
        onClickOutside() {
            this.expanded = false;
        }
    },
    mounted() {
        window.addEventListener("keyup", (event) => {
            if (event.key === "Escape") {
                this.expanded = false;
            }
        });
    }
};
</script>
