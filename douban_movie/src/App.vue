<template>
  <div id="app">
    <keep-alive>
      <router-view @hasLoad="hasLoad"></router-view>
    </keep-alive>
    <tab></tab>
    <loading v-if="!loadingFlag"></loading>
  </div>
</template>

<script>

  import Tab from 'components/bottomtab/tab.vue';
  import Loading from 'base/loading/loading.vue';

  export default {
    data() {
      return {
        loadingFlag: false
      };
    },
    methods: {
      hasLoad() {
        this.loadingFlag = true;
      }
    },
    components: {
      Loading,
      Tab
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
