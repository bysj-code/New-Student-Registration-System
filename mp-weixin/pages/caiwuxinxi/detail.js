(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/caiwuxinxi/detail"],{"118e":function(t,e,n){"use strict";n.r(e);var r=n("e563"),a=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=a.a},"2d1d":function(t,e,n){"use strict";n.r(e);var r=n("dabf"),a=n("118e");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("37bf");var i,o=n("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=c.exports},"37bf":function(t,e,n){"use strict";var r=n("9083"),a=n.n(r);a.a},9083:function(t,e,n){},cc75:function(t,e,n){"use strict";(function(t){n("09c9");r(n("66fd"));var e=r(n("2d1d"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},dabf:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement;t._self._c},u=[]},e563:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,r,a,u,i){try{var o=t[u](i),c=o.value}catch(l){return void n(l)}o.done?e(c):Promise.resolve(c).then(r,a)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){u(i,r,a,o,c,"next",t)}function c(t){u(i,r,a,o,c,"throw",t)}o(void 0)}))}}var o={data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},collectionFlag:0}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var e=this;return i(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.id=t.id;case 1:case"end":return n.stop()}}),n)})))()},onShow:function(e){var n=this;return i(r.default.mark((function e(){var a,u,i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.init(),a=t.getStorageSync("nowTable"),e.next=4,n.$api.session(a);case 4:u=e.sent,n.user=u.data,n.btnColor=n.btnColor.sort((function(){return.5-Math.random()})),i=t.getStorageSync("pingluenStateState"),i&&(t.removeStorageSync("pingluenStateState"),n.mescroll.num=1,n.upCallback(n.mescroll));case 9:case"end":return e.stop()}}),e)})))()},destroyed:function(){},methods:{download:function(e){var n=this;t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},init:function(){var t=this;return i(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.info("caiwuxinxi",t.id);case 2:n=e.sent,t.detail=n.data,t.swiperList=t.detail.caiwuxinxiPhoto?t.detail.caiwuxinxiPhoto.split(","):[];case 5:case"end":return e.stop()}}),e)})))()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var e=this;return i(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.mescroll.endByPage(e.mescroll.num,10);case 1:case"end":return t.stop()}}),t)})))()}}};e.default=o}).call(this,n("543d")["default"])}},[["cc75","common/runtime","common/vendor"]]]);