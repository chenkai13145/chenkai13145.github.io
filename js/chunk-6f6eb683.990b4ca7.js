(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f6eb683"],{"026d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"metitle"},[a("h1",[t._v(t._s(t.title))]),a("div",{staticClass:"content"},["xinxi"===t.datas[0].type?a("ul",{class:[t.styleoff?"garid garidcolor":"garid"]},t._l(t.datas,(function(e,n){return a("li",{key:n},[a("strong"),e.label?a("label",[t._v(t._s(e.title)+":")]):t._e(),a("span",{domProps:{innerHTML:t._s(e.text)}})])})),0):"ji"===t.datas[0].type?a("ul",{class:[t.styleoff?"garids garidcolor":"garids"]},[t.btnoff?a("li",{staticClass:"btn"},[a("van-icon",{class:t.activeclass?"btn_icon":"",attrs:{name:"apps-o"},on:{click:t.truns}})],1):t._e(),t._l(t.datas,(function(e,n){return a("li",{directives:[{name:"show",rawName:"v-show",value:t.activeclass,expression:"activeclass"}],key:n},[a("span",[t._v(t._s(n+1)+"、"+t._s(e.text))])])})),t._l(t.tuData,(function(e){return a("li",{directives:[{name:"show",rawName:"v-show",value:!t.activeclass,expression:"!activeclass"}],key:e.type,staticClass:"tul"},[a("van-circle",{attrs:{rate:e.value,color:e.color,text:e.type},model:{value:t.currentRate,callback:function(e){t.currentRate=e},expression:"currentRate"}}),t.activeclass?t._e():a("van-progress",{attrs:{percentage:e.value,"pivot-color":e.color,color:"linear-gradient(to right, #be99ff,"+e.color+")"}})],1)}))],2):"exp"===t.datas[0].type?t._l(t.datas,(function(e,n){return a("ul",{key:n+e.title,class:[t.styleoff?"garids garidcolor":"garids"]},[t.btnoff?a("li",{staticClass:"btn"},[a("van-icon",{class:e.off?"btn_icon":"",attrs:{name:"apps-o"},on:{click:function(a){return t.parents(n,e.url)}}})],1):t._e(),a("li",{staticClass:"lin"},[a("h3",[t._v(t._s(e.title))]),a("div",[t._v("描述："+t._s(e.des))]),a("div",[t._v(" 职责： "),t._l(e.meto,(function(e,n){return a("div",{key:e+n},[t._v(t._s(e))])}))],2),a("div",[t._v(t._s(e.content))])])])})):a("ul",{class:[t.styleoff?"garids garidcolor":"garids"]},[a("li",[a("van-steps",{attrs:{direction:"vertical",active:0}},t._l(t.datas,(function(e,n){return a("van-step",{key:n,staticClass:"van-step--process"},[a("h3",[t._v(t._s(e.gongsi))]),t._l(e.arr,(function(e,n){return a("p",[t._v(" "+t._s(e)+" ")])}))],2)})),1)],1)])],2)])},s=[],i=(a("21c7"),a("8e79")),o={props:{title:{type:String,required:!0},datas:{type:Array,required:!0},tuData:{type:Array},btnoff:{type:Boolean},styleoff:{type:Boolean,default:!0}},data:function(){return{activeclass:!0,gradientColor:{"0%":"#3fecff","100%":"red"},rate:20,currentRate:85}},methods:{truns:function(){this.activeclass=!this.activeclass},parents:function(t,e){Object(i["a"])({images:e,startPosition:0,showIndicators:!0,loop:!0})}}},r=o,c=(a("b91f"),a("2877")),l=Object(c["a"])(r,n,s,!1,null,"83ca0242",null);e["a"]=l.exports},"0bd4":function(t,e,a){},"15c5":function(t,e,a){t.exports=a.p+"img/home.d935c13d.png"},"1ba7":function(t,e,a){t.exports=a.p+"img/login.a86fcd17.png"},2282:function(t,e,a){t.exports=a.p+"img/show.38f49f76.png"},"25f0":function(t,e,a){"use strict";var n=a("6eeb"),s=a("825a"),i=a("d039"),o=a("ad6d"),r="toString",c=RegExp.prototype,l=c[r],u=i((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=r;(u||d)&&n(RegExp.prototype,r,(function(){var t=s(this),e=String(t.source),a=t.flags,n=String(void 0===a&&t instanceof RegExp&&!("flags"in c)?o.call(t):a);return"/"+e+"/"+n}),{unsafe:!0})},"5a70":function(t,e,a){t.exports=a.p+"img/add.1caa1a58.png"},"613b":function(t,e,a){},"6cd3":function(t,e,a){t.exports=a.p+"img/todo.17d85183.png"},8343:function(t,e,a){t.exports=a.p+"img/canku.c49e7747.png"},8478:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"garid"},[a("li",[a("strong"),a("label",[t._v("手机号:")]),a("span",[t._v("13981722057")])])])}],i={},o=i,r=a("2877"),c=Object(r["a"])(o,n,s,!1,null,null,null);e["a"]=c.exports},8630:function(t,e,a){"use strict";var n=a("613b"),s=a.n(n);s.a},"86bd":function(t,e,a){t.exports=a.p+"img/me.e5fbcd21.png"},8822:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"me"},[a("meTitle",{attrs:{title:"联系方式",datas:t.one}}),a("meTitle",{attrs:{title:"个人信息",datas:t.two}}),a("meTitle",{attrs:{title:"技能掌握",datas:t.three,tuData:t.pei,btnoff:t.btnoff}}),a("meTitle",{attrs:{title:"项目经验",datas:t.four,btnoff:t.btnoff}}),a("meTitle",{attrs:{title:"工作经历",datas:t.five}}),a("van-icon",{staticClass:"down",attrs:{name:"down"},on:{click:t.downFn}}),a("van-icon",{class:[t.music?"dsad musicadd":"musicadd"],attrs:{name:"music-o",size:"40"},on:{click:t.play}}),a("audio",{ref:"audio",attrs:{id:"audio",hidden:"",loop:""}})],1)},s=[],i=(a("d3b7"),a("25f0"),a("026d")),o=a("8478"),r={components:{meTitle:i["a"],Pre:o["a"]},data:function(){return{music:!0,one:[{label:!0,title:"手机",text:13981722057,type:"xinxi"},{label:!0,title:"Email",text:"1263455889@qq.com"},{label:!0,title:"网站",text:"kaisadiguo.top"}],two:[{type:"xinxi",label:!1,text:"陈凯|男|1997"},{label:!1,text:"大专|四川文轩大学|计算机应用技术"},{label:!1,text:"前端开发|1年工作经验"},{label:!0,title:"期望职位",text:"Web前端"},{label:!0,title:"期望城市",text:"成都"},{label:!0,title:"Github",text:'<a target="blank" href="https://github.com/chenkai13145">https://github.com/chenkai13145</a>'}],three:[{type:"ji",text:"熟练掌握 HTML&CSS,熟悉栅格化布局、弹性布局，能熟练应用 DIV+CSS 布局,编辑出符合 W3C 规范的代码，能根据原型和 UI设计图快速构建页面。"},{text:"熟悉前端各种常用 UI库，对于不了解的能根据文档快速上手。 "},{text:"熟练掌握 JavaScript以及 HTML5&CSS3&ES6，了解TypeScript。"},{text:"能熟练应用 jQuery 实现网页常见效果，掌握面向对象编程思想。 "},{text:"能熟练使用前端开发工具，如 vsCode、HBuilderX等。"},{text:"能熟练使用 Ajax、fetch、axios 进行前后端交互。"},{text:"熟悉 antd、ant design vue等前端插件以及Element、Vant等 UI库。 "},{text:"能熟练应用 Vue框架以及uni-app框架进行多端开发经验，熟悉 Vuex、Vue-router、Vue-cli使用。"},{text:"能熟练应用 React框架，熟悉 Redux、React-Router-Dom、Create-react-app使用。"},{text:"能熟练掌握CSS 预编译语言less，对 sass 有过了解。"},{text:"对Node.js和 JWT 规范有一定了解。"},{text:"使用过Webpack、npm、yarn 等前端构建工具，并有一定了解。"},{text:"能熟练使用git 协作工具，熟悉 git基础命令，了解 SVN"},{text:"拥有模块化开发思想，并且在项目中使用模块化开发。"},{text:"熟悉禅道，能用其进行 BUG管理。 "},{text:"有使用HBuilderX 打包移动端应用的经验, 有使用 Webpack打包 PC 端应用的经验。"},{text:"对于echarts，百度地图以及语音功能, 短信验证，第三方登录有一定的开发经验。"},{text:"了解微信小程序开发，有微信小程序开发经验。"}],pei:[{type:"javaScript",value:90,color:"#"+Math.random().toString(16).substring(2,8)},{type:"node.js",value:80,color:"#"+Math.random().toString(16).substring(2,8)},{type:"Css3",value:90,color:"#"+Math.random().toString(16).substring(2,8)},{type:"HTML5",value:90,color:"#"+Math.random().toString(16).substring(2,8)},{type:"Vue",value:90,color:"#"+Math.random().toString(16).substring(2,8)},{type:"React",value:90,color:"#"+Math.random().toString(16).substring(2,8)},{type:"uni-app",value:90,color:"#"+Math.random().toString(16).substring(2,8)},{type:"微信小程序",value:80,color:"#"+Math.random().toString(16).substring(2,8)},{type:"JQuery",value:80,color:"#"+Math.random().toString(16).substring(2,8)}],four:[{type:"exp",off:!0,title:"项目一:广汽商贸物流可视化平台",des:"为商家提供在线平台展示，用户使用平台在线查看物流数据。",meto:["1、负责参与前端框架的构建。","2、参与开发中技术难题的讨论解决。","3、根据项目需求文档，编写公共区域的可复用组件。","4、负责仓库实时监控、整车实时看板、仓储统计、入库明细、出库明细、仓库信息页面功能的实现","5、负责与后端开发团队紧密配合，确保项目的交互功能完整实现。"],content:"利用vue.js、Echarts 、HTML5、CSS3、JS、elementui、axios、vuex、es6第三方百度地图开放平台技术进行组件化和模块化开发。",url:[a("8343"),a("9f2c"),a("fbf5"),a("98e1")]},{off:!0,title:"项目二:联通计费管理平台",des:"为用户提供自有业务与第三方客户提供业务服务能力。",meto:["1、负责首页与受理平台构建，用户数据的获取以及渲染，用户详情页面构建与渲染。","2、参与讨论前端开发中遇到的技术难题，并积极提供解决方案。","3、依据项目需求，完成对复用组件的编写。","4、与后端工程师配合，实现项目需求中页面交互功能开发。"],content:"利用react.js、redux、Echarts 、HTML5、CSS3、JS、antd、react-router-dom、less进行组件化和模块化开发",url:[a("de62"),a("15c5"),a("1ba7")]},{off:!0,title:"项目三:电影预告",des:"为用户提供预览即将播出的电影预告片详情。",meto:["1、\t负责电影首页、搜索页、我的页面构建，以及对详情页面的编写。","2、\t负责进行多端混合开发ios/安卓/h5/小程序。","3、\t解决前端开发中遇到的技术难点，对页面性能进行优化，提高代码稳定性、提升用户体验。","4、\t与后端工程师配合，实现第三方qq、微信、微博登录"],content:"利用HTML5、CSS3、JS、uni-app技术进行组件化和模块化开发。",url:[a("86bd"),a("dbc8"),a("8fdd")]},{off:!0,title:"项目四:课程系统",des:"为用户提供预览即将播出的电影预告片详情。",meto:["1、负责前端页面搭建。 ","2、负责后端接口编写业务逻辑的搭建。","3、分析项目需求，完成对复用组件的编写。"],content:"利用node.js、HTML5、CSS3、JS、handlebars、express进行组件化和模块化开发",url:[a("2282"),a("5a70"),a("6cd3")]}],five:[{type:"gongzuo",gongsi:"数安值科技有限公司",arr:["1、负责公司项目的前端修改调试和开发工作。","2、与项目经理、UI设计师以及后端工程师配合完成 Web开发工作。","3、配合后台开发人员，完成前端页面的脚本编码工作。","4、参与前端框架搭建、公共组件的开发与维护，参与前端架构建设与需求分析。 ","5、负责参与解决前端开发流程中的各种技术难题。 ","6、持续优化项目技术、保证代码质量和服务稳定、提升用户体验，根据公司业务需求，按要求迭 代产品。","7、完成上级指派的其他工作。"]}],btnoff:!0}},mounted:function(){this.play()},methods:{downFn:function(){window.open(window.location.origin+"/#/download")},play:function(){this.music=!this.music,this.$refs.audio.src&&this.$refs.audio.autoplay?(this.$refs.audio.src=null,this.$refs.audio.autoplay=null):(this.$refs.audio.src=a("bc91"),this.$refs.audio.autoplay="autoplay")}}},c=r,l=(a("8630"),a("2877")),u=Object(l["a"])(c,n,s,!1,null,null,null);e["default"]=u.exports},"8fdd":function(t,e,a){t.exports=a.p+"img/info.6fb32a6c.png"},"98e1":function(t,e,a){t.exports=a.p+"img/sker.580caf51.png"},"9f2c":function(t,e,a){t.exports=a.p+"img/me.096eb2f6.png"},ad6d:function(t,e,a){"use strict";var n=a("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b91f:function(t,e,a){"use strict";var n=a("0bd4"),s=a.n(n);s.a},bc91:function(t,e,a){t.exports=a.p+"media/By2.0b464599.mp3"},dbc8:function(t,e,a){t.exports=a.p+"img/seach.bc12f2ed.png"},de62:function(t,e,a){t.exports=a.p+"img/child.8bb7fdf2.png"},fbf5:function(t,e,a){t.exports=a.p+"img/home.c250c46c.png"}}]);
//# sourceMappingURL=chunk-6f6eb683.990b4ca7.js.map