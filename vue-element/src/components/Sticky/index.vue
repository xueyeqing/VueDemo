<template>
  <div :style="{height:height+'px',zIndex:zIndex}">
    <div :class="className"
         :style="{top:stickyTop+'px',zIndex:zIndex,position:position,width:width,height:height+'px'}">
      <slot>
        <div>sticky</div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        active: false,
        position: '',
        width: undefined,
        height: undefined
      };
    },
    props: {
      stickyTop: {
        type: Number,
        default: 0
      },
      zIndex: {
        type: Number,
        default: 1
      },
      className: {
        type: String
      }
    },
    methods: {
      sticky() {
        if (this.active) {
          return
        }
        this.position = 'fixed';
        this.active = true;
        this.width = this.width + 'px';
      },
      reset() {
        if (!this.active) {
          return
        }
        this.position = '';
        this.width = 'auto'
        this.active = false;
      },
      handleScroll() {
        this.width = this.$el.getBoundingClientRect().width;
        const offsetTop = this.$el.getBoundingClientRect().top;
        if (offsetTop <= this.stickyTop) {
          this.sticky();
          return
        }
        this.reset()
      }
    },
    mounted() {
      this.height = this.$el.getBoundingClientRect().height;
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style scoped>

</style>
