import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppText from "./components/shared-components/AppText";
import "../public/sass/main.scss";
import "./plugins/media/media-mixin";
import "./plugins/directives/click-outside";
import "./plugins/mixins/mixin";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import api from "./service/apiService";
import Notifications from "vue-notification";
import velocity from "velocity-animate";
import Moment from "vue-moment";

Vue.config.productionTip = false;
Vue.component("AppText", AppText);
Vue.use(Notifications, { velocity });
Vue.use(Moment);
Vue.use(api);
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
