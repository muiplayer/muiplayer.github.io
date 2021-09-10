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
    "revision": "53eff30eed275fb82012f217ae62bcb1"
  },
  {
    "url": "assets/css/0.styles.ca563b10.css",
    "revision": "5d455a4fb0af5ede4d85e37e7325e10a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.edd77b11.js",
    "revision": "254c0d8aa394c833e6e18bdba9a314dd"
  },
  {
    "url": "assets/js/10.092e6a2b.js",
    "revision": "193b56ea6c53dc1238a36e30a28c115c"
  },
  {
    "url": "assets/js/11.88e844a2.js",
    "revision": "6abc5e63282f5f0ee088b4f15c3a1f36"
  },
  {
    "url": "assets/js/12.98d9690a.js",
    "revision": "288290549e68cf72b5ff67f1fe9bd1aa"
  },
  {
    "url": "assets/js/13.587bc324.js",
    "revision": "2434679c75fe2ecd50f041ef82a238ec"
  },
  {
    "url": "assets/js/14.7368878b.js",
    "revision": "ccc53dd839403dca78af1f3da48c0078"
  },
  {
    "url": "assets/js/15.a8f913b5.js",
    "revision": "37cca54cda9fea3220b0ba62d08879ab"
  },
  {
    "url": "assets/js/16.ba390189.js",
    "revision": "d6d87eefd29442ae7e231b98d1edd94a"
  },
  {
    "url": "assets/js/17.e83a77ad.js",
    "revision": "ca3ea2b8434614fae00733c64864ba62"
  },
  {
    "url": "assets/js/18.d1a21b84.js",
    "revision": "2add90861108e702a25676e0d27daa54"
  },
  {
    "url": "assets/js/19.a38dcc33.js",
    "revision": "155e6fb5ab87020eeb91a55fb9cc35a7"
  },
  {
    "url": "assets/js/20.86502873.js",
    "revision": "5901b903857ea2c7676df4f926ffb6ac"
  },
  {
    "url": "assets/js/21.223f6eb3.js",
    "revision": "aeb40f2b34ed412a8a9b2ffe837a0901"
  },
  {
    "url": "assets/js/22.263cfa84.js",
    "revision": "6e55921cc1f09350240fc62159d766cd"
  },
  {
    "url": "assets/js/23.90d22e6e.js",
    "revision": "4d6bc3441f8297d37d1163072f518f11"
  },
  {
    "url": "assets/js/24.4ff4f4d9.js",
    "revision": "b0d20395450f4345cad2f6a28a70fa63"
  },
  {
    "url": "assets/js/25.e08f7a04.js",
    "revision": "4391ea55a387ab4dff6319b3c3101e7b"
  },
  {
    "url": "assets/js/26.45f88339.js",
    "revision": "1e57b74ca478e7c44bc274223e7935d9"
  },
  {
    "url": "assets/js/27.dddf85fc.js",
    "revision": "8969492ff512e438f19825eb1671c912"
  },
  {
    "url": "assets/js/28.7f4bdd49.js",
    "revision": "99514ba3c9a92ed0f5e95c754ffeb1cb"
  },
  {
    "url": "assets/js/29.dafe6e0b.js",
    "revision": "7bba5dbbb46de3f08576456b00f48a6c"
  },
  {
    "url": "assets/js/3.c77ee85b.js",
    "revision": "16824f3e6cadedd069d7394efa0be695"
  },
  {
    "url": "assets/js/30.8f2e92c7.js",
    "revision": "d7888f64b4a7417be10d12844dca6452"
  },
  {
    "url": "assets/js/31.413a476d.js",
    "revision": "691ef9a9103e256691c6633d80ccf309"
  },
  {
    "url": "assets/js/32.7f6ee4aa.js",
    "revision": "9109a3996d7bc7d580b695021151bebb"
  },
  {
    "url": "assets/js/33.e76f823b.js",
    "revision": "8eda0950079d255c1c70e13c2e77928d"
  },
  {
    "url": "assets/js/34.5d46d970.js",
    "revision": "06758282640b5d907d02e51990d34d3a"
  },
  {
    "url": "assets/js/35.1a0d8754.js",
    "revision": "de0ec97918675397664acb89a0df29b4"
  },
  {
    "url": "assets/js/36.d62c344b.js",
    "revision": "1ce21e5d45d22d0158692171bfa02c84"
  },
  {
    "url": "assets/js/37.de055028.js",
    "revision": "f07f0b3d5cb1d0f94acdae486144dbac"
  },
  {
    "url": "assets/js/38.e5aa73f2.js",
    "revision": "58ae02c146d70a04867202bea02f3300"
  },
  {
    "url": "assets/js/39.e9f0b9e1.js",
    "revision": "e7be7ff6c91beac72025275504ba9a0e"
  },
  {
    "url": "assets/js/4.a32a57b2.js",
    "revision": "8a6a2634d64db10a18a16694ed4fd5b6"
  },
  {
    "url": "assets/js/40.1ba9666f.js",
    "revision": "3edaa901349dcfaad8bf163c0637d54a"
  },
  {
    "url": "assets/js/41.9ef26c64.js",
    "revision": "cf8bc980ee4bc7fb0328bd728857653d"
  },
  {
    "url": "assets/js/42.36d3153a.js",
    "revision": "352603f7b358360c624d34e098c35aca"
  },
  {
    "url": "assets/js/43.cce60831.js",
    "revision": "d4d4dd20961338f38d6d3fe2c6bb9a95"
  },
  {
    "url": "assets/js/44.11686c17.js",
    "revision": "00e77262a20f20bda0dcb61dbd912bcb"
  },
  {
    "url": "assets/js/45.3762a4fd.js",
    "revision": "04abb7ffb3ff6f56120c0125974e8202"
  },
  {
    "url": "assets/js/46.20990b0c.js",
    "revision": "ae848ee95d57a4c76dc0f515f9cf312b"
  },
  {
    "url": "assets/js/47.77523ffd.js",
    "revision": "420804d00bc36f4a487c56caaf633fd2"
  },
  {
    "url": "assets/js/48.a9949567.js",
    "revision": "0449fc95443425390c9f73ea782929e9"
  },
  {
    "url": "assets/js/49.55858fa5.js",
    "revision": "64836c2baff1621a3a4e3c133a9f58d5"
  },
  {
    "url": "assets/js/5.c466c3fa.js",
    "revision": "7985a1251f71fbef05e01e3d395899ee"
  },
  {
    "url": "assets/js/50.88b63222.js",
    "revision": "1251dc09eec662a02e9fdc43b912fe47"
  },
  {
    "url": "assets/js/51.32561ca8.js",
    "revision": "06c4385d447906c5d73637ec053f49ce"
  },
  {
    "url": "assets/js/52.4ea319b3.js",
    "revision": "da33f15ca810e21a202a3a4d9bb3767b"
  },
  {
    "url": "assets/js/53.fdcf40d7.js",
    "revision": "f54a18e61930463ede6e2223fe4af57c"
  },
  {
    "url": "assets/js/54.ff782ec0.js",
    "revision": "f29d8cb8a30241eb5596dbddfca4e61f"
  },
  {
    "url": "assets/js/55.f54df547.js",
    "revision": "8d471b7bf647298e6a91b1253d4a2b60"
  },
  {
    "url": "assets/js/56.ba520f9f.js",
    "revision": "9542725d9a830d9138c47b63ba85d7b3"
  },
  {
    "url": "assets/js/57.f9f45d49.js",
    "revision": "6b6b89359d2436d961b0c1dd5df4e7ba"
  },
  {
    "url": "assets/js/58.50ab936a.js",
    "revision": "9b553bead273bfef5801d5240a861455"
  },
  {
    "url": "assets/js/59.6b56d79b.js",
    "revision": "2d71da10d85708a379cd5f7f9e13bed8"
  },
  {
    "url": "assets/js/6.b40a3600.js",
    "revision": "b040b762fa827e65bf5ea1f7d41b8c3c"
  },
  {
    "url": "assets/js/60.d33b5955.js",
    "revision": "dcc0ed789e8f6b8fb93ac32a629f5acd"
  },
  {
    "url": "assets/js/61.a6fd66bc.js",
    "revision": "282a07964c083f3a6733d47b6f6bc523"
  },
  {
    "url": "assets/js/7.c2361464.js",
    "revision": "08b57d773b457817ba659d16c2766d79"
  },
  {
    "url": "assets/js/8.5528cdef.js",
    "revision": "9b290f868bff1f73ced5f2fdf1f63164"
  },
  {
    "url": "assets/js/9.ff01c528.js",
    "revision": "32ff9679591114deda8daab74e9c1d23"
  },
  {
    "url": "assets/js/app.1df4954e.js",
    "revision": "8eab4de45fb2d223b8754cfb363f16a1"
  },
  {
    "url": "css/CommentCoreLibrary.min.css",
    "revision": "e578b37f4607d6f4231c8b7da5f1d844"
  },
  {
    "url": "css/mui-player.min.css",
    "revision": "ad607a3a6ceb48b7032861cf0da50b47"
  },
  {
    "url": "css/swiper.min.css",
    "revision": "6af34d0737ad0ca608111771cf74cc79"
  },
  {
    "url": "demo/danmaku-demo.html",
    "revision": "68fd2605db53047dc26fa46761890ec8"
  },
  {
    "url": "demo/index.html",
    "revision": "6685bb24c94a176ee26748a6d1b48289"
  },
  {
    "url": "demo/live-demo.html",
    "revision": "e84bd1456e1a477f96b2c56c07115961"
  },
  {
    "url": "demo/multiple-demo.html",
    "revision": "c81ce4b317be06cd093e14847829bdf8"
  },
  {
    "url": "demo/subtitle-demo.html",
    "revision": "de71ef8e40439bf8d924141b3dccae12"
  },
  {
    "url": "guide/api.html",
    "revision": "4f9455e883d252a580fe76ff721ab21f"
  },
  {
    "url": "guide/barrage.html",
    "revision": "faa5dd70860220bc74d8226856ac4b38"
  },
  {
    "url": "guide/begin.html",
    "revision": "e088541bb3d8a2401249f32495dd132b"
  },
  {
    "url": "guide/custom-control.html",
    "revision": "b64c0b290ce2b632ae101fae8bb5bd85"
  },
  {
    "url": "guide/index.html",
    "revision": "0f82067d526df8d36a3d6fe3d64d55ce"
  },
  {
    "url": "guide/mui-player-desktop-plugin.html",
    "revision": "f0af33e6a522fec5c60d92d860b82475"
  },
  {
    "url": "guide/mui-player-mobile-plugin.html",
    "revision": "843221921871be7af55d800fddc9a2ff"
  },
  {
    "url": "guide/other-problem.html",
    "revision": "056e255b1cdb3af585e9a17038ba8418"
  },
  {
    "url": "guide/preset.html",
    "revision": "0ac18da7adadbab1d992cc33374cf80e"
  },
  {
    "url": "guide/subtitle.html",
    "revision": "2301c3547db628d45811e1598dc3afce"
  },
  {
    "url": "guide/thumbnails.html",
    "revision": "177f221b22d72ed2e70c6a687ea0d593"
  },
  {
    "url": "guide/uni-app.html",
    "revision": "f846bf27b7eb5d126a739b220677ca1f"
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
    "revision": "b58931830d902a27533c65dc6902b5ad"
  },
  {
    "url": "joinUs/contact.html",
    "revision": "06873974625bda35e603f58c9ffb7d92"
  },
  {
    "url": "joinUs/index.html",
    "revision": "ffc7d4b82766f2f0276cf6a297946834"
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
    "revision": "031992b09344f51cca6e25bf14b3f3a9"
  },
  {
    "url": "js/config_demo_live.js",
    "revision": "2b212f6b406d4121a5011f37d5161621"
  },
  {
    "url": "js/config_demo_subtitle.js",
    "revision": "edec0e12ae4b97f1bd34c9248d63a1e4"
  },
  {
    "url": "js/config_demo.js",
    "revision": "e0b6a23140ff8a97c44090d82daddab2"
  },
  {
    "url": "js/config.js",
    "revision": "089ff6b452c5dd60db6c4d1508aa60aa"
  },
  {
    "url": "js/customSetting.js",
    "revision": "3cc6f839b02610a5d541ef418115389d"
  },
  {
    "url": "js/global.js",
    "revision": "7c49150feb4c858d997c3ba6481413c5"
  },
  {
    "url": "js/mui-player-desktop-plugin.min.js",
    "revision": "641d19572cc39ef091ab9c831d125779"
  },
  {
    "url": "js/mui-player.min.js",
    "revision": "c657f8d9ed25aceae3bea3266fda4b06"
  },
  {
    "url": "js/parseConfig.js",
    "revision": "a6ff26b00b3d8b35e3fdff9c08495c5f"
  },
  {
    "url": "js/playerListener.js",
    "revision": "e2a1543f726098cac387f6eb5f40b75b"
  },
  {
    "url": "js/swiper.min.js",
    "revision": "fb13ef3e875ca3497ede35d3774be9d3"
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
    "url": "zh/demo/danmaku-demo.html",
    "revision": "b3d9c0e6f86abe25a58177fb7aebc8ce"
  },
  {
    "url": "zh/demo/index.html",
    "revision": "598d7cc22dc5725071075c2536bd6c4c"
  },
  {
    "url": "zh/demo/live-demo.html",
    "revision": "ff6aa7afa8c80cd7e6694ef9642d6712"
  },
  {
    "url": "zh/demo/multiple-demo.html",
    "revision": "95ddf854b591eb3d42bf6aab3441a136"
  },
  {
    "url": "zh/demo/subtitle-demo.html",
    "revision": "925b7cd9c30ce623a48e0ac327a86e34"
  },
  {
    "url": "zh/guide/api.html",
    "revision": "f49a72b55202b02ebb94fb2f6584f8b4"
  },
  {
    "url": "zh/guide/barrage.html",
    "revision": "0d728af8271c241c56cd1da7d11a7a21"
  },
  {
    "url": "zh/guide/begin.html",
    "revision": "b7d1ad0c668901105b9ca760011acd8a"
  },
  {
    "url": "zh/guide/custom-control.html",
    "revision": "3c6d3059d12fa407882c2bbdcef17ab4"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "a9895a9f7d561c20b6ac0f54eadf08ed"
  },
  {
    "url": "zh/guide/mui-player-desktop-plugin.html",
    "revision": "0ae5e36379503a8b250ce5c14e9bf136"
  },
  {
    "url": "zh/guide/mui-player-mobile-plugin.html",
    "revision": "6fffe9c45151f2bd952114375cef2232"
  },
  {
    "url": "zh/guide/other-problem.html",
    "revision": "029c1e0c559e3956e92c21b3094c0607"
  },
  {
    "url": "zh/guide/preset.html",
    "revision": "8c12fcf064639b6c418828f5bf3da81b"
  },
  {
    "url": "zh/guide/subtitle.html",
    "revision": "84c1180037516fefa30d91776c585339"
  },
  {
    "url": "zh/guide/thumbnails.html",
    "revision": "847a7148c4b6b72ba0e7f88f7efbd848"
  },
  {
    "url": "zh/guide/uni-app.html",
    "revision": "88824f0b996cfb08d92c95e9fed737f9"
  },
  {
    "url": "zh/index.html",
    "revision": "3a1fb008f2569a6bc46f6f586eb92ca4"
  },
  {
    "url": "zh/joinUs/contact.html",
    "revision": "953dd5ef41bafe333da3c2ea67893bb9"
  },
  {
    "url": "zh/joinUs/index.html",
    "revision": "f09ff344b4ad31bd145d5e3775b630f4"
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
