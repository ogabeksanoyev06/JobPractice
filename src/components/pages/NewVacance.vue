<template>
  <div class="section py-30">
    <div class="section__top mb-30" data-aos="fade-right">
      <div>
        <app-text
          :size="isMobile ? 18 : 24"
          :line-height="isMobile ? 28 : 36"
          weight="700"
        >
          Yangi vakansiyalar
        </app-text>
        <app-text size="14" line-height="18" weight="500" class="color-text">
          Imkoniyatni qo‘ldan boy bermang
        </app-text>
      </div>

      <div class="section__top-details">
        <router-link class="section__top-link" to="/news">
          <span> Barcha vakansiyalar</span>
        </router-link>
      </div>
    </div>
    <div class="vacancy__body">
      <SmallVacancyCard
        v-for="(item, index) in 9"
        :key="item"
        data-aos="zoom-in-up"
        :data-aos-delay="index * 50"
        data-aos-duration="20000"
      />
    </div>
  </div>
</template>
<script>
import SmallVacancyCard from "../shared-components/SmallVacancyCard.vue";
export default {
  name: "NewVacancy",
  components: { SmallVacancyCard },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.vacancy__body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}
@media (max-width: 1020px) {
  .vacancy__body {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 767px) {
  .vacancy__body {
    grid-template-columns: 1fr;
  }
}
</style>
