(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4228f73a"],{2526:function(t,e,a){},"3ff5":function(t,e,a){"use strict";a.d(e,"h",(function(){return o})),a.d(e,"f",(function(){return s})),a.d(e,"g",(function(){return i})),a.d(e,"e",(function(){return r})),a.d(e,"d",(function(){return d})),a.d(e,"a",(function(){return c})),a.d(e,"c",(function(){return u})),a.d(e,"b",(function(){return f}));var n=a("284b");function o(t){return Object(n["a"])({url:"/uploaddata",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/alldi",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/infoid",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/editmain",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/editinfo",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/addinfo",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/delmain",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/delinfo",method:"post",data:t})}},"66d3":function(t,e,a){"use strict";var n=a("2526"),o=a.n(n);o.a},ddef:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info"},[a("van-loading",{directives:[{name:"show",rawName:"v-show",value:!t.loadoff,expression:"!loadoff"}],attrs:{type:"spinner",color:"#1989fa"}}),a("h2",{directives:[{name:"show",rawName:"v-show",value:t.loadoff,expression:"loadoff"}],staticClass:"title wrap"},[t._v(t._s(t.data.title))]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.loadoff,expression:"loadoff"}],staticClass:"desc wrap"},[t._v(t._s(t.data.desc))]),void 0!=t.data.descobj&&t.loadoff?t._l(t.data.descobj.arr,(function(e,n){return a("div",{key:n},[e.futitle?a("h4",{staticClass:"wrap",staticStyle:{color:"#80633f"}},[t._v(t._s(n+1)+"、"+t._s(e.futitle))]):t._e(),e.desccenter?a("div",{staticClass:"descBot"},[e.desccenter.destitle?a("div",{staticClass:"wrap"},[t._v(t._s(e.desccenter.destitle))]):t._e(),a("ul",{staticClass:"uls"},t._l(e.desccenter.desctitle,(function(e,n){return a("li",{key:n+"p",staticClass:"wrap"},[t._v(" "+t._s(e)+" ")])})),0)]):t._e(),e.daima?a("pre",{staticClass:"textpre"},[t._v(t._s(e.daima))]):t._e()])})):t._e()],2)},o=[],s=a("3ff5"),i={data:function(){return{data:{},loadoff:!1}},activated:function(){this.getinfo()},methods:{getinfo:function(){var t=this;this.loadoff=!1;var e=this.$route.query.id;Object(s["g"])({id:e}).then((function(e){e.data.success&&(t.data=e.data.data,t.loadoff=!0)}))}}},r=i,d=(a("66d3"),a("2877")),c=Object(d["a"])(r,n,o,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-4228f73a.7b6088e0.js.map