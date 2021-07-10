(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{499:function(t,a,s){"use strict";s.r(a);var n=s(32),v=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"移动端扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动端扩展"}},[t._v("#")]),t._v(" 移动端扩展")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("MuiPlayer 提供了一套样式统一，可观且响应式的移动端皮肤插件，该插件增强了播放器在移动端的可操纵能力，包含可触屏控制进度、音量，锁定播放，主菜单配置切换播放速率、循环播放等。")]),t._v(" "),s("p",[t._v("该扩展插件处理了大部分手机端播放的兼容性问题，如播放事件触发的时机冲突，浏览器全屏等等，以及兼容了包括 "),s("strong",[t._v("Iphone")]),t._v("、"),s("strong",[t._v("Android")]),t._v(" 等各种机型。")]),t._v(" "),s("p",[t._v("如果您的应用是运行在 "),s("a",{attrs:{href:"http://www.html5plus.org/doc/zh_cn/runtime.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("html5 plus"),s("OutboundLink")],1),t._v(" 环境中，那么使用该播放插件将会默认得到更多原生 api 的支持，例如播放控制设备音量、全屏时横竖屏播放、沉浸式播放等。你也可以使用原生与网页交互的方式来控制视频以及设备功能，MuiPlayer 提供了所有事件触发的回调函数。查看在 "),s("RouterLink",{attrs:{to:"/zh/guide/uni-app/"}},[t._v("uni-app 中的使用。")])],1),t._v(" "),s("p",[s("strong",[s("RouterLink",{attrs:{to:"/zh/demo/"}},[t._v("查看演示")]),t._v("，电脑访问请使用Google浏览器打开手机调试模式：")],1),t._v("：")]),t._v(" "),s("img",{staticClass:"zoom-custom-imgs",attrs:{src:"https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/mobile_preview.png"}})]),t._v(" "),s("h2",{attrs:{id:"开始使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始使用"}},[t._v("#")]),t._v(" 开始使用")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("专业版功能")]),t._v(" "),s("p",[t._v("该插件由专业版提供支持，如需获取插件，"),s("u",[s("RouterLink",{attrs:{to:"/zh/joinUs/#专业版插件"}},[t._v("点这里")])],1),t._v(" 查看获取专业版插件介绍")])]),t._v(" "),s("p",[t._v("在页面引入 "),s("strong",[t._v("mui-player-mobile-plugin.js")]),t._v("，插件需要在初始化播放器之前加载：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 使用 script 标签引入 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("js/mui-player-mobile-plugin.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("在主配置项 plugins 中传入：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MuiPlayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    container"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#mui-player'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../media/media.mp4'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    \n    plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MuiPlayerMobilePlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            showMenuButton"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"配置选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置选项"}},[t._v("#")]),t._v(" 配置选项")]),t._v(" "),s("p",[t._v("扩展插件可配置 API：")]),t._v(" "),s("div",{staticClass:"mobile-api"}),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("showMenuButton")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("是否加载默认的主菜单"),s("br"),t._v("Tag：只有在手机横屏状态有效")])]),t._v(" "),s("tr",[s("td",[t._v("showLock")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("是否显示播放锁定按钮"),s("br"),t._v("Tag：只有在手机横屏状态有效")])]),t._v(" "),s("tr",[s("td",[t._v("showBattery")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("auto")]),t._v(" "),s("td",[t._v("是否显示时间电量，默认为 auto。如果window.navigator.getBattery 对象无效那么不显示，反之显示。")])]),t._v(" "),s("tr",[s("td",[t._v("pageGetsture")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("非全屏状态是否开启触屏控制手势")])]),t._v(" "),s("tr",[s("td",[t._v("defaultLuminance")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("指定默认播放器的亮度，取值范围为 0 至 1，默认为 1。如果在 html5+ 环境下，该参数设置无效，将会默认获取当前系统亮度"),s("br"),t._v("Tag：当 hotKeyConfig['luminanceHandle'] != fals 时配置有效")])]),t._v(" "),s("tr",[s("td",[t._v("forwardRate")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("0.1")]),t._v(" "),s("td",[t._v("触屏滑动控制视频的进退速率，有效取值 0.1 至 1")])]),t._v(" "),s("tr",[s("td",[t._v("#")]),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("hotKeyConfig")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("{}")]),t._v(" "),s("td",[t._v("热键配置")])]),t._v(" "),s("tr",[s("td",[t._v("hotKeyConfig.processHandle")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("是否开启左右触屏滑动控制进度")])]),t._v(" "),s("tr",[s("td",[t._v("hotKeyConfig.volumeHandle")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("是否开启上下触屏滑动控制音量，默认为播放器右半屏，如果设置 luminanceHandle = false，那么将全屏触发")])]),t._v(" "),s("tr",[s("td",[t._v("hotKeyConfig.luminanceHandle")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("是否开启上下触屏滑动控制亮度，默认为播放器左半屏，如果设置 volumeHandle = false，那么将全屏触发")])]),t._v(" "),s("tr",[s("td",[t._v("#")]),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("defaultMenuConfig")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("{}")]),t._v(" "),s("td",[t._v("默认侧栏主菜单配置")])]),t._v(" "),s("tr",[s("td",[t._v("defaultMenuConfig.showFillSwitch")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("是否显示铺满全屏切换按钮")])]),t._v(" "),s("tr",[s("td",[t._v("defaultMenuConfig.showLoopSwitch")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("是否显示循环播放切换按钮，直播模式下该参数无效")])]),t._v(" "),s("tr",[s("td",[t._v("defaultMenuConfig.showSpeedSwitch")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("是否允许切换播放速度，直播模式下该参数无效")])]),t._v(" "),s("tr",[s("td",[t._v("defaultMenuConfig.showShare")]),t._v(" "),s("td",[t._v("Array")]),t._v(" "),s("td",[t._v("[]")]),t._v(" "),s("td",[t._v("显示分享的类型，如果该值的长度为零或者为空则不显示分享入口。参数接受 1 | 2 | 3 | 4。"),s("br"),t._v(" 1：微信、2：朋友圈、3：QQ、4：复制链接")])]),t._v(" "),s("tr",[s("td",[t._v("#")]),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("thumbnails")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("缩略图配置，"),s("RouterLink",{attrs:{to:"/zh/guide/thumbnails/"}},[t._v("参考")])],1)])])]),t._v(" "),s("h2",{attrs:{id:"动作事件监听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动作事件监听"}},[t._v("#")]),t._v(" 动作事件监听")]),t._v(" "),s("p",[t._v("mui-player-mobile-plugin 提供特定的行为事件，你必须通过添加该事件来处理指定的动作：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 音量调节时触发")]),t._v("\nmp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'volume-change'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("video")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("volume "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("事件名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("函数返回")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("volume-change")]),t._v(" "),s("td",[t._v("EventHandle")]),t._v(" "),s("td",[t._v("{ size }")]),t._v(" "),s("td",[t._v("音量调节时触发")])]),t._v(" "),s("tr",[s("td",[t._v("luminance-change")]),t._v(" "),s("td",[t._v("EventHandle")]),t._v(" "),s("td",[t._v("{ size }")]),t._v(" "),s("td",[t._v("亮度调节时触发")])]),t._v(" "),s("tr",[s("td",[t._v("share")]),t._v(" "),s("td",[t._v("EventHandle")]),t._v(" "),s("td",[t._v("{ type }")]),t._v(" "),s("td",[t._v("默认侧栏主菜单 - 分享按钮点击时触发")])])])])])}),[],!1,null,null,null);a.default=v.exports}}]);