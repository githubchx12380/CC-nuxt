(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{353:function(t,e,n){var content=n(356);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("511ad36b",content,!0,{sourceMap:!1})},354:function(t,e,n){var content=n(358);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("e4152168",content,!0,{sourceMap:!1})},355:function(t,e,n){"use strict";var o=n(353);n.n(o).a},356:function(t,e,n){(e=n(7)(!1)).push([t.i,".btnbox{position:relative;width:37px;height:37px;box-shadow:0 1px 3px #000;border-radius:50%;overflow:hidden}.btnbox .themeBtn{cursor:pointer;position:absolute;top:0;left:0;display:block;width:100%;height:100%;background-color:#1b1b1b;border:0;font-size:20px;color:#aaa;text-align:center;text-shadow:0 0 15px #00a1ff;box-shadow:0 3px 4px #000,inset 0 -2px 1px #000,inset 0 2px 2px hsla(0,0%,100%,.5)}.btnbox .btnclass{transition:all .5s;color:#0ff;text-shadow:0 5px 15px #0ff}",""]),t.exports=e},357:function(t,e,n){"use strict";var o=n(354);n.n(o).a},358:function(t,e,n){(e=n(7)(!1)).push([t.i,".title{padding:10px 30px;display:flex}.title>div:first-child{flex:1}.title .position-content{display:flex;align-items:center;font-size:14px;color:#aaa}.title .position-content>span{padding:0 .433333rem}.title .position-content>span a{color:#337ab7}.title .position-content div{display:flex;font-weight:700;cursor:pointer;color:#1a0dab}.title .position-content div .icon-arrow-left2{padding-right:2px;font-size:20px}.title .position-content div:hover{transition:all .5s;color:tomato}.title .newthemes{display:flex;justify-content:flex-end}",""]),t.exports=e},359:function(t,e,n){"use strict";n(136);var o={data:function(){return{themeClas:!1}},methods:{themebtn:function(){this.$emit("themebtn")}}},r=(n(355),n(4)),c={props:["componen"],components:{btn:Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btnbox"},[e("button",{staticClass:"themeBtn icon-switch",class:{btnclass:this.$store.state.todos.themeStyle},on:{click:this.themebtn}})])}),[],!1,null,null,null).exports},data:function(){return{currentChild:0,fenlei1:""}},computed:{fenlei:function(){return""!=this.fenlei1?"搜索结果":"/category/3"==this.$route.path?"效率":this.componen?this.componen.split(" ")[0]+this.componen.split(" ")[1]:this.$route.meta.fenlei}},methods:{newTitle:function(t){this.currentChild=t,this.$emit("newcontent",t)},themebtn:function(){this.$store.commit("increment")}}},l=(n(357),Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("div",{staticClass:"position-content"},[n("span",{on:{click:function(e){return t.$router.push("/")}}},[n("a",{attrs:{href:"javascript:;"}},[t._v("首页")])]),t._v("/\n      "),n("span",{on:{click:function(e){return t.$router.push("/category/3")}}},[n("a",{attrs:{href:"javascript:;"}},[t._v("插件")])]),t._v("/\n      "),n("span",[n("a",{attrs:{href:"javascript:;"}},[t._v(" "+t._s(t.fenlei))])]),t._v(" "),-1!=t.$route.path.indexOf("detail")?n("div",{class:{textcolor:t.$store.state.todos.themeStyle},on:{click:function(e){return t.$router.back()}}},[-1!=t.$route.path.indexOf("detail")?n("span",{staticClass:"icon-arrow-left2"}):t._e(),t._v(" "),n("span",[t._v("返回")])]):t._e()]),t._v(" "),n("div",{staticClass:"newthemes"},[n("btn",{on:{themebtn:t.themebtn}})],1)])}),[],!1,null,null,null));e.a=l.exports},360:function(t,e,n){var content=n(373);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("58a6c7f3",content,!0,{sourceMap:!1})},371:function(t,e,n){t.exports=n.p+"img/1fcd265.jpg"},372:function(t,e,n){"use strict";var o=n(360);n.n(o).a},373:function(t,e,n){(e=n(7)(!1)).push([t.i,".about{padding:20px 0;background-color:#fff;border-radius:15px}.about>div{display:flex;justify-content:center}.about>div img{width:80%;border-radius:10px}.about p{font-size:20px;line-height:35px;color:#555;padding:10px 40px}",""]),t.exports=e},404:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:n(371),alt:""}})])}],r={components:{posiTion:n(359).a},created:function(){this.$route.meta.fenlei="关于"}},c=(n(372),n(4)),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about",class:[{backopa:this.$store.state.todos.themeStyle}]},[e("posi-tion"),this._v(" "),this._m(0),this._v(" "),e("p",{class:{textcolor:this.$store.state.todos.themeStyle}},[this._v("CC插件网站是Chrome浏览器扩展插件的搬运工。严选有趣、实用、适合国内的Chrome扩展插件。致力于降低使用Chrome扩展插件的门槛，用非常简单的方式来提升用户体验。承蒙客官大驾光临。")])],1)}),o,!1,null,null,null);e.default=component.exports}}]);