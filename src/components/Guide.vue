<template>
  <div>
    <h2>{{this.headlines.guide}}</h2>

    <nav class="bottom-right">
      <ul>
        <router-link to="/instructions">
          <li class="button-secondary">{{this.paragraphs.buttonAbort}}</li>
        </router-link>
        <router-link to="/userform">
          <li class="button-primary">{{this.paragraphs.buttonNext}}</li>
        </router-link>
      </ul>
    </nav>

    <p>{{this.paragraphs.guide1}}</p>

    <div class="wrapper">
      <div class="column">
        <img src="https://via.placeholder.com/358x233" />
        <p>{{this.paragraphs.guide2}}</p>
      </div>

      <div class="column">
        <img src="https://via.placeholder.com/358x233" />
        <p>{{this.paragraphs.guide3}}</p>
      </div>

      <div class="column">
        <img src="https://via.placeholder.com/358x233" />
        <p>{{this.paragraphs.guide4}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Guide',
  props: {
    headlines: Object,
    paragraphs: Object
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-column-gap: 5%;
}
</style>
