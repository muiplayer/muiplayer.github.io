(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{443:function(t,e,n){},445:function(t,e,n){"use strict";n(443)},448:function(t,e,n){"use strict";n.r(e);n(51),n(442);var i=n(439),s={props:{placeholder:{default:"The input mp4 video url"},buttonText:{default:"Toggle URL"},type:{default:"url"}},data:function(){return{content:""}},methods:{onLoading:function(){if("url"==this.type){/http[s]{0,1}:\/\/([\w.]+\/?)\S*/.test(this.content)?(this.$emit("before"),i.a.mp.reloadUrl(this.content)):alert("Please enter the correct address!")}"text"==this.type&&this.$emit("result",this.content)}}},a=(n(445),n(43)),o=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"toggleUrl"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"url-input",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),n("button",{staticClass:"url-submit",on:{click:t.onLoading}},[t._v(t._s(t.buttonText))])])}),[],!1,null,"02ab346b",null);e.default=o.exports},538:function(t,e,n){"use strict";n.r(e);var i=n(73),s=(n(258),n(255),n(440)),a=n(439),o=n(441),l=n(453),r={components:{toggleUr:n(448).default},data:function(){return{playerConfig:{}}},created:function(){},mounted:function(){var t={plugins:[].concat(Object(i.a)(l.a.plugins),Object(i.a)(l.c.plugins))};this.playerConfig=Object.assign(t,s.a),this.playerConfig.lang=this.$lang.indexOf("en")>-1?"en":"zh-cn";var e=new MuiPlayer(this.playerConfig);a.a.mp=e,Object(o.a)()},beforeDestroy:function(){a.a.mp.destroy()},methods:{}},c=n(43),u=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{attrs:{id:"mui-player"}},["zh-CN"==this.$lang?n("div",{staticStyle:{display:"none"},attrs:{slot:"gitee"},slot:"gitee"},[n("svg",{staticClass:"icon",attrs:{t:"1623774761684",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1959",width:"100%",height:"100%"}},[n("path",{attrs:{d:"M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z",fill:"#ffffff","p-id":"1960"}})])]):t._e(),t._v(" "),"en-US"==this.$lang?n("div",{staticStyle:{display:"none"},attrs:{slot:"github"},slot:"github"},[n("svg",{staticClass:"icon",attrs:{t:"1623775232599",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3436",width:"100%",height:"100%"}},[n("path",{attrs:{d:"M512 12.63616c-282.74688 0-512 229.21216-512 512 0 226.22208 146.69824 418.14016 350.12608 485.82656 25.57952 4.73088 35.00032-11.10016 35.00032-24.63744 0-12.20608-0.47104-52.55168-0.69632-95.31392-142.4384 30.96576-172.50304-60.416-172.50304-60.416-23.28576-59.16672-56.85248-74.91584-56.85248-74.91584-46.44864-31.78496 3.50208-31.1296 3.50208-31.1296 51.4048 3.60448 78.47936 52.75648 78.47936 52.75648 45.6704 78.27456 119.76704 55.64416 149.01248 42.55744 4.58752-33.09568 17.85856-55.68512 32.50176-68.46464-113.72544-12.94336-233.2672-56.85248-233.2672-253.0304 0-55.88992 20.00896-101.5808 52.75648-137.4208-5.3248-12.9024-22.85568-64.96256 4.95616-135.49568 0 0 43.008-13.74208 140.84096 52.49024 40.83712-11.34592 84.64384-17.03936 128.16384-17.24416 43.49952 0.2048 87.32672 5.87776 128.24576 17.24416 97.73056-66.2528 140.65664-52.49024 140.65664-52.49024 27.87328 70.53312 10.3424 122.59328 5.03808 135.49568 32.82944 35.86048 52.69504 81.53088 52.69504 137.4208 0 196.64896-119.78752 239.94368-233.79968 252.6208 18.37056 15.89248 34.73408 47.04256 34.73408 94.80192 0 68.5056-0.59392 123.63776-0.59392 140.51328 0 13.6192 9.216 29.5936 35.16416 24.576 203.32544-67.76832 349.83936-259.62496 349.83936-485.76512 0-282.78784-229.23264-512-512-512z","p-id":"3437",fill:"#ffffff"}})])]):t._e()]),t._v(" "),n("toggle-url",{on:{before:function(e){t.playerConfig.poster=""}}})],1)}),[],!1,null,"3181bdfc",null);e.default=u.exports}}]);