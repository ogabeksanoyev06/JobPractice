<template>
  <div class="vac-card">
    <div class="vac-card__item">
      <div style="d-flex justify-space-between">
        <h3 class="vac-card__title">
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis debitis voluptas qui dignissimos amet id, dolore quam
            ducimus nobis! Eum corrupti non rem saepe veritatis magnam optio
            eius ut natus?
          </span>
        </h3>
        <!-- <div class="vac-card__badge">Ichki tanlov</div> -->
      </div>

      <p class="vac-card__unit">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At atque odit
          nobis tempora accusantium delectus numquam veniam distinctio ipsa
          recusandae?
        </span>
      </p>
    </div>
    <div class="vac-card__item">
      <p class="vac-card__payment">
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <rect width="19" height="19" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlink:href="#image0_96_57" transform="scale(0.0078125)" />
            </pattern>
            <image
              id="image0_96_57"
              width="128"
              height="128"
              xlink:href="data:image/png;base64,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"
            />
          </defs>
        </svg>
        5 000 000 UZS
      </p>
      <p class="vac-card__location">
        <!-- <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.75 13.5V6.75H8.25V13.5H3.75ZM6.75 8.25V12H5.25V8.25H6.75Z"
            fill="#3165CB"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.75 13.5V6.75H14.25V13.5H9.75ZM12.75 8.25V12H11.25V8.25H12.75Z"
            fill="#3165CB"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.25 13.5H3.75C3.33579 13.5 3 13.8358 3 14.25C3 14.6642 3.33579 15 3.75 15H14.25C14.6642 15 15 14.6642 15 14.25C15 13.8358 14.6642 13.5 14.25 13.5ZM3.75 12C2.50736 12 1.5 13.0074 1.5 14.25C1.5 15.4926 2.50736 16.5 3.75 16.5H14.25C15.4926 16.5 16.5 15.4926 16.5 14.25C16.5 13.0074 15.4926 12 14.25 12H3.75Z"
            fill="#3165CB"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15 6.00005V5.42412C15 5.09291 14.7827 4.80092 14.4655 4.70575L9.21551 3.13075C9.07493 3.08858 8.92507 3.08858 8.78449 3.13075L3.53449 4.70575C3.21725 4.80092 3 5.09291 3 5.42412V6.00005C3 6.41427 3.33579 6.75005 3.75 6.75005H14.25C14.6642 6.75005 15 6.41427 15 6.00005ZM3.10347 3.26901C2.15175 3.55453 1.5 4.4305 1.5 5.42412V6.00005C1.5 7.24269 2.50736 8.25005 3.75 8.25005H14.25C15.4926 8.25005 16.5 7.24269 16.5 6.00005V5.42412C16.5 4.4305 15.8482 3.55453 14.8965 3.26901L9.64653 1.69401C9.2248 1.56749 8.77521 1.56749 8.35347 1.69401L3.10347 3.26901Z"
            fill="#3165CB"
          ></path>
        </svg> -->
        To'rtko'l tuman hokimligi
      </p>
      <p class="vac-card__location">
        <!-- <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.6893 1.85856C15.2347 1.21462 16.7852 2.76504 16.1412 4.31048L11.6986 14.9728C10.8297 17.058 7.77364 16.7056 7.40227 14.4773L6.84801 11.1518L3.52245 10.5975C1.29421 10.2261 0.941754 7.17003 3.02696 6.3012L13.6893 1.85856ZM14.7566 3.73356C14.8854 3.42447 14.5753 3.11439 14.2662 3.24317L3.60389 7.68581C2.90882 7.97542 3.0263 8.99412 3.76905 9.11792L7.09461 9.67218C7.72682 9.77754 8.22223 10.273 8.3276 10.9052L8.88186 14.2307C9.00565 14.9735 10.0244 15.091 10.314 14.3959L14.7566 3.73356Z"
            fill="#3165CB"
          ></path>
        </svg> -->
        Buxoro viloyati, Qorovulbozor tumani
      </p>
      <p class="vac-card__location">
        <!-- <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 13.5C11.3137 13.5 14 10.8137 14 7.5C14 4.18629 11.3137 1.5 8 1.5C4.68629 1.5 2 4.18629 2 7.5C2 10.8137 4.68629 13.5 8 13.5ZM8 15C12.1421 15 15.5 11.6421 15.5 7.5C15.5 3.35786 12.1421 0 8 0C3.85786 0 0.5 3.35786 0.5 7.5C0.5 11.6421 3.85786 15 8 15Z"
            fill="#3165CB"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 3C8.41421 3 8.75 3.33579 8.75 3.75V7.18934L10.4053 8.84467C10.6982 9.13756 10.6982 9.61244 10.4053 9.90533C10.1124 10.1982 9.63756 10.1982 9.34467 9.90533L7.46967 8.03033C7.32902 7.88968 7.25 7.69891 7.25 7.5V3.75C7.25 3.33579 7.58579 3 8 3Z"
            fill="#3165CB"
          ></path>
        </svg> -->
        <span> To‘liq </span>
      </p>
    </div>
    <div class="vac-card__item">
      <div class="vac-date d-flex align-center justify-space-between flex-wrap">
        <div class="dates d-flex align-center" style="gap: 16px">
          <div class="date">
            <i class="inline-block">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.25 5H3.75C3.33579 5 3 5.33579 3 5.75V14.75C3 15.1642 3.33579 15.5 3.75 15.5H14.25C14.6642 15.5 15 15.1642 15 14.75V5.75C15 5.33579 14.6642 5 14.25 5ZM3.75 3.5C2.50736 3.5 1.5 4.50736 1.5 5.75V14.75C1.5 15.9926 2.50736 17 3.75 17H14.25C15.4926 17 16.5 15.9926 16.5 14.75V5.75C16.5 4.50736 15.4926 3.5 14.25 3.5H3.75Z"
                  fill="#79838E"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.5 9.5C7.08579 9.5 6.75 9.83579 6.75 10.25C6.75 10.6642 7.08579 11 7.5 11H12.75C13.1642 11 13.5 10.6642 13.5 10.25C13.5 9.83579 13.1642 9.5 12.75 9.5H7.5ZM5.25 12.5C4.83579 12.5 4.5 12.8358 4.5 13.25C4.5 13.6642 4.83579 14 5.25 14H9.75C10.1642 14 10.5 13.6642 10.5 13.25C10.5 12.8358 10.1642 12.5 9.75 12.5H5.25Z"
                  fill="#79838E"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.25 2C4.83579 2 4.5 2.33579 4.5 2.75V5.75C4.5 6.16421 4.83579 6.5 5.25 6.5C5.66421 6.5 6 6.16421 6 5.75V2.75C6 2.33579 5.66421 2 5.25 2ZM12.75 2C12.3358 2 12 2.33579 12 2.75V5.75C12 6.16421 12.3358 6.5 12.75 6.5C13.1642 6.5 13.5 6.16421 13.5 5.75V2.75C13.5 2.33579 13.1642 2 12.75 2Z"
                  fill="#79838E"
                ></path>
              </svg>
            </i>
            5 May 2023
          </div>
          <div class="date inline-block">
            <i class="inline-block">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.8179 8.56694C13.1885 8.11832 13.4457 7.5699 13.5515 6.96914C13.6707 6.29209 13.7645 5.55497 13.7645 4.91165V1.0293H5.29395V4.91165C5.29395 5.55497 5.38775 6.29209 5.50697 6.96914C5.61276 7.5699 5.87 8.11832 6.24055 8.56694C6.57339 8.9699 6.99766 9.29235 7.48573 9.49989C6.99766 9.70742 6.57339 10.0299 6.24055 10.4328C5.87 10.8815 5.61276 11.4299 5.50697 12.0306C5.38775 12.7077 5.29395 13.4448 5.29395 14.0881V17.9705H13.7645V14.0881C13.7645 13.4448 13.6707 12.7077 13.5515 12.0306C13.4457 11.4299 13.1885 10.8815 12.8179 10.4328C12.4851 10.0299 12.0608 9.70742 11.5727 9.49989C12.0608 9.29235 12.4851 8.9699 12.8179 8.56694ZM12.3528 16.5587V14.0881C12.3528 13.5635 12.2743 12.9182 12.1611 12.2755C12.0404 11.5897 11.5973 11.0444 11.0203 10.7991L9.52924 10.1651L8.03817 10.7991C7.46118 11.0444 7.01809 11.5897 6.89735 12.2755C6.78416 12.9182 6.70571 13.5635 6.70571 14.0881V16.5587H12.3528ZM9.52924 8.83472L11.0203 8.2007C11.5973 7.95535 12.0404 7.41002 12.1611 6.72431C12.2743 6.08152 12.3528 5.43627 12.3528 4.91165V2.44106H6.70571V4.91165C6.70571 5.43627 6.78416 6.08152 6.89735 6.72431C7.01809 7.41002 7.46118 7.95535 8.03817 8.2007L9.52924 8.83472Z"
                  fill="#79838E"
                ></path>
                <path
                  d="M3.88232 17.2645C3.88232 16.8746 4.19836 16.5586 4.58821 16.5586H14.4706C14.8604 16.5586 15.1764 16.8746 15.1764 17.2645C15.1764 17.6543 14.8604 17.9704 14.4706 17.9704H4.58821C4.19836 17.9704 3.88232 17.6543 3.88232 17.2645Z"
                  fill="#79838E"
                ></path>
                <path
                  d="M3.88232 1.73518C3.88232 1.34533 4.19836 1.0293 4.58821 1.0293H14.4706C14.8604 1.0293 15.1764 1.34533 15.1764 1.73518C15.1764 2.12503 14.8604 2.44106 14.4706 2.44106H4.58821C4.19836 2.44106 3.88232 2.12503 3.88232 1.73518Z"
                  fill="#79838E"
                ></path>
                <path
                  d="M6.70605 16.5589C6.70605 16.1263 6.95048 15.7308 7.33742 15.5374L8.89822 14.757C9.29567 14.5582 9.76349 14.5582 10.1609 14.757L11.7218 15.5374C12.1087 15.7308 12.3531 16.1263 12.3531 16.5589H6.70605Z"
                  fill="#79838E"
                ></path>
              </svg>
            </i>
            <span class="inline-block">9 May 2023</span>
          </div>
          <div class="date inline-block">
            <i class="inline-block">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.00017 14C12.0943 14 14.2946 12.0557 15.5831 10.4365C16.03 9.87487 16.03 9.12513 15.5831 8.56352C14.2946 6.94429 12.0943 5 9.00017 5C5.90605 5 3.70577 6.94429 2.41722 8.56352C1.9703 9.12513 1.9703 9.87487 2.41722 10.4365C3.70577 12.0557 5.90605 14 9.00017 14ZM16.7568 11.3705C17.6388 10.2622 17.6388 8.73781 16.7568 7.6295C15.3556 5.86869 12.7701 3.5 9.00017 3.5C5.23027 3.5 2.64471 5.86869 1.24351 7.6295C0.36154 8.73781 0.36154 10.2622 1.24351 11.3705C2.64471 13.1313 5.23027 15.5 9.00017 15.5C12.7701 15.5 15.3556 13.1313 16.7568 11.3705Z"
                  fill="#79838E"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5 9.5C10.5 10.3284 9.82843 11 9 11C8.17157 11 7.5 10.3284 7.5 9.5C7.5 9.47871 7.50044 9.45752 7.50132 9.43645C7.61824 9.47761 7.74401 9.5 7.875 9.5C8.49632 9.5 9 8.99632 9 8.375C9 8.24401 8.97761 8.11824 8.93645 8.00132C8.95752 8.00044 8.97871 8 9 8C9.82843 8 10.5 8.67157 10.5 9.5ZM12 9.5C12 11.1569 10.6569 12.5 9 12.5C7.34315 12.5 6 11.1569 6 9.5C6 7.84315 7.34315 6.5 9 6.5C10.6569 6.5 12 7.84315 12 9.5Z"
                  fill="#79838E"
                ></path>
              </svg>
            </i>
            <p>20</p>
          </div>
        </div>
        <div class="date">
          <p class="">Nomzodlar soni <span> 3 ta </span></p>
        </div>
      </div>
    </div>
    <AppButton
      theme="secondary"
      :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
      :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
      :style="isMobileSmall ? 'width:100%' : 'width: fit-content'"
    >
      Qiziqish bildirish
    </AppButton>
  </div>
</template>
<script>
import AppButton from "../shared-components/AppButton";

export default {
  name: "VacancyCard",
  components: { AppButton },
};
</script>
<style lang="scss" scoped>
.vac-card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: #fcfcfe;
  border: 1px solid #dfe6f4;
  border-radius: 12px;
  transition: 0.3s ease-in-out;
  margin-bottom: 20px;
  &__item {
    padding-bottom: 20px;
    // border-bottom: 1px solid #dfe6f4;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  &__title {
    font-weight: 600;
    font-size: 22px;
    line-height: 124%;
    color: #26292e;
    margin-bottom: 6px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  &__unit {
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    color: #3165cb;
  }
  &__payment,
  &__location {
    line-height: 130%;
    color: #26292e;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  &__payment {
    font-weight: 700;
    font-size: 18px;
  }
  .date {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    gap: 8px;
    line-height: 130%;
    color: #79838e;
  }
}
@media (max-width: 768px) {
  .dates {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px !important;
    margin-bottom: 4px;
  }
  .vac-date {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
