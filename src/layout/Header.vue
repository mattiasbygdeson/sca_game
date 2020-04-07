<template>
  <header>
    <router-link to="/">
      <img class="logotype" src="../assets/images/logo.png" alt="SCA logotype" />
    </router-link>

    <nav class="submenu">
      <select @change="$emit('set-content', type)" class="dropdown-menu" id="materials" v-model="type">
        <option value="decking">{{this.paragraphs.decking}}</option>
        <option value="ducks">{{this.paragraphs.ducks}}</option>
      </select>

      <button 
        class="button-language icon-eng" 
        aria-label="Switch to english language" 
        title="English"
        @click="$emit('change-lang', 'eng')"
      />
      <button 
        class="button-language icon-swe" 
        aria-label="Switch to swedish language"
        title="Swedish"
        @click="$emit('change-lang', 'swe')"
      />
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    paragraphs: Object,
  },
  data() {
    return {
      type: "decking",
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 10px;
  background: #f9faf9;

  .logotype {
    width: 80px;
  }
}

.submenu {
  float: right;
}

.button-language {
  border: 0;
  height: 30px;
  width: 30px;
  margin-left: 20px;
  border-radius: 50px;
  background-size: 100%;
  position: relative;
  bottom: 5px;

  &.icon-eng {
    background-image: url("../assets/images/flag-eng.png");
  }

  &.icon-swe {
    background-image: url("../assets/images/flag-swe.png");
  }

  &:focus {
    outline: 0;
  }
}

.dropdown-menu {
  // border: 2px solid red;
  height: 30px;
  width: 200px;
}
</style>
