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
    async prevImg() {
      await this.toggleShowImg();
      if (this.slideshowIndex > 0) {
        this.slideshowIndex--;
      } else {
        this.slideshowIndex = this.basses.length - 1;
      }
      this.selectDot();
      this.toggleShowImg();
    },
    async nextImg() {
      await this.toggleShowImg();
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
    toggleShowImg(): Promise<void> {
      return new Promise((resolve) => {
        setTimeout(() => {
          (this.$refs.bassImg as HTMLImageElement).classList.toggle(
            'show-bass-img'
          );
          resolve();
        }, 10);
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
    <div class="bass-container">
      <h2>{{basses[slideshowIndex].name}}</h2>
      <img
        v-if="bassesInPlace === true"
        :src="basses[slideshowIndex].img"
        alt=""
        class="bass-img"
        ref="bassImg"
      />
    <button @click="prevImg" class="prev-btn">&lt;</button>
    <button @click="nextImg" class="next-btn">></button>
      <div class="dots-container">
        <span v-for="(bass, index) in basses" ref="dots" class="dots"></span>
      </div>
      <p>{{ basses[slideshowIndex].description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/variables';
.bass-container {
  position: relative;
  padding: 10px;
}
.dots-container {
  position: relative;
  top: -20px;
  width: 100%;
  display: flex;
  gap: 2px;
  flex-direction: row;
  justify-content: center;
}
.dots {
  display: block;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 0.5px solid black;
}
.filled-dot {
  background-color: gray;
}

h2 { 
  padding: 10px;
}
.bass-img {
  width: 100%;
  //height: 225px;
  opacity: 0;
  transition: none;
}
.show-bass-img {
  opacity: 1;
  transition: opacity 1s;
}

button {
  position: absolute;
  top: 112px;
  font-weight: bold;
  font-size: 2.5rem;
  background-color: transparent;
  border: none;
  -webkit-text-stroke: 3px $primary;
  cursor: pointer;
}
.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}
</style>
