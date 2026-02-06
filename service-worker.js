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
    "revision": "b1a8153519fd44900fe9f33a72901f51"
  },
  {
    "url": "assets/css/0.styles.b5e78b24.css",
    "revision": "79cf95b7583589f881c8343dfe035533"
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
    "url": "assets/js/12.3ffd80d2.js",
    "revision": "5625ff657db43c77277a9328b13646cd"
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
    "url": "assets/js/19.5511ad68.js",
    "revision": "95cf8c6017103ab82173771a38f61883"
  },
  {
    "url": "assets/js/2.053bcfba.js",
    "revision": "6ec3b02ea7cf52ec6b4fc8cee453fe07"
  },
  {
    "url": "assets/js/20.d6ceac30.js",
    "revision": "427ea08a8f9f2e430554ff1da6694db3"
  },
  {
    "url": "assets/js/21.e22c4c59.js",
    "revision": "f9426229f14c96922f6c2a72c444ac76"
  },
  {
    "url": "assets/js/22.54c8c323.js",
    "revision": "66e5ea44977b23fa77b8e4d0e23dfe2a"
  },
  {
    "url": "assets/js/23.8957a4a8.js",
    "revision": "e33a7c7d054b2289f5cd3a922a86972c"
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
    "url": "assets/js/26.be880973.js",
    "revision": "5b23674b9bbaadcb2aa8f237ab70a208"
  },
  {
    "url": "assets/js/27.946cd9dd.js",
    "revision": "dc2ac473516df5941ee42a343e5500eb"
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
    "url": "assets/js/31.2850e781.js",
    "revision": "26c8827ae7b1e3888f48feabddaa6201"
  },
  {
    "url": "assets/js/32.dcc64ce1.js",
    "revision": "44a135a3987558210dfee79f1f46c6d6"
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
    "url": "assets/js/43.e56ff01f.js",
    "revision": "e8b3a2151ae7ed87fa351d2b313874de"
  },
  {
    "url": "assets/js/44.96de467d.js",
    "revision": "3436fcfa2842c18f6b7d4b28909daa6b"
  },
  {
    "url": "assets/js/45.bdf693dc.js",
    "revision": "4a3c6c6270a767aa6e53ff910ae51a86"
  },
  {
    "url": "assets/js/46.5fed8a99.js",
    "revision": "78701b93dd39fac6be86deea4673e47f"
  },
  {
    "url": "assets/js/47.5da59145.js",
    "revision": "ce6c0cc31489ee4b2b57f0beeeee0f30"
  },
  {
    "url": "assets/js/48.3f5ee70d.js",
    "revision": "c53aefb9c9b22ee930cc35f4b24968b2"
  },
  {
    "url": "assets/js/49.dc264a28.js",
    "revision": "fd6f3a70fc18f0726a9245927950b3a9"
  },
  {
    "url": "assets/js/5.4da5a51f.js",
    "revision": "f13ef432a53a7f18c3ed2d3e0cfe66ec"
  },
  {
    "url": "assets/js/50.82586bf5.js",
    "revision": "4009dc6f35347e54612f586eaf1c3c24"
  },
  {
    "url": "assets/js/51.04a81971.js",
    "revision": "5c341d125333a82bb573b1b984c92a3f"
  },
  {
    "url": "assets/js/52.68e96356.js",
    "revision": "2439a822778341a95abbf7913f3521c4"
  },
  {
    "url": "assets/js/53.ccee6956.js",
    "revision": "7436fa064b692ea60f834374fce869ff"
  },
  {
    "url": "assets/js/54.7d4c068f.js",
    "revision": "eda32fbc9cb8aefe618877b1c1f593ea"
  },
  {
    "url": "assets/js/55.324662b3.js",
    "revision": "ffc29f2af180763cd4d081a31297ffa0"
  },
  {
    "url": "assets/js/56.0c1aeb0f.js",
    "revision": "e710c43dc88f95705c3c6722ef7c38bf"
  },
  {
    "url": "assets/js/57.8e955167.js",
    "revision": "decdf496256481460d06a682c0f01095"
  },
  {
    "url": "assets/js/58.b87f0b84.js",
    "revision": "af123d2f7d085560d0701b9ad1a27208"
  },
  {
    "url": "assets/js/59.56be4dec.js",
    "revision": "4764bf39ead2947c006d36442a19d25b"
  },
  {
    "url": "assets/js/6.8a4d2dd0.js",
    "revision": "108a2a519c9cf4aab63bc8e7d05d3005"
  },
  {
    "url": "assets/js/60.30d4f074.js",
    "revision": "f09808d5425a3eaab5fae4258d257074"
  },
  {
    "url": "assets/js/61.7f9b004d.js",
    "revision": "64cbbc2b502a3da30e17f23319f68d67"
  },
  {
    "url": "assets/js/62.12c2d897.js",
    "revision": "94f16b607f3f71a0658b091c9fc093e5"
  },
  {
    "url": "assets/js/63.12700b54.js",
    "revision": "1f7de278d50529137f1131fb93f6f3a4"
  },
  {
    "url": "assets/js/64.c303a30a.js",
    "revision": "a03044b8696a7b8679b2ec2c8dd8927d"
  },
  {
    "url": "assets/js/65.64906e62.js",
    "revision": "20ec6e08e9dd1dc1c341af6a7dc466a8"
  },
  {
    "url": "assets/js/66.72743756.js",
    "revision": "77831d8a1ea0361eee28a9184668a8a0"
  },
  {
    "url": "assets/js/67.0c4c2691.js",
    "revision": "f6c53569ae2df3127079ed6356b7f488"
  },
  {
    "url": "assets/js/68.bace46c1.js",
    "revision": "b5b33f12d867956b827343772d92a806"
  },
  {
    "url": "assets/js/69.1fee38f7.js",
    "revision": "693eef4b566d33de721d0e1848c8cebd"
  },
  {
    "url": "assets/js/7.e1f57f28.js",
    "revision": "65a0e647636dfa65c25258b8a74b586e"
  },
  {
    "url": "assets/js/70.99eed3ab.js",
    "revision": "3326f4d8bf10674e0d9b06cf865a972d"
  },
  {
    "url": "assets/js/71.3e2c8544.js",
    "revision": "14dd5b8b73969d45a40fc80437dde2b9"
  },
  {
    "url": "assets/js/72.d91e5ed5.js",
    "revision": "d3b67732b4621d6379daa76133df183f"
  },
  {
    "url": "assets/js/73.ff225f6f.js",
    "revision": "1a590af719c0505ba50861cee8493699"
  },
  {
    "url": "assets/js/74.5075cae0.js",
    "revision": "8b55abf11f01bc13bc2811e3a710349c"
  },
  {
    "url": "assets/js/75.b30212a2.js",
    "revision": "58e2b86e910e37ea5443da01fccc6499"
  },
  {
    "url": "assets/js/76.e9b0b3cb.js",
    "revision": "93c3a12f3825782494893199015788fe"
  },
  {
    "url": "assets/js/77.7474adbb.js",
    "revision": "79cd221e566e8c3fd83f5f3599bc9071"
  },
  {
    "url": "assets/js/78.902a63d6.js",
    "revision": "ea8a5e181d4b5a209fee7ecff05dac4c"
  },
  {
    "url": "assets/js/79.1eedbc50.js",
    "revision": "6c8a5f098d3cb4d5961d610eb908ec42"
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
    "url": "assets/js/81.a47ccd2b.js",
    "revision": "a68a1ade4bca55e2eed1304884d2cca5"
  },
  {
    "url": "assets/js/82.4cba1615.js",
    "revision": "5e994dc3fde0354ace6225a039827691"
  },
  {
    "url": "assets/js/83.115f4173.js",
    "revision": "050e3c6be04b1c77b4e77f690515b5c6"
  },
  {
    "url": "assets/js/84.f10670c1.js",
    "revision": "ef60b55c5141898a7b2445dbbd3e5bcc"
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
    "url": "assets/js/app.dc19ee31.js",
    "revision": "edb683593b9b6d4419ee94c804139b87"
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
    "revision": "579c3e9755ddf8b442e91d0b06070312"
  },
  {
    "url": "demo/index.html",
    "revision": "87d91149361ffda5c487270928fb617f"
  },
  {
    "url": "demo/live-demo.html",
    "revision": "0daffcd8d28ef8f77c986194e5d76aa9"
  },
  {
    "url": "demo/multiple-demo.html",
    "revision": "b0494f7755c6b0fbde6b14708e25decb"
  },
  {
    "url": "demo/subtitle-demo.html",
    "revision": "fd21908e3f051c73c487bd8d692cbf28"
  },
  {
    "url": "guide/api.html",
    "revision": "ac6c564efcc411bc5812499dfce668bd"
  },
  {
    "url": "guide/barrage.html",
    "revision": "07c288c225f4c3a2b02253642ba24047"
  },
  {
    "url": "guide/begin.html",
    "revision": "cafa1f94cd3bb8d22cba323f06a70dce"
  },
  {
    "url": "guide/custom-control.html",
    "revision": "af856d0703510b5c173bd6ec3d48354b"
  },
  {
    "url": "guide/index.html",
    "revision": "61ba4f3ec001265f4b2998071ed8d7cc"
  },
  {
    "url": "guide/mui-player-desktop-plugin.html",
    "revision": "b46bd8452564afd4ee0314e32394b146"
  },
  {
    "url": "guide/other-problem.html",
    "revision": "18346c206c66817014810c943b04484f"
  },
  {
    "url": "guide/plus-desktop-plugin.html",
    "revision": "2f2c84d72daa2fc14189fe1cee427fd2"
  },
  {
    "url": "guide/plus-mobile-plugin.html",
    "revision": "afd62804ab98fc8157b4d12575ca96ac"
  },
  {
    "url": "guide/preset.html",
    "revision": "92cbe91a31a32c22154718c6bae043e9"
  },
  {
    "url": "guide/subtitle.html",
    "revision": "fc8d36433374aa7e4dcfede8360eac66"
  },
  {
    "url": "guide/thumbnails.html",
    "revision": "f43d41206bf28b255ccc49106ce70359"
  },
  {
    "url": "guide/uni-app.html",
    "revision": "49340a1aedec54258c5680ee2182d8c2"
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
    "revision": "d1a58a2f290cdaded7c33fe4694fbca7"
  },
  {
    "url": "joinUs/contact.html",
    "revision": "900fee5d27318232373743f82e2b15a8"
  },
  {
    "url": "joinUs/index.html",
    "revision": "a327f9337745ca5d4f7c3ce854e322b2"
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
    "revision": "dbde76ee3e7e3f59a19f2a0cd500c8a1"
  },
  {
    "url": "zh/demo/index.html",
    "revision": "816a9e79498694ec3ab7237177b5755e"
  },
  {
    "url": "zh/demo/live-demo.html",
    "revision": "d2965206a56c3ff6c472ac0caa63df5a"
  },
  {
    "url": "zh/demo/multiple-demo.html",
    "revision": "1cf9d2ff1b254ee47c6ed2d9c09e6bc2"
  },
  {
    "url": "zh/demo/subtitle-demo.html",
    "revision": "2ada0adf106bf20ee802c751fb3533f3"
  },
  {
    "url": "zh/guide/api.html",
    "revision": "47fa66c2c341894395aaa0ec608a9287"
  },
  {
    "url": "zh/guide/barrage.html",
    "revision": "081bbc44f41d26c96adc700b9fb37977"
  },
  {
    "url": "zh/guide/begin.html",
    "revision": "161ea39032c0827320de00e69472e99f"
  },
  {
    "url": "zh/guide/custom-control.html",
    "revision": "6d1636edee046d4148d6f604c3465d9f"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "449e5523e1606953e9c8e1ea7e45d75e"
  },
  {
    "url": "zh/guide/mui-player-desktop-plugin.html",
    "revision": "be1e882043bc432b2e587629b052f1d6"
  },
  {
    "url": "zh/guide/other-problem.html",
    "revision": "d7291db2eabd3d64d51de20a6bb07231"
  },
  {
    "url": "zh/guide/plus-desktop-plugin.html",
    "revision": "fdef559601fefdcb3e2a95653116eb19"
  },
  {
    "url": "zh/guide/plus-mobile-plugin.html",
    "revision": "d8f3a8fe7505ea52ddd4fe60e06bb7aa"
  },
  {
    "url": "zh/guide/preset.html",
    "revision": "3931c6ddf8ce7016783a167a59ebd1f5"
  },
  {
    "url": "zh/guide/subtitle.html",
    "revision": "927fc42c0ee062d712c51f1939d1e2e0"
  },
  {
    "url": "zh/guide/thumbnails.html",
    "revision": "76f55bab30302aa3bd9e91d1d80d8393"
  },
  {
    "url": "zh/guide/uni-app.html",
    "revision": "440802802e451592dd9614989a9fe53b"
  },
  {
    "url": "zh/index.html",
    "revision": "0a4bd605b6686af59ac5ca156384c435"
  },
  {
    "url": "zh/joinUs/contact.html",
    "revision": "c5232366a60a5d3d5cd95cccb76cbe63"
  },
  {
    "url": "zh/joinUs/index.html",
    "revision": "853da2fca410903b2959ac9ea1093eed"
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
