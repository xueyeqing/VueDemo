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
    <scroll class="movie-detail" :data="movieDetail" ref="scroll">
      <div class="scroll-wrapper">
        <div class="scroll-content" v-if="movieDetail.images">
          <div class="bg-image">
            <img v-lazy="movieDetail.images.large"/>
          </div>

          <movie-info :movieDetail="movieDetail"></movie-info>
          <div class="switch">
            <switches :switches="switches" :currentIndex="currentIndex" @switch="switchItem"></switches>
          </div>

          <movie-comment v-show="currentIndex === 0"
                         :comments="movieDetail.popular_comments"
                         :commentNum="movieDetail.comments_count">
          </movie-comment>
          <movie-review v-show="currentIndex === 1"></movie-review>

        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">

  import MovieInfo from '../../components/movie-show/movie-info.vue'
  import MovieComment from '../../components/movie-show/movie-comment.vue'
  import MovieReview from '../../components/movie-show/movie-review.vue'
  import Scroll from 'base/scroll/scroll'
  import Switches from 'base/switches/switches'
  import {getMovieDetail} from '../../api/movie-detail'

  import {mapGetters} from 'vuex'

  export default{
    name: 'movieDetail', // 创建name属性用于keep-alive组件定位本组件防止缓存
    data(){
      return {
        movieDetail: {},
        changeFix: false, // fix栏目图标的显示隐藏
        switches: [
          {name: '短评'},
          {name: '影评'}
        ],
        currentIndex: 0
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
        if (!this.movie.id) { // 在当前界面刷新回退到主界面
          this.$router.push('/movie-show');
          return;
        }
        getMovieDetail(this.movie.id).then((res) => { // 获取电影详细
          this.movieDetail = res;
          let self = this;
          console.log(self.movieDetail);
        });
      },
      switchItem(index) { // 切换评论tab栏目
        this.currentIndex = index;
        this.$nextTick(() => {
          this.$refs.scroll.refresh();
        });
      }
    },
    computed: {
      ...mapGetters([
        'movie'
      ])
    },
    components: {
      Scroll, MovieInfo, Switches, MovieComment, MovieReview
    }
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
      .bg-image
        text-align: center
        padding: 50px 0 20px 0
        background-color: $color-background-f
        img
          width: 50%


</style>
