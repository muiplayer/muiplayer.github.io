(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{500:function(t,s,a){"use strict";a.r(s);var n=a(32),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pc-端扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pc-端扩展"}},[t._v("#")]),t._v(" PC 端扩展")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("mui-player-desktop-plugin.js 是播放器扩展插件，该扩展插件增强了播放器在pc端应用场景的使用，提供了包括鼠标以及键盘对播放器的控制能力，设置组，音量调节，视频缩略图配置等功能组件。")])]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("使用 npm 安装：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm i mui-player-desktop-plugin\n")])])]),a("p",[t._v("使用 yarn 安装：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("yarn add mui-player-desktop-plugin\n")])])]),a("h2",{attrs:{id:"开始使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始使用"}},[t._v("#")]),t._v(" 开始使用")]),t._v(" "),a("p",[t._v("在页面引入 "),a("strong",[t._v("mui-player-desktop-plugin.js")]),t._v("，插件需要在初始化播放器之前加载")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 使用 script 标签引入 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("js/mui-player-desktop-plugin.min.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用模块管理器引入插件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MuiPlayerDesktopPlugin "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mui-player-desktop-plugin'")]),t._v("\n")])])]),a("p",[t._v("在主配置项 plugins 中传入")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MuiPlayer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    container"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#mui-player'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../media/media.mp4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n    plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MuiPlayerDesktopPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            customSetting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置组配置")]),t._v("\n            contextmenu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 右键菜单组配置")]),t._v("\n            thumbnails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 缩略图配置")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"配置选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置选项"}},[t._v("#")]),t._v(" 配置选项")]),t._v(" "),a("p",[t._v("扩展插件可配置API")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("customSetting")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("{functions:'循环播放',"),a("br"),t._v("name:'loopPlay'}"),a("br"),a("br"),t._v("{functions:'播放速度',"),a("br"),t._v("name:'playbackRate'}")]),t._v(" "),a("td",[t._v("自定义设置组，"),a("a",{attrs:{href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AE%BE%E7%BD%AE%E7%BB%84%E9%85%8D%E7%BD%AE"}},[t._v("参见")])])]),t._v(" "),a("tr",[a("td",[t._v("customSetting.functions")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("组名称")])]),t._v(" "),a("tr",[a("td",[t._v("customSetting.name")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("组标识名。如该名称与默认配置组中某个名称相同，那么将重写默认配置组菜单")])]),t._v(" "),a("tr",[a("td",[t._v("customSetting.model")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("select")]),t._v(" "),a("td",[t._v("组选择模式，可选 switch | select")])]),t._v(" "),a("tr",[a("td",[t._v("customSetting.selected")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("默认是否选中当前选择项")])]),t._v(" "),a("tr",[a("td",[t._v("customSetting.show")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("是否显示")])]),t._v(" "),a("tr",[a("td",[t._v("customSetting.zIndex")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("组显示层级，zIndex越大该组排列顺序越靠前")])]),t._v(" "),a("tr",[a("td",[t._v("customSetting.childConfig")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("[]")]),t._v(" "),a("td",[t._v("子设置组配置，配置参数同父级设置组参数")])]),t._v(" "),a("tr",[a("td",[t._v("customSetting.onToggle")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("callback("),a("br"),t._v("data,"),a("br"),t._v("selected,"),a("br"),t._v("back)")]),t._v(" "),a("td",[t._v("组选项点击后的回调函数，接收三个参数可供处理动作："),a("br"),t._v("1、data：当前选择配置项"),a("br"),t._v("2、selected： 函数，必须手动调用该函数来选择项目"),a("br"),t._v("3、back： 函数，调用该函数触发返回父级设置组，参数可接收一个毫秒单位的数字表示延迟返回")])]),t._v(" "),a("tr",[a("td",[t._v("#")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("s",[t._v("contextmenu")])]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("{name:'shortcuts',"),a("br"),t._v("context:'快捷键'},"),a("br"),a("br"),t._v("{name:'muiplayer',"),a("br"),t._v("context:'MuiPlayer'}")]),t._v(" "),a("td",[t._v("自定义右键菜单，"),a("a",{attrs:{href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8F%B3%E9%94%AE%E8%8F%9C%E5%8D%95"}},[t._v("参考")])])]),t._v(" "),a("tr",[a("td",[a("s",[t._v("contextmenu.name")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("菜单标识名，如该名称与右击菜单组中某个名称相同，那么将重写默认菜单组")])]),t._v(" "),a("tr",[a("td",[a("s",[t._v("contextmenu.context")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("右击菜单名称")])]),t._v(" "),a("tr",[a("td",[a("s",[t._v("contextmenu.zIndex")])]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("组显示层级，zIndex越大该组排列顺序越靠前")])]),t._v(" "),a("tr",[a("td",[a("s",[t._v("contextmenu.show")])]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("是否显示")])]),t._v(" "),a("tr",[a("td",[a("s",[t._v("contextmenu.click")])]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("callback(close)")]),t._v(" "),a("td",[t._v("点击后回调函数。【close：函数，主动调用函数可关闭右击菜单】")])]),t._v(" "),a("tr",[a("td",[t._v("#")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("thumbnails")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("{}")]),t._v(" "),a("td",[t._v("缩略图配置，"),a("RouterLink",{attrs:{to:"/zh/guide/thumbnails/"}},[t._v("参见")])],1)]),t._v(" "),a("tr",[a("td",[t._v("#")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("fullScaling")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("1.2")]),t._v(" "),a("td",[t._v("全屏时控件大小缩放比，取值 >= 1")])]),t._v(" "),a("tr",[a("td",[t._v("leaveHiddenControls")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("鼠标指针移出播放器时是否隐藏控件")])])])]),t._v(" "),a("h2",{attrs:{id:"自定义设置组配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义设置组配置"}},[t._v("#")]),t._v(" 自定义设置组配置")]),t._v(" "),a("p",[t._v("您可以自定义配置设置组以此来满足需要添加的菜单，设置菜单支持两种选择模式，分别是开关模式（switch）和选择模式（select）。")]),t._v(" "),a("p",[t._v("播放器默认设置组包括循环播放以及播放速度的切换，在直播模式（live）下不支持。通过配置 customSetting Option 可自定义设置组，配置举例说明：")]),t._v(" "),a("p",[a("strong",[t._v("customSetting.js")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tfunctions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'清晰度'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tmodel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'select'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tshow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tzIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tchildConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("functions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'蓝光1080P'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("functions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'超清'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("functions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'高清'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("selected"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("functions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'标清'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onToggle")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("selected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Action")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" customSetting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./customSetting.js'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MuiPlayerDesktopPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    customSetting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"自定义右键菜单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义右键菜单"}},[t._v("#")]),t._v(" 自定义右键菜单")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("专业版功能")]),t._v(" "),a("p",[t._v("稳定版 PC 端扩展插件暂未支持自定义右键菜单的功能，如需应用该配置，"),a("u",[a("RouterLink",{attrs:{to:"/zh/joinUs/#专业版插件"}},[t._v("点这里")])],1),t._v(" 查看获取专业版插件介绍")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MuiPlayerDesktopPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    contextmenu"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'copyPlayUrl'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            context"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'复制视频链接'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            zIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            show"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("click")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Action...")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"动作事件监听"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动作事件监听"}},[t._v("#")]),t._v(" 动作事件监听")]),t._v(" "),a("p",[t._v("mui-player-desktop-plugin 提供如下特定的行为事件：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 网页全屏改变的触发")]),t._v("\nmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pagefull-change'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pagefull"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("事件名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("函数返回")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("pagefull-change")]),t._v(" "),a("td",[t._v("EventHandle")]),t._v(" "),a("td",[t._v("{ pagefull }")]),t._v(" "),a("td",[t._v("网页全屏模式改变的触发")])]),t._v(" "),a("tr",[a("td",[t._v("pip-change")]),t._v(" "),a("td",[t._v("EventHandle")]),t._v(" "),a("td",[t._v("{ size }")]),t._v(" "),a("td",[t._v("画中画模式改变时触发")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);