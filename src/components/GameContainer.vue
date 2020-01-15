<template>
  <div>
    <div class="board-container">
      <!-- <h2>The game</h2> -->
      <Woodboard v-for="woodboard in woodboards" :key="woodboard.id" v-bind:woodboard="woodboard" />  
    </div>

    <p class="bottom-right">Score: {{this.score}}</p>
  </div>
</template>

<script>
import Woodboard from "./Woodboard";

export default {
  name: 'GameContainer',
  components: {
    Woodboard
  },
  data() {
    return {
      score: 0,
      woodboards: [
        {
          id: "001",
          uri: "testboard-good.png",
          defective: false,
        },
        {
          id: "002",
          uri: "testboard-bad.png",
          defective: true,
        },
        {
          id: "003",
          uri: "testboard-bad.png",
          defective: true,
        },
        {
          id: "004",
          uri: "testboard-good.png",
          defective: false,
        },
        {
          id: "005",
          uri: "testboard-good.png",
          defective: false,
        },
        {
          id: "006",
          uri: "testboard-bad.png",
          defective: true,
        },
      ]
    }
  },
  created() {
    this.shuffle(this.woodboards);
  },
  methods: {
    shuffle(array) {
      var ctr = array.length, temp, index;

      while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = array[ctr];
        array[ctr] = array[index];
        array[index] = temp;
      }

      this.woodboards = array;
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes move {
  from {right: 900px}
  to {right: -1150px}
}

.board-container {
  border: 1px solid blue;
  width: 1000%;
  // position: fixed;
  // right: 0;

  // animation-name: move;
  // animation-duration: 50s;
}


</style>
