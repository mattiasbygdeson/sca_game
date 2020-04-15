<template>
  <div>
    <h1>{{this.headlines.home}}</h1>

    <p>{{this.paragraphs.introduction1}}</p>
    <p>{{this.paragraphs.introduction2}}</p>
    <p>{{this.paragraphs.introduction3}}</p>

    <h2>Choose your timber type</h2>

    <nav>
      <select @change="$emit('set-content', product_type)" class="dropdown-menu" id="materials" v-model="product_type">
        <option value="decking">{{this.paragraphs.decking}}</option>
        <option value="ducks">{{this.paragraphs.ducks}}</option>
      </select>

      <button @click="$router.push('/instructions')" class="button-primary">
        {{this.paragraphs.buttonContinue}}
      </button>
    </nav>

    <router-link to="/adminscore">
      <li class="secret"></li>
    </router-link>

    <video autoplay muted loop id="myVideo" class="video-background">
      <source src="../assets/bgmovie.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      type: "decking",
    }
  },
  props: {
    headlines: Object,
    paragraphs: Object,
    product_type: String,
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: #fff;
}

h2 {
  color: #fff;
  font-size: 1.4em;
  margin-bottom: 0;
  margin-top: 10px;
}

p {
  width: 600px;
  font-size: 1em;
  color: #fff;
}

nav {
  margin-top: 25px;
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

.video-background {
  background-color: #000;
  position: fixed;
  top: -170px;
  left: -10px;
  width: 200vh;
  height: 150vh;
  z-index: -100;
}

.dropdown-menu {
  width: 200px;
  height: 50px;
  font-size: 1.2em;
  border-radius: 2px;
  padding-left: 10px;
  margin-right: 10px;
}

</style>
