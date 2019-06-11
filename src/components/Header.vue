<template>
  <div class="header">
    <div
      class="collaspse"
      @click="toggleCollaspse"
    >
      <i :class="iconName" />
    </div>
    <div class="toolbar">
      <div class="item">
        <i class="el-icon-setting" />
      </div>
      <div class="item">
        <i class="el-icon-switch-button" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    },
    iconName () {
      return `el-icon-${this.isCollapse ? 's-unfold' : 's-fold'}`
    }
  },
  methods: {
    toggleCollaspse () {
      this.$store.commit('toggleCollaspse')
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .collaspse {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 100%;
      font-size: 18px;
      color: #666;
      cursor: pointer;
      &:hover {
        color: #333;
      }
    }

    .toolbar {
      height: 100%;
      display: flex;
      align-items: stretch;

      .item {
        margin: 5px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        text-align: center;
        font-size: 18px;
        color: #666;
        cursor: pointer;

        &:hover {
          background-color: rgba(0, 0, 0, .1);
        }
      }
    }
  }
</style>
