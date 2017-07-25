<template>
  <div class="main">music</div>
</template>

<script>
  export default{
    data(){
      return {
        list: []
      }
    },
    methods: {}
  }
</script>

<style scoped>

  .main {
    position: fixed;
    width: calc(100% - 200px);
    height: calc(100% - 160px);
  }

  @media screen and (max-width: 750px) {
    .main {
      width: 100%;
    }
  }

</style>
