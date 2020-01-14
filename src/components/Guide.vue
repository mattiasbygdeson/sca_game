<template>
  <div>
    <h2>{{this.headlines.guide}}</h2>

    <nav class="bottom-right">
      <ul>
        <router-link to="/instructions"><li class="button-secondary">Go back</li></router-link>
        <router-link to="/userform"><li class="button-primary">Next</li></router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Guide',
  props: {
    headlines: Object
  }
}
</script>

<style scoped>

</style>
