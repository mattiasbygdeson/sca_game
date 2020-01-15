<template>
  <div class="woodboard" :class="{removed : isRemoved}" @click="removeBoard">
    <p>{{this.woodboard.id}}</p>
    <img :src="require(`@/assets/woodboards/${this.woodboard.uri}`)" width="250">
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
@keyframes move {
  from { right: 3000px }
  to { right: -2000px }
}

.woodboard {
  border: 1px solid pink;
  display: inline-block;
  text-align: center;
  font-size: 0.75em;

  position: relative;
  width: 500px;
  right: 3000px;
  
  animation-name: move;
  animation-duration: 40s;

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
