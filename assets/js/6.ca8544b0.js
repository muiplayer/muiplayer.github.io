(window.webpackJsonp=window.webpackJsonp||[]).push([[6,12],{398:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(397);function i(){a.a.mp.on("error",(function(t){console.error(t)})),a.a.mp.on("volume-change",(function(t){a.a.mp.video().volume=t.size})),a.a.mp.on("share",(function(t){a.a.mp.showToast("Type："+t.type)}))}},399:function(t,e,n){},401:function(t,e,n){"use strict";n(399)},402:function(t,e,n){"use strict";n.r(e);var a={props:{placeholder:{default:"the input video url"},buttonText:{default:"Toggle URL"},type:{default:"url"}},data:function(){return{text:""}},methods:{onLoading:function(){if("url"==this.type){/http[s]{0,1}:\/\/([\w.]+\/?)\S*/.test(this.text)?this.$emit("changeurl",this.text):alert("视频地址录入不正确！")}else"text"==this.type&&this.$emit("changeurl",this.text)}}},i=(n(401),n(32)),o=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"toggleUrl"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"url-input",attrs:{name:"url",type:"text",placeholder:t.placeholder},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),n("button",{staticClass:"url-submit",on:{click:t.onLoading}},[t._v(t._s(t.buttonText))])])}),[],!1,null,"65cadca6",null);e.default=o.exports},411:function(t,e,n){"use strict";var a=n(407),i=n.n(a),o=n(397);e.a={container:"#mui-player",src:o.a.address.src_hd,title:"",poster:"https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/poster.jpg",autoplay:!1,autoFit:!0,live:!1,objectFit:"contain",themeColor:"rgb(62, 175, 124)",videoAttribute:[{attrKey:"webkit-playsinline",attrValue:""},{attrKey:"playsinline",attrValue:""},{attrKey:"x5-playsinline",attrValue:""},{attrKey:"t7-video-player-type",attrValue:"inline"},{attrKey:"x5-video-player-type",attrValue:"h5-page"},{attrKey:"x-webkit-airplay",attrValue:"allow"},{attrKey:"controlslist",attrValue:"nodownload"}],plugins:["undefined"!=typeof MuiPlayerDesktopPlugin?new MuiPlayerDesktopPlugin({}):{},"function"==typeof i.a?new i.a({defaultMenuConfig:{showShare:[1,2,3,4]},thumbnails:o.a.thumbnails}):{}]}},487:function(t,e,n){"use strict";n.r(e);n(216);var a=n(411),i=n(397),o=n(398),l=n(402);console.log(a.a);var r={components:{toggleUr:l.default},data:function(){return{loadType:"mp4",playerConfig:{}}},created:function(){},mounted:function(){this.playerConfig=Object.assign({},a.a),this.playerConfig.height="420px",this.$lang.indexOf("en")>-1?(this.playerConfig.lang="en",this.playerConfig.title="Your Title"):this.$lang.indexOf("zh")>-1&&(this.playerConfig.lang="zh-cn",this.playerConfig.title="你的视频标题"),console.log(this.playerConfig);var t=new MuiPlayer(this.playerConfig);i.a.mp=t,Object(o.a)()},beforeDestroy:function(){console.log(i.a.mp),i.a.mp.destory()},methods:{onChangeurl:function(t){delete this.playerConfig.poster,i.a.mp.reloadUrl(t)}}},s=n(32),u=Object(s.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("div",{attrs:{id:"mui-player"}}),this._v(" "),e("toggle-url",{on:{changeurl:this.onChangeurl}})],1)}),[],!1,null,"2c84e11d",null);e.default=u.exports}}]);