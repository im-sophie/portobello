import Vue from "vue";
import App from "../vue/App.vue";

import "typeface-roboto";
import "material-icons";

import "../scss/index.scss";

document.addEventListener("DOMContentLoaded", () => {
    let divApp = document.createElement("div");
    divApp.setAttribute("id", "app");
    document.body.append(divApp);

    new Vue({
        el: "#app",
        render: (h) => h(App)
    });
});
