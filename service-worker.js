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
    "revision": "927924433684e5f798579b529a6e6ecb"
  },
  {
    "url": "assets/css/0.styles.2e662084.css",
    "revision": "5a36928bfb81bd48cc2ca09cfc89e98f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.d1603196.js",
    "revision": "f927950176115423da763c457a7d62f8"
  },
  {
    "url": "assets/js/10.707436ee.js",
    "revision": "7e53aa928ddf0c38b5935f71a1442712"
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
    "url": "assets/js/19.a38dcc33.js",
    "revision": "155e6fb5ab87020eeb91a55fb9cc35a7"
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
    "url": "assets/js/31.21a51435.js",
    "revision": "3f4270e27b9c5a56a63c490affc51aaf"
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
    "url": "assets/js/38.6a7a2db0.js",
    "revision": "f1c89d46aaee5c665a917dd8278417b4"
  },
  {
    "url": "assets/js/39.e39e6303.js",
    "revision": "75025591912773871d4eb52508ae2d7f"
  },
  {
    "url": "assets/js/4.77a13e9e.js",
    "revision": "d27885cf48a725d6556117fcedfab981"
  },
  {
    "url": "assets/js/40.4b323fc1.js",
    "revision": "0c2cbe91897d84c9d3eadc2863aea7ad"
  },
  {
    "url": "assets/js/41.85f0ac96.js",
    "revision": "f5d14671a1178be68e6234b282660138"
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
    "url": "assets/js/5.a758b408.js",
    "revision": "b801550e188105ba26b4b81cec0193c8"
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
    "url": "assets/js/60.66104166.js",
    "revision": "710602c41b2ba3a7694edd061a71f856"
  },
  {
    "url": "assets/js/61.a6fd66bc.js",
    "revision": "282a07964c083f3a6733d47b6f6bc523"
  },
  {
    "url": "assets/js/7.f7e859bc.js",
    "revision": "a64b9461bc6d796cb897aec169a2e4e9"
  },
  {
    "url": "assets/js/8.6806bf63.js",
    "revision": "b0f9e5fa4f7266c4d40282ee348555a1"
  },
  {
    "url": "assets/js/9.ff01c528.js",
    "revision": "32ff9679591114deda8daab74e9c1d23"
  },
  {
    "url": "assets/js/app.72421ebe.js",
    "revision": "4d803d1b293fa314ec9c47c66e92a191"
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
    "revision": "c1422d1b61c3b6cc95c98a072710cac9"
  },
  {
    "url": "demo/index.html",
    "revision": "bde0fc77c400da3bd3a71acaabb559b4"
  },
  {
    "url": "demo/live-demo.html",
    "revision": "c1361c3e3fac64e7d4e4aabd9eaf4c72"
  },
  {
    "url": "demo/multiple-demo.html",
    "revision": "1fb1cc39621422e75348270e5dfaf3f3"
  },
  {
    "url": "demo/subtitle-demo.html",
    "revision": "3a53f815fcd2e3493aa74f478732cd2c"
  },
  {
    "url": "guide/api.html",
    "revision": "30b3e2d2777d158dba4406973010313c"
  },
  {
    "url": "guide/barrage.html",
    "revision": "64e88f1c236abb5ef007ca63e5a031be"
  },
  {
    "url": "guide/begin.html",
    "revision": "15d2af8e6f837a4c5e332e8eb35658fc"
  },
  {
    "url": "guide/custom-control.html",
    "revision": "9297c0914b1be0293eb8134d5995899b"
  },
  {
    "url": "guide/index.html",
    "revision": "cefd33163e5a9ba702111c48de523299"
  },
  {
    "url": "guide/mui-player-desktop-plugin.html",
    "revision": "9f023a90a4864b963a9d3606f7f2868c"
  },
  {
    "url": "guide/mui-player-mobile-plugin.html",
    "revision": "6f6604e148938195ea8d00c8ae827ec9"
  },
  {
    "url": "guide/other-problem.html",
    "revision": "51027f921f31b71470250fc61b3f8b2d"
  },
  {
    "url": "guide/preset.html",
    "revision": "411c178c25b1d2560fc1d16aa4f1146e"
  },
  {
    "url": "guide/subtitle.html",
    "revision": "d8304a997868a90d6e2be38bbc1b3bf3"
  },
  {
    "url": "guide/thumbnails.html",
    "revision": "4076f7b9fb2aa3e1b984d2883fecd36c"
  },
  {
    "url": "guide/uni-app.html",
    "revision": "e9b9a8074c30a5c279c585a50284ca4e"
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
    "revision": "aed4d271f88b30afe15057833b18e8d1"
  },
  {
    "url": "joinUs/contact.html",
    "revision": "b86b279c7fee7cc4eb28370f93c591db"
  },
  {
    "url": "joinUs/index.html",
    "revision": "b2c7693d1b9aa202e75565487235a0d6"
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
    "revision": "6f9573f5241e9ac8c4b24e7665920d6b"
  },
  {
    "url": "zh/demo/index.html",
    "revision": "7cae5dd6e87c5e3cde7165535a9ec71a"
  },
  {
    "url": "zh/demo/live-demo.html",
    "revision": "c85f9d61cea6b4234ceb52c9f11b3bb4"
  },
  {
    "url": "zh/demo/multiple-demo.html",
    "revision": "b8a0b241ba93a9e560e34e514e008668"
  },
  {
    "url": "zh/demo/subtitle-demo.html",
    "revision": "c218d9b3f9209214c397ac1656642645"
  },
  {
    "url": "zh/guide/api.html",
    "revision": "51df31aebd1b18bfa830c32a2eb6e4fc"
  },
  {
    "url": "zh/guide/barrage.html",
    "revision": "9ce3aa86e31708a5945d0e21dbe4118f"
  },
  {
    "url": "zh/guide/begin.html",
    "revision": "7834c3c30866ccaf2c617fee2b1afab7"
  },
  {
    "url": "zh/guide/custom-control.html",
    "revision": "2cef5c49cd0f9f77dbe73440ff89dac0"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "c0d62e697c3da77d96632fe71f7ba7ea"
  },
  {
    "url": "zh/guide/mui-player-desktop-plugin.html",
    "revision": "1b8c512ddeb1c57f63e6f6ac76542d0c"
  },
  {
    "url": "zh/guide/mui-player-mobile-plugin.html",
    "revision": "8afb9e7412f05e5059fa9036a0080315"
  },
  {
    "url": "zh/guide/other-problem.html",
    "revision": "1383544fe3dd47c9dbb06a8274c83ce9"
  },
  {
    "url": "zh/guide/preset.html",
    "revision": "efb9f9b97918dc0caabfb06f4a9ade46"
  },
  {
    "url": "zh/guide/subtitle.html",
    "revision": "00d50a7da70ac2d21d496ebe6594d1aa"
  },
  {
    "url": "zh/guide/thumbnails.html",
    "revision": "5083a8e1e48e8b93c499c194c8299e9c"
  },
  {
    "url": "zh/guide/uni-app.html",
    "revision": "37a462c563b34e0fdb6a13bf22e9bf49"
  },
  {
    "url": "zh/index.html",
    "revision": "a48fec5da954098152fcddd4da744af4"
  },
  {
    "url": "zh/joinUs/contact.html",
    "revision": "3621ac9472803174092429a6da77e79f"
  },
  {
    "url": "zh/joinUs/index.html",
    "revision": "87ae8db541b9281e91b3acf5e2d76771"
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
