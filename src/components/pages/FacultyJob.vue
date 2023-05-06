<template>
  <section class="section py-30">
    <div
      class="section__top mb-30"
      style="text-align: center; justify-content: center"
      data-aos="fade-right"
    >
      <div>
        <app-text
          :size="isMobile ? 18 : 24"
          :line-height="isMobile ? 28 : 36"
          weight="700"
        >
          Vakansiyalar
        </app-text>
        <app-text size="14" line-height="18" weight="500" class="color-text">
          Fakultetlar bo’yicha
        </app-text>
      </div>
    </div>
    <div class="faculty-tabs">
      <el-tabs class="faculty-nav" type="border-card">
        <el-tab-pane label="Raqamli iqtisodiyot ">
          <div class="vacancy__body">
            <SmallVacancyCard
              v-for="(item, index) in 4"
              :key="item"
              data-aos="zoom-in-up"
              :data-aos-delay="index * 50"
              data-aos-duration="20000"
            />
          </div>
        </el-tab-pane>
        <el-tab-pane label="Iqtisodiyot">Config</el-tab-pane>
        <el-tab-pane label="Korporativ boshqaruv">Role</el-tab-pane>
        <el-tab-pane label="Moliya va buxgalteriya">Task</el-tab-pane>
      </el-tabs>
    </div>
  </section>
</template>
<script>
import SmallVacancyCard from "../shared-components/SmallVacancyCard.vue";
export default {
  name: "FacultyJob",
  components: { SmallVacancyCard },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.faculty-tabs {
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.faculty-tabs .el-tabs--border-card {
  border: none !important;
  box-shadow: none !important;
  padding: 4px !important;
}
.faculty-tabs .el-tabs--border-card > .el-tabs__header {
  background-color: #fff !important;
  border-bottom: none !important;
}
.faculty-tabs .el-tabs__nav-wrap {
  background: rgba(197, 212, 240, 0.25) !important;
  border-radius: 10px !important;
}
.faculty-tabs .el-tabs__nav-scroll {
  padding: 10px !important;
}
.faculty-tabs .el-tabs__item {
  padding: 10px 20px !important;
  font-weight: 600 !important;
  font-size: 14px;
  line-height: 16px !important;
  text-transform: uppercase;
  color: #646d80 !important;
  height: auto !important;
  border-radius: 20px;
}
.faculty-tabs
  .el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item.is-active {
  font-weight: 600;
  color: #26292e !important;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  background-color: #fff;
  border-right-color: rgba(197, 212, 240, 0.25);
  border-left-color: rgba(197, 212, 240, 0.25);
}
.vacancy__body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
@media (max-width: 1020px) {
  .vacancy__body {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 767px) {
  .faculty-tabs .el-tabs__item {
    padding: 4px 12px !important;
    font-size: 12px !important;
  }
  .vacancy__body {
    grid-template-columns: 1fr;
  }
}
</style>
