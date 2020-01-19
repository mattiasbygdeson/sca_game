<template>
  <div>
    <h1>{{this.headlines.home}}</h1>

    <p>{{this.paragraphs.introduction}}</p>

    <nav>
      <ul>
        <router-link to="/instructions">
          <li class="button-primary">{{this.paragraphs.buttonContinue}}</li>
        </router-link>
        <router-link to="/score">
          <li class="button-secondary">{{this.paragraphs.buttonScore}}</li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    headlines: Object,
    paragraphs: Object
  }
}
</script>

<style scoped>
p {
  width: 600px;
}

nav {
  margin-top: 70px;
}

</style>
