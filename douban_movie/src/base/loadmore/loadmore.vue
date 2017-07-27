<template>
  <div>
    <div class="hasmore" v-if="hasMore">loadmore</div>
    <div class="nomore" v-else>
      没有更多了...
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      hasMore: {
        type: Boolean,
        default: true
      }
    },
    data(){
      return {}
    }
  }
</script>

<style scoped>

</style>
