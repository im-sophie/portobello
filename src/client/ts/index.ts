import Vue from "vue";
const vClickOutside = require("v-click-outside");
import App from "../vue/App.vue";
// import VerticalTabItem from "../vue/Core/VerticalTabBar/VerticalTabItem.vue";
import HamburgerMenu from "../vue/Core/HamburgerMenu/HamburgerMenu.vue";
import HamburgerMenuItem from "../vue/Core/HamburgerMenu/HamburgerMenuItem.vue";
import TabBar from "../vue/Core/Tabs/TabBar.vue";
import TabBarItem from "../vue/Core/Tabs/TabBarItem.vue";

import "typeface-roboto";
import "material-icons";

import "../scss/index.scss";

document.addEventListener("DOMContentLoaded", () => {
    let divApp = document.createElement("div");
    divApp.setAttribute("id", "app");
    document.body.append(divApp);

    Vue.use(vClickOutside);

    Vue.component("pb-hamburger-menu", HamburgerMenu);
    Vue.component("pb-hamburger-menu-item", HamburgerMenuItem);
    Vue.component("pb-tab-bar", TabBar);
    Vue.component("pb-tab-bar-item", TabBarItem);

    new Vue({
        el: "#app",
        render: (h) => h(App)
    });
});
