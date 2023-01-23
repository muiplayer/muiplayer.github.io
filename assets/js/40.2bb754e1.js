(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{564:function(t,a,s){"use strict";s.r(a);var n=s(43),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"video-thumbnail"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#video-thumbnail"}},[t._v("#")]),t._v(" Video thumbnail")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("When the video is fast-forwarded or you want to jump to a certain playback time node, it is displayed in the form of a thumbnail in advance. MuiPlayer supports the configuration of thumbnails in the extension plug-in.")]),t._v(" "),s("p",[t._v("The thumbnail function is actually implemented by one or more pictures. The pictures are composed of multiple regularly arranged video clips. This is how you can view various video media sites such as youtube. For example, the picture below is a tile=6x5, scale =160x120 thumbnail.")]),t._v(" "),s("img",{staticClass:"zoom-custom-imgs",attrs:{src:"https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/thumbnails_preview.png",alt:"Video thumbnail"}})]),t._v(" "),s("h3",{attrs:{id:"generate-thumbnails-ffmpeg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generate-thumbnails-ffmpeg"}},[t._v("#")]),t._v(" Generate thumbnails (FFmpeg)")]),t._v(" "),s("p",[t._v("Use "),s("a",{attrs:{href:"http://ffmpeg.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FFmpeg"),s("OutboundLink")],1),t._v("Processing video is a good choice, here we use it to generate video thumbnails. The following command can create a video thumbnail with scale=160:90 and tile=10x10:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("ffmpeg -i video.mp4 -vsync vfr -vf "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"select=isnan(prev_selected_t)+gte(t-prev_selected_t\\,1),scale=160:90,tile=10x10"')]),t._v(" -qscale:v "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"output%03d.jpg"')]),t._v("\n")])])]),s("h3",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Attribute name")]),t._v(" "),s("th",[t._v("Types of")]),t._v(" "),s("th",[t._v("Defaults")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("thumbnails")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("{}")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("thumbnails.preview")]),t._v(" "),s("td",[t._v("Array")]),t._v(" "),s("td",[t._v("[]")]),t._v(" "),s("td",[t._v("Thumbnail configuration list, accepts resource addresses of multiple thumbnails arranged in order")])]),t._v(" "),s("tr",[s("td",[t._v("thumbnails.tile")]),t._v(" "),s("td",[t._v("Array")]),t._v(" "),s("td",[t._v("[10,10]")]),t._v(" "),s("td",[t._v("Specify thumbnail arrangement rules")])]),t._v(" "),s("tr",[s("td",[t._v("thumbnails.scale")]),t._v(" "),s("td",[t._v("Array")]),t._v(" "),s("td",[t._v("[160,90]")]),t._v(" "),s("td",[t._v("Specify the  default size of the video thumbnail image : [160,90], which means width = 160px, height = 90px;")])]),t._v(" "),s("tr",[s("td",[t._v("thumbnails.async")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("({ client, put })")]),t._v(" "),s("td",[t._v("Asynchronously return the thumbnail path, used when the thumbnail needs to request the image address from the network after the video is loaded, and return the "),s("code",[t._v("client")]),t._v(" in the function callback to establish data reception, and "),s("code",[t._v("put")]),t._v(" the thumbnail path "),s("code",[t._v("insert")])])])])]),t._v(" "),s("h3",{attrs:{id:"use-thumbnail"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-thumbnail"}},[t._v("#")]),t._v(" Use thumbnail")]),t._v(" "),s("p",[t._v("MuiPlayer does not limit the thumbnail size to a specified size, but you need to specify the thumbnail size. The scale parameter specifies the aspect ratio, and the tile parameter specifies the arrangement rules of the thumbnail fragments.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" remoteImages "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./image/thumbnail003.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./image/thumbnail004.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// remote path to test")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" addThumbnailRecord "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add request record mark to prevent duplication")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" thumbnails "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    preview"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./image/thumbnail001.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./image/thumbnail002.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Thumbnail configuration address")]),t._v("\n    tile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Thumbnail Arrangement Rules")]),t._v("\n    scale"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("160")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Thumbnail Fragment Image Aspect Ratio")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("async")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" put "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" call"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a receive function here to obtain the time (seconds) and preview index that the mouse addresses to the specified time when the thumbnail is currently being previewed, and return the data through the callback function;")]),t._v("\n        client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("receive")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" thumbnail_image_index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" thumbnailInex "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("addThumbnailRecord"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("thumbnailInex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                addThumbnailRecord"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("thumbnailInex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Latency simulation network asynchronous request thumbnail path")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index：Thumbnail Queue Order，src：thumbnail path")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" thumbnailInex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" remoteImages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("thumbnailInex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Thumbnail position index ${ thumbnailInex } has complete request")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MuiPlayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    container"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#mui-player'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../media/media.mp4'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n    plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MuiPlayerMobilePlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            thumbnails"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MuiPlayerWebpagePlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            thumbnails"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"other-doc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-doc"}},[t._v("#")]),t._v(" Other Doc：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.bogotobogo.com/FFMpeg/ffmpeg_select_scene_change_keyframes_tile_Creating_a_mosaic_of_screenshots_from_a_movie.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reference One"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://superuser.com/questions/538112/meaningful-thumbnails-for-a-video-using-ffmpeg",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reference two"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://askubuntu.com/questions/377579/how-can-i-use-ffmpeg-to-output-a-screenshot-gallery-mosaic",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reference Three"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);