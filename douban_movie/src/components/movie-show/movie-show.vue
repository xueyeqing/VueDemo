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

    <div class="list-wrapper">
      <!--正在热映-->
      <scroll class="list-scroll"
              v-show="currentIndex === 0"
              :pullup="pullup"
              :data="hotMovies"
              @scrollToEnd="loadMore">
        <div class="list-inner">
          <movie-list :movies="hotMovies" :hasMore="hasMoreHotMovies" @select="selectM"></movie-list>
        </div>
      </scroll>
      <!--即将上映-->
      <scroll class="list-scroll"
              v-show="currentIndex === 1"
              :pullup="pullup"
              :data="comingMovies"
              @scrollToEnd="loadMore">
        <div class="list-inner">
          <movie-list :movies="comingMovies" :hasMore="hasMoreComingMovies"></movie-list>
        </div>
      </scroll>
      <loadmore :fullScreen="fullScreen"
                v-show="currentIndex===1&&!comingMovies.length||currentIndex===0&&!hotMovies.length">
      </loadmore>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">

  import Switches from 'base/switches/switches';
  import Scroll from 'base/scroll/scroll';
  import Loadmore from 'base/loadmore/loadmore';
  import MovieList from 'components/movie-show/movie-list'

  import {getMovie, getComingMovie} from '../../api/movie-show';
  import {createMovieList} from '../../common/js/movieList';

  import {mapMutations} from 'vuex';

  const SEARCH_MORE = 10; // 每次请求数据的长度

  export default{
    data(){
      return {
        currentIndex: 0,
        switches: [
          {name: '正在热映'},
          {name: '即将上映'}
        ],
        fullScreen: true, // 加载动画全屏
        loadingFlag: true, // 控制滚动加载速度
        pullup: true, // 支持滚动加载
        hotMovieIndex: 0,
        comingMovieIndex: 0,
        hasMoreHotMovies: true,
        hasMoreComingMovies: true,
        scrollY: -1,
        hotMovies: [],
        comingMovies: [],
        scrollIndex: 0,
      }
    },
    created(){
      this._getMovie();
    },
    components: {
      Switches, Scroll, MovieList, Loadmore
    },
    methods: {
      scroll(pos) { // 获取滚动位置
        console.log(pos);
        this.scrollY = pos.y;
      },
      switchItem(index) {
        this.currentIndex = index;
        // 第一次切换到即将上映选项卡后开始请求即将上映电影的数据
        if (index === 1 && !this.comingMovies.length) {
          getComingMovie(this.comingMovieIndex, SEARCH_MORE).then((res) => {
            this.comingMovies = createMovieList(res.subjects); // 格式化数据，创建包含电影类的数组
          });
        }
      },
      _getMovie() { // 获取正在上映的电影
        getMovie(this.hotMovieIndex, SEARCH_MORE).then((res) => {
          this.$emit('hasLoad');
          this.hotMovies = createMovieList(res.subjects); // 创建movie类封装数据
          this._checkMore(res); // 检查是否还存在更多数据
        });
      },
      loadMore() { // 加载更多数据
        if (!this.loadingFlag) { // 上一次加载还未完成时候，忽略此次事件
          return;
        }
        this.loadingFlag = false; // 重置加载标志位
        if (this.currentIndex === 0) { // 加载更多上映信息
          if (!this.hasMoreHotMovies) { // 不存在更多电影
            this.loadingFlag = true;
            return;
          }
          this.hotMovieIndex += SEARCH_MORE;
          getMovie(this.hotMovieIndex, SEARCH_MORE).then((res) => {
            this.hotMovies = this.hotMovies.concat(createMovieList(res.subjects));
            this._checkMore(res); // 检查是否还存在更多数据
            this.loadingFlag = true;
          });
        } else {
          if (!this.comingMovies) { // 不存在更多电影
            this.loadingFlag = true;
            return;
          }
          this.comingMovieIndex += SEARCH_MORE;
          getComingMovie(this.comingMovieIndex, SEARCH_MORE).then((res) => {
            this.comingMovies = this.comingMovies.concat(createMovieList(res.subjects));
            this._checkMore(res);
            this.loadingFlag = true;
          });
        }
      },
      _checkMore(data) {
        const movies = data.subjects;
        if (!movies.length || data.start + data.count > data.total) {
          if (this.currentIndex === 0) {
            this.hasMoreHotMovies = false;
          } else {
            this.hasMoreComingMovies = false;
          }
          this.loadingFlag = true;
        }
      },
      selectM(movie){
        // 存储当前电影内容
        this.setMovie(movie);
        // 转入电影详情
        this.$router.push({
          path: `/movie/${movie.id}`
        });
      },
      ...mapMutations({
        setMovie: 'SET_MOVIE'
      })
    },
    watch: {
      scrollY(newY, oldY) {
        console.log('scrollY')
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

  .list-wrapper
    position: absolute
    top: 97px
    bottom: 61px
    width: 100%
    .list-scroll
      position: relative
      height: 100%
      overflow: hidden
      .list-inner
        padding: 0px 15px

</style>
