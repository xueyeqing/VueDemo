<template>
  <div class="movie-list">
    <ul>
      <li v-for="(movie,index) in movies" @click="selectMovie(movie)" ref="group">
        <div class="item">
          <div class="info-img">
            <img :src="movie.image" class="" height="120" width="80">
          </div>
          <div class="info-desc">
            <p class="title">{{movie.title}}</p>
            <div class="director">导演: {{movie.director}}</div>
            <div class="casts">主演: {{movie.casts}}</div>
            <div class="hasWatched">{{movie.collectCount}}人看过</div>
          </div>
        </div>
      </li>
    </ul>
    <loadmore :hasMore="hasMore" v-show="movies.length"></loadmore>
  </div>
</template>

<script>
  import Loadmore from 'base/loadmore/loadmore';
  export default{
    props: {
      movies: {
        type: Array,
        default: []
      },
      hasMore: {
        type: Boolean,
        default: true
      }
    },
    data(){
      return {}
    },
    methods: {
      selectMovie(movie){
        this.$emit('select', movie);
      }
    },
    components: {
      Loadmore
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"
  @import "../../common/stylus/mixin.styl"
  .movie-list
    ul
      .date
        width: 100%
        background-color: $color-background-d
        padding-left: 5px
        height: 30px
        line-height: 30px
      .item
        display: flex
        align-items: center
        box-sizing: border-box
        padding: 15px 0
        .info-img
          flex: 80px 0 0
          margin-right: 10px
        .info-desc
          height: 120px
          flex: 1
          display: flex
          flex-direction: column
          justify-content: space-around
          overflow: hidden
          .title
            font-size: $font-size-medium-x
            color: $color-text-f
          .director
            font-size: $font-size-small
          .casts
            font-size: $font-size-small
            no-wrap()
          .hasWatched
            color: $color-text-f
            font-size: $font-size-small
</style>
