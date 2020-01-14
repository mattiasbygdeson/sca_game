<template>
  <div>
    <h2>{{this.headlines.userForm}}</h2>

    <nav class="bottom-right">
      <ul>
        <router-link to="/guide"><li class="button-secondary">Go back</li></router-link>
        <router-link to="/game"><li class="button-primary">Start game</li></router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    headlines: Object
  }
}
</script>

<style scoped>

</style>
