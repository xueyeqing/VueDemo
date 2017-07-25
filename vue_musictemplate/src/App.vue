<template>
  <div id="app">
    <div class="top-container">
      <topbar></topbar>
    </div>
    <div class="left-container">
      <leftbar></leftbar>
    </div>
    <div class="main-container">
      <div>
        <router-view></router-view>
      </div>
    </div>
    <div class="bottom-container">
      <bottombar></bottombar>
    </div>
  </div>
</template>

<script>
  import topbar from './components/topbar.vue'
  import leftbar from './components/leftbar.vue'
  import bottombar from './components/bottombar.vue'

  export default {
    name: 'app',
    components: {
      'topbar': topbar,
      'leftbar': leftbar,
      'bottombar': bottombar
    }
  }
</script>

<style lang="less" rel="stylesheet/less">

  // 全局引入公共css
  @import "./assets/styles/public.less";

  @media screen and (max-width: 750px) {
    #app {
      font-size: 32px;
    }

    .top-container {
      height: 100px;
    }

    .left-container {
      width: 0px;
    }

    .main-container {
      width: 100%;
      left: 0px;
      top: 100px;
      height: calc(100% - 100px - 60px);
    }
  }

</style>
