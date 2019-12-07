<template>
  <div class="page">
    <div class="page__header">
      <div class="page__title">
        <h4>{{ title }}</h4>
        <span>{{ subTitle }}</span>
      </div>
      <div class="page__breadcrumb">
        <Breadcrumb />
      </div>
    </div>
    <div class="page__content">
      <slot />
    </div>
    <div class="page__footer">
      footer
    </div>
  </div>
</template>
<script>
import Breadcrumb from '@/components/container/breadcrumb'

export default {
  components: {
    Breadcrumb
  },
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
.page {
  padding: 16px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 16px;
  }
  &__title {
    h4 {
      font-size: 20px;
      font-weight: 700;
      color: #333;
      margin: 0;
      line-height: 1.7;
    }
    span {
      display: block;
      font-size: 13px;
      font-weight: normal;
      color: #999;
      line-height: 1.3;
      margin-top: 8px;
    }
  }
  &__content {
    padding: 8px;
    background-color: #fff;
  }
  &__footer {
    text-align: center;
    color: #999;
    font-size: 12px;
    padding: 16px 0;
  }
}
</style>
