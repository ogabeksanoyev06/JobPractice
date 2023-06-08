<template>
  <div class="auth">
    <div class="auth__column">
      <div class="auth__wrap">
        <div class="auth__header w-100">
          <div
            class="d-flex flex-column align-center"
            :class="isMobile ? 'mb-20' : 'mb-30'"
          >
            <router-link to="/" class="logo mb-10 d-flex">
              <img
                src="https://hemis.tsue.uz/static/crop/2/3/250_250_90_2315835180.png"
                alt="logo"
              />
            </router-link>
            <AppText
              size="16"
              line-height="20"
              weight="700"
              class="text-center mb-10"
            >
              Toshkent davlat iqtisodiyot universiteti
            </AppText>
            <div class="auth__footer">
              <AppText size="14" line-height="17" class="text-center">
                Tizimga kirish orqali barcha imkoniyatlardan foydalish huquqiga
                ega bo'lasiz
              </AppText>
            </div>
          </div>
        </div>

        <RouterView />

        <!-- <div class="auth__footer">
          <AppText
            size="14"
            line-height="17"
            :class="isDesktopSmall ? 'text-center' : ''"
          >
            Copyright © 2023 Online platforma
          </AppText>
        </div> -->
      </div>
    </div>
    <!-- <notifications group="admin" position="top right" :width="350" /> -->
  </div>
</template>

<script>
import "../../public/sass/pages/auth.scss";

export default {
  name: "AppAuth",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
