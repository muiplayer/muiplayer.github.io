(window.webpackJsonp=window.webpackJsonp||[]).push([[4,12],{397:function(e,t,o){"use strict";t.a={mp:!1,address:{src_hd:"https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/media/media.mp4",src_sd:"https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/media/media_sd.mp4",src_mp4:"https://mpv.videocc.net/e785b2c81c/5/e785b2c81c9e018296671a1287e99615_2.mp4",src_flv:"https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/media/media.flv",src_hls:"https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/media/media.m3u8"},thumbnails:{preview:["https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/output_160x90_10x10_001.jpg"],tile:[10,10],scale:[160,90]},CM:null,closeDanmaku:!1}},398:function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var i=o(397);function s(){i.a.mp.on("error",(function(e){console.error(e)})),i.a.mp.on("volume-change",(function(e){i.a.mp.video().volume=e.size})),i.a.mp.on("share",(function(e){i.a.mp.showToast("Type："+e.type)}))}},399:function(e,t,o){},401:function(e,t,o){"use strict";o(399)},402:function(e,t,o){"use strict";o.r(t);var i={props:{placeholder:{default:"the input video url"},buttonText:{default:"Toggle URL"},type:{default:"url"}},data:function(){return{text:""}},methods:{onLoading:function(){if("url"==this.type){/http[s]{0,1}:\/\/([\w.]+\/?)\S*/.test(this.text)?this.$emit("changeurl",this.text):alert("视频地址录入不正确！")}else"text"==this.type&&this.$emit("changeurl",this.text)}}},s=(o(401),o(32)),r=Object(s.a)(i,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",{attrs:{id:"toggleUrl"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],staticClass:"url-input",attrs:{name:"url",type:"text",placeholder:e.placeholder},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),e._v(" "),o("button",{staticClass:"url-submit",on:{click:e.onLoading}},[e._v(e._s(e.buttonText))])])}),[],!1,null,"65cadca6",null);t.default=r.exports},403:function(e,t,o){var i=o(2),s=o(404);i({global:!0,forced:parseInt!=s},{parseInt:s})},404:function(e,t,o){var i=o(5),s=o(217).trim,r=o(218),n=i.parseInt,m=/^[+-]?0[Xx]/,c=8!==n(r+"08")||22!==n(r+"0x16");e.exports=c?function(e,t){var o=s(String(e));return n(o,t>>>0||(m.test(o)?16:10))}:n},410:function(e,t,o){var i=o(5),s=o(217).trim,r=o(218),n=i.parseFloat,m=1/n(r+"-0")!=-1/0;e.exports=m?function(e){var t=s(String(e)),o=n(t);return 0===o&&"-"==t.charAt(0)?-0:o}:n},469:function(e,t,o){var i=o(2),s=o(3),r=o(19),n=o(33).f,m=o(11),c=s((function(){n(1)}));i({target:"Object",stat:!0,forced:!m||c,sham:!m},{getOwnPropertyDescriptor:function(e,t){return n(r(e),t)}})},470:function(e,t,o){var i=o(2),s=o(11);i({target:"Object",stat:!0,forced:!s,sham:!s},{defineProperties:o(227)})},471:function(e,t,o){var i=o(2),s=o(410);i({global:!0,forced:parseFloat!=s},{parseFloat:s})},480:function(e,t,o){"use strict";o.r(t);o(124),o(41),o(40),o(469),o(125),o(126),o(228),o(470),o(129);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}o(216),o(226),o(42),o(9),o(62),o(14),o(15),o(127);var r=o(81);o(471),o(86),o(403);var n=o(397);function m(e,t,o){t(),e.getPanelOption(e.panelIndex).selected?(n.a.closeDanmaku=!1,n.a.mp.video().paused||(n.a.mp.video().pause(),n.a.mp.video().play())):(n.a.closeDanmaku=!0,n.a.CM.clear(),n.a.CM.stop())}function c(e,t,o){t(),n.a.CM.options.scroll.opacity=parseFloat(e.functions),o()}function d(e,t,o){t();for(var i=0,s=[{name:"0.5 倍",scale:2},{name:"正常",scale:1},{name:"1.5 倍",scale:.66},{name:"2.0 倍",scale:.5},{name:"2.5 倍",scale:.5},{name:"3.0 倍",scale:.33},{name:"0.5 times",scale:2},{name:"Normal",scale:1},{name:"1.5 times",scale:.66},{name:"2.0 times",scale:.5},{name:"2.5 times",scale:.5},{name:"3.0 times",scale:.33}];i<s.length;i++){var r=s[i];if(r.name==e.functions){n.a.CM.options.scroll.scale=r.scale;break}}o()}function l(e,t,o){t();var i,s=function(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=Object(r.a)(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var i=0,s=function(){};return{s:s,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,m=!0,c=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return m=e.done,e},e:function(e){c=!0,n=e},f:function(){try{m||null==o.return||o.return()}finally{if(c)throw n}}}}(n.a.CM.timeline);try{for(s.s();!(i=s.n()).done;){i.value.size=parseInt(e.functions.substr(0,2))}}catch(e){s.e(e)}finally{s.f()}o()}function a(){return[{functions:"弹幕",name:"danmaku",model:"select",childConfig:[{functions:"开启",model:"switch",selected:!0},{functions:"透明度",childConfig:[{functions:"0.3"},{functions:"0.5"},{functions:"0.8"},{functions:"1.0",selected:!0}],onToggle:c},{functions:"弹幕速度",childConfig:[{functions:"0.5 倍"},{functions:"正常",selected:!0},{functions:"1.5 倍"},{functions:"2.0 倍"},{functions:"2.5 倍"},{functions:"3.0 倍"}],onToggle:d},{functions:"字体大小",childConfig:[{functions:"12 PX"},{functions:"16 PX"},{functions:"18 PX"},{functions:"25 PX",selected:!0},{functions:"36 PX"},{functions:"45 PX"},{functions:"64 PX"}],onToggle:l}],onToggle:m}]}var u={container:"#mui-player",src:n.a.address.src_hd,title:"",poster:"https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/poster.jpg",autoplay:!1,autoFit:!0,live:!1,objectFit:"contain",themeColor:"rgb(62, 175, 124)",videoAttribute:[{attrKey:"webkit-playsinline",attrValue:""},{attrKey:"playsinline",attrValue:""},{attrKey:"x5-playsinline",attrValue:""},{attrKey:"t7-video-player-type",attrValue:"inline"},{attrKey:"x5-video-player-type",attrValue:"h5-page"},{attrKey:"x-webkit-airplay",attrValue:"allow"},{attrKey:"controlslist",attrValue:"nodownload"}],custom:{headControls:[{slot:"github",click:function(e){window.open("https://github.com/muiplayer/hello-muiplayer")},style:{}},{slot:"gitee",click:function(e){window.open("https://gitee.com/muiplayer/hello-muiplayer")},style:{}}]},plugins:[]},x=o(398),f=[{mode:1,text:"请画出受力分析（10分）",stime:200,size:25,dur:7e3,color:16777215},{mode:5,text:"这风景太漂亮了吧~",stime:1e3,size:25,dur:4e3,color:16711680},{mode:5,text:"前方高能，建议反复观看！！",stime:1500,size:25,dur:4e3,color:16776960},{mode:5,text:"yee~~",stime:1700,size:25,dur:5e3,color:16711680},{mode:5,text:"我要到这里走一走",stime:2500,size:36,dur:4e3,color:65280},{mode:4,text:"♥ MUIPLAYER.JS.ORG ♥",stime:3100,size:18,dur:5500,color:16711680},{mode:4,text:"Mui Player 一款优秀的 H5 视频播放器框架",stime:3e3,size:25,dur:5500,color:16776960},{mode:1,text:"姐姐记得给视频加中国的水印！！",stime:400,size:25,dur:7e3,color:16777215},{mode:1,text:"水中贵足",stime:600,size:25,dur:7e3,color:16777215},{mode:1,text:"我在地上踩都摔成狗",stime:800,size:25,dur:7e3,color:16777215},{mode:1,text:"不会沉？",stime:1e3,size:25,dur:7e3,color:16777215},{mode:1,text:"China",stime:1200,size:25,dur:7e3,color:16777215},{mode:1,text:"小心韩国！！！",stime:1400,size:25,dur:7e3,color:16777215},{mode:1,text:"理论上可行实际上难度不低",stime:1600,size:25,dur:7e3,color:16777215},{mode:1,text:"一苇渡江",stime:1800,size:25,dur:7e3,color:16777215},{mode:1,text:"天动万象",stime:2e3,size:25,dur:7e3,color:16777215},{mode:1,text:"我虽无意逐鹿，却知苍生苦楚",stime:2200,size:25,dur:7e3,color:16711680},{mode:1,text:"练过，早说啊",stime:2400,size:25,dur:7e3,color:16777215},{mode:1,text:"China",stime:2600,size:25,dur:7e3,color:16777215},{mode:1,text:"China  China",stime:2800,size:25,dur:7e3,color:16777215},{mode:1,text:"China",stime:3e3,size:25,dur:7e3,color:10027263},{mode:1,text:"派出所备案一下",stime:3200,size:25,dur:7e3,color:16777215},{mode:1,text:"天动万象",stime:3400,size:25,dur:7e3,color:16777215},{mode:1,text:"啊啊，好美",stime:3600,size:25,dur:7e3,color:16777215},{mode:1,text:"天动万象",stime:3800,size:36,dur:7e3,color:6750207},{mode:1,text:"哇哦这bgm",stime:4e3,size:25,dur:7e3,color:16777215},{mode:1,text:"把我整不会了",stime:4200,size:25,dur:7e3,color:16777215},{mode:1,text:"小七孔？",stime:4400,size:25,dur:7e3,color:16777215},{mode:1,text:"小脑壳好用",stime:4600,size:25,dur:7e3,color:16777215},{mode:1,text:"天赋",stime:4800,size:25,dur:7e3,color:16777215},{mode:1,text:"求竹竿视觉",stime:5e3,size:25,dur:7e3,color:16776960},{mode:1,text:"韩国人学不会",stime:5200,size:25,dur:7e3,color:16777215},{mode:1,text:"一苇渡江绝世风华",stime:5400,size:25,dur:7e3,color:16777215},{mode:1,text:"放屁 这事韩国传统文化",stime:5600,size:25,dur:7e3,color:16777215},{mode:1,text:"china",stime:5800,size:25,dur:7e3,color:6750207},{mode:1,text:"美美美",stime:6e3,size:25,dur:7e3,color:16777215},{mode:1,text:"天动万象",stime:6200,size:25,dur:7e3,color:16777215},{mode:1,text:"牛拉了",stime:6400,size:25,dur:7e3,color:16777215},{mode:1,text:"太强了",stime:6600,size:25,dur:7e3,color:6750207},{mode:1,text:"很厉害",stime:6800,size:25,dur:7e3,color:16777215},{mode:1,text:"偷国人偷不动",stime:7e3,size:25,dur:7e3,color:16777215},{mode:1,text:"加水印的，是为了防韩不要脸吗？",stime:7200,size:25,dur:7e3,color:16777215},{mode:1,text:"只愿荡敌四方 换得浮生一隅",stime:7400,size:25,dur:7e3,color:16777215},{mode:1,text:"钟离",stime:7600,size:25,dur:7e3,color:16777215},{mode:1,text:"小心偷国人",stime:7800,size:25,dur:7e3,color:16711680},{mode:1,text:"China",stime:8e3,size:25,dur:7e3,color:16777215},{mode:1,text:"一苇渡江原来是真的！",stime:8200,size:25,dur:7e3,color:16777215},{mode:1,text:"天动万相！！",stime:8400,size:25,dur:7e3,color:16777215},{mode:1,text:"先学游泳",stime:8600,size:25,dur:7e3,color:16777215},{mode:1,text:"天动万象",stime:8800,size:25,dur:7e3,color:16711680},{mode:1,text:"恭迎老祖",stime:9e3,size:25,dur:7e3,color:16777215},{mode:1,text:"嗯？",stime:9200,size:25,dur:7e3,color:16777215},{mode:1,text:"天动万象",stime:9400,size:25,dur:7e3,color:65280},{mode:1,text:"天动万象",stime:9600,size:25,dur:7e3,color:16777215},{mode:1,text:"天动万象",stime:9800,size:25,dur:7e3,color:16777215},{mode:1,text:"厉害",stime:1e4,size:25,dur:7e3,color:65280},{mode:1,text:"有没摔下水的，我看看",stime:10200,size:25,dur:7e3,color:16777215},{mode:1,text:"牛",stime:10400,size:25,dur:7e3,color:16777215},{mode:1,text:"天动万象",stime:10600,size:25,dur:7e3,color:16777215},{mode:1,text:"上回书说到",stime:10800,size:25,dur:7e3,color:16777215},{mode:1,text:"上回书说到",stime:11e3,size:25,dur:7e3,color:16777215},{mode:1,text:"天动万象！",stime:11200,size:25,dur:7e3,color:16777215},{mode:1,text:"求拍摄视角",stime:11400,size:25,dur:7e3,color:16777215},{mode:1,text:"China",stime:11600,size:25,dur:7e3,color:16777215},{mode:1,text:"韩国：轻功水上漂，这功夫是我韩国文化",stime:11800,size:25,dur:7e3,color:16777215},{mode:1,text:"牛蛙",stime:12e3,size:25,dur:7e3,color:16777215},{mode:1,text:"吃呐",stime:12200,size:25,dur:7e3,color:16777215},{mode:1,text:"万象天引",stime:12400,size:25,dur:7e3,color:16777215},{mode:1,text:"万象天引",stime:12600,size:25,dur:7e3,color:16777215},{mode:1,text:"天动万象",stime:12800,size:25,dur:7e3,color:16777215},{mode:1,text:"钟师傅：你们就没有属于自己的bug吗？（不好意思，还真没有）",stime:13e3,size:25,dur:7e3,color:16777215},{mode:1,text:"开头就一个尘世闲游",stime:13200,size:25,dur:7e3,color:16777215},{mode:1,text:"我上竹子直接就沉了",stime:13400,size:25,dur:7e3,color:16777215},{mode:1,text:"China",stime:13600,size:25,dur:7e3,color:16777215},{mode:1,text:"应该要练很长时间吧",stime:13800,size:25,dur:7e3,color:16777215},{mode:1,text:"哎呀",stime:14e3,size:25,dur:7e3,color:16777215},{mode:1,text:".",stime:14200,size:25,dur:7e3,color:16777215},{mode:1,text:"天动万象",stime:14400,size:25,dur:7e3,color:16777215},{mode:1,text:"肯定失手过",stime:14600,size:25,dur:7e3,color:16777215},{mode:1,text:"独竹漂",stime:14800,size:25,dur:7e3,color:16777215},{mode:1,text:"这居然是真实存在的",stime:15e3,size:25,dur:7e3,color:16777215},{mode:1,text:"别一天到晚扯韩国了，是我们的就是我们的，好好看shipin",stime:15200,size:25,dur:7e3,color:16777215},{mode:1,text:"天，如履平地",stime:15400,size:25,dur:7e3,color:16777215},{mode:1,text:"China",stime:15600,size:25,dur:7e3,color:16711680},{mode:1,text:"China",stime:15800,size:25,dur:7e3,color:16777215},{mode:1,text:"却知天下苦楚",stime:16e3,size:25,dur:7e3,color:16777215},{mode:1,text:"我随无意逐鹿",stime:16200,size:25,dur:7e3,color:16777215},{mode:1,text:"天 动 万 象",stime:16400,size:25,dur:7e3,color:16777215},{mode:1,text:"太美了",stime:16600,size:25,dur:7e3,color:16711680},{mode:1,text:"美炸了",stime:16800,size:25,dur:7e3,color:16777215},{mode:1,text:"跳极乐净土的过分了！",stime:17e3,size:25,dur:7e3,color:16777215},{mode:1,text:"很厉害吗？我都直接在水底走的",stime:17200,size:25,dur:7e3,color:16777215},{mode:1,text:"卧槽",stime:17400,size:25,dur:7e3,color:16777215},{mode:1,text:"真的厉害",stime:17600,size:25,dur:7e3,color:16777215},{mode:1,text:"这也太稳了",stime:17800,size:25,dur:7e3,color:16777215},{mode:1,text:"？？？？",stime:18e3,size:25,dur:7e3,color:16777215},{mode:1,text:"我虽无意逐鹿，却知苍生苦楚",stime:18200,size:25,dur:7e3,color:16777215},{mode:1,text:"天  动  万  象",stime:18400,size:25,dur:7e3,color:6750207},{mode:1,text:"天  动  万  象",stime:18600,size:25,dur:7e3,color:16777215},{mode:1,text:"天  动  万  象",stime:18800,size:25,dur:7e3,color:16777215},{mode:1,text:"此世群魔诸神并起，我虽无意逐鹿，却知长生苦楚",stime:19e3,size:25,dur:7e3,color:16777215},{mode:1,text:"此世群魔诸神并起，我虽无意逐鹿，却知长生苦楚",stime:19200,size:25,dur:7e3,color:16777215},{mode:1,text:"钟离：你们没有自己的BGM嘛？",stime:19400,size:25,dur:7e3,color:16777215},{mode:1,text:"钟离：你们没有自己的BGM嘛？",stime:19600,size:25,dur:7e3,color:16777215},{mode:1,text:"钟离：你们没有自己的BGM嘛？",stime:19800,size:25,dur:7e3,color:16777215},{mode:1,text:"这套汉服我也有！是雀翎仙！",stime:2e4,size:25,dur:7e3,color:16777215},{mode:1,text:"好仙儿啊",stime:20200,size:25,dur:7e3,color:16777215},{mode:1,text:"竹子居然不滚动",stime:20400,size:25,dur:7e3,color:6750207},{mode:1,text:"牛啊",stime:20600,size:25,dur:7e3,color:16777215},{mode:1,text:"在陆地我也下不去还有得活嘛？",stime:20800,size:25,dur:7e3,color:16777215},{mode:1,text:"韩国人：我来了",stime:21e3,size:25,dur:7e3,color:16777215},{mode:1,text:"华夏",stime:21200,size:25,dur:7e3,color:16777215},{mode:1,text:"固若金汤",stime:21400,size:25,dur:7e3,color:16777215},{mode:1,text:"天动万象",stime:21600,size:25,dur:7e3,color:16777215},{mode:1,text:"钟离：你们没有自己的bgm吗",stime:21800,size:25,dur:7e3,color:16777215},{mode:1,text:"放心吧 泡菜坛子不会漂",stime:22e3,size:25,dur:7e3,color:16777215},{mode:1,text:"韩国人没那么大的湖",stime:22200,size:25,dur:7e3,color:16776960},{mode:1,text:"天动万象",stime:22400,size:25,dur:7e3,color:16777215},{mode:1,text:"尘世闲游",stime:22600,size:25,dur:7e3,color:16777215},{mode:1,text:"稳",stime:22800,size:25,dur:7e3,color:16777215},{mode:1,text:"这去拍戏不是可以很省事",stime:23e3,size:25,dur:7e3,color:16777215},{mode:1,text:"不，这是韩国的竹子所以。。。。哈哈哈哈",stime:23200,size:25,dur:7e3,color:16777215},{mode:1,text:"韩国人表示它想学",stime:23400,size:25,dur:7e3,color:16777215},{mode:1,text:"没少掉下去吧",stime:23600,size:25,dur:7e3,color:16777215},{mode:1,text:"会不会被棒子说成是他们的？",stime:23800,size:25,dur:7e3,color:16777215},{mode:1,text:"心疼姑娘的脚，天天联系",stime:24e3,size:25,dur:7e3,color:16777215},{mode:1,text:"牛！",stime:24200,size:25,dur:7e3,color:16777215},{mode:1,text:"我可以举着竹竿在水里",stime:24400,size:25,dur:7e3,color:16777215},{mode:1,text:"这挺简单的吧",stime:24600,size:25,dur:7e3,color:16777215},{mode:1,text:"少林功夫好耶",stime:24800,size:25,dur:7e3,color:16777215},{mode:1,text:"想不明白为什么她站上去竹子就不转。",stime:25e3,size:25,dur:7e3,color:16777215},{mode:1,text:"差点翻船",stime:25200,size:25,dur:7e3,color:16777215},{mode:1,text:"上502",stime:25400,size:25,dur:7e3,color:16777215},{mode:1,text:"韩国没竹子有棒子",stime:25600,size:25,dur:7e3,color:16777215},{mode:1,text:"天动万象",stime:25800,size:25,dur:7e3,color:16777215},{mode:1,text:"哇",stime:26e3,size:25,dur:7e3,color:16777215},{mode:1,text:"十年磨一剑",stime:26200,size:25,dur:7e3,color:16777215},{mode:1,text:"6666666",stime:26400,size:25,dur:7e3,color:16777215},{mode:1,text:"天动万象机翻：天上有一万只大象在移动",stime:26600,size:25,dur:7e3,color:16777215},{mode:1,text:"China",stime:26800,size:25,dur:7e3,color:16777215},{mode:1,text:"中国的China",stime:27e3,size:25,dur:7e3,color:16777215},{mode:1,text:"China",stime:27200,size:25,dur:7e3,color:16777215},{mode:1,text:"China",stime:27400,size:25,dur:7e3,color:16777215},{mode:1,text:"原来",stime:27600,size:25,dur:7e3,color:16777215},{mode:1,text:"？？？？？？？",stime:27800,size:25,dur:7e3,color:16777215},{mode:1,text:"天动万像",stime:28e3,size:25,dur:7e3,color:16777215},{mode:1,text:"钟离",stime:28200,size:25,dur:7e3,color:16777215},{mode:1,text:"动量守恒",stime:28400,size:25,dur:7e3,color:16777215},{mode:1,text:"刚刚看上央视了。",stime:28600,size:25,dur:7e3,color:16777215},{mode:1,text:"天 动 万 象",stime:28800,size:25,dur:7e3,color:16777215},{mode:1,text:"666",stime:29e3,size:25,dur:7e3,color:16777215},{mode:1,text:"厉害了",stime:29200,size:25,dur:7e3,color:16777215},{mode:1,text:"不断的练",stime:29400,size:25,dur:7e3,color:16777215},{mode:1,text:"姐姐好牛好美",stime:29600,size:25,dur:7e3,color:16777215},{mode:1,text:"好美的背影",stime:29800,size:25,dur:7e3,color:16777215},{mode:1,text:"小姐姐太厉害了吧",stime:3e4,size:25,dur:7e3,color:16777215}],p={components:{toggleUr:o(402).default},data:function(){return{loadType:"mp4",playerConfig:{},_disableTime:!0,playTime:0,_timeout_1:null}},created:function(){},mounted:function(){this.initCreateDanmaku(),this.playerConfig=Object.assign({},u),this.playerConfig.height="420px";var e=new a;this.$lang.indexOf("en")>-1?(this.playerConfig.lang="en",this.playerConfig.title="Your Title",e[0].functions="Danmaku",e[0].childConfig[0].functions="ON",e[0].childConfig[1].functions="Opacity",e[0].childConfig[2].functions="Danmaku speed",e[0].childConfig[2].childConfig=[{functions:"0.5 times"},{functions:"Normal",selected:!0},{functions:"1.5 times"},{functions:"2.0 times"},{functions:"2.5 times"},{functions:"3.0 times"}],e[0].childConfig[3].functions="Font size"):this.$lang.indexOf("zh")>-1&&(this.playerConfig.lang="zh-cn",this.playerConfig.title="你的视频标题"),this.playerConfig.plugins.push(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},new MuiPlayerDesktopPlugin({customSetting:e,thumbnails:n.a.thumbnails}))),console.log(this.playerConfig);var t=new MuiPlayer(this.playerConfig);n.a.mp=t,Object(x.a)(),this.addPlayListener()},beforeDestroy:function(){n.a.mp.destory()},destroyed:function(){},methods:{initCreateDanmaku:function(){var e=this.$refs.commentStage;n.a.CM=new CommentManager(e),n.a.CM.init(),n.a.CM.load(JSON.parse(JSON.stringify(f))),window.CM=n.a.CM},autoscaleComment:function(){var e=n.a.CM.stage,t=this.$refs.muiPlayer;this._timeout_1&&clearTimeout(this._timeout_1),this._timeout_1=setTimeout((function(){e.style.height=t.clientHeight-80+"px",n.a.CM.init()}),500)},cmSend:function(e){e&&n.a.CM.send({mode:1,text:e,size:36,color:2985200})},cmClear:function(){n.a.CM.clear()},cmInsert:function(){n.a.CM.insert({mode:1,text:"Insert Danmaku",stime:1e4,size:25,color:255})},addPlayListener:function(){var e=this;n.a.mp.on("ready",(function(t){n.a.mp.video().addEventListener("play",(function(){e.playTime=1e3*n.a.mp.video().currentTime,e._disableTime=!0,n.a.CM.start(),e.triggerTime()})),n.a.mp.video().addEventListener("pause",(function(){e._disableTime=!1,n.a.CM.stop()})),n.a.mp.video().addEventListener("seeked",(function(){e.cmClear(),e.playTime=1e3*n.a.mp.video().currentTime})),n.a.mp.on("fullscreen-change",(function(t){e.autoscaleComment()}))}))},triggerTime:function(){var e=this;e._disableTime&&!0!==n.a.closeDanmaku&&setTimeout((function(){e.playTime+=100,console.log("Polling => "+e.playTime/1e3+"s"),n.a.CM.time(e.playTime),e.triggerTime()}),100)}}},z=o(32),h=Object(z.a)(p,(function(){var e=this.$createElement,t=this._self._c||e;return t("main",[t("div",{ref:"muiPlayer",staticClass:"abp",staticStyle:{position:"relative"},attrs:{id:"mui-player"}},[t("div",{ref:"commentStage",staticClass:"container",staticStyle:{"z-index":"1 !important",height:"325px",width:"100%"}}),this._v(" "),"zh-CN"==this.$lang?t("div",{staticStyle:{display:"none"},attrs:{slot:"gitee"},slot:"gitee"},[t("svg",{staticClass:"icon",attrs:{t:"1623774761684",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1959",width:"100%",height:"100%"}},[t("path",{attrs:{d:"M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z",fill:"#ffffff","p-id":"1960"}})])]):this._e(),this._v(" "),"en-US"==this.$lang?t("div",{staticStyle:{display:"none"},attrs:{slot:"github"},slot:"github"},[t("svg",{staticClass:"icon",attrs:{t:"1623775232599",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3436",width:"100%",height:"100%"}},[t("path",{attrs:{d:"M512 12.63616c-282.74688 0-512 229.21216-512 512 0 226.22208 146.69824 418.14016 350.12608 485.82656 25.57952 4.73088 35.00032-11.10016 35.00032-24.63744 0-12.20608-0.47104-52.55168-0.69632-95.31392-142.4384 30.96576-172.50304-60.416-172.50304-60.416-23.28576-59.16672-56.85248-74.91584-56.85248-74.91584-46.44864-31.78496 3.50208-31.1296 3.50208-31.1296 51.4048 3.60448 78.47936 52.75648 78.47936 52.75648 45.6704 78.27456 119.76704 55.64416 149.01248 42.55744 4.58752-33.09568 17.85856-55.68512 32.50176-68.46464-113.72544-12.94336-233.2672-56.85248-233.2672-253.0304 0-55.88992 20.00896-101.5808 52.75648-137.4208-5.3248-12.9024-22.85568-64.96256 4.95616-135.49568 0 0 43.008-13.74208 140.84096 52.49024 40.83712-11.34592 84.64384-17.03936 128.16384-17.24416 43.49952 0.2048 87.32672 5.87776 128.24576 17.24416 97.73056-66.2528 140.65664-52.49024 140.65664-52.49024 27.87328 70.53312 10.3424 122.59328 5.03808 135.49568 32.82944 35.86048 52.69504 81.53088 52.69504 137.4208 0 196.64896-119.78752 239.94368-233.79968 252.6208 18.37056 15.89248 34.73408 47.04256 34.73408 94.80192 0 68.5056-0.59392 123.63776-0.59392 140.51328 0 13.6192 9.216 29.5936 35.16416 24.576 203.32544-67.76832 349.83936-259.62496 349.83936-485.76512 0-282.78784-229.23264-512-512-512z","p-id":"3437",fill:"#ffffff"}})])]):this._e()]),this._v(" "),t("toggle-url",{attrs:{placeholder:"Send a live danmaku",buttonText:"Send Danmaku",type:"text"},on:{changeurl:this.cmSend}})],1)}),[],!1,null,"200ceef2",null);t.default=h.exports}}]);