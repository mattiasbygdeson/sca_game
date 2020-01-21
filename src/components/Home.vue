<template>
  <div>
    <!-- <h1>{{this.headlines.home}}</h1> -->
    <h1>{{this.headlines.home}}</h1>

    <p>{{this.paragraphs.introduction1}}</p>
    <p>{{this.paragraphs.introduction2}}</p>
    <p>{{this.paragraphs.introduction3}}</p>

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

    <router-link to="/adminscore">
      <li class="secret"></li>
    </router-link>
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

<style lang="scss" scoped>
p {
  width: 600px;
}

nav {
  margin-top: 70px;
}

.secret {
  border: 1px solid red;
  position: fixed;
  bottom: 0;
  left: 0;
  border-radius: 0;
  width: 100%;
  opacity: 0;

  &:hover {
    cursor: initial;
  }
}

</style>
