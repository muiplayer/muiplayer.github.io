(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{398:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var a=i(397);function n(){a.a.mp.on("error",(function(t){console.error(t)})),a.a.mp.on("volume-change",(function(t){window.plus?plus.device.setVolume(t.size):a.a.mp.video().volume=t.size})),a.a.mp.on("share",(function(t){a.a.mp.showToast("Type："+t.type)}))}},412:function(t,e,i){"use strict";var a=i(407),n=i.n(a),o=(i(216),i(397)),s=[{functions:"Clarity",model:"select",show:!0,zIndex:0,childConfig:[{functions:"1080P"},{functions:"HD",selected:!0},{functions:"SD"}],onToggle:function(t,e,i){var a=["SD","HD"].indexOf(t.functions);-1!=a?e((function(){var t,e=o.a.mp.video();t={currentTime:e.currentTime,paused:e.paused},o.a.mp.once("ready",(function(){var e=o.a.mp.video(),i=function(){e.currentTime=t.currentTime,t.paused?e.pause():e.play()};0==e.readyState?e.addEventListener("durationchange",(function(t){i()}),{once:!0}):i()})),delete l.parse,0==a?o.a.mp.reloadUrl(o.a.address.src_sd):o.a.mp.reloadUrl(o.a.address.src_hd)})):o.a.mp.showToast("No video source!")}}];var l=e.a={container:"#mui-player",src:o.a.address.src_hd,title:"",poster:"https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/poster.jpg",autoplay:!1,autoFit:!0,live:!1,objectFit:"cover",videoAttribute:[{attrKey:"webkit-playsinline",attrValue:""},{attrKey:"playsinline",attrValue:""},{attrKey:"x5-playsinline",attrValue:""},{attrKey:"t7-video-player-type",attrValue:"inline"},{attrKey:"x5-video-player-type",attrValue:"h5-page"},{attrKey:"x-webkit-airplay",attrValue:"allow"},{attrKey:"controlslist",attrValue:"nodownload"}],custom:{headControls:[{slot:"github",click:function(t){window.open("https://github.com/muiplayer/hello-muiplayer")},style:{}},{slot:"gitee",click:function(t){window.open("https://gitee.com/muiplayer/hello-muiplayer")},style:{}}]},plugins:["undefined"!=typeof MuiPlayerDesktopPlugin?new MuiPlayerDesktopPlugin({customSetting:s,thumbnails:o.a.thumbnails,contextmenu:[{name:"muiplayer",context:"Muiplayer",zIndex:0,show:!1,click:function(t){o.a.mp.showToast("Trigger Click！"),t()}}]}):{},"function"==typeof n.a?new n.a({key:"01K01L01K01I01H01I01L01K01C01H01L01K01H01J01J",defaultMenuConfig:{showShare:[1,2,3,4]},thumbnails:o.a.thumbnails}):{}]}},489:function(t,e,i){"use strict";i.r(e);i(216);var a=i(412),n=i(397),o=i(398),s={data:function(){return{loadType:"mp4",playerConfig:{}}},created:function(){},mounted:function(){this.playerConfig=Object.assign({},a.a),this.playerConfig.objectFit="contain",this.playerConfig.height="420px",this.playerConfig.themeColor="rgb(62, 175, 124)",this.$lang.indexOf("en")>-1?(this.playerConfig.lang="en",this.playerConfig.title="Your Title"):this.$lang.indexOf("zh")>-1&&(this.playerConfig.lang="zh-cn",this.playerConfig.title="你的视频标题");var t=new MuiPlayer(this.playerConfig);n.a.mp=t,Object(o.a)()},beforeDestroy:function(){n.a.mp.destory()},methods:{}},l=i(32),r=Object(l.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("div",{attrs:{id:"mui-player"}},["zh-CN"==this.$lang?e("div",{staticStyle:{display:"none"},attrs:{slot:"gitee"},slot:"gitee"},[e("svg",{staticClass:"icon",attrs:{t:"1623774761684",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1959",width:"100%",height:"100%"}},[e("path",{attrs:{d:"M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z",fill:"#ffffff","p-id":"1960"}})])]):this._e(),this._v(" "),"en-US"==this.$lang?e("div",{staticStyle:{display:"none"},attrs:{slot:"github"},slot:"github"},[e("svg",{staticClass:"icon",attrs:{t:"1623775232599",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3436",width:"100%",height:"100%"}},[e("path",{attrs:{d:"M512 12.63616c-282.74688 0-512 229.21216-512 512 0 226.22208 146.69824 418.14016 350.12608 485.82656 25.57952 4.73088 35.00032-11.10016 35.00032-24.63744 0-12.20608-0.47104-52.55168-0.69632-95.31392-142.4384 30.96576-172.50304-60.416-172.50304-60.416-23.28576-59.16672-56.85248-74.91584-56.85248-74.91584-46.44864-31.78496 3.50208-31.1296 3.50208-31.1296 51.4048 3.60448 78.47936 52.75648 78.47936 52.75648 45.6704 78.27456 119.76704 55.64416 149.01248 42.55744 4.58752-33.09568 17.85856-55.68512 32.50176-68.46464-113.72544-12.94336-233.2672-56.85248-233.2672-253.0304 0-55.88992 20.00896-101.5808 52.75648-137.4208-5.3248-12.9024-22.85568-64.96256 4.95616-135.49568 0 0 43.008-13.74208 140.84096 52.49024 40.83712-11.34592 84.64384-17.03936 128.16384-17.24416 43.49952 0.2048 87.32672 5.87776 128.24576 17.24416 97.73056-66.2528 140.65664-52.49024 140.65664-52.49024 27.87328 70.53312 10.3424 122.59328 5.03808 135.49568 32.82944 35.86048 52.69504 81.53088 52.69504 137.4208 0 196.64896-119.78752 239.94368-233.79968 252.6208 18.37056 15.89248 34.73408 47.04256 34.73408 94.80192 0 68.5056-0.59392 123.63776-0.59392 140.51328 0 13.6192 9.216 29.5936 35.16416 24.576 203.32544-67.76832 349.83936-259.62496 349.83936-485.76512 0-282.78784-229.23264-512-512-512z","p-id":"3437",fill:"#ffffff"}})])]):this._e()])])}),[],!1,null,"457ea236",null);e.default=r.exports}}]);