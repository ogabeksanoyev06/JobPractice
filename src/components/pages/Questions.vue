<template>
  <section class="section py-30">
    <div class="questions__header">
      <p>
        Izlagan ishingizga oid soha bo'yicha berilgan test savollarini yeching
        va bilimingizni sinab ko'ring
      </p>
      <img
        class="tests__content-query-questions-img"
        src="	https://proweb.uz/img/btn.980d8d71.webp"
        alt=""
      />
    </div>
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
          Test savollar
        </app-text>
        <app-text size="14" line-height="18" weight="500" class="color-text">
          Biz bilan bilimingizni sinab ko'ring
        </app-text>
      </div>
    </div>
    <Accordion class="items" data-aos="fade-up" data-aos-duration="20000">
      <AccordionItem
        class="question__accordion"
        v-for="(question, index) in questions"
        :class="questionId === question.id ? 'active' : ''"
        :key="index"
      >
        <template slot="accordion-trigger">
          <div class="question__accordion-header">
            <div class="d-flex align-center">
              <div
                class="question__accordion-img"
                :class="isDesktopSmall ? 'mr-10' : 'mr-20'"
              >
                <img :src="'/img/fakultet-image/' + question.image" alt="" />
              </div>
              <h4 class="question__accordion-text">
                {{ question.title }}
              </h4>
            </div>
            <button class="accordion__btn">+</button>
          </div>
        </template>
        <template slot="accordion-content">
          <div style="" v-for="(content, idx) in question.question" :key="idx">
            <div class="question__accordion-item">
              <div class="question__accordion-icon mr-20">
                <img src="/svg/question.svg" alt="" />
              </div>
              <h4 class="question__accordion-subtext">
                {{ content.title }}
              </h4>
            </div>
          </div>
        </template>
      </AccordionItem>
    </Accordion>
  </section>
</template>
<script>
import Accordion from "@/components/shared-components/Accordion";
import AccordionItem from "@/components/shared-components/AccordionItem";
export default {
  name: "AppQuestions",
  components: { Accordion, AccordionItem },
  data() {
    return {
      questions: [
        {
          id: 0,
          title: "Raqamli iqtisodiyot fakulteti",
          image: "RI.png",
          question: [
            {
              id: 0,
              title: "question",
            },
            {
              id: 1,
              title: "question",
            },
            {
              id: 2,
              title: "question",
            },
            {
              id: 3,
              title: "question",
            },
          ],
        },
        {
          id: 1,
          title: "Iqtisodiyot fakulteti",
          image: "IF.jpg",
          question: [
            {
              id: 0,
              title: "question",
            },
            {
              id: 1,
              title: "question",
            },
            {
              id: 2,
              title: "question",
            },
            {
              id: 3,
              title: "question",
            },
          ],
        },
        {
          id: 2,
          title: "Xalqaro turizm fakulteti",
          image: "XT.jpg",
          question: [
            {
              id: 0,
              title: "question",
            },
            {
              id: 1,
              title: "question",
            },
            {
              id: 2,
              title: "question",
            },
            {
              id: 3,
              title: "question",
            },
          ],
        },
        {
          id: 3,
          title: "Korporativ boshqaruv fakulteti",
          image: "KB.png",
          question: [
            {
              id: 0,
              title: "question",
            },
            {
              id: 1,
              title: "question",
            },
            {
              id: 2,
              title: "question",
            },
            {
              id: 3,
              title: "question",
            },
          ],
        },
        {
          id: 4,
          title: "Moliya va buxgalteriya hisobi fakulteti",
          image: "MB.png",
          question: [
            {
              id: 0,
              title: "question",
            },
            {
              id: 1,
              title: "question",
            },
            {
              id: 2,
              title: "question",
            },
            {
              id: 3,
              title: "question",
            },
          ],
        },
      ],
      questionId: null,
      contentId: null,
    };
  },
};
</script>
<style scoped lang="scss">
.questions__header {
  background-color: #3165cb !important;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  padding: 10px 20px;
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  p {
    font-weight: 600;
    font-size: 20px;
    line-height: 130%;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    max-width: 800px;
    width: 100%;
  }
}
.tests__content-query-questions-img {
  max-width: calc(50.71429px + 5.16071vw);
  animation: btnRotate 8s linear infinite;
  &:hover {
    animation: btnHover 2s linear infinite;
  }
}
.question__accordion {
  max-width: 1200px;
  width: 100%;
  background: rgba(243, 245, 251, 0.3);
  border: 1px solid #dfe6f4;
  border-radius: 12px;
  margin: 10px auto;
  overflow: hidden;
  &:hover {
    background: #f3f5fb;
  }

  &-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-img {
    img {
      max-width: 60px;
      max-height: 60px;
      border-radius: 50%;
      -o-object-fit: cover;
      object-fit: cover;
      -o-object-position: center center;
      object-position: center center;
    }
  }
  &-text {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #44494f;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &-item {
    display: flex;
    align-items: center;
    padding: 15px 30px 15px;
    &:hover {
      box-shadow: 0 4px 20px rgba(159, 171, 185, 0.16);
    }
  }
  &-icon {
    img {
      width: 20px;
    }
  }
  &-subtext {
    font-size: 16px;
    line-height: 130%;
    color: #26292e;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}
.accordion__btn {
  color: #26292e;
  font-weight: 400;
  font-size: 40px;
  line-height: 44px;
  transition: 0.3s ease-in-out;
}
@media (max-width: 375px) {
  .question__accordion-img {
    display: none;
  }
  .question__accordion-title {
    font-weight: 600;
  }
}
@media (max-width: 500px) {
  .question__accordion-text {
    font-size: 16px;
  }
  .tests__content-query-questions-img {
    display: none;
  }
  .questions__header {
    p {
      font-size: 16px;
      text-transform: inherit;
    }
  }
}
@keyframes btnRotate {
  100% {
    transform: rotate(1turn);
  }
}
@keyframes btnHover {
  100% {
    transform: rotate(-1turn);
  }
}
</style>
