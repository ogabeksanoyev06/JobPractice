<template>
  <section class="section">
    <div class="single__vacancy py-10">
      <div class="container">
        <div class="single__vacancy-header">
          <div class="single__vacancy-left">
            <AppText
              :size="isMobileSmall ? 16 : isMobile ? 20 : 22"
              :line-height="isMobileSmall ? 24 : isMobile ? 28 : 30"
              weight="700"
            >
              Qishloq xoʻjaligida agrotexnik tadbirlar oʻtkazilishini nazorat
              qilish boʻyicha bosh mutaxassisi
            </AppText>
            <div class="single__vacancy-wage">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5ZM5 3C2.79086 3 1 4.79086 1 7V17C1 19.2091 2.79086 21 5 21H19C21.2091 21 23 19.2091 23 17V7C23 4.79086 21.2091 3 19 3H5Z"
                  fill="#3165CB"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13 12C13 9.23858 15.2386 7 18 7H22C22.5523 7 23 7.44772 23 8C23 8.55228 22.5523 9 22 9H18C16.3431 9 15 10.3431 15 12C15 13.6569 16.3431 15 18 15H22C22.5523 15 23 15.4477 23 16C23 16.5523 22.5523 17 22 17H18C15.2386 17 13 14.7614 13 12Z"
                  fill="#3165CB"
                ></path>
                <path
                  d="M19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12Z"
                  fill="#3165CB"
                ></path>
              </svg>
              <AppText
                :size="isMobileSmall ? 16 : isMobile ? 18 : 20"
                :line-height="isMobileSmall ? 22 : isMobile ? 24 : 26"
                weight="600"
                class="color-main"
              >
                1 732 360.00
              </AppText>
            </div>
            <div class="single__vacancy-wage">
              <svg
                class=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="#3165CB"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 6C12.5523 6 13 6.44772 13 7V11.5858L15.2071 13.7929C15.5976 14.1834 15.5976 14.8166 15.2071 15.2071C14.8166 15.5976 14.1834 15.5976 13.7929 15.2071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V7C11 6.44772 11.4477 6 12 6Z"
                  fill="#3165CB"
                ></path>
              </svg>
              <AppText
                :size="isMobileSmall ? 16 : isMobile ? 18 : 20"
                :line-height="isMobileSmall ? 22 : isMobile ? 24 : 26"
                weight="600"
                class="color-main"
              >
                To'liq
              </AppText>
            </div>
          </div>
          <div class="single__vacancy-right">
            <AppButton
              theme="secondary"
              :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
              :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
              class=""
              :height="isMobileMedium ? '40' : '50'"
            >
              Ariza yuborish
            </AppButton>
          </div>
        </div>
        <div class="single__vacancy-place">
          <div class="single__vacancy-location">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.1665 15V7.5H9.1665V15H4.1665ZM7.49984 9.16667V13.3333H5.83317V9.16667H7.49984Z"
                fill="#79838E"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.8332 15V7.5H15.8332V15H10.8332ZM14.1665 9.16667V13.3333H12.4998V9.16667H14.1665Z"
                fill="#79838E"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.8332 15.0002H4.1665C3.70627 15.0002 3.33317 15.3733 3.33317 15.8335C3.33317 16.2937 3.70627 16.6668 4.1665 16.6668H15.8332C16.2934 16.6668 16.6665 16.2937 16.6665 15.8335C16.6665 15.3733 16.2934 15.0002 15.8332 15.0002ZM4.1665 13.3335C2.78579 13.3335 1.6665 14.4528 1.6665 15.8335C1.6665 17.2142 2.78579 18.3335 4.1665 18.3335H15.8332C17.2139 18.3335 18.3332 17.2142 18.3332 15.8335C18.3332 14.4528 17.2139 13.3335 15.8332 13.3335H4.1665Z"
                fill="#79838E"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.6665 6.66678V6.02686C16.6665 5.65885 16.4251 5.33441 16.0726 5.22867L10.2393 3.47867C10.0831 3.43181 9.91658 3.43181 9.76038 3.47867L3.92705 5.22867C3.57456 5.33441 3.33317 5.65885 3.33317 6.02686V6.66678C3.33317 7.12702 3.70627 7.50011 4.1665 7.50011H15.8332C16.2934 7.50011 16.6665 7.12702 16.6665 6.66678ZM3.44813 3.63229C2.39067 3.94953 1.6665 4.92283 1.6665 6.02686V6.66678C1.6665 8.04749 2.78579 9.16678 4.1665 9.16678H15.8332C17.2139 9.16678 18.3332 8.04749 18.3332 6.66678V6.02686C18.3332 4.92284 17.609 3.94953 16.5515 3.63229L10.7182 1.88229C10.2496 1.74171 9.75007 1.74171 9.28147 1.88229L3.44813 3.63229Z"
                fill="#79838E"
              ></path>
            </svg>
            <AppText size="14" line-height="20" weight="700">
              Qorovulbozor tuman hokimiyati
            </AppText>
          </div>
          <div class="single__vacancy-location">
            <svg
              class=""
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.8333 10.0002H11.6667V16.6668H15.8333C16.2936 16.6668 16.6667 16.2937 16.6667 15.8335V10.8335C16.6667 10.3733 16.2936 10.0002 15.8333 10.0002ZM10 8.3335V18.3335H15.8333C17.214 18.3335 18.3333 17.2142 18.3333 15.8335V10.8335C18.3333 9.45278 17.214 8.3335 15.8333 8.3335H10Z"
                fill="#79838E"
              ></path>
              <path
                d="M14.9997 12.4998C14.9997 12.0396 14.6266 11.6665 14.1663 11.6665C13.7061 11.6665 13.333 12.0396 13.333 12.4998C13.333 12.9601 13.7061 13.3332 14.1663 13.3332C14.6266 13.3332 14.9997 12.9601 14.9997 12.4998Z"
                fill="#79838E"
              ></path>
              <path
                d="M14.9997 14.9998C14.9997 14.5396 14.6266 14.1665 14.1663 14.1665C13.7061 14.1665 13.333 14.5396 13.333 14.9998C13.333 15.4601 13.7061 15.8332 14.1663 15.8332C14.6266 15.8332 14.9997 15.4601 14.9997 14.9998Z"
                fill="#79838E"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.16699 18.3332C2.78628 18.3332 1.66699 17.2139 1.66699 15.8332V4.1665C1.66699 2.78579 2.78628 1.6665 4.16699 1.6665H9.16699C10.5477 1.6665 11.667 2.78579 11.667 4.1665V18.3332H4.16699ZM4.16699 3.33317H9.16699C9.62723 3.33317 10.0003 3.70627 10.0003 4.1665V16.6665H8.33366V15.8332C8.33366 15.3729 7.96056 14.9998 7.50032 14.9998H5.83366C5.37342 14.9998 5.00032 15.3729 5.00032 15.8332V16.6665H4.16699C3.70675 16.6665 3.33366 16.2934 3.33366 15.8332V4.1665C3.33366 3.70627 3.70675 3.33317 4.16699 3.33317Z"
                fill="#79838E"
              ></path>
              <path
                d="M7.5 5C7.96024 5 8.33333 5.3731 8.33333 5.83333C8.33333 6.29357 7.96024 6.66667 7.5 6.66667H5.83333C5.3731 6.66667 5 6.29357 5 5.83333C5 5.3731 5.3731 5 5.83333 5H7.5Z"
                fill="#79838E"
              ></path>
              <path
                d="M7.5 8.33333C7.96024 8.33333 8.33333 8.70643 8.33333 9.16667C8.33333 9.6269 7.96024 10 7.5 10H5.83333C5.3731 10 5 9.6269 5 9.16667C5 8.70643 5.3731 8.33333 5.83333 8.33333H7.5Z"
                fill="#79838E"
              ></path>
              <path
                d="M8.33333 12.5C8.33333 12.0398 7.96024 11.6667 7.5 11.6667H5.83333C5.3731 11.6667 5 12.0398 5 12.5C5 12.9602 5.3731 13.3333 5.83333 13.3333H7.5C7.96024 13.3333 8.33333 12.9602 8.33333 12.5Z"
                fill="#79838E"
              ></path>
            </svg>
            <AppText size="14" line-height="20" weight="700" tag="p">
              Piskent tuman hokimining sanoatni rivojlantirish, kapital
              qurulish, kommunikatsiyalar va kommunal xo'jaligi masalalari
            </AppText>
          </div>
        </div>
        <div class="single__vacancy-description">
          <div class="cards">
            <div class="card"></div>
          </div>
          <div class="item">
            <AppText
              :size="isMobileSmall ? 16 : isMobile ? 18 : 20"
              :line-height="isMobileSmall ? 20 : isMobile ? 22 : 24"
              weight="700"
              class="mb-10"
            >
              Malakaviy talablar
            </AppText>
            <AppText size="14" line-height="20" weight="500">
              1) O‘zbekiston Respublikasining fuqaroligi mavjudligi; 2) Davlat
              tilini mukammal bilishi; 3) Qurilish sohasida oliy maʼlumotga ega
              bo‘lishi; 4) Muomala madaniyatiga ega bo‘lishi; 5) Ish vaqtidan
              samarali foydalana olishi va tadbirlarni rejalashtirish
              ko‘nikmalariga ega bo‘lgan; 6) Yuklatilgan vazifalarni mustaqil,
              ko‘maksiz bajara oladigan; 7) Chet tillarini bilishi; 8) Strategik
              va tahliliy fikr yurita olishi, qarorlarni tez qabul qila olishi
              hamda ularni bajara olishi; 9) Sohaga oid mutaxassisligi bo‘yicha
              1 yil faoliyat yuritgan bo‘lishi kerak; 10) Odob-ahloq normalari,
              rahbarlik etikasiga rioya etadigan; 11) Notiqlik fazilatlariga ega
              bo‘lgan; 12) Respublikada olib borilayotgan davlat kadrlar
              siyosatini tushunadigan; 13) Axborot-kommunikatsiya
              texnologiyalaridan foydalanishni bilishi; 14) Elektron dasturlar
              bilan ishlash tizimi haqida xabardor 15) Oxirgi uch yil davomida
              davlat organlari va tashkilotlaridan salbiy sabablarga ko‘ra
              belgilangan tartibda bo‘shatilmagan bo‘lishi lozim.
            </AppText>
          </div>
          <div class="item">
            <AppText
              :size="isMobileSmall ? 16 : isMobile ? 18 : 20"
              :line-height="isMobileSmall ? 20 : isMobile ? 22 : 24"
              weight="700"
              class="mb-10"
            >
              Lavozimiy majburiyatlari
            </AppText>
            <ul class="lists">
              <li class="list">
                <img src="/svg/check-round.svg" class="mr-15" />
                <AppText :size="14" :line-height="20" weight="500" class="">
                  O‘rnatilgan lavozim yo‘riqnomasi talablarini bajarishi lozim.
                </AppText>
              </li>
              <li class="list">
                <img src="/svg/check-round.svg" class="mr-15" />
                <AppText :size="14" :line-height="20" weight="500" class="">
                  O‘rnatilgan lavozim yo‘riqnomasi talablarini bajarishi lozim.
                </AppText>
              </li>
            </ul>
          </div>
          <div class="item">
            <AppText
              :size="isMobileSmall ? 16 : isMobile ? 18 : 20"
              :line-height="isMobileSmall ? 20 : isMobile ? 22 : 24"
              weight="700"
              class="mb-10"
            >
              Ish sharoitlari
            </AppText>
            <ul class="lists">
              <li class="list">
                <img src="/svg/check-round.svg" class="mr-15" />
                <AppText :size="14" :line-height="20" weight="500" class="">
                  Ish kunlari: dushanba, seshanba, chorshanba, payshanba, juma.
                </AppText>
              </li>
              <li class="list">
                <img src="/svg/check-round.svg" class="mr-15" />
                <AppText :size="14" :line-height="20" weight="500" class="">
                  Dam olish kunlari: shanba, yakshanba.
                </AppText>
              </li>
              <li class="list">
                <img src="/svg/check-round.svg" class="mr-15" />
                <AppText :size="14" :line-height="20" weight="500" class="">
                  Ish vaqti: 09: 00 dan 18: 00 gacha
                </AppText>
              </li>
            </ul>
          </div>
          <div class="item">
            <AppText
              :size="isMobileSmall ? 16 : isMobile ? 18 : 20"
              :line-height="isMobileSmall ? 20 : isMobile ? 22 : 24"
              weight="700"
              class="mb-10"
            >
              Tashkilot to‘g'risida ma'lumot
            </AppText>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton.vue";
export default {
  name: "VacancyDetailed",
  components: { AppButton },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.single__vacancy {
  background: linear-gradient(0deg, #f2f4f6, #f2f4f6),
    linear-gradient(0deg, #f9f9f9, #f9f9f9), #fff;

  &-header {
    padding: 28px 0;
    border-bottom: 1px solid rgba(121, 131, 142, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  &-wage {
    color: #3165cb;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &-left {
    width: 75%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  &-place {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;
  }
  &-location {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #79838e;
    svg {
      flex: none;
    }
  }
  &-description {
    // max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    .item {
      padding: 20px 30px;
      margin-top: 20px;
      background-color: #fff;
      border-radius: 10px;
    }
    .lists {
      .list {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
      }
    }
  }
}
@media (max-width: 768.1px) {
  .single__vacancy-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .single__vacancy-left {
    width: 100%;
  }
}
</style>
