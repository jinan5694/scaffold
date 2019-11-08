<template>
  <transition
    :name="name"
    mode="out-in"
  >
    <slot />
  </transition>
</template>
<script>
export default {
  name: 'CustomTransition',
  data () {
    return {
      name: 'fade'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.name = toDepth < fromDepth ? 'right' : 'left'
    }
  }
}
</script>
<style lang="scss">
  $duration: 0.2s;
  $transform-width: 30px;
  $timing-function: ease-in-out;

  .fade {
    &-enter {
      opacity: 0;
      &-active {
        transition: opacity $duration $timing-function;
      }
    }
    &-leave {
      &-active {
        transition: opacity $duration $timing-function;
      }
    }
  }

  .left {
    &-enter {
      opacity: 0;
      transform: translate($transform-width, 0);
      &-active {
        transition: all $duration $timing-function;
      }
    }
    &-leave {
      &-active {
        transition: all $duration $timing-function;
        opacity: 0;
        transform: translate(-$transform-width, 0);
      }
    }
  }

  .right {
    &-enter {
      opacity: 0;
      transform: translate(-$transform-width, 0);
      &-active {
        transition: all $duration $timing-function;
      }
    }
    &-leave {
      &-active {
        transition: all $duration $timing-function;
        opacity: 0;
        transform: translate($transform-width, 0);
      }
    }
  }
</style>
