<template>
  <div class="movie-comment">
    <div class="type-title" v-if="needTitle">
      短评xxx条
    </div>
    <ul>
      <li v-for="(comment,index) in comments">
        {{comment.author.name}}
      </li>
    </ul>
    <div v-if="!needTitle"><span>全部短评{{commentNum}}个</span></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      comments: {
        type: Array,
        default: []
      },
      commentNum: {
        type: Number,
        default: 0
      },
      needTitle: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .movie-comment
    padding: 20px
    background: #fff
</style>
