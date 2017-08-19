<template>
  <div class="movie-review">
    <div class="type-title" v-if="needTitle">
      影评xxx条
    </div>
    <div v-if="!needTitle"><span>全部影评xxx个</span></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
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
  .movie-review
    padding: 20px
    background: #fff
</style>
