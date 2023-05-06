<template>
  <div class="header">
    <header
      :class="{
        header__shadow: $route.path !== '/',
      }"
    >
      <div class="header__top">
        <div class="container">
          <ul class="langs">
            <li>
              <span>Ўзбекча</span>
            </li>
            <li>
              <span>O‘zbekcha</span>
            </li>
            <li>
              <span>Русский</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="container">
        <div class="header__inner">
          <div class="header__left">
            <div
              class="hamburger__menu"
              @click="showNavigationDrawer"
              v-if="isDesktopMedium"
            >
              <img src="/icons/hamburger.svg" alt="" />
            </div>
            <router-link to="/" class="logo" v-if="!isMobileSmall">
              <img src="/svg/logo.svg" alt="logo" />
            </router-link>
            <ul class="header__menu" v-if="!isDesktopMedium">
              <li
                class="header__menu-item"
                v-for="(item, index) in menu"
                :key="index"
              >
                <router-link :to="item.link" class="header__menu-link">
                  {{ item.title }}
                </router-link>
              </li>
            </ul>
          </div>
          <router-link to="/" class="logo" v-if="isMobileSmall">
            <img src="/svg/logo.svg" alt="logo" />
          </router-link>
          <div class="header__right">
            <div class="header__auth" v-if="userIsLoggedOn">
              <AppButton
                theme="main"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
                class="header__login mr-10"
                v-if="!isMobileSmall"
                @click="$router.push({ path: '/sign-in' })"
              >
                Kirish
              </AppButton>
              <AppButton
                theme="secondary"
                @click="$router.push({ path: '/sign-up' })"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
                class="header__register"
                :class="isMobileMedium ? 'mr-10' : 'mr-20'"
                v-if="!isMobileSmall"
              >
                Ro'yxatdan o'tish
              </AppButton>
            </div>
          </div>
        </div>
        <div class="header__top-mobile"></div>
      </div>
    </header>
  </div>
</template>
<script>
import "./header.scss";
import AppButton from "../../../shared-components/AppButton";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "AppHeader",
  components: { AppButton },
  data() {
    return {
      menu: [
        {
          id: 0,
          link: "about",
          title: "Biz haqimizda",
        },
        {
          id: 1,
          link: "job",
          title: "Ish qidirish",
        },
        {
          id: 2,
          link: "vacance",
          title: "Vakansiya joylash",
        },
        {
          id: 3,
          link: "practice",
          title: "Amaliyot o'tash",
        },
        {
          id: 4,
          link: "/jk",
          title: "Bitruvchilar klubi",
        },
      ],
      navigationDrawer: false,
    };
  },
  methods: {
    ...mapMutations(["setAccessToken", "setIsLoggedOn"]),
    setToken() {
      this.setAccessToken(null);
      this.setIsLoggedOn(false);
    },
    showNavigationDrawer() {
      this.navigationDrawer = !this.navigationDrawer;
    },
  },
  computed: {
    ...mapGetters(["isLoggedOn"]),
  },
  watch: {
    async isLoggedOn() {
      if (this.userIsLoggedOn) {
        // await this.getUser();
      }
    },
  },
  async mounted() {
    if (this.userIsLoggedOn) {
      // await this.getUser();
    }
  },
};
</script>
<style lang="scss" scoped></style>
