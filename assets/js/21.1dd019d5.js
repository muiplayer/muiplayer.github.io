(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{545:function(t,e,n){"use strict";n.r(e);n(255),n(258),n(261),n(154);var i=n(440),o=n(439),a=n(441),s=n(453),r={data:function(){return{playerConfig:{},popupAdObject:null,rolling:null}},created:function(){},mounted:function(){var t=this,e=this.$lang.indexOf("en")>-1?"Screenshot":"截图";this.initCreateDanmaku(),this.playerConfig=Object.assign(s.b,i.a),this.playerConfig.lang=this.$lang.indexOf("en")>-1?"en":"zh-cn",this.playerConfig.custom.footerControls=[{slot:"screenshot",position:"right",tooltip:"".concat(e),oftenShow:!1,style:{},click:function(t){o.a.mp.screenshot({type:"image/png",scale:.5,watermark:{image:"https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/logot_hump.png",scale:.3,position:"top-right"},onDone:function(t){t.base64,t.currentTime;(0,t.download)("".concat(e," ").concat((new Date).toLocaleString()))},onFail:function(t){console.error(t)}})}}];var n=new MuiPlayer(this.playerConfig);o.a.mp=n,Object(a.a)(),o.a.mp.on("ready",(function(){try{t._addWatermark(),t._switchMiniPlayer(),t._createRolling(),o.a.mp.video().addEventListener("pause",(function(){t._popupAdvertise(!0),o.a.CM.stop()})),o.a.mp.video().addEventListener("play",(function(){t._popupAdvertise(!1),o.a.CM.start()})),o.a.mp.on("fullscreen-change",(function(){t.autoscaleComment()}))}catch(t){console.error(t)}}))},beforeDestroy:function(){o.a.mp.destroy()},methods:{initCreateDanmaku:function(){var t=this.$refs.commentStage;o.a.CM=new CommentManager(t),o.a.CM.init()},autoscaleComment:function(){var t=o.a.CM.stage,e=this.$refs.muiPlayer;this._timeout_1&&clearTimeout(this._timeout_1),this._timeout_1=setTimeout((function(){t.style.height=e.clientHeight-80+"px",o.a.CM.init()}),500)},_createRolling:function(){var t=this.$lang.indexOf("en")>-1?'<strong style="font-family: 楷体"><font color="#ff0000" size="4">Play</font><font color="#FFA700" size="4">&emsp;Focus</font><font color="#6495ED" size="4">&emsp;Connection</font><font size="4">&emsp;Share and free 🚩</font></strong>':'<strong style="font-family: 楷体"><font color="#ff0000" size="4">播放</font><font color="#FFA700" size="4">&emsp;专注</font><font color="#6495ED" size="4">&emsp;连接</font><font size="4">&emsp;分享和自由 🚩</font></strong>';this.rolling=new o.a.mp.createRolling(t,{id:"warning",scrollamount:6,scrolldelay:85,loop:-1,style:{paddingBottom:"25px",paddingTop:"25px",textShadow:"0px 0px 3px rgb(0 0 0)"}}),this.rolling.onstart((function(){console.log("Rolling Start...")})),this.rolling.onfinish((function(){console.log("Rolling Finish...")}))},_switchMiniPlayer:function(t){var e=!1,n=new IntersectionObserver((function(n){n[0].intersectionRatio<=0&&e?o.a.mp.switchMiniPlayer(t,{width:400,height:"auto",bottom:30,right:"calc(100% - 408px)",keepPlayerLayer:!0,transition:!0,transitionDuration:.35,transitionTiming:"ease"}):(e=!0,o.a.mp.switchMiniPlayer(!1))}));n.observe(this.$refs.muiPlayer),o.a.mp.on("destroy",(function(){n.disconnect()}))},_addWatermark:function(){o.a.mp.addWatermark({image:"https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/logot_hump.png",scale:.3,position:"top-right"})},_popupAdvertise:function(t){var e,n=this;t?((e=document.createElement("img")).src="https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/cover-square.jpg",e.style="object-fit: contain;height: 100%;width: 100%;",e.setAttribute("title","Website"),e.onclick=function(t){t.stopPropagation(),n.$lang.indexOf("en")>-1?window.open("https://github.com/muiplayer/hello-muiplayer"):n.$lang.indexOf("zh")>-1&&window.open("https://gitee.com/muiplayer/hello-muiplayer")},n.popupAdObject=o.a.mp.popupAdvertise({content:e,style:{width:"270px",height:"270px",borderRadius:"7px"}}),this.popupAdObject.open()):this.popupAdObject instanceof Object&&this.popupAdObject.close()}}},l=n(43),c=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("div",{ref:"muiPlayer",staticClass:"abp",staticStyle:{position:"relative"},attrs:{id:"mui-player"}},[e("div",{ref:"commentStage",staticClass:"container",staticStyle:{"z-index":"1 !important",height:"325px",width:"100%","margin-top":"5px"}}),this._v(" "),e("div",{staticStyle:{display:"none"},attrs:{slot:"screenshot"},slot:"screenshot"},[e("svg",{staticClass:"icon",attrs:{t:"1674055163992",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"9448"}},[e("path",{attrs:{d:"M889.472 148.266667a42.666667 42.666667 0 0 1-13.568 58.794666l-282.88 176.725334 171.306667 107.008 2.261333 0.085333a202.666667 202.666667 0 1 1-115.413333 29.781333l-138.624-86.570666-139.178667 86.912a202.666667 202.666667 0 1 1-112.554667-30.293334l171.221334-106.922666-282.794667-176.725334a42.666667 42.666667 0 0 1-15.957333-54.4l2.389333-4.394666a42.666667 42.666667 0 0 1 58.794667-13.568l318.08 198.784 318.122666-198.784a42.666667 42.666667 0 0 1 58.794667 13.568zM266.666667 576a117.333333 117.333333 0 1 0 0 234.666667 117.333333 117.333333 0 0 0 0-234.666667z m490.666666 0a117.333333 117.333333 0 1 0 0 234.666667 117.333333 117.333333 0 0 0 0-234.666667z",fill:"#ffffff","p-id":"9449"}})])])])])}),[],!1,null,"74f2d895",null);e.default=c.exports}}]);