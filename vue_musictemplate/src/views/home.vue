<template>
  <div>
    <div class="main-container">
      <router-view></router-view>
    </div>
    <div class="tablist">
      <div class="tab" v-for="tab in tablist" @click="$router.push({name:tab.view});"
           :class="{select:(tab.view==$route.name)}">{{tab.name}}
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        tablist: [{
          name: "最新音乐",
          view: "newmusic"
        }, {
          name: "排行榜",
          view: "rank"
        }, {
          name: "歌单",
          view: "allplaylist"
        }]
      }
    }
  }
</script>

<style scoped>

  .tablist {
    width: calc(100% - 200px);
    height: 40px;
    border-bottom: solid 1px #dedede;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;;
  }

  .tablist .tab {
    margin-left: 40px;
    margin-right: 40px;
    cursor: pointer;
    transition: color 0.5s;
  }

  .tablist .tab.select {
    color: #4fc08d;
  }

  .main-container {
    left: 0px;
    top: 60px;
    width: 100%;
    position: absolute;
  }

  @media screen and (max-width: 750px) {
    .tablist {
      width: calc(100%);
      height: 80px;
      font-weight: 900;
    }

    .main-container {
      left: 0px;
      top: 100px;
    }
  }

</style>
