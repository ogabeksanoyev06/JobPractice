<template>
  <div class="header">
    <header
      :class="{
        header__shadow: $route.path !== '/',
      }"
    >
      <!-- <div class="header__top">
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
      </div> -->
      <div class="container">
        <div class="header__inner">
          <div class="header__left">
            <div
              class="hamburger__menu"
              @click="showNavigationDrawer"
              v-if="isDesktopSmall"
            >
              <img src="/icons/hamburger.svg" alt="" />
            </div>
            <router-link to="/" class="logo" v-if="!isDesktopSmall">
              <img src="/svg/logo.svg" alt="logo" />
            </router-link>
            <ul class="header__menu" v-if="!isDesktopSmall">
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
          <router-link to="/" class="logo" v-if="isDesktopSmall">
            <img src="/svg/logo.svg" alt="logo" />
          </router-link>
          <div class="header__right">
            <AppButton
              theme="main"
              :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
              :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
              class="header__register"
              :class="isMobileMedium ? 'mr-10' : 'mr-20'"
              v-if="!isDesktopSmall"
              :height="isMobileMedium ? '40' : '50'"
            >
              Vakansiya joylash
            </AppButton>
            <div class="header__auth" v-if="userIsLoggedOn">
              <AppButton
                theme="secondary"
                @click="$router.push({ path: '/sign-in' })"
                :sides="isMobileSmall ? 20 : isMobile ? 20 : 30"
                class="header__login"
                :height="isMobileMedium ? '40' : '50'"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.96484 11.4712C7.41934 11.4541 7.80169 11.8086 7.81885 12.2631C7.85753 13.2877 7.91186 14.0356 7.96527 14.5718C8.01787 15.0998 8.33665 15.4175 8.78101 15.4718C9.30498 15.5359 10.0441 15.5883 11.0584 15.5883C12.0728 15.5883 12.8119 15.5359 13.3359 15.4718C13.78 15.4175 14.099 15.0997 14.1516 14.5715C14.2507 13.5762 14.3525 11.8567 14.3525 9.00006C14.3525 6.14339 14.2507 4.42388 14.1516 3.42862C14.099 2.90045 13.78 2.5826 13.3359 2.5283C12.8119 2.46425 12.0728 2.41183 11.0584 2.41183C10.0441 2.41183 9.30498 2.46425 8.78101 2.5283C8.33665 2.58262 8.01787 2.90033 7.96527 3.42837C7.91186 3.96455 7.85753 4.71239 7.81885 5.73701C7.80169 6.19151 7.41934 6.54605 6.96484 6.52889C6.51034 6.51173 6.1558 6.12938 6.17296 5.67488C6.21266 4.6232 6.26895 3.841 6.32632 3.2651C6.44694 2.05437 7.29106 1.05111 8.58116 0.89341C9.18169 0.820001 9.98852 0.76477 11.0584 0.76477C12.1284 0.76477 12.9352 0.820004 13.5357 0.893418C14.826 1.05114 15.6699 2.05487 15.7905 3.26536C15.8967 4.33121 15.9996 6.10822 15.9996 9.00006C15.9996 11.8919 15.8967 13.6689 15.7905 14.7348C15.6699 15.9453 14.826 16.949 13.5357 17.1067C12.9352 17.1801 12.1284 17.2354 11.0584 17.2354C9.98852 17.2354 9.18169 17.1801 8.58116 17.1067C7.29106 16.949 6.44694 15.9457 6.32632 14.735C6.26895 14.1591 6.21266 13.3769 6.17296 12.3252C6.1558 11.8707 6.51034 11.4884 6.96484 11.4712Z"
                    fill="#DFE6F4"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.24109 11.3001C8.91949 11.6217 8.91949 12.1431 9.24109 12.4647C9.5627 12.7864 10.0841 12.7864 10.4057 12.4647L13.2881 9.58239C13.6097 9.26078 13.6097 8.73935 13.2881 8.41775L10.4057 5.5354C10.0841 5.21379 9.5627 5.21379 9.24109 5.5354C8.91949 5.857 8.91949 6.37843 9.24109 6.70004L10.7176 8.17654H2.82342C2.3686 8.17654 1.99989 8.54525 1.99989 9.00007C1.99989 9.45489 2.3686 9.8236 2.82342 9.8236L10.7176 9.8236L9.24109 11.3001Z"
                    fill="#DFE6F4"
                  ></path>
                </svg>
              </AppButton>
              <!-- <AppButton
                theme="secondary"
                @click="$router.push({ path: '/sign-up' })"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
                class="header__register"
                :class="isMobileMedium ? 'mr-10' : 'mr-20'"
                v-if="!isMobileSmall"
              >
                Ro'yxatdan o'tish
              </AppButton> -->
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
          link: "/about",
          title: "Biz haqimizda",
        },
        {
          id: 1,
          link: "/vacancies/vacancy-list",
          title: "Ish qidirish",
        },
        // {
        //   id: 2,
        //   link: "vacance",
        //   title: "Vakansiya joylash",
        // },
        {
          id: 3,
          link: "/practice",
          title: "Amaliyot o'tash",
        },
        {
          id: 4,
          link: "/club",
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
