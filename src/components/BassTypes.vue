<script lang="ts">
import { Bass } from '../models/Bass';
import bassData from '../assets/basses.json';
import { nextTick } from '@vue/runtime-dom';
export default {
  data() {
    return {
      basses: [] as Bass[],
      slideshowIndex: 0,
      dots: [] as HTMLSpanElement[],
      bassesInPlace: false,
    };
  },
  methods: {
    prevImg() {
      this.toggleShowImg();
      if (this.slideshowIndex > 0) {
        this.slideshowIndex--;
      } else {
        this.slideshowIndex = this.basses.length - 1;
      }
      this.selectDot();
      this.toggleShowImg();
    },
    nextImg() {
      this.toggleShowImg();
      if (this.slideshowIndex !== this.basses.length - 1) {
        this.slideshowIndex++;
      } else {
        this.slideshowIndex = 0;
      }
      this.selectDot();
      this.toggleShowImg();
    },
    setDots() {
      const dots = this.$refs.dots as HTMLSpanElement[] | undefined;
      if (dots) {
        this.dots = dots;
        this.dots[0].classList.add('filled-dot');
      }
    },
    selectDot() {
      if (this.dots) {
        this.dots.forEach((dot) => {
          dot.classList.remove('filled-dot');
        });
        this.dots[this.slideshowIndex].classList.add('filled-dot');
      }
    },
    setBasses() {
      bassData.forEach((bass) => {
        this.basses.push(new Bass(bass.name, bass.img, bass.description));
      });
    },
    wait(timeInMilliseconds: number): Promise<void> {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, timeInMilliseconds);
      });
    },
    toggleShowImg() {
      this.wait(2).then(() => {
        (this.$refs.bassImg as HTMLImageElement).classList.toggle(
          'show-bass-img'
        );
      });
    },
  },
  mounted() {
    this.setBasses();
    this.bassesInPlace = true;
    nextTick(() => {
      (this.$refs.bassImg as HTMLImageElement).classList.add('show-bass-img');
      this.setDots();
    });
  },
};
</script>
<template>
  <div v-if="bassesInPlace === true">
    <img
      v-if="bassesInPlace === true"
      :src="basses[slideshowIndex].img"
      alt=""
      height="200"
      class="bass-img"
      ref="bassImg"
    />
    <p>{{ basses[slideshowIndex].description }}</p>
    <div class="dots-container">
      <span v-for="(bass, index) in basses" ref="dots" class="dots"></span>
    </div>
    <button @click="prevImg">&lt;</button>
    <button @click="nextImg">></button>
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
.bass-img {
  opacity: 0;
  transition: none;
}
.show-bass-img {
  opacity: 1;
  transition: opacity 1s;
}
</style>
