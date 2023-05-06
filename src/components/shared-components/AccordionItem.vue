<template>
  <li
    class="accordion__item"
    :class="{ accordion__trigger_active: visible }"
    v-on="listeners"
  >
    <div
      class="accordion__trigger"
      :class="{ accordion__trigger_active: visible }"
      @click="open"
    >
      <!-- This slot will handle the title/header of the accordion and is the part you click on -->
      <slot name="accordion-trigger"></slot>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div
        class="accordion__content"
        :class="{ accordion__trigger_active: visible }"
        v-show="visible"
      >
        <ul>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <slot name="accordion-content"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  props: {
    clicked: Boolean,
  },
  inject: ["Accordion"],
  data() {
    return {
      index: null,
    };
  },
  computed: {
    visible() {
      return this.index === this.Accordion.active;
    },
    listeners() {
      if (this.disabled) return {};

      return {
        click: (event) => this.$emit("click", event),
      };
    },
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    },
  },
  created() {
    this.index = this.Accordion.count++;
  },
};
</script>

<style lang="scss" scoped>
.accordion__item {
  cursor: pointer;
  position: relative;
  &.accordion__trigger_active {
    background: #fff !important;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
  }
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  &.accordion__trigger_active {
    .question__accordion-text {
      color: #3165cb !important;
    }
    .accordion__btn {
      transform: rotate(45deg) !important;
      transition: 0.2s ease-in-out;
      color: #3165cb;
    }
  }
}
.accordion__content {
  &.accordion__trigger_active {
    border-top: 1px solid #dfe6f4 !important;
  }
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
