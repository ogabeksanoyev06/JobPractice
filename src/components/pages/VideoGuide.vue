<template>
  <section class="section py-30">
    <div
      class="section__top mb-30"
      data-aos="fade-up"
      style="text-align: center; justify-content: center"
    >
      <div>
        <app-text
          :size="isMobile ? 18 : 24"
          :line-height="isMobile ? 28 : 36"
          weight="700"
        >
          VIDEOQO‘LLANMA
        </app-text>
        <app-text size="14" line-height="18" weight="500" class="color-text">
          Tizimdan foydalanish bo'yicha videoqo'llanma
        </app-text>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "VideoQo'llanma",
  components: {},
  data() {
    return {};
  },
};
</script>
