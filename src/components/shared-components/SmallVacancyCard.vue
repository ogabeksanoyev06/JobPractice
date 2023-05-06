<template>
  <div class="vacancy-card__small">
    <div class="d-flex flex-column" style="gap: 4px">
      <h3 class="vacancy-card__small-title">IT Park</h3>
      <p class="vacancy-card__small-unit">Grafik dizayner</p>
    </div>
    <div class="d-flex flex-column" style="gap: 10px">
      <p class="vacancy-card__small-payment">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.667 3.33333H3.33366C2.59728 3.33333 2.00033 3.93029 2.00033 4.66667V11.3333C2.00033 12.0697 2.59728 12.6667 3.33366 12.6667H12.667C13.4034 12.6667 14.0003 12.0697 14.0003 11.3333V4.66667C14.0003 3.93029 13.4034 3.33333 12.667 3.33333ZM3.33366 2C1.8609 2 0.666992 3.19391 0.666992 4.66667V11.3333C0.666992 12.8061 1.8609 14 3.33366 14H12.667C14.1398 14 15.3337 12.8061 15.3337 11.3333V4.66667C15.3337 3.19391 14.1398 2 12.667 2H3.33366Z"
            fill="#3165CB"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.66699 8.00008C8.66699 6.15913 10.1594 4.66675 12.0003 4.66675H14.667C15.0352 4.66675 15.3337 4.96522 15.3337 5.33341C15.3337 5.7016 15.0352 6.00008 14.667 6.00008H12.0003C10.8958 6.00008 10.0003 6.89551 10.0003 8.00008C10.0003 9.10465 10.8958 10.0001 12.0003 10.0001H14.667C15.0352 10.0001 15.3337 10.2986 15.3337 10.6667C15.3337 11.0349 15.0352 11.3334 14.667 11.3334H12.0003C10.1594 11.3334 8.66699 9.84103 8.66699 8.00008Z"
            fill="#3165CB"
          ></path>
          <path
            d="M12.6663 7.99992C12.6663 8.36811 12.3679 8.66659 11.9997 8.66659C11.6315 8.66659 11.333 8.36811 11.333 7.99992C11.333 7.63173 11.6315 7.33325 11.9997 7.33325C12.3679 7.33325 12.6663 7.63173 12.6663 7.99992Z"
            fill="#3165CB"
          ></path>
        </svg>
        Full time
      </p>
      <p class="vacancy-card__small-location">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <rect width="14" height="14" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlink:href="#image0_64_8" transform="scale(0.0078125)" />
            </pattern>
            <image
              id="image0_64_8"
              width="128"
              height="128"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAA1BSURBVHic7Z17sFdVFcc/6wLyUAEhFFBuKqGp+UDNFz5QitHxgTmVDuqUr7HMjHyW0ThaoI45g02kllnRmDolSTJpGqMgJIr4GgVETFJ8YAoiKorA6o91rv643vs75/c7v7X3/qHfmTXcP7hrfdfj7nPOfqwtqsqmChEZBOwCDMpkcAc/A7xSRRar6vKwzMNBNrUCEJHdgTGZ7ANISZUKzAPuBO5U1YUl9SWFpi8AEekKHIIl/DhgB2eTi4FpWEHMVdUNzvZc0bQFICK9gQuBc4GtItFYDvwauFZV343EoRSargBEpDvwXeAnwOci02nDcuBy4Lequi42mVrQNAUgIi3AKcAVwOcj0+kMi4FLVfWO2ESKoikKQESOBq4Edo/NpSAeBi5W1VmxieQh6QIQkW7AZOCs2FzqxK+AH6b8WEi2AERka+AO4ODYXEpiBvANVV0Zm0hHSLIARGQ49pnVGptLg7AEOFZVF8Um0h4tsQm0h4icCMxm00k+wBeAuSJyVGwi7ZFMAYhhAnAb0Cs2Hwf0AaaLyPmxiVQimQIAJgKXxibhjBbgWhH5aWwibUjiHUBETgH+FJtHQCjwdVWdGptI9AIQkQOAB4DuUYmEx7vACFV9MiaJqAUgIkOwlbZtopGIixeBL6vq67EIRHsHEJHNgb/z6U0+2JfOVBHZLBaBKAUgIgJMAfaKYT8xjABuiGU81gjwbeCESLZTxGkiMjaG4eDvACLSE3gO2Dao4fSxFNhZVdeGNBpjBDifz5LfEbYHzgltNOgIICIDgOeBLYMZbS68CQxV1VWhDHYNZSjDZcRNvmILMy8Dr2K7fuHjHcLbYvP2ZTeS1ov+wCUEnBENNgKIyDDgGaBbEIMf40Pgfmx1cZqqvlLtP4vIYGyD6fHA4YTnuwYYpqovB7GmqkEEW9vXgLIBm15uLcG5NdOxITD3m4LlJVDyWwMHcBYwvIH8h2c6Q/FfBwwMkZtQXwFjAtkBuA44XFUfb5TCTNfhme4Q6IKdcXBHqAI4PoCNtcAZqjpOVdc3WrmqrlfVccAZmS1vhIiZ/0ugiGwFvI7/F8dJqnq7sw3go11Ltzmb+QAYoKqrPY2EGAGOxj/5E0MlHyCzNdHZTHfgSGcbQQrAeyi7CxjvbKMjjM9se8L9MeD6CBCRHsAbwOZOJtYAO6nqMif9VSEi22GngXo6mXgL2FpVP3TS7z4CjMIv+QCTYiUfILM9ydFEX+AwR/3uBeB5lOsN4CpH/UVxFcbFC3s76nYvgMGOuqeo6tuO+gsh4zDF0YRnDJu6AO501F0rPLk0dQEMyv8vdeF/wBwn3fVgDsbJA01dAF7k79OEWrNkXO5zUt/UBeA1Aix10lsGS530esUQcCwAEemP32GPV530loEXpx4i0s9Jt+sI4Fm5n6YCAMfHgGcBeG79esdRd73w5OQWS88CWOGoe6Cj7nrhyelNL8WeBeA5O+b6ZlwnPDm5xdKzAFZie+k84PpmXCe8OK3HYukCtwLIvo29HgP7OOktAy9OK9RxydZ7HsBr6DpARJI5VZxxOcBJveej1L0AvM69txBo02RBHIdfLF9z0gv4F8CjjrpPdNRdKzy5zHPU7V4ADzrqHiUiIx31F0LGYZSjCddFL+8tYf2xVTKvs3aPAvt5viRVQ9bo4hFgXycTiu0Mbsp5ADLiCxxN7Auc7Kg/Dyfjl3yARZ7JhzC7gj0fAwCTRWRXZxufQGZzsrOZ2c76gxTATGf9vYFpnitm7ZHZmpbZ9oT3H0+Qk0GbY+fx+7gasl6Dx3mfpBGRLbHuZiM97WB9BAd773t0HwHU7tLx3DTZhpHAQyIy1MtApvsh/JMP8Ocgm14DHQ/flXBHq98ERjv4MDrTHcqPfYLkJoSRLIAPBAyeAn/Dum6V5b1zpisk93nB8hKwAL4ZOIiKtYe5ETiQ7H2nIFfJfufGTEdo3meGykvIHkHdgBeI1yLuNezlbSbVm0Qdhs3tx9p0sgJraxPkHsLQbeLGArcEM9icOEdVrw9lLEan0JnAoUGNNg8ew7qHBzvzEKMA9sAc7RLUcPpQ4CBVnRvSaPBWsar6FHbf7mfYGDeHTj5EujBCRPoCzwJbBzeeJlZijS5cd/90hCjt4lX1LeCiGLYTxSUxkg/xr4y5F/hqNAJpYCbW1zBKImIXwA7A02ya9wQWwfvAHqr6XCwCUe8NVNUXgGTu0IuAy2MmH9K4Nq4LMBffnTUp4klgX418s3j0m0PV2rqeiTVI/rRgPdbWNrrP0QsAQO3yxGti8wiISao6PzYJSOAR0IasqeRTwLDYXJzxH2B3VX0vNhFIZAQAUNX3gbOwKdFNGWenknxIqAAAVHUmcFNsHo74g6r+KzaJSiTzCGhDNk28gDSPgJfB68AuqurZOKNmJDUCwEfTxOfG5uGA81JLPiQ4ArRBRKYCX4vNo0GYrqrHxibREVIugMHYo8D7PIE3VgO7asSu5tWQ3COgDWr3+10cm0cD8ONUkw8JjwDw0enbB2jeLWRzgENirfQVQdIFACAiO2Hz5j1ic6kRa4G9VHVhbCLVkOwjoA2quhj4WWwedWBC6smHJhgBAESkKzAf2CM2l4J4BthbVUPcL1gKyY8AANmq2ZnYKlrq2ICd7Ek++dAkBQCgqvOAX8bmUQCTY+zurRfRHwHZS94Y7HKkb1X7y8l6DTwNbB+GXc14EdhNVTttHJ2tev4R6y00TVWXhCLXIUIdQqw4eNkCjACuBhax8aHIywr8/mjqP3TpLUcV4D+x3e8swG4eOwhoCZ6PQEnvhd2CeTO2KNJZAD/AZs3y9E1JINnt5ZYCvPek+mnj5cDvsBGxV1MXAPbdfhp2veqaGgI5h5yj3ED/nEIKLW9g7dyqce6CNX0sqvO9LHanAT2apgCAfti9ustLBPR7BeyMTSDxbXJqAb7nl9D/GnAp0DfZAsDO1k/Cbs4oG9C3gSEFbP4jgeTfU4DnDljTp7K2VgPXAgOTKQBsaBuXJa2Rgb2rgO3WLCixkv8OsH0Bnv9ssN1VwPeBLlELANgPO+rtFeATC3A4L2IBjCvA71RH+/OxfgLhCwB7zq93DvByoF8OjxasdVvo5D9MzmcbMAB7QfTksR4YH6wAgJ7ArQED/fsCnHbDVt9CcVqLbe3O43VLQE63Aj1dCyCr6Fo+ZRolXynA7YqAfH5egM9REeI0j5zP0boLAOgGzIrglALPkzMxgt1SujAAl0VA9xwuW2BXycaI1Sygm0cBXB/JoTb5RQGOI7DVOC8OG7AdPnk8JkWO1fUNLQDSmHRZR4H2qVj/oWiBBfbH/+W4iIxtSAFg3/nPJeCQAo8DXXP49gZecrC9DOhd4DH5VAJx0ixnufMERQrgpAScqZQfFeB8rIPdMQXsjk8gPpVyUiMKYHYCjlTKGmBYAd63N9DmXwrY2xlr+RI7PpUyuxEFsCoBR9rL/eSvGG6D9d0ta2sFOXPvWHPpWF9I1WRVqQLADmjGdqIzye2ojS2llrVzegE7ZycQj85kUJkC2D8BBzqTlXnOZT7MKGFjRgH9g4G3EohHZ7J/mQJoTcCBavLXAgkaim2uqFX3e8DQAvpDXyZRq7SWKYAuhJ1jr0eOL5Cki+rQe3EBvSck4H81WUvOp2BVBzMn5yTgSDV5GehToJDn16DzMfLnG/piF07E9r+azMnNb4ECOD0BR/LkhgJ+DKfY9S/rsFM9efp+k4DfeZL/AlvA0S2wF67YzlSTDcChBXy5uoCuqwvoOQzfNYdGyEpgi9IF0ESjwLPkr9L1BJZU0bGEnDV1bLfzswn4mye5f/2FCyBz/N4EnMqTCQX8GEnHL7ZrgZEFfn9CAn7myb2F81pDAQzATr3Gdq6arMW6b+f5MpqNN7G+TYHLJrHTyTGukatFnqGGTSGFCyALwEBgcQJOVpNHKHDEChvKR2aSe/AC+5J4JAH/qsliatwyXlMBVBTB3Qk4W00uqNWvAn5fkIBf1eTuWpNfVwFUBORs4u7JryYfAkc0MPlHkO7QvxprP1ufbyUDsyN2x33sIHQkK7CLmMr6uBONWVX0kAeBHUv514AAtQAXkt5auAL/BUaU8O3gTEdsP9rL+1nMSx8nb8gQmQVrCDbRktpfyzqsyVTVqd12vmwGXEkae/sqZUUW49xzk8ELoCJ4vYDvYI0PYgesUl7JgvfFKtyHYc0aXk2Ab6UsyGLa8J4Bbi1isiaPo4EfAEdiu2ZSwXJs3/5SbEq3NZMh8Sh9AgrcA1yHTey4JCpIjyARGYYtnR4DHMhn9wZ3hvXYOcfpwFQNcKNYjMuj+2EjwjHZv1sFJZAeVmJ/6dOxXgNBW8rHvjiyC9Yc6RhgFPAl7IjXpowPsE5nM7Ck/1vt5rQoiN4mrhJZR9BdgL3aSb+YvEpgBfBEO1moCVwX14akCqAziMgQrBD2xNqtbFchvSNSA1tIWlYhL2DNrZ9Q1ZdiEiuCpiiAahCRLdm4ILbD+hX1wdb/e2Kfpp39DLYBdE0mnf28Ctt+VpnsZaq62ttHT/wfHG7wjb+y8c8AAAAASUVORK5CYII="
            />
          </defs>
        </svg>

        <span> Toshkent shahri, Chilonzor tumani </span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "SmallVacancyCard",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.vacancy-card {
  &__small {
    padding: 20px 24px;
    background: rgba(243, 245, 251, 0.3);
    border: 1px solid #c5d4f0;
    box-sizing: border-box;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      box-shadow: 0 16px 22px rgba(0, 0, 0, 0.04);
      transform: translateY(-4px) !important;
      border-color: #3165cb;
    }
    &-title {
      font-weight: 700;
      font-size: 18px;
      line-height: 124%;
      color: #26292e;
      -webkit-line-clamp: 2;
    }
    &-unit {
      font-weight: 600;
      font-size: 16px;
      line-height: 130%;
      color: #3165cb;
      -webkit-line-clamp: 1;
    }
    &-payment {
      font-weight: 700;
      font-size: 18px;
      line-height: 130%;
      color: #26292e;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    &-location {
      font-weight: 600;
      line-height: 130%;
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 14px;
      color: #79838e;
    }
  }
}
</style>
