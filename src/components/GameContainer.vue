<template>
  <div>
    <UserForm v-if="!game_running" />

    <Game v-if="game_running" />

    <ul>
      <li><router-link to="/instructions-2">Go back</router-link></li>
    </ul>
  </div>
</template>

<script>
import UserForm from "./UserForm";
import Game from "./Game";

export default {
  name: 'GameContainer',
  components: {
    UserForm,
    Game
  },
  data() {
    return {
      game_running: false,
    }
  }
}
</script>

<style scoped>

</style>
