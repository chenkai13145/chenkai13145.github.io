(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf586336"],{"159b":function(t,e,a){var s=a("da84"),i=a("fdbc"),n=a("17c2"),o=a("9112");for(var r in i){var c=s[r],l=c&&c.prototype;if(l&&l.forEach!==n)try{o(l,"forEach",n)}catch(u){l.forEach=n}}},"17c2":function(t,e,a){"use strict";var s=a("b727").forEach,i=a("b301");t.exports=i("forEach")?function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1ce8":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"common"},[a("p",{staticClass:"title"},[t._v("留言板")]),a("div",{staticClass:"postcom"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{rows:"6"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),a("div",{staticClass:"top"},[a("span",[t._v(t._s(t.$store.getters.users.name?"欢迎~~"+t.$store.getters.users.name:"请先登录"))]),t.$store.getters.users.name?a("span",{staticClass:"login",on:{click:t.layout}},[t._v("退出")]):a("span",{staticClass:"login",on:{click:t.login}},[t._v("登录")])]),a("van-button",{attrs:{plain:"",type:"primary"},on:{click:t.postXin}},[t._v("发表评论")]),a("div",{staticClass:"bottomshow"},[t._l(t.arrcom,(function(e,s){return a("div",{key:e.time+s,staticClass:"show"},[a("div",{staticClass:"numbers"},[t._v(t._s(e.paiming)+"楼")]),a("div",{staticClass:"com"},[a("div",[a("div",{staticClass:"icon",style:"background-color:"+e.bgcolor+"; width: 50PX; height: 50PX;"},[t._v(t._s(e.one))])]),a("div",{staticClass:"hoshow"},[a("div",[a("p",{staticClass:"name"},[t._v(t._s(e.name)+" ("+t._s(t._f("filters")(e.time))+")")]),a("p",{staticClass:"texts"},[t._v(t._s(e.text))]),a("p",{staticClass:"huifu",on:{click:function(a){return t.copy(e._id,e.name)}}},[t._v("回复"),void 0!==t.$store.getters.users.id&&t.$store.getters.users.id===e.userid?a("strong",{staticClass:"del",on:{click:function(a){return a.stopPropagation(),t.delposts(e._id)}}},[t._v("删除")]):t._e()])]),t._l(e.comment,(function(s,i){return a("div",{key:s._id+i,staticClass:"hoshow hoshows"},[a("p",{staticClass:"name"},[t._v(t._s(s.name)+" ("+t._s(t._f("filters")(s.time))+")")]),a("p",{staticClass:"texts"},[t._v(t._s(s.text))]),a("p",{staticClass:"huifu",on:{click:function(a){return t.copy(e._id,e.name)}}},[t._v("回复")])])}))],2)])])})),a("van-button",{directives:[{name:"show",rawName:"v-show",value:t.loadingPage,expression:"loadingPage"}],staticClass:"jiazaibtn",attrs:{plain:"",type:"primary"},on:{click:t.pageLoading}},[t._v("加载更多")])],2),a("van-icon",{class:[t.music?"dsad musicadd":"musicadd"],attrs:{name:"music-o",size:"40"},on:{click:t.play}}),a("audio",{ref:"audio",attrs:{hidden:"",loop:""}})],1),a("van-dialog",{attrs:{beforeClose:t.beforeClose,title:"登录",width:t.winWidth>600?600:320,"show-cancel-button":""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("form",[a("van-cell-group",[a("van-field",{attrs:{required:"",clearable:"",label:"用户名",placeholder:"请输入用户名"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("van-field",{attrs:{type:"email",label:"邮箱",placeholder:"请输入邮箱",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("van-field",{attrs:{type:"password",label:"密码",placeholder:"请输入密码",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)])],1)},i=[],n=(a("99af"),a("b0c0"),a("d3b7"),a("25f0"),a("4d90"),a("159b"),a("2909")),o=a("284b");function r(t){return Object(o["a"])({url:"/all",method:"get",params:t})}function c(t){return Object(o["a"])({url:"/post",method:"post",data:t})}function l(t){return Object(o["a"])({url:"/delete",method:"post",data:t})}function u(t){return Object(o["a"])({url:"/logReg",method:"post",data:t})}var d=a("8235"),h=a.n(d),m={data:function(){return{music:!0,arrcom:[],show:!1,winWidth:null,name:"",password:"",email:"",content:"",postId:"",Query:{size:10,page:0},loadingPage:!0,mpvide:a("4e10")}},deactivated:function(){this.music=!0,this.$refs.audio.src=null,this.$refs.audio.autoplay=null},activated:function(){var t=this;this.$nextTick((function(){t.play()}))},mounted:function(){window.innerWidth?this.winWidth=window.innerWidth:document.body&&document.body.clientWidth&&(this.winWidth=document.body.clientWidth),this.getAllCom()},methods:{login:function(){this.show=!0},play:function(){this.music=!this.music,this.$refs.audio.src&&this.$refs.audio.autoplay?(this.$refs.audio.src=null,this.$refs.audio.autoplay=null):(this.$refs.audio.load(),this.$refs.audio.src=this.mpvide,this.$refs.audio.autoplay="autoplay")},getAllCom:function(){var t=this;r(this.Query).then((function(e){200===e.status&&(e.data.da.forEach((function(t,a){e.data.da[a].bgcolor="#"+Math.random().toString(16).substring(2,8),e.data.da[a].one=t.name.substring(0,1)})),e.data.da.length<t.Query.size&&(t.loadingPage=!1),0===t.Query.page&&(t.arrcom=[]),t.arrcom=[].concat(Object(n["a"])(t.arrcom),Object(n["a"])(e.data.da)))}))},copy:function(t,e){this.$store.getters.users.name?(this.postId=t,this.content="@回复"+e+":",document.getElementsByTagName("textarea")[0].focus()):this.$toast("请先登录")},beforeClose:function(t,e){var a=this;if("cancel"===t)return e();var s=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;if(this.name.length>=1&&this.password.length>=3&&s.test(this.email)){var i={name:this.name,email:this.email,password:this.password};u(i).then((function(t){if(console.log(t),200===t.status&&t.data.success){localStorage.setItem("token",t.data.token);var s=h()(t.data.token),i={jwttoken:s,done:e};a.$store.dispatch("saveToken",i)}else a.$toast(t.data.msg),e(!1)}))}else this.$toast("格式不正确"),e(!1)},postXin:function(){var t=this;if(this.$store.getters.users.name)if(this.content.length>=1){this.Query.page=0,this.loadingPage=!0;var e={id:this.postId,userid:this.$store.getters.users.id,name:this.$store.getters.users.name,text:this.content};c(e).then((function(e){t.content="",t.getAllCom()}))}else this.$toast("评论不能为空");else this.$toast("请先登录")},delposts:function(t){var e=this;l({id:t}).then((function(t){200===t.status&&t.data.success&&(e.$toast(t.data.msg),e.getAllCom())}))},pageLoading:function(){this.Query.page++,this.getAllCom()},layout:function(){this.$store.dispatch("layout")}},filters:{filters:function(t){var e=new Date(t),a=e.getFullYear(),s=(e.getMonth()+1).toString().padStart(2,0),i=e.getDate().toString().padStart(2,0);return"".concat(a,"-").concat(s,"-").concat(i)}}},f=m,p=(a("47b6"),a("2877")),v=Object(p["a"])(f,s,i,!1,null,null,null);e["default"]=v.exports},"2b5a":function(t,e,a){},"47b6":function(t,e,a){"use strict";var s=a("2b5a"),i=a.n(s);i.a},"4e10":function(t,e,a){t.exports=a.p+"media/By2.0b464599.mp3"},b0c0:function(t,e,a){var s=a("83ab"),i=a("9bf2").f,n=Function.prototype,o=n.toString,r=/^\s*function ([^ (]*)/,c="name";!s||c in n||i(n,c,{configurable:!0,get:function(){try{return o.call(this).match(r)[1]}catch(t){return""}}})},b301:function(t,e,a){"use strict";var s=a("d039");t.exports=function(t,e){var a=[][t];return!a||!s((function(){a.call(null,e||function(){throw 1},1)}))}}}]);
//# sourceMappingURL=chunk-bf586336.4db93f6f.js.map