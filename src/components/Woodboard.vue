<template>
  <div class="woodboard" :class="{removed : isRemoved}" @click="removeBoard">
    <p>{{this.woodboard.id}}</p>
    <p>Defective: {{this.woodboard.defective}}</p>
  </div>
</template>

<script>
export default {
  name: 'Woodboard',
  props: {
    woodboard: Object
  },
  data() {
    return {
      isRemoved: false,
    }
  },
  methods: {
    removeBoard() {
      if(!this.isRemoved) {
        this.isRemoved = true;

        if(this.woodboard.defective) {
          //eslint-disable-next-line no-console
          console.log("You get one point!");
        } else {
          //eslint-disable-next-line no-console
          console.log("You lose one point");
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.woodboard {
  // height: 600px;
  // width: 550px;
  border: 1px solid pink;
  display: inline-block;
  margin: 20px;
  font-size: 0.75em;

  &:hover {
    cursor: pointer;
    background-color: pink;
  }
}

.removed {
  background-color: pink;

  &:hover {
    cursor: initial;
  }
}
</style>
