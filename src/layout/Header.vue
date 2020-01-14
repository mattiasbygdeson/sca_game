<template>
  <header>
    <router-link to="/">
      <img src="../assets/images/logo.png" alt="" width="146" />
    </router-link>

    <nav class="menu-language">
      <button class="button-language icon-eng" aria-label="Switch to english language" title="English" />
      <button class="button-language icon-swe" aria-label="Switch to swedish language" title="Swedish" />
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
  padding: 1%;
  border-bottom: 1px solid gray;
}

.menu-language {
  float: right;
}

.button-language {
  border: 0;
  height: 50px;
  width: 50px;
  margin-left: 10px;
  border-radius: 50px;
  background-size: 100%;

  &.icon-eng {
    background-image: url("../assets/images/flag-eng.png");
  }

  &.icon-swe {
    background-image: url("../assets/images/flag-swe.png");
  }
}
</style>
