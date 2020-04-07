<template>
  <div class="woodboard" :class="{removed : isRemoved}" @click="removeBoard">
    <img :src="require(`@/products/${this.product.uri}`)" />
  </div>
</template>

<script>
export default {
  name: 'Woodboard',
  props: {
    product: Object
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

        if(this.product.defective) {
          this.$emit('add-point');
        } else {
          this.$emit('remove-point');
        }
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@keyframes move {
  from {  right: 300 * 20px }
  to { right: -300 * 20px }
}

.woodboard {
  // position: relative;
  // bottom: 120px;
  // perspective: 50em;
  display: inline-block;
  text-align: center;
  min-width: 200px;
  max-width: 200px;

  &:hover {
    cursor: pointer;
  }

  img {
    height: 90vh;
    // transform: rotateX(30deg);
  }
}

@keyframes slideout {
  from { transform: translateY(0) }
  to { transform: translateY(130vh) }
}

.removed {
  animation-name: slideout;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  // display: none;

  &:hover {
    cursor: initial;
  }
}
</style>
