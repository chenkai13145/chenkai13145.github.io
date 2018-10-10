# my-vue

> A Vue.js project

## Build Setup

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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
##首页app组件
1. 完成header区域，使用Mint-ui，header组件
2. 制作底部footer，使用mui的tabbar.html
  + 购物车小图片的操作
  + 把扩展图标的 css 样式，拷贝到项目中，
  + 拷贝字体库 ttf 文件，到项目中
  + 为 购物车 小图标，添加 ‘mui-icon-extra mui-icon-extra-cart’的类名
3. 要在中间区域放置一个router-view来展示路由页面
## 改造底部为router-link 并且通过linkrouteractive修改默认类为mui-active设置路由高亮，


##点击底部通过路由连接展示不同的组件


##轮播图实现请求到数据http，返回一个数组通过v-for并和key绑定到页面

##九宫格用到mui中的gradi.html然后背景色在index.html中在body行内样式实现

##改造新闻列表连接 ，使用vue-resource获取数据，渲染数据
   + 在mui中的media.html中获取展示新闻页面
##实现新闻咨询列表 点击跳转新闻详情
1 、把列表的每一项改为router-link，同时在跳转的时候传递一个唯一的标识符
2 、创建新闻详情的组建页面 Newsifo.vue
3 、在路由的莫款中，将新闻详情的 路由地址 和 组建页面对应起来


##实现 新闻详情 获取数据 渲染

##实现热门段子路由连接跳转
  + 在mui中的media.html中获取展示段子页面
  + 创建加载更多组件在mint-ui中获取
  + 通过点击加载实现page页的加载使用contat（）数组拼接方法从而实现加载更多数据

##实现趣事点击跳转路由连接 
 + 制作滑动top，
 + 在mui中的tag-top-weban-main.html中
 + 去点mui-fullscreen这个类（全屏）

 ##引入mui.js注意
 1.++  
      mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006   ++

  ++

 mui('body').on('tap','a',function(){document.location.href=this.href;})
 mui('body').on('click','a',function(){document.location.href=this.href;})

  ++
  ++在app.vue中
  *{ touch-action:pan-y;}  
  2.
  