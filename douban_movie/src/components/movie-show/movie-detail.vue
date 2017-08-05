<template>
  <div class="detail-wrapper">
    <div class="fixed-title">
      <span class="back" @click="back">
        <i class="icon-back"></i>
      </span>
      <span class="type">
          <span class="icon" v-show="!this.changeFix">电影</span>
          <span v-show="this.changeFix"></span>
        </span>
    </div>
    <div class="movie-detail"></div>
  </div>
</template>

<script type="text/ecmascript-6">

  //  import Scroll from 'base/scroll/scroll';

  import {getMovieDetail} from '../../api/movie-detail'

  import {mapGetters} from 'vuex';

  export default{
    name: 'movieDetail', // 创建name属性用于keep-alive组件定位本组件防止缓存
    data(){
      return {
        movieDetail: {},
        changeFix: false // fix栏目图标的显示隐藏
      }
    },
    created() {
      this._getDetail(); // 获取电影详细信息
    },
    mounted(){
    },
    methods: {
      back() { // 回退到上一页面
        this.$router.back();
      },
      _getDetail() {
        console.log('获取电影详情', this.movies);
//        if (!this.movie.id) { // 在当前界面刷新回退到主界面
//          this.$router.push('/movie-show');
//          return;
//        }
//        getMovieDetail(this.movie.id).then((res) => { // 获取电影详细
//          console.log('detail', res)
//        });
      }
    },
    computed: {
      ...mapGetters([
        'movies'
      ])
    }
//    components: {
//      Scroll
//    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/variable.styl"
  @import "../../common/stylus/mixin.styl"

  .detail-wrapper
    position: relative
    z-index: 10
    .fixed-title
      position: fixed
      top: 0
      width: 100%
      height: 40px
      z-index: 100
      background-color: rgba(85, 85, 85, .6)
      text-align: center
      .back
        position: absolute
        top: 0px
        left: 6px
        z-index: 50
        .icon-back
          display: block
          padding: 10px
          font-size: $font-size-large
          color: $color-background
      .type
        .icon
          position: absolute
          left: 50%
          top: 0
          color: $color-background
          display: block
          padding: 10px
          transform: translateX(-50%)
    .movie-detail
      position: fixed
      top: 0
      bottom: 0
      left: 0
      right: 0
      background: $color-background-f


</style>
