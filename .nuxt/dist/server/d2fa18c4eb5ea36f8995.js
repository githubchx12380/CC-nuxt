exports.ids=[1],exports.modules={123:function(t,e,n){var content=n(126);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("511ad36b",content,!0,t)}},124:function(t,e,n){var content=n(128);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("e4152168",content,!0,t)}},125:function(t,e,n){"use strict";n.r(e);var o=n(123),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e.default=r.a},126:function(t,e,n){(e=n(2)(!1)).push([t.i,".btnbox{position:relative;width:37px;height:37px;box-shadow:0 1px 3px #000;border-radius:50%;overflow:hidden}.btnbox .themeBtn{cursor:pointer;position:absolute;top:0;left:0;display:block;width:100%;height:100%;background-color:#1b1b1b;border:0;font-size:20px;color:#aaa;text-align:center;text-shadow:0 0 15px #00a1ff;box-shadow:0 3px 4px #000,inset 0 -2px 1px #000,inset 0 2px 2px hsla(0,0%,100%,.5)}.btnbox .btnclass{transition:all .5s;color:#0ff;text-shadow:0 5px 15px #0ff}",""]),t.exports=e},127:function(t,e,n){"use strict";n.r(e);var o=n(124),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e.default=r.a},128:function(t,e,n){(e=n(2)(!1)).push([t.i,".title{padding:10px 30px;display:flex}.title>div:first-child{flex:1}.title .position-content{display:flex;align-items:center;font-size:14px;color:#aaa}.title .position-content>span{padding:0 .433333rem}.title .position-content>span a{color:#337ab7}.title .position-content div{display:flex;font-weight:700;cursor:pointer;color:#1a0dab}.title .position-content div .icon-arrow-left2{padding-right:2px;font-size:20px}.title .position-content div:hover{transition:all .5s;color:tomato}.title .newthemes{display:flex;justify-content:flex-end}",""]),t.exports=e},129:function(t,e,n){"use strict";var o={data:()=>({themeClas:!1}),methods:{themebtn(){this.$emit("themebtn")}}},r=n(1);var c={props:["componen"],components:{btn:Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"btnbox"},[this._ssrNode("<button"+this._ssrClass("themeBtn icon-switch",{btnclass:this.$store.state.todos.themeStyle})+"></button>")])}),[],!1,(function(t){var e=n(125);e.__inject__&&e.__inject__(t)}),null,"7e07f91b").exports},data:()=>({currentChild:0,fenlei1:""}),computed:{fenlei(){return""!=this.fenlei1?"搜索结果":"/category/3"==this.$route.path?"效率":this.componen?this.componen.split(" ")[0]+this.componen.split(" ")[1]:this.$route.meta.fenlei}},methods:{newTitle(t){this.currentChild=t,this.$emit("newcontent",t)},themebtn(){this.$store.commit("increment")}}};var l=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[t._ssrNode('<div class="position-content"><span><a href="javascript:;">首页</a></span>/\n      <span><a href="javascript:;">插件</a></span>/\n      <span><a href="javascript:;">'+t._ssrEscape(" "+t._s(t.fenlei))+"</a></span> "+(-1!=t.$route.path.indexOf("detail")?"<div"+t._ssrClass(null,{textcolor:t.$store.state.todos.themeStyle})+">"+(-1!=t.$route.path.indexOf("detail")?'<span class="icon-arrow-left2"></span>':"\x3c!----\x3e")+" <span>返回</span></div>":"\x3c!----\x3e")+"</div> "),t._ssrNode('<div class="newthemes">',"</div>",[n("btn",{on:{themebtn:t.themebtn}})],1)],2)}),[],!1,(function(t){var e=n(127);e.__inject__&&e.__inject__(t)}),null,"454645df");e.a=l.exports},130:function(t,e,n){var content=n(143);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("58a6c7f3",content,!0,t)}},141:function(t,e,n){t.exports=n.p+"img/1fcd265.jpg"},142:function(t,e,n){"use strict";n.r(e);var o=n(130),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e.default=r.a},143:function(t,e,n){(e=n(2)(!1)).push([t.i,".about{padding:20px 0;background-color:#fff;border-radius:15px}.about>div{display:flex;justify-content:center}.about>div img{width:80%;border-radius:10px}.about p{font-size:20px;line-height:35px;color:#555;padding:10px 40px}",""]),t.exports=e},174:function(t,e,n){"use strict";n.r(e);var o={components:{posiTion:n(129).a},created(){this.$route.meta.fenlei="关于"}},r=n(1);var component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about",class:[{backopa:this.$store.state.todos.themeStyle}]},[e("posi-tion"),this._ssrNode(" <div><img"+this._ssrAttr("src",n(141))+" alt></div> <p"+this._ssrClass(null,{textcolor:this.$store.state.todos.themeStyle})+">CC插件网站是Chrome浏览器扩展插件的搬运工。严选有趣、实用、适合国内的Chrome扩展插件。致力于降低使用Chrome扩展插件的门槛，用非常简单的方式来提升用户体验。承蒙客官大驾光临。</p>")],2)}),[],!1,(function(t){var e=n(142);e.__inject__&&e.__inject__(t)}),null,"7d86667d");e.default=component.exports}};