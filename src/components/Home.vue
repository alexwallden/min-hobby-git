<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<template>
  <section>
    <h2>Min hobby - elbas</h2>
    <p>
      Förutom att programmera så gillar jag att musicera. Det gör jag främst med
      instrumentet elbas
    </p>
    <div class="figures-container">
      <figure>
        <img src="../assets/basses.JPG" alt="Två basar" height="400" />
        <figcaption>
          Två av mina basar, en av märket Fender och en av märket Sandberg
        </figcaption>
      </figure>
      <figure>
        <img
          src="../assets/four-strings.JPG"
          alt="Huvudet på en fyrsträngad bas"
          height="400"
        />
        <figcaption>
          En bas kan ha olika antal strängar. Här är en som är <strong>fyrsträngad</strong>...
        </figcaption>
      </figure>
      <figure>
        <img
          src="../assets/five-strings.JPG"
          alt="Huvudet på en femsträngad bas"
          height="400"
        />
        <figcaption>
          ...och här är en bild på en <strong>femsträngad</strong> bas. Om det är svårt att räkna
          strängarna kan det vara enklare att räkna stämskruvarna som är de
          skruvar som sticker ut från basens <strong>huvud</strong>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.figures-container {
  display: flex;
  flex-direction: column;
  padding: 0 15vw;
}
figure {
  width: 300px;
  margin: 0;

  &:nth-child(odd) {
    align-self: flex-end;
  }
}
img{
  box-shadow: 3px 3px 10px;
}
</style>
