<template>
  <section class="section py-30">
    <div class="container" data-aos="fade-up">
      <app-text
        :size="isMobile ? 18 : 26"
        :line-height="isMobile ? 28 : 36"
        weight="700"
        class="color-main mb-20 text-center"
      >
        Markazning tashkil topishi
      </app-text>
      <app-text
        :size="isMobile ? 14 : 16"
        :line-height="isMobile ? 20 : 26"
        weight="500"
        class="mb-20"
      >
        Toshkent davlat iqtisodiyot universiteti «Akademik faoliyat va
        registrator boshqarmasi (Academic Affairs and Registrar's office)»
        tarkibidagi Karyera markazi O‘zbekistonRespublikasi Prezidentining
        2019-yil 11-iyuldagi «Oliy va o‘rta maxsus ta’lim tizimiga boshqaruvning
        yangi tamoyillarini joriy etish chora- tadbirlari to‘grisida»gi
        PQ-4391-sonli qarori, O‘zbekiston Respublikasi Vazirlar Mahkamasining
        2019-yil 3-dekabrdagi «Oliy ta’lim muassasalarini bosqichma-bosqich
        o‘zini-o‘zi moliyalashtirish tizimiga o‘tkazish to‘g‘risida»gi 967-sonli
        va 2020-yil 31-dekabrdagi «Oliy ta’lim muassasalarida ta’lim jarayonini
        tashkil etish bilan bog‘liq tizimni takomillashtirish chora-tadbirlari
        to‘g‘risida»gi 824-sonli qarorlari hamda oliy va o‘rta maxsus ta’lim
        vazirining 2019-yil 30-dekabrdagi 1202-sonli buyrug‘i bilan tasdiqlangan
        «Toshkent davlat iqtisodiyot universitetining Vasiylik kengashi
        to‘g‘risidagi nizom»ga muvofiq 2021-yil shtatlar jadvalini tuzishda
        universitetning o‘z oldiga qo‘ygan strategiyasi hamda ish unumdorligini
        yanada oshirish va samarali tashkil etish maqsadida yangi tahrirdagi
        «Toshkent davlat iqtisodiyot universitetining tashkiliy tuzilmasi»hamda
        Universitet Vasiylik Kengashiniig 2021-yil 14-yanvardagi 1-sonli
        qaroriga muvofiq tashkil etilgan bo’lib, bevosita Toshkent davlat
        iqtisodiyot universiteti «Akademik faoliyat va registrator boshqarmasi»
        tarkibiga kiradi.
      </app-text>
      <!-- <img
        src="	https://careers.tsue.uz/static/media/center%20creating.24ab3029789eb724451a.jpg"
        alt="about-info-img"
        style="
          width: auto;
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 20px;
        "
      /> -->
      <app-text
        :size="isMobile ? 18 : 26"
        :line-height="isMobile ? 28 : 36"
        weight="700"
        class="color-main mb-20 text-center"
      >
        Markazning funksional vazifalari va maqsadi
      </app-text>

      <app-text
        :size="isMobile ? 14 : 16"
        :line-height="isMobile ? 20 : 26"
        weight="500"
        class="mb-20"
      >
        Karyera markazi bitiruvchi talabalar soni, ularning ishga joylashishi
        monitoringi, bitiruvchi talabalarga yirik, o‘rta va kichik davlat va
        nodavlat korxona va muassasalarida mavjud ish joylari haqida davriy
        yangilanib boradigan ma’lumot-axborotlarni taqdim etib borish, barcha
        kurs talabalarini memorandum va shartnomalar asosida amaliyotlarga
        yo‘llash, tizimda byurokratik to‘siqlar yuzaga kelishini oldini olish va
        tahliliy ma’lumotlarni shakllantirish hamda qaror qabul qilish
        jarayonini optimallashtirish kabi funksional vazifalarini amalga
        oshiradi.
      </app-text>
      <app-text
        :size="isMobile ? 14 : 16"
        :line-height="isMobile ? 20 : 26"
        weight="500"
        class="mb-20"
      >
        Karyera markazining maqsadi Toshkent davlat iqtisodiyot universiteti va
        bitiruvchilarining mehnat bozoridagi nufuzini oshirish, bu orqali
        talabalarga o‘qish davomida va bitirayotganda amaliyot va ish bo‘yicha
        aktual takliflarni taqdim qilish hamda bu orqali bitiruvchilar ish bilan
        bandlik darajasini oshirishdan iborat.
      </app-text>
      <!-- <img
        src="	https://careers.tsue.uz/static/media/center%20creating.24ab3029789eb724451a.jpg"
        alt="about-info-img"
        style="
          width: auto;
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 20px;
        "
      /> -->
      <app-text
        :size="isMobile ? 18 : 26"
        :line-height="isMobile ? 28 : 36"
        weight="700"
        class="color-main mb-20 text-center"
      >
        Bizning jamoa
      </app-text>
      <div class="items">
        <div class="item" v-for="item in 5" :key="item">
          <div class="img-wrap">
            <img src="/img/person1.jpg" alt="" class="lazyLoad isLoaded" />
          </div>
          <h6>Karimov Valijon Alievich</h6>
          <p class="short-txt">
            Markaz rahbari <br />
            Qabul kuni: Juma — 15:00 — 17:00
          </p>
          <ul>
            <li>
              <i>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.33549 1.62331C0.55192 1.26496 1.74439 -0.0384768 2.59536 0.000872147C2.84973 0.0219519 3.0746 0.175834 3.2573 0.35431C3.67681 0.763961 4.87771 2.31333 4.94587 2.63936C5.11171 3.43899 4.15886 3.89993 4.45047 4.70588C5.19393 6.52507 6.47494 7.80602 8.29492 8.54873C9.10021 8.84033 9.56118 7.88753 10.3608 8.05406C10.6862 8.12222 12.2363 9.32306 12.646 9.74255C12.8238 9.92454 12.9784 10.1501 12.9995 10.4045C13.0311 11.3003 11.6468 12.5096 11.3769 12.6642C10.7403 13.1195 9.90972 13.1118 8.89713 12.641C6.07159 11.4655 1.55607 7.0352 0.358679 4.103C-0.0994784 3.09609 -0.1311 2.25992 0.33549 1.62331Z"
                    fill="#3973A9"
                  ></path>
                </svg>
              </i>
              <a href="tel:71- 239-58-73">+998 71 239 28 77</a>
            </li>
            <li>
              <i>
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.01788 0.0415039H8.5175C9.31048 0.0503979 10.0652 0.385629 10.606 0.969122C11.1467 1.55262 11.4262 2.33344 11.3794 3.12974V6.93767C11.4262 7.73397 11.1467 8.51479 10.606 9.09829C10.0652 9.68178 9.31048 10.017 8.5175 10.0259H3.01788C1.3146 10.0259 0.166626 8.64023 0.166626 6.93767V3.12974C0.166626 1.42718 1.3146 0.0415039 3.01788 0.0415039Z"
                    fill="#3973A9"
                  ></path>
                  <path
                    d="M9.07281 3.28564L6.58463 5.28897C6.11376 5.65814 5.45368 5.65814 4.9828 5.28897L2.47327 3.28564"
                    stroke="#D7E3EE"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </i>
              <a href="mailto:info@argos.uz">v.karimov@tsue.uz</a>
            </li>
          </ul>
          <AppButton
            theme="secondary"
            :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
            :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
            :class="isMobileMedium ? 'mr-10' : 'mr-20'"
            v-if="!isDesktopSmall"
            height="40"
            class="w-100"
          >
            Vazifalari
          </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton";

export default {
  name: "AppAbout",
  components: { AppButton },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  .item {
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    margin-bottom: 30px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.02), 0 8px 30px rgba(0, 0, 0, 0.04);
    max-width: 350px;
    width: 100%;
    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 3px 18px rgba(0, 0, 0, 0.2), 0 8px 30px rgba(0, 0, 0, 0.07);
    }
    .img-wrap {
      margin-bottom: 20px;
      text-align: center;
      height: 260px;
      img {
        border-radius: 6px;
        -o-object-fit: cover;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    h6 {
      transition: all 0.3s;
      color: #3973a9;
      margin-bottom: 8px;
      min-height: 30px;
    }
    p {
      color: #6a7793;
      font-size: 0.9rem;
      margin-bottom: 16px;
    }
    ul li {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      i {
        background: rgba(57, 115, 169, 0.2);
        min-width: 28px;
        width: 28px;
        border-radius: 4px;
        height: 28px;
        margin-right: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      a {
        color: #6a7793;
        opacity: 0.6;
        font-size: 0.9rem;
      }
    }
  }
}
@media (max-width: 1200px) {
  .items {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
}
@media (max-width: 768px) {
  .items {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 0px !important;
    .item {
      margin-bottom: 15px;
    }
  }
}
</style>
