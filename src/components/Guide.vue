<template>
  <div class="forest-background">
    <h2>{{this.headlines.guide}}</h2>

    <nav class="bottom-right">
      <ul>
        <router-link to="/instructions">
          <button class="button-secondary">{{this.paragraphs.buttonAbort}}</button>
        </router-link>
        <router-link to="/userform">
          <button class="button-primary">{{this.paragraphs.buttonNext}}</button>
        </router-link>
      </ul>
    </nav>

    <div class="wrapper">
      <div class="column">
        <img :src="require(`@/products/${this.guide_images.guideImage1}`)" />

        <div class="text-container">
          <h2>{{this.product_paragraphs.guide1}}</h2>
        </div>
      </div>

      <div class="column">
        <img :src="require(`@/products/${this.guide_images.guideImage2}`)" />

        <div class="text-container">
          <h2>{{this.product_paragraphs.guide2}}</h2>
        </div>
      </div>

      <div class="column">
        <img :src="require(`@/products/${this.guide_images.guideImage3}`)" />
        
        <div class="text-container">
          <h2>{{this.product_paragraphs.guide3}}</h2>
        </div>
      </div>
    </div>

    <div class="background-image"></div>
  </div>
</template>

<script>
export default {
  name: 'Guide',
  props: {
    headlines: Object,
    paragraphs: Object,
    product_paragraphs: Object,
    guide_images: Object,
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-column-gap: 20px;
}

.text-container {
  text-align: left;
  padding: 3%;

  h2 {
    margin: 0;
    margin-bottom: 8px;
    font-size: 1.3em;
  }

  p {
    padding-top: 8px;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    font-size: 0.9em;
  }
}

.column {
  text-align: center;
}

// .column:nth-last-of-type(2) {
//   position: relative;
//   left: 20px;
// }
</style>
