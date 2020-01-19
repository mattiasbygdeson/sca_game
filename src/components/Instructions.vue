<template>
  <div>
    <h2>{{this.headlines.instructions}}</h2>

    <nav class="bottom-right">
      <ul>
        <router-link to="/">
          <li class="button-secondary">{{this.paragraphs.buttonAbort}}</li>
        </router-link>
        <router-link to="/guide">
          <li class="button-primary">{{this.paragraphs.buttonNext}}</li>
        </router-link>
      </ul>
    </nav>

    <div class="wrapper">
      <div class="column">
        <p>{{this.paragraphs.instructions1}}</p>
        <p>{{this.paragraphs.instructions2}}</p>
        <p>{{this.paragraphs.instructions3}}</p>
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
