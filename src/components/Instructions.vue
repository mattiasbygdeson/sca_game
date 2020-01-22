<template>
  <div>
    <h2>{{this.headlines.instructions}}</h2>

    <nav class="bottom-right">
      <router-link to="/">
        <button class="button-secondary">{{this.paragraphs.buttonAbort}}</button>
      </router-link>
      <router-link to="/guide">
        <button class="button-primary">{{this.paragraphs.buttonNext}}</button>
      </router-link>
    </nav>

    <div class="wrapper">
      <div class="column">
        <p>{{this.paragraphs.instructions1}}</p>
        <p>{{this.paragraphs.instructions2}}</p>
      </div>

      <div class="column">
        <img src="https://via.placeholder.com/446x297" />
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Instructions',
  props: {
    headlines: Object,
    paragraphs: Object
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 55% auto;
  grid-gap: 20px;
}
</style>
