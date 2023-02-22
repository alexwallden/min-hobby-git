<script lang="ts">
import { getBaseTransformPreset } from '@vue/compiler-core';
import jazzBassImg from '../assets/jazz-bass.jpeg';
import precisionBassImg from '../assets/precision-bass.jpeg';
import { Bass } from '../models/Bass';
import { ref } from 'vue';
export default {
  data() {
    return {
      basses: [
        new Bass('Jazz bass', jazzBassImg),
        new Bass('Precision bass', precisionBassImg),
      ],
      slideshowIndex: 0,
      dots: [] as HTMLSpanElement[],
    };
  },
  methods: {
    goLeft() {
      if (this.slideshowIndex > 0) {
        this.slideshowIndex--;
      } else {
        this.slideshowIndex = this.basses.length - 1;
      }
      this.selectDot()
    },
    goRight() {
      if (this.slideshowIndex !== this.basses.length - 1) {
        this.slideshowIndex++;
      } else {
        this.slideshowIndex = 0;
      }
      this.selectDot()
    },
    setDots() {
      this.dots = this.$refs.dots as HTMLSpanElement[];
      this.dots[0].classList.add('filled-dot');
    },
    selectDot() {
      this.dots.forEach((dot) => {
        dot.classList.remove('filled-dot');
      });
      this.dots[this.slideshowIndex].classList.add('filled-dot');
    },
  },
  mounted() {
    this.setDots();
  },
};
</script>
<template>
  <div>
    <img :src="basses[slideshowIndex].img" alt="" height="200" />
    <div class="dots-container">
      <span v-for="(bass, index) in basses" ref="dots" class="dots"></span>
    </div>
    <button @click="goLeft">&lt;</button>
    <button @click="goRight">></button>
  </div>
</template>

<style lang="scss" scoped>
.dots-container {
  display: flex;
  flex-direction: row;
}
.dots {
  display: block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid black;
}
.filled-dot {
  background-color: gray;
}
</style>
