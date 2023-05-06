<template>
  <div class="home-page">
    <!-- <div class="preview main-header" data-aos="fade-up" data-aos-duration="500">
      <div class="container">
        <div class="preview_content">
          <h1 itemprop="name" class="preview_content-title">
            <div class="logo-box">
              <img class="logotip" src="/svg/logo.svg" />
            </div>
          </h1>
        </div>
      </div>
      <div class="preview_shadow">
        <div :class="!isMobile ? 'preview-img' : 'preview-imgMob'">
          <video class="preview-video" autoplay loop muted playsinline>
            <source
              src="@/assets/video/video_2023-05-01_20-57-51.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div> -->
    <!-- <HeroBanner /> -->
    <div class="container">
      <Organizations />
      <NewVacanse />
      <News />
      <Questions />
      <FacultyJob />
    </div>
  </div>
</template>

<script>
import News from "@/components/pages/News.vue";
import Organizations from "@/components/pages/Organizations.vue";
import Questions from "@/components/pages/Questions.vue";
import NewVacanse from "@/components/pages/NewVacance.vue";
import FacultyJob from "@/components/pages/FacultyJob.vue";

// import HeroBanner from "@/components/pages/HeroBanner.vue";
export default {
  name: "AppHome",
  components: { News, Organizations, Questions, NewVacanse, FacultyJob },
  data() {
    return {};
  },
};
</script>

<style>

</style>
