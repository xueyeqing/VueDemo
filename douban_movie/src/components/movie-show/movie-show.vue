<template>
  <div class="movie-show">
    <div class="go-search">
      <div class="logo">
        <img src="../../common/image/douban-logo.png" width="30" height="30">
      </div>
      <div class="search-content">
        <span class="icon-search"></span>
        <span>电影/影人/标签</span>
      </div>
    </div>
    <switches :switches="switches" :currentIndex="currentIndex" @switch="switchItem"></switches>

  </div>
</template>

<script>

  import Switches from 'base/switches/switches';

  import {getMovie} from '../../api/movie-show';

  const SEARCH_MORE = 10; // 每次请求数据的长度

  export default{
    data(){
      return {
        currentIndex: 0,
        switches: [
          {name: '正在热映'},
          {name: '即将上映'}
        ],
        hotMovieIndex: 0
      }
    },
    created(){
      this._getMovie();
    },
    components: {
      Switches
    },
    methods: {
      switchItem(index) {
        this.currentIndex = index;
      },
      _getMovie() { // 获取正在上映的电影
        getMovie(this.hotMovieIndex, SEARCH_MORE).then((res) => {
          this.$emit('hasLoad');
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/variable.styl"
  .movie-show
    height: 100%
    .go-search
      height: 50px
      box-sizing: border-box
      padding: 10px 10px 5px 60px
      text-align: center
      .logo
        position: absolute
        left: 10px
    .search-content
      background-color: $color-background-d
      font-size: $font-size-medium-x
      line-height 30px
      border-radius: 5px
      span
        display: inline-block
        vertical-align: middle

</style>
