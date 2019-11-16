<template>
  <div class="page">
    <div class="page__header">
      <div class="page__title">
        <h4>{{ title }}</h4>
        <span>{{ subTitle }}</span>
      </div>
      <div class="page__breadcrumb">
        breadcrumb
      </div>
    </div>
    <div class="page__content">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  }

}
</script>
<style lang="scss" scoped>
.page__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.page__content {
  padding: 8px;
  background-color: #fff;
}
</style>
