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
    "revision": "130bc7ae2a7d181dee49416beb9d4e2a"
  },
  {
    "url": "assets/css/0.styles.254b807a.css",
    "revision": "5a36928bfb81bd48cc2ca09cfc89e98f"
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
    "url": "assets/js/10.d74a9bb5.js",
    "revision": "123c3d269923620239e182e70b78f885"
  },
  {
    "url": "assets/js/11.e6e35eec.js",
    "revision": "f7089ffe66cb07a005e2a3afb254bc78"
  },
  {
    "url": "assets/js/12.7793ba1e.js",
    "revision": "e2afaeeb930ba0891023086842a35f89"
  },
  {
    "url": "assets/js/13.587bc324.js",
    "revision": "2434679c75fe2ecd50f041ef82a238ec"
  },
  {
    "url": "assets/js/14.50310458.js",
    "revision": "fb146270b041a2e01f6dfe4c8e606437"
  },
  {
    "url": "assets/js/15.c5028b04.js",
    "revision": "261ba5f68caa7a879883976d1ebc43bb"
  },
  {
    "url": "assets/js/16.71dc3baf.js",
    "revision": "f600094785d3c07fb9175b08dbedcd94"
  },
  {
    "url": "assets/js/17.aa265a82.js",
    "revision": "19bc543348c903cf3b263c5116f6d1b3"
  },
  {
    "url": "assets/js/18.d1a21b84.js",
    "revision": "2add90861108e702a25676e0d27daa54"
  },
  {
    "url": "assets/js/19.4ee75f45.js",
    "revision": "c51afec392934a07a62266ebb8000117"
  },
  {
    "url": "assets/js/20.32e9fca3.js",
    "revision": "4795f5bd0f9c12fccc557764ad311601"
  },
  {
    "url": "assets/js/21.e9956e2b.js",
    "revision": "a24721101da470505e701f497ed298fb"
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
    "url": "assets/js/30.b6d65b50.js",
    "revision": "759fb291290d53a79e06965ab121bd0d"
  },
  {
    "url": "assets/js/31.336b2cc0.js",
    "revision": "2249d78f31a81a2ee236773b5763b6c0"
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
    "url": "assets/js/38.5b1f9c0d.js",
    "revision": "16618178831e2ea60bfd1a0ccc398abb"
  },
  {
    "url": "assets/js/39.a8ff7b34.js",
    "revision": "a38947dfdb0ea58c25da9b30758ddc0c"
  },
  {
    "url": "assets/js/4.33087a99.js",
    "revision": "c8f4f95eb754a3eebfe1ac5374b4c4c0"
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
    "url": "assets/js/47.5c792e46.js",
    "revision": "453c41736ac85ed2f133b333769e2682"
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
    "url": "assets/js/5.138e6df7.js",
    "revision": "de428d81cb0e8ed2b7a836ceebcf9041"
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
    "url": "assets/js/52.f91cc9c2.js",
    "revision": "4aa1b10c69a495d19087f1c8e221c112"
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
    "url": "assets/js/58.9af94e8f.js",
    "revision": "18df896ca4221eea1d19298b31844387"
  },
  {
    "url": "assets/js/59.7825d84d.js",
    "revision": "60cce65ae18a8fbcd8bf9d5901395d02"
  },
  {
    "url": "assets/js/6.b40a3600.js",
    "revision": "b040b762fa827e65bf5ea1f7d41b8c3c"
  },
  {
    "url": "assets/js/60.7963c35e.js",
    "revision": "b5add0e01a6b2d6cb848a36946ab15bd"
  },
  {
    "url": "assets/js/61.a6fd66bc.js",
    "revision": "282a07964c083f3a6733d47b6f6bc523"
  },
  {
    "url": "assets/js/7.1ad7f8ae.js",
    "revision": "405edcfc10c025428cf321abedbe3de7"
  },
  {
    "url": "assets/js/8.1254ffa3.js",
    "revision": "0d6b51ca02f5f31e1ad395cefb175e1e"
  },
  {
    "url": "assets/js/9.ff01c528.js",
    "revision": "32ff9679591114deda8daab74e9c1d23"
  },
  {
    "url": "assets/js/app.f0de4855.js",
    "revision": "fb1f9f18470dbfe2bb82cb69f0fb6708"
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
    "revision": "1f8158b11ce744fe9c32f5259308deba"
  },
  {
    "url": "demo/index.html",
    "revision": "3f0c39f374faafe9f9d214fe13598d29"
  },
  {
    "url": "demo/live-demo.html",
    "revision": "fdb85b33d85947833ecca3a6d8b860f9"
  },
  {
    "url": "demo/multiple-demo.html",
    "revision": "9428996a2df78e426e8d6a92f0aa8af3"
  },
  {
    "url": "demo/subtitle-demo.html",
    "revision": "6174537cae8135da6d7b3e0fe9ad56a1"
  },
  {
    "url": "guide/api.html",
    "revision": "a90508a47318fb1bd04934c5c792962a"
  },
  {
    "url": "guide/barrage.html",
    "revision": "4a0a42b008ae6bf0dc1b39a1d8d72563"
  },
  {
    "url": "guide/begin.html",
    "revision": "332b47067b4f9cc55fc915491b88ab8e"
  },
  {
    "url": "guide/custom-control.html",
    "revision": "24e97e03ea2d651845b090275da78817"
  },
  {
    "url": "guide/index.html",
    "revision": "f8eb54877495f5dcf26106b925834074"
  },
  {
    "url": "guide/mui-player-desktop-plugin.html",
    "revision": "3cecf08ffafbff2fa9d50148613d82b8"
  },
  {
    "url": "guide/mui-player-mobile-plugin.html",
    "revision": "936ea21f5a682349e6fbec774775ac00"
  },
  {
    "url": "guide/other-problem.html",
    "revision": "b2edab9237e731d94c71bda4fa7854b4"
  },
  {
    "url": "guide/preset.html",
    "revision": "e9ea43e07fae17effea217671e09c3df"
  },
  {
    "url": "guide/subtitle.html",
    "revision": "fe73005b1e7e8ec0c0848e22da71f4cd"
  },
  {
    "url": "guide/thumbnails.html",
    "revision": "d4be9c091bcc3683bc234b6ad121f6f7"
  },
  {
    "url": "guide/uni-app.html",
    "revision": "03196820753cd03bb99e0db130c7cd28"
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
    "revision": "7410c087b27431731cc32bd911cc53a7"
  },
  {
    "url": "joinUs/contact.html",
    "revision": "6094edbf81a27f430b7ce4213d6dc371"
  },
  {
    "url": "joinUs/index.html",
    "revision": "626ae22b8fdf1fbbe531e6fb70e7f2c7"
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
    "revision": "51057fe577099cd1618236564641a95a"
  },
  {
    "url": "zh/demo/index.html",
    "revision": "7ca7bfdc985f9936c691fa6029682aa4"
  },
  {
    "url": "zh/demo/live-demo.html",
    "revision": "3406a0953d440960121c6eaf24f8e503"
  },
  {
    "url": "zh/demo/multiple-demo.html",
    "revision": "75843a1be1f649871ddd98ffdf8fadc4"
  },
  {
    "url": "zh/demo/subtitle-demo.html",
    "revision": "ce3c0cd9cb20c68b266aa718c44d96a8"
  },
  {
    "url": "zh/guide/api.html",
    "revision": "85bf61912df575b5d4b5fb6af6cd048a"
  },
  {
    "url": "zh/guide/barrage.html",
    "revision": "781f6cecd5a8989b037aecb222dd9537"
  },
  {
    "url": "zh/guide/begin.html",
    "revision": "d216b40c014229ef3b73db2968463ac9"
  },
  {
    "url": "zh/guide/custom-control.html",
    "revision": "ab895852150f058737edc6d60c61e6e8"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "72cc5e6994c9548888441df76a9bc566"
  },
  {
    "url": "zh/guide/mui-player-desktop-plugin.html",
    "revision": "cb388abb99882b524355229db37e1146"
  },
  {
    "url": "zh/guide/mui-player-mobile-plugin.html",
    "revision": "82ebe480f58ba8c686fada883b71f2f8"
  },
  {
    "url": "zh/guide/other-problem.html",
    "revision": "b91a0a7ec8599d08c67819998c208f4e"
  },
  {
    "url": "zh/guide/preset.html",
    "revision": "a40ba72701817f250bfc9c2f3a12711b"
  },
  {
    "url": "zh/guide/subtitle.html",
    "revision": "5ffff1033a2868ca37dcfc7558b89684"
  },
  {
    "url": "zh/guide/thumbnails.html",
    "revision": "5525fe5c56d3270e3d27682893d962d6"
  },
  {
    "url": "zh/guide/uni-app.html",
    "revision": "7d5b548b0355817f5179638254d6b05a"
  },
  {
    "url": "zh/index.html",
    "revision": "64ccc0e76894935e3f955dc75b4a159a"
  },
  {
    "url": "zh/joinUs/contact.html",
    "revision": "14b21fef8b5bdf62c222de87e277d1b7"
  },
  {
    "url": "zh/joinUs/index.html",
    "revision": "89f24dd36bf86d1a30d70d69c425d764"
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
