<template>
  <div class="board-container">
    <!-- <h2>The game</h2> -->
    <Woodboard v-for="woodboard in woodboards" :key="woodboard.id" v-bind:woodboard="woodboard" />
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
      woodboards: [
        {
          id: "001",
          uri: "something.png",
          defective: false,
        },
        {
          id: "002",
          uri: "something.png",
          defective: true,
        },
        {
          id: "003",
          uri: "something.png",
          defective: true,
        },
        {
          id: "004",
          uri: "something.png",
          defective: false,
        },
        {
          id: "005",
          uri: "something.png",
          defective: false,
        },
        {
          id: "006",
          uri: "something.png",
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
.board-container {
  // border: 1px solid blue;
  // width: 2000%;
  // position: relative;
  // right: 550px;
}
</style>
