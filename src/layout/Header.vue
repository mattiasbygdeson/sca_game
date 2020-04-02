<template>
  <header>
    <router-link to="/">
      <img class="logotype" src="../assets/images/logo.png" alt="SCA logotype" />
    </router-link>

    <nav class="menu-language">
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
  name: 'Header'
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

.menu-language {
  float: right;
}

.button-language {
  border: 0;
  height: 30px;
  width: 30px;
  margin-left: 20px;
  border-radius: 50px;
  background-size: 100%;

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
</style>
