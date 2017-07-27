### css预处理器使用的是stylue
 > 在众多优秀的CSS预处理器语言中就属Sass、LESS和Stylus最优秀
 
 > 安装： stylus-loader stylus
 
### 如何使用字体图标
  ```
  使用字符图标有三种方法：
    1、把字符直接写在html文件里:
       <a><span class="icon">s</span>
       <!--编写样式-->
       .icon {font-family: 'your-chosen-icon-font';}
       
    2、使用css来生成内容
      <a class="icon cart"> View Cart</a>
        
      .icon { font-family: 'your-chosen-icon-font';} 
      .cart:before {content: "s"; }
      
    3、用“data-icon”属性
      <a class="icon" data-icon="s"> View Cart</a>
      
      .icon {font-family: 'your-chosen-icon-font';} 
      .icon:before {content: attr(data-icon);}
      
    分析：
      第一步先定义好字体,然后我们可以使用:before伪元素来产生字符图标。
    eg：
        @font-face
          font-family: 'douban-movie'
          src: url('../font/douban-movie.eot?wvid5u')
          src: url('../font/douban-movie.eot?wvid5u#iefix') format('embedded-opentype'),
            url('../font/douban-movie.ttf?wvid5u') format('truetype'),
            url('../font/douban-movie.woff?wvid5u') format('woff'),
            url('../font/douban-movie.svg?wvid5u#douban-movie') format('svg')
          font-weight: normal
          font-style: normal
        
        [class^="icon-"], [class*=" icon-"]
          font-family: 'douban-movie' !important
          speak: none
          font-style: normal
          font-weight: normal
          font-variant: normal
          text-transform: none
          line-height: 1
        
          -webkit-font-smoothing: antialiased
          -moz-osx-font-smoothing: grayscale
        
        .icon-video-camera:before
          content: "\e914"
        
        .icon-user:before
          content: "\e971"
        
        .icon-stats-bars:before
          content: "\e99c"
          
       使用：<i class="icon-video-camera"></i>即可显示图标
  ```
### CSS3 box-sizing属性
  > content-box:默认，border和padding不计算入width之内。 
  > padding-box:padding计算入width之内。 
  > border-box:border和padding计算入width之内。 
  
### 组件之间数据传递
  > 子组件方法传递到父组件
  ```
   子：switches.vue
   <li class="switch-item" @click="switchItem(index)">
   
   methods: {
     switchItem(index) {
       this.$emit('switch', index);
     }
   }
   
   父：
   <switches @switch="switchItem"></switches>
   
   methods: {
     switchItem(index) {
       this.currentIndex = index;
     }
   }
  ```
  > 父组件向内传递属性
  ```
   父：<switches :switches="switches" ></switches>
   
       switches: [{name: '正在热映'},{name: '即将上映'}]}
   子：
      props: {
        switches: {
          type: Array,
          default: []
        }
      }
  ```
  
###  axios来完成ajax请求
  > 安装 npm install axios --save
  > 引入：import axios from 'axios'
  
### `string` 是模板字符串，ES2015新增的符号
 ```
  var x = 'a', y = 'b';
  var z = `${x,y}`; //'b'
  模板字符串里面${var}是变量的占位符。
  x,y 逗号运算符是返回符号右边的值，这里面等于y。
 ```
 
### better-scroll
 > better-scroll 是一个移动端滚动的解决方案，它是基于 iscroll 的重写
 > 安装 npm install better-scroll --save
 ```初始化
     import BScroll from 'better-scroll'
     let wrapper = document.querySelector('.wrapper')
     let scroll = new BScroll(wrapper, {...})
     
     如下：
      <template>
        <div class="wrapper" ref="wrapper">
          <ul class="content">
            <li>...</li>
            <li>...</li>
            ...
          </ul>
        </div>
      </template>
      <script>
        import BScroll from 'better-scroll'
        export default {
          mounted() {
            this.$nextTick(() => {
              this.scroll = new Bscroll(this.$refs.wrapper, {})
            })
          }
        }
      </script>
      
      this.$refs.wrapper 访问到了这个 DOM 对象
      this.$nextTick 的回调函数中初始化 better-scroll，这里的 this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
 ```
 > scroll组件的抽象和封装
   ```
     scroll 组件的 DOM 结构十分简单，如下所示：
     <template>
       <div ref="wrapper">
         <slot></slot>
       </div>
     </template>
   ```

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
