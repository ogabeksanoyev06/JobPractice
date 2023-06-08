<template>
  <section class="section py-30">
    <div class="container">
      <div class="section-top mb-30">
        <div class="d-flex align-center justify-content-center mb-20">
          <app-text
            :size="isMobileSmall ? 22 : isMobile ? 26 : 30"
            :line-height="isMobileSmall ? 26 : isMobile ? 30 : 36"
            weight="700"
            class="mr-20 color-main text-center"
          >
            Amaliyot o'tash joylari
          </app-text>
        </div>
        <app-text size="14" line-height="20" weight="500" class="text-center">
          Ushbu bo’limda siz amaldagi qonunchilikka muvofiq haq to’lash
          majburiyati bilan olti oydan ortiq muddatga aspiranturadan keyingi
          amaliyot takliflarini ko’rishingiz mumkin.Ular faqat bitiruvchi
          bo’lsangiz,diplom olganingizdan keyin 12 oy ichida faollashtirili
          mumkin.
        </app-text>
      </div>
      <div class="filtered__form mb-30">
        <el-select v-model="region" placeholder="Barchasi">
          <el-option label="Barchasi" value="Barchasi"> Barchasi </el-option>
          <el-option
            v-for="item in list"
            :key="item.id"
            :label="item.name"
            :value="item.name"
          >
          </el-option>
        </el-select>
        <el-select v-model="city" placeholder="Tumanni tanlang">
          <el-option
            v-for="item in list"
            :key="item.id"
            :label="item.name"
            :value="item.name"
          >
          </el-option>
        </el-select>
        <el-input placeholder="Soha bo'yicha qidiruv" v-model="soha"></el-input>
      </div>
      <div class="table-block">
        <table>
          <thead>
            <tr>
              <th>Korxona nomi</th>
              <th>Hududi</th>
              <th>Amaliyot nomi</th>
              <th>Berilgan sana</th>
              <th>Oxirgi muddat</th>
              <th>Rezyume yuborish</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in 10" :key="idx">
              <td>Mikrokreditbank</td>
              <td>Qoraqalpog'iston respublikasi</td>
              <td class="title">Raqamli iqtisodiyot haqida</td>
              <td>21/04/2023</td>
              <td>21/04/2023</td>
              <td class="send">
                <span>Yuborish</span>
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
                      <use
                        xlink:href="#image0_274_194"
                        transform="scale(0.00195312)"
                      />
                    </pattern>
                    <image
                      id="image0_274_194"
                      width="512"
                      height="512"
                      xlink:href="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "AppS",
  components: {},
  data() {
    return {
      region: "Barchasi",
      city: "",
      soha: "",
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
};
</script>
<style lang="scss">
.filtered__form {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-gap: 25px;
  .el-input__inner {
    height: 50px;
    line-height: 50px;
    font-size: 16px;
  }
  .el-input,
  .el-select {
    grid-column: span 12 / span 12;
  }
}
.section-top {
  max-width: 900px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.table-block {
  width: 100%;
  overflow: hidden;
  //   border-radius: 10px;
  border: 1px solid #c5d4f0;

  table {
    width: 100%;
    border-spacing: 0;
    thead {
      tr {
        // background: #f6f8fc;
      }
      th {
        padding: 10px 20px;
        font-size: 16px;
        line-height: 26px;
        font-weight: 700;
        text-align: center;
        border-left: 1px solid #c5d4f0;
        &:first-child {
          border-left: 0;
        }
      }
    }

    tbody {
      tr {
        &:nth-child(even) {
          //   background: #f8f8fa;
        }

        td {
          padding: 10px 20px;
          font-size: 14px;
          line-height: 26px;
          font-weight: 500;
          border: 1px solid #c5d4f0;
          border-bottom: none;
          border-right: 0;
          min-width: 20px;
          min-height: 47px;
          text-align: center;
          &.title {
            color: #3165cb;
          }
          &.send {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #3165cb;
            font-weight: 700;
            cursor: pointer;
            &:hover svg {
              margin-left: 15px;
            }
            svg {
              margin-left: 10px;
              transition: 0.3s;
            }
          }

          &:first-child {
            border-left: 0;
          }
        }
      }
    }
  }
}
@media (min-width: 768px) {
  .filtered__form .el-select:nth-child(1),
  .filtered__form .el-select:nth-child(2) {
    grid-column: span 3 / span 3;
  }
  .filtered__form .el-input:nth-child(3) {
    grid-column: span 6 / span 6;
  }
}

@media (max-width: 991px) {
  .table-block {
    width: 100%;
    overflow-x: auto;

    &::-webkit-scrollbar {
      height: 2px;
    }

    table {
      width: max-content;

      &::-webkit-scrollbar {
        height: 2px !important;
        width: 2px;
      }

      td {
        min-width: 100px !important;
      }
    }
  }
}

@media (max-width: 500px) {
  .table-block {
    table {
      td {
        min-width: unset !important;
      }
    }
  }
}
</style>
