<template>
  <section class="py-30">
    <div class="container" style="position: relative">
      <div class="main__vacancy">
        <div class="main__vacancy-sidebar">
          <div class="sidebar__item">
            <div class="item-label">Viloyatni tanlang</div>
            <el-select
              v-model="region"
              placeholder="Viloyatni tanlang"
              class="w-100"
            >
              <el-option label="Barchasi" value="Barchasi">
                Barchasi
              </el-option>
              <el-option
                v-for="item in list"
                :key="item.id"
                :label="item.name"
                :value="item.soato"
              >
                {{ item.name }}
              </el-option>
            </el-select>
          </div>
          <div class="sidebar__item">
            <div class="item-label">Tumanni tanlang</div>
            <el-select
              v-model="city"
              placeholder="Tumanni tanlang"
              class="w-100"
            >
              <el-option label="Barchasi" value="Barchasi">
                Barchasi
              </el-option>
              <el-option
                v-for="item in list"
                :key="item.id"
                :label="item.name"
                :value="item.soato"
              >
                {{ item.name }}
              </el-option>
            </el-select>
          </div>
          <div class="sidebar__item">
            <div class="item-label">Fakultetni tanlang</div>
            <el-select
              v-model="fakultet"
              placeholder="Fakultetni tanlang"
              class="w-100"
            >
              <el-option label="Barchasi" value="Barchasi">
                Barchasi
              </el-option>
              <el-option
                v-for="item in list"
                :key="item.id"
                :label="item.name"
                :value="item.soato"
              >
                {{ item.name }}
              </el-option>
            </el-select>
          </div>
          <div class="sidebar__item">
            <el-collapse accordion>
              <el-collapse-item title="Lavozim darajasi" name="1">
                <!-- <template slot="title">
                  Consistency<i class="header-icon el-icon-info"></i>
                </template> -->
              </el-collapse-item>
              <el-collapse-item title="Lavozim turi" name="2">
              </el-collapse-item>
              <el-collapse-item title="Bakalavr kursi" name="3">
              </el-collapse-item>
              <el-collapse-item title="Ish haqi" name="4"> </el-collapse-item>
            </el-collapse>
          </div>
          <div class="custom__btn">Barchasini tozalash</div>
        </div>
        <div class="main__vacancy-content">
          <div class="search">
            <input
              type="text"
              placeholder="Vakansiya izlash uchun kasb,tashkilot, yoki lavozimni kiriting"
              class="search__input"
              v-model="search"
            />
            <span class="search__icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0833 18.4167C15.1334 18.4167 18.4167 15.1334 18.4167 11.0833C18.4167 7.03325 15.1334 3.75 11.0833 3.75C7.03325 3.75 3.75 7.03325 3.75 11.0833C3.75 15.1334 7.03325 18.4167 11.0833 18.4167Z"
                  stroke="#79838E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M20.2502 20.25L16.2627 16.2625"
                  stroke="#79838E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
            <span
              class="search__clear"
              v-if="search !== ''"
              data-aos="fade-up"
              data-aos-duration="500"
              @click="clearSearch"
            >
              <i class="inline-block">
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
                    d="M4.41083 4.41058C4.73626 4.08514 5.2639 4.08514 5.58934 4.41058L10.0001 8.82133L14.4108 4.41058C14.7363 4.08514 15.2639 4.08514 15.5893 4.41058C15.9148 4.73602 15.9148 5.26366 15.5893 5.58909L11.1786 9.99984L15.5893 14.4106C15.9148 14.736 15.9148 15.2637 15.5893 15.5891C15.2639 15.9145 14.7363 15.9145 14.4108 15.5891L10.0001 11.1783L5.58934 15.5891C5.2639 15.9145 4.73626 15.9145 4.41083 15.5891C4.08539 15.2637 4.08539 14.736 4.41083 14.4106L8.82157 9.99984L4.41083 5.58909C4.08539 5.26366 4.08539 4.73602 4.41083 4.41058Z"
                    fill="#79838E"
                  ></path>
                </svg>
              </i>
            </span>
          </div>
          <VacancyCard
            v-for="(item, index) in 10"
            :key="index"
            data-aos="zoom-in-up"
            :data-aos-delay="index * 30"
            data-aos-duration="20000"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import VacancyCard from "@/components/shared-components/VacancyCard.vue";
export default {
  name: "AppJob",
  components: { VacancyCard },
  data() {
    return {
      search: "",
      region: "Barchasi",
      city: "",
      fakultet: "",
      list: [
        {
          id: 3606,
          name: "Toshkent viloyati",
          soato: 1727,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3719,
          name: "Xorazm viloyati",
          soato: 1733,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3759,
          name: "Qoraqalpog‘iston Respublikasi",
          soato: 1735,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3560,
          name: "Sirdaryo viloyati",
          soato: 1724,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3319,
          name: "Jizzax viloyati",
          soato: 1708,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3476,
          name: "Samarqand viloyati",
          soato: 1718,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3661,
          name: "Farg‘ona viloyati",
          soato: 1730,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3273,
          name: "Buxoro viloyati",
          soato: 1706,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3357,
          name: "Qashqadaryo viloyati",
          soato: 1710,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3432,
          name: "Namangan viloyati",
          soato: 1714,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3519,
          name: "Surxondaryo viloyati",
          soato: 1722,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3403,
          name: "Navoiy viloyati",
          soato: 1712,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3573,
          name: "Toshkent shahri",
          soato: 1726,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3236,
          name: "Andijon viloyati",
          soato: 1703,
          parent: 3235,
          parent_soato: 17,
        },
      ],
    };
  },
  methods: {
    clearSearch() {
      this.search = "";
    },
  },
};
</script>
<style lang="scss">
.main__vacancy {
  display: grid;
  grid-gap: 28px;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  position: relative;
  &-sidebar {
    background: rgba(197, 212, 240, 0.25);
    border-radius: 12px;
    padding: 10px 20px;
    grid-column: span 12 / span 12;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
  }
  .sidebar__item {
    padding: 10px 0;
    // border-bottom: 1px solid rgba(121, 131, 142, 0.2);
    .el-collapse-item__header {
      background: #f3f5fb !important;
      font-weight: 600 !important;
      font-size: 16px !important;
      line-height: 20px !important;
      height: auto !important;
      padding: 16px 0 !important;
    }
    .el-collapse-item__wrap {
      background: #f3f5fb !important;
    }
  }
  .item-label {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #26292e;
    margin-bottom: 8px;
  }
  &-content {
    grid-column: span 12 / span 12;
    .search {
      position: relative;
      display: flex;
      align-items: center;
      overflow: hidden;
      margin-bottom: 28px;
      background-color: #fff;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 10px;
      border-radius: 12px;
      transition: 0.3s ease;
      cursor: pointer;
      &:hover {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 0px;
      }
      &__input {
        // background: #f3f5fb;
        border: 1px solid #dfe6f4;
        border-radius: 12px;
        outline: none;
        color: #646d80;
        font-weight: 500;
        font-size: 14px;
        line-height: 130%;
        padding: 17px 48px;
        width: 100%;
        transition: 0.3s ease;
        cursor: pointer;

        &:focus {
          background-color: #fff;
        }
      }
      &__icon {
        position: absolute;
        left: 10px;
      }
      &__clear {
        position: absolute;
        right: 20px;
        top: 17px;
      }
    }
  }
}

@media (min-width: 1024px) {
  .main__vacancy {
    &-sidebar {
      grid-column: span 3 / span 3;
    }
    &-content {
      grid-column: span 9 / span 9;
    }
  }
}
</style>
