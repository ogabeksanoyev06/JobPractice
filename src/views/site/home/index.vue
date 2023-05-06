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
.preview {
  width: 100%;
  height: calc(18px + 100vh);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.preview .imgg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.preview_shadow {
  position: absolute;
  z-index: -1;
  top: 0;
  width: 100%;
  filter: brightness(0.5);
}

.preview_shadow .preview-img {
  height: calc(18px + 100vh);
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.preview-video {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.preview_content {
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.main-header .logo-box {
  width: 100%;
  position: relative;
}
.main-header .logotip {
  max-width: calc(19.28571px + 31.80804vw);
  height: calc(31.42857px + 11.38393vw);
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.preview_shadow .preview-imgMob {
  filter: brightness(60%);
  display: block;
  width: 100%;
  height: calc(117.14286px + 114.95536vw);
  -o-object-fit: cover;
  object-fit: cover;
}
@media (max-width: 1024px) {
  .preview {
    height: 350px;
  }
  .preview_shadow .preview-img {
    height: 350px;
  }
}
@media (max-width: 768px) {
  .preview {
    width: 100%;
    height: calc(131.42857px + 110.49107vw);
    min-height: 100%;
  }
  .preview_shadow {
    height: 100%;
    filter: brightness(0.8);
  }
}
</style>
