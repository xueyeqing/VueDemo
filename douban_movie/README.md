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
