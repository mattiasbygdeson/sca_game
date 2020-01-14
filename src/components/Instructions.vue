<template>
  <div>
    <h2>{{this.headlines.instructions}}</h2>

    <nav class="bottom-right">
      <ul>
        <router-link to="/"><li class="button-secondary">Go back</li></router-link>
        <router-link to="/guide"><li class="button-primary">Next</li></router-link>
      </ul>
    </nav>

    <div class="wrapper">
      <div class="column">
        <p>{{this.paragraphs.instructions1}}</p>
        <p>{{this.paragraphs.instructions2}}</p>
        <p>{{this.paragraphs.instructions3}}</p>
      </div>

      <div class="column">
        <!-- image -->
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

<style scoped>
.wrapper {
  border: 1px solid pink;
}

.column {
  border: 1px solid cyan;
}
</style>
