/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "608bc125d93c6ea9a463754ff2873066"
  },
  {
    "url": "assets/css/0.styles.b8f1aae5.css",
    "revision": "a74e44f1eb9e6232b05aae35c56c62fe"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.14561326.js",
    "revision": "2800ebeea12a2848e2f91fbadeb9c08c"
  },
  {
    "url": "assets/js/11.f7bb224f.js",
    "revision": "50f5ab2d95789ebf5bbf624640af4dbc"
  },
  {
    "url": "assets/js/12.f9035ccd.js",
    "revision": "12bfe71d23b3726ac3de03f9228fbc0a"
  },
  {
    "url": "assets/js/13.438fcf46.js",
    "revision": "44ff3a7ca4ce0ad009e6f1f206990287"
  },
  {
    "url": "assets/js/14.6cbac9c2.js",
    "revision": "fe0374954ef7674cc8e7d7ae28bd7eed"
  },
  {
    "url": "assets/js/15.de40c2b9.js",
    "revision": "0eb4aa308571808c231733a9c99f929f"
  },
  {
    "url": "assets/js/16.e0fc9dec.js",
    "revision": "475668efe5efcd1ed09e8131a944c941"
  },
  {
    "url": "assets/js/17.4279c369.js",
    "revision": "9af108d27448f3ea51a0ea0f7c298d79"
  },
  {
    "url": "assets/js/18.559f1d9d.js",
    "revision": "33866b6a21747a492f4a23e8b628d29f"
  },
  {
    "url": "assets/js/19.2fa83f7d.js",
    "revision": "5a249c0311bc9d8e7d1c60a94569def3"
  },
  {
    "url": "assets/js/2.053bcfba.js",
    "revision": "6ec3b02ea7cf52ec6b4fc8cee453fe07"
  },
  {
    "url": "assets/js/20.fbe85f80.js",
    "revision": "1591fbba34cae6aae878c156ea19df84"
  },
  {
    "url": "assets/js/21.3c9ff0e1.js",
    "revision": "55abadf8959ebbd4a89045dd986834b3"
  },
  {
    "url": "assets/js/22.54c8c323.js",
    "revision": "66e5ea44977b23fa77b8e4d0e23dfe2a"
  },
  {
    "url": "assets/js/23.772648ce.js",
    "revision": "8db5fef0f844ffb4e19aa0ee734174c3"
  },
  {
    "url": "assets/js/24.914b1f3a.js",
    "revision": "ba767221bcebbe2e33496d40580deaa0"
  },
  {
    "url": "assets/js/25.76c4add4.js",
    "revision": "a2bd999c91ec0795b71e0eebdd877d26"
  },
  {
    "url": "assets/js/26.1c656f11.js",
    "revision": "c1d809b9e7d46d2dfd34adb34ab56c9b"
  },
  {
    "url": "assets/js/27.77d30bd7.js",
    "revision": "e3fc24f1dce5b8d2f28d9e6ddf70708c"
  },
  {
    "url": "assets/js/28.f22ae9c5.js",
    "revision": "7ffde87073ba47430ff2bda527cc5a11"
  },
  {
    "url": "assets/js/29.05d3f839.js",
    "revision": "0896be2ae5af1d6d1d2cd9a47e696cf0"
  },
  {
    "url": "assets/js/3.b12c51dc.js",
    "revision": "0aab9cfbb6b87b6ecf4c8f1e440ea39d"
  },
  {
    "url": "assets/js/30.a5677a7c.js",
    "revision": "adb2e2cfdd1a771c2e984c4d30a8940b"
  },
  {
    "url": "assets/js/31.d61e39c8.js",
    "revision": "2d7c3845f78dcbac483fb05407e82e64"
  },
  {
    "url": "assets/js/32.541eabc6.js",
    "revision": "379fcc2a01e615c15ae4976f85ba55d5"
  },
  {
    "url": "assets/js/33.98db9b84.js",
    "revision": "1ae06c63f954341a23b0f168f5cf5bff"
  },
  {
    "url": "assets/js/34.f15429c9.js",
    "revision": "04a6ce247bf8145e4cff13902db15be4"
  },
  {
    "url": "assets/js/35.b4cf8398.js",
    "revision": "f605503f2c3e7a3a086729b1ed9916b3"
  },
  {
    "url": "assets/js/36.f3a5d676.js",
    "revision": "5b8742e1ed0b3a37b0c56eb603992263"
  },
  {
    "url": "assets/js/37.0828ee16.js",
    "revision": "21de6e5aeb0ddf9f7cb5ae63aa301285"
  },
  {
    "url": "assets/js/38.8bb4ff6f.js",
    "revision": "0854fddb9ad7d19e7e5cd0fdb0c05c31"
  },
  {
    "url": "assets/js/39.a4acef0c.js",
    "revision": "961885990acad4674ea44b0edc8a4e28"
  },
  {
    "url": "assets/js/4.3bc267c1.js",
    "revision": "36b123c56a5820f8b4eff6b8536efebc"
  },
  {
    "url": "assets/js/40.b60ad3ba.js",
    "revision": "ef501274de083ce97fa35e10d0cef2ac"
  },
  {
    "url": "assets/js/41.7000f434.js",
    "revision": "54a8c30bc029936a0c53f02a635af92b"
  },
  {
    "url": "assets/js/42.a422e02b.js",
    "revision": "d28cbd2f7712a2cfba1ff4c004c71310"
  },
  {
    "url": "assets/js/43.0705f446.js",
    "revision": "5e3d4f2b451de6182973972b4043e8ca"
  },
  {
    "url": "assets/js/44.3c29f681.js",
    "revision": "a0d1894a4a081c5dc99077d90e608424"
  },
  {
    "url": "assets/js/45.bc857623.js",
    "revision": "48bf5218b2b7ba6241e2d4aeeb981931"
  },
  {
    "url": "assets/js/46.b59d9030.js",
    "revision": "1e1caeeb81b9e3cbbde8c73392c7a532"
  },
  {
    "url": "assets/js/47.f5a4ec50.js",
    "revision": "f11c11805ad212d2d5a8cc53f8d140de"
  },
  {
    "url": "assets/js/48.7199ba8e.js",
    "revision": "c64bb898bfa914a116d27bd0643ebd81"
  },
  {
    "url": "assets/js/49.f030db85.js",
    "revision": "76b0e48060e37db7c97a85bf08d9590f"
  },
  {
    "url": "assets/js/5.4da5a51f.js",
    "revision": "f13ef432a53a7f18c3ed2d3e0cfe66ec"
  },
  {
    "url": "assets/js/50.6537f4ba.js",
    "revision": "843a06d990fdbf68cc74a6b9144577cc"
  },
  {
    "url": "assets/js/51.1955be61.js",
    "revision": "04609569c34d13254ee0a925c8966c9f"
  },
  {
    "url": "assets/js/52.218e6757.js",
    "revision": "964c4b6a11b8e680446f2f6a0816dfaa"
  },
  {
    "url": "assets/js/53.0c39649f.js",
    "revision": "91c27c37f2486f16322c5f71c67e7cdf"
  },
  {
    "url": "assets/js/54.b96fed96.js",
    "revision": "06e3a4a8559c1a64ba7b2a99c45369ee"
  },
  {
    "url": "assets/js/55.836eb1f6.js",
    "revision": "94f9655ab0f729fd02f9af438b398204"
  },
  {
    "url": "assets/js/56.7b6cb8cd.js",
    "revision": "11975df639db6f0357e1c991fec125e0"
  },
  {
    "url": "assets/js/57.45c88093.js",
    "revision": "60b6d6d02bd9b13eb351a5788aa16481"
  },
  {
    "url": "assets/js/58.d623329b.js",
    "revision": "d2822e6d1abc2b1333eed5db0eb83df6"
  },
  {
    "url": "assets/js/59.00bd62d2.js",
    "revision": "e28e3a66f2a7a4b9cbd521f9ee77887a"
  },
  {
    "url": "assets/js/6.8a4d2dd0.js",
    "revision": "108a2a519c9cf4aab63bc8e7d05d3005"
  },
  {
    "url": "assets/js/60.2d9b248b.js",
    "revision": "bfa1faa7c6299024411331aa4f68719b"
  },
  {
    "url": "assets/js/61.c3b05b2e.js",
    "revision": "d98c0b6d663cb71076f8a8902b7ae40c"
  },
  {
    "url": "assets/js/62.c2d71f5f.js",
    "revision": "871454a5c6141d4973988fbed60821df"
  },
  {
    "url": "assets/js/63.ae853776.js",
    "revision": "7cd73eeaf02fb7e11c7a13e1a6aa83a4"
  },
  {
    "url": "assets/js/64.6fb5ce8c.js",
    "revision": "7f8f5ad150fdb3afe92365b5fbced034"
  },
  {
    "url": "assets/js/65.789b5253.js",
    "revision": "9a5fae683496a7032ecd19cd87f955f4"
  },
  {
    "url": "assets/js/66.8d61fbfd.js",
    "revision": "05aea61916f25f95e2962330f106b095"
  },
  {
    "url": "assets/js/67.ea8e5903.js",
    "revision": "61f19618dcc96de3ab5d158fd005a28b"
  },
  {
    "url": "assets/js/68.88ad8a06.js",
    "revision": "e355590001558d74fc85d3980b64ff7b"
  },
  {
    "url": "assets/js/69.11fa6612.js",
    "revision": "385498dfb74c714e30b5337e38ed39f2"
  },
  {
    "url": "assets/js/7.e1f57f28.js",
    "revision": "65a0e647636dfa65c25258b8a74b586e"
  },
  {
    "url": "assets/js/70.88c86d2d.js",
    "revision": "8df965cc23b315a7eea72b2167451109"
  },
  {
    "url": "assets/js/71.3c9a384a.js",
    "revision": "cf53934b9774808234c7a20285545b61"
  },
  {
    "url": "assets/js/72.9d30b1c6.js",
    "revision": "b7fa76bb98baeb73f91482c09f10512b"
  },
  {
    "url": "assets/js/73.d653ac08.js",
    "revision": "9d52743987bf28254f3d1295a4cc6df4"
  },
  {
    "url": "assets/js/74.73c67c8f.js",
    "revision": "f7256e8607b45ae773acde0b1586065e"
  },
  {
    "url": "assets/js/75.f06e3fe6.js",
    "revision": "a21a1b81f0daedf94909aa7470274065"
  },
  {
    "url": "assets/js/76.e9b0b3cb.js",
    "revision": "93c3a12f3825782494893199015788fe"
  },
  {
    "url": "assets/js/77.259ad0ca.js",
    "revision": "8e39f815a9aff9d1dd4f8ef4ab928bc7"
  },
  {
    "url": "assets/js/78.902a63d6.js",
    "revision": "ea8a5e181d4b5a209fee7ecff05dac4c"
  },
  {
    "url": "assets/js/79.3f23c07e.js",
    "revision": "7e16f7b9c82afcf8d2b255c9ef27fec3"
  },
  {
    "url": "assets/js/8.f8927e18.js",
    "revision": "e413d87393c5ca144368e9a9c8919eb9"
  },
  {
    "url": "assets/js/80.2c7ad347.js",
    "revision": "ed50d21dc8ca7e83352310084f608e36"
  },
  {
    "url": "assets/js/81.3e11191a.js",
    "revision": "ea978042cfc88c56e62b2dbecc5d5f7d"
  },
  {
    "url": "assets/js/82.5ff84325.js",
    "revision": "702ac59a0b2807202c229239f0d631be"
  },
  {
    "url": "assets/js/83.292b2fe6.js",
    "revision": "42dc4ef8ea17dfcb7f505eb6f010b573"
  },
  {
    "url": "assets/js/84.823eee2d.js",
    "revision": "dbfb351d15aed1f5c370dad9801dc13c"
  },
  {
    "url": "assets/js/85.6af47c85.js",
    "revision": "4cbf1f2bfe93808a2ce699b71af74a30"
  },
  {
    "url": "assets/js/86.0484cff7.js",
    "revision": "36932c63373b06302d28ab209b05c1b4"
  },
  {
    "url": "assets/js/app.b6be3dc5.js",
    "revision": "75f325bb7dd848af56905cba2286737f"
  },
  {
    "url": "assets/js/vendors~docsearch.7323f314.js",
    "revision": "0249dbe317dcfcdaf0a546a64962185b"
  },
  {
    "url": "css/CommentCoreLibrary.min.css",
    "revision": "e578b37f4607d6f4231c8b7da5f1d844"
  },
  {
    "url": "css/mui-player.min.css",
    "revision": "204f27869a06f32aa6c9b69c3ff55288"
  },
  {
    "url": "css/swiper.min.css",
    "revision": "018da5e642fda033e4debef641f6f582"
  },
  {
    "url": "demo/danmaku-demo.html",
    "revision": "bba8648f3f8c3bea9c9a308fb5c0217c"
  },
  {
    "url": "demo/index.html",
    "revision": "b4a613e879284f07dc09e78595af9c3e"
  },
  {
    "url": "demo/live-demo.html",
    "revision": "67020ca73ca13192e1cce00349c3c1d3"
  },
  {
    "url": "demo/multiple-demo.html",
    "revision": "6221a9733ba41ee21a3b192e364f0124"
  },
  {
    "url": "demo/subtitle-demo.html",
    "revision": "041f41f1263b82418b3c25bf19b8b968"
  },
  {
    "url": "guide/api.html",
    "revision": "72e19df22082640727998753e6c0022c"
  },
  {
    "url": "guide/barrage.html",
    "revision": "6e5099acbee87925cde8c972a127e1dc"
  },
  {
    "url": "guide/begin.html",
    "revision": "44465cdea494d1fd0666e3a76a5c091d"
  },
  {
    "url": "guide/custom-control.html",
    "revision": "fe58792207b0131bac69726d32666dbc"
  },
  {
    "url": "guide/index.html",
    "revision": "7bc786377ece485fa625eb216f36612b"
  },
  {
    "url": "guide/mui-player-desktop-plugin.html",
    "revision": "c2197ab5b1d42c96bfccf85c07067ce7"
  },
  {
    "url": "guide/other-problem.html",
    "revision": "3e174c2135bf797e4394e66a0fa48081"
  },
  {
    "url": "guide/plus-desktop-plugin.html",
    "revision": "d8e473ae73a0b89aff694c856ccfb5cc"
  },
  {
    "url": "guide/plus-mobile-plugin.html",
    "revision": "83a5e08fd2d1578ca2e5105e80b1a568"
  },
  {
    "url": "guide/preset.html",
    "revision": "e91cc2bc1770b906f2b89938cddce388"
  },
  {
    "url": "guide/subtitle.html",
    "revision": "1dc93c7f1e1e641c22c51c0a2a2100ca"
  },
  {
    "url": "guide/thumbnails.html",
    "revision": "ee8d4ad08369febe7d70a96b2c89c3ff"
  },
  {
    "url": "guide/uni-app.html",
    "revision": "317547e10053139703d9fff0d2be1d4d"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "739bf390e842572f0575331a14de9f60"
  },
  {
    "url": "joinUs/contact.html",
    "revision": "11634a4ef8009a4ad7f29a841f438f31"
  },
  {
    "url": "joinUs/index.html",
    "revision": "cbcf99a44ba980ba924208bd99da03ee"
  },
  {
    "url": "js/axios.min.js",
    "revision": "bdc6163696f15c841d8f8eb4d69c12cf"
  },
  {
    "url": "js/CommentCoreLibrary.min.js",
    "revision": "e06a2f6319cc95c8ab5f5ffb15986255"
  },
  {
    "url": "js/comments.js",
    "revision": "1e55040e68bff2e5bd18c98e2bfd8420"
  },
  {
    "url": "js/config_demo_danmaku.js",
    "revision": "41cd0ba036ae7fb3147ca8f129824e8d"
  },
  {
    "url": "js/config.js",
    "revision": "98fa79f5b853589c18a791fbafa26eeb"
  },
  {
    "url": "js/customSetting.js",
    "revision": "3cc6f839b02610a5d541ef418115389d"
  },
  {
    "url": "js/global.js",
    "revision": "53b550fbe08f1e18fad2934a160d52bb"
  },
  {
    "url": "js/mui-player.min.js",
    "revision": "f99aa092775237bfd241a9012459fb97"
  },
  {
    "url": "js/playerListener.js",
    "revision": "1a38230cbebb434352645ba11c8aad4d"
  },
  {
    "url": "js/plugins.js",
    "revision": "91e4e54c9d91a523b43b8f46972d1ce9"
  },
  {
    "url": "js/qrcode.min.js",
    "revision": "517b55d3688ce9ef1085a3d9632bcb97"
  },
  {
    "url": "js/swiper.min.js",
    "revision": "da9effeb9447655663c5e0861e58d1dc"
  },
  {
    "url": "plugin/flv.min.js",
    "revision": "0db806b0c05991d191121dd1e94c39d8"
  },
  {
    "url": "plugin/hls.js",
    "revision": "6a52f50a2011ab6ed9db880ca39eee74"
  },
  {
    "url": "plugin/hls.min.js",
    "revision": "d2b846afa1bb7cd6fc981556511e16f1"
  },
  {
    "url": "svg/three-dots.svg",
    "revision": "fda955217fba34c7929c13f7aca87839"
  },
  {
    "url": "zh/demo/danmaku-demo.html",
    "revision": "dc75533ac679a5d0651deafef6103615"
  },
  {
    "url": "zh/demo/index.html",
    "revision": "875c7f63af965c269d46ceaa5a00a3d0"
  },
  {
    "url": "zh/demo/live-demo.html",
    "revision": "2ed40f97fcfb2b41cb711afa191363d8"
  },
  {
    "url": "zh/demo/multiple-demo.html",
    "revision": "80a59abd05ab30960fc695f8f988d66f"
  },
  {
    "url": "zh/demo/subtitle-demo.html",
    "revision": "17599a695c2b224fb429294ef3834536"
  },
  {
    "url": "zh/guide/api.html",
    "revision": "e7336995cfd258c7664538068e613215"
  },
  {
    "url": "zh/guide/barrage.html",
    "revision": "2c5c0b163b2a1e4b2ae465d9b6d9d76f"
  },
  {
    "url": "zh/guide/begin.html",
    "revision": "318ac09e2d661fb23486fb1041af8701"
  },
  {
    "url": "zh/guide/custom-control.html",
    "revision": "37ed58312329a9d682c25573defc3972"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "9303f343f75099237f9e9e1fe084fcd4"
  },
  {
    "url": "zh/guide/mui-player-desktop-plugin.html",
    "revision": "b6e793df5c9befffba5703e41c3b0b92"
  },
  {
    "url": "zh/guide/other-problem.html",
    "revision": "4d9afe3c84746a108d814be2e726e8b9"
  },
  {
    "url": "zh/guide/plus-desktop-plugin.html",
    "revision": "3b3cad32c043ec668afca9b505643dad"
  },
  {
    "url": "zh/guide/plus-mobile-plugin.html",
    "revision": "32588180321069bfcd32d19de9272493"
  },
  {
    "url": "zh/guide/preset.html",
    "revision": "bad7d69e2b1881053094e406c8949949"
  },
  {
    "url": "zh/guide/subtitle.html",
    "revision": "02e15aae14f9fcaaee32c3f8523088fa"
  },
  {
    "url": "zh/guide/thumbnails.html",
    "revision": "ba32280d85fae310d1d61fc999fb65c8"
  },
  {
    "url": "zh/guide/uni-app.html",
    "revision": "6f789fb2e63c57a69d45009e80c8b9b2"
  },
  {
    "url": "zh/index.html",
    "revision": "d801f01d3944746b7d679a9eb54ab9fb"
  },
  {
    "url": "zh/joinUs/contact.html",
    "revision": "7c45fd0633111dc25d41cf601a3dd06f"
  },
  {
    "url": "zh/joinUs/index.html",
    "revision": "9e3ea529b1221a0a2bc0677cd499e332"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
