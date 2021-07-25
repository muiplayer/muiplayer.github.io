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
    "revision": "5b647f0ef5c620ef343e730c7b9a3092"
  },
  {
    "url": "assets/css/0.styles.9796f9c2.css",
    "revision": "17e53079223922802df62d2d5540d359"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.840b223b.js",
    "revision": "63d9bf54cc9bfdc90e5b4ca5d0ee33a1"
  },
  {
    "url": "assets/js/10.75bfd37f.js",
    "revision": "614a66fbb8825eb208de94431d4f4863"
  },
  {
    "url": "assets/js/11.88e844a2.js",
    "revision": "6abc5e63282f5f0ee088b4f15c3a1f36"
  },
  {
    "url": "assets/js/12.1b75ff62.js",
    "revision": "d7077dbe5e43709b9e54b11434f6835e"
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
    "url": "assets/js/17.b166c367.js",
    "revision": "9cae4e1c9fc702e444721238fcf6efc0"
  },
  {
    "url": "assets/js/18.d1a21b84.js",
    "revision": "2add90861108e702a25676e0d27daa54"
  },
  {
    "url": "assets/js/19.c9e593d3.js",
    "revision": "4042126defdb0287afa6d0c60dedfb8a"
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
    "url": "assets/js/26.8a45ed64.js",
    "revision": "e12029a3c6c5af818abeaa073762bb1c"
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
    "url": "assets/js/30.cc0c250d.js",
    "revision": "56f24dc1956e20792824d796d480ef07"
  },
  {
    "url": "assets/js/31.413a476d.js",
    "revision": "691ef9a9103e256691c6633d80ccf309"
  },
  {
    "url": "assets/js/32.d00190e3.js",
    "revision": "6801dcfb8e4463ca5b8433dfb9fa1ebb"
  },
  {
    "url": "assets/js/33.a55de640.js",
    "revision": "27e5ef6ee25f618a1f8c141acc23c9b4"
  },
  {
    "url": "assets/js/34.a76f3a9a.js",
    "revision": "5940aba1dba869a7fec84f7f3993d695"
  },
  {
    "url": "assets/js/35.01843420.js",
    "revision": "7570568f527e92b39c763af9d3be68f1"
  },
  {
    "url": "assets/js/36.05bcef2b.js",
    "revision": "3528c043815e2767bbb1e104714a15ae"
  },
  {
    "url": "assets/js/37.5fa1dbc7.js",
    "revision": "c1e7604b34c600ad1928782222a18958"
  },
  {
    "url": "assets/js/38.49a32789.js",
    "revision": "1cb64adb4a79dd1a078b8981dd29ac00"
  },
  {
    "url": "assets/js/39.9327f46a.js",
    "revision": "3e69037c61aff40f6572d74f6bc59d58"
  },
  {
    "url": "assets/js/4.7e4ccdb8.js",
    "revision": "d4d6587d8d7e6bab8c3b5731366fcd84"
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
    "url": "assets/js/42.3343bf0e.js",
    "revision": "7ec954ca71a8cdba168d1e86e4a24e18"
  },
  {
    "url": "assets/js/43.ea5234a1.js",
    "revision": "988ccabd5457a9bb5d2429914870ef3d"
  },
  {
    "url": "assets/js/44.fc1a3ec4.js",
    "revision": "3679781ede0c35675ebfcc20ee85400b"
  },
  {
    "url": "assets/js/45.25fc8ea5.js",
    "revision": "0eb8c3c051a0dfed656d29aa6716dd2e"
  },
  {
    "url": "assets/js/46.40412948.js",
    "revision": "c7014f6fde951c913e1c194aba2448e5"
  },
  {
    "url": "assets/js/47.904d8a7f.js",
    "revision": "93a790b554a89e23e1d5d973e5fa95fe"
  },
  {
    "url": "assets/js/48.3b758f22.js",
    "revision": "ab53f8ab193f5101a6925d871972f192"
  },
  {
    "url": "assets/js/49.838bf7d7.js",
    "revision": "ee47096312dac811d63f6613b50ac55c"
  },
  {
    "url": "assets/js/5.a748927c.js",
    "revision": "a7fb97c4f2ae2078eba91b99dfda24eb"
  },
  {
    "url": "assets/js/50.4bca2184.js",
    "revision": "9baf7c123f9d736f183bea205bfe51b7"
  },
  {
    "url": "assets/js/51.a9f5a81f.js",
    "revision": "71671d963b212f645b60b64a35ef29b6"
  },
  {
    "url": "assets/js/52.045cf062.js",
    "revision": "164806c8bfd149e5646b5d28859fd6c5"
  },
  {
    "url": "assets/js/53.fb0987ba.js",
    "revision": "64c3bf7c60fed77687948e130e78936d"
  },
  {
    "url": "assets/js/54.73162285.js",
    "revision": "1277f835cbb14722cda3a1970602b1bc"
  },
  {
    "url": "assets/js/55.29bba28a.js",
    "revision": "f732db00326badd80580e51a6eba5713"
  },
  {
    "url": "assets/js/56.26ec3dc3.js",
    "revision": "75ece09a7c01ad59be06bd29fa821040"
  },
  {
    "url": "assets/js/57.98b1736e.js",
    "revision": "4aaa7be73b0d489fe5a023c668bf19e4"
  },
  {
    "url": "assets/js/58.c428c9d8.js",
    "revision": "8280748b88272ee81ca55d5adfa2828c"
  },
  {
    "url": "assets/js/59.8a8fce71.js",
    "revision": "2f77cc468f853ed0367fc3b9a4453335"
  },
  {
    "url": "assets/js/6.233abea3.js",
    "revision": "3249d2f2cee4559994f07c038640d0bd"
  },
  {
    "url": "assets/js/60.41fb4b0c.js",
    "revision": "326898c035efc1e0491dd87e9d7d03b9"
  },
  {
    "url": "assets/js/61.a6fd66bc.js",
    "revision": "282a07964c083f3a6733d47b6f6bc523"
  },
  {
    "url": "assets/js/7.d4eb24fd.js",
    "revision": "d7f21dab7fdddded0a83311516800246"
  },
  {
    "url": "assets/js/8.83b9c421.js",
    "revision": "2a8a57c5fef30e305bec9367e8334cac"
  },
  {
    "url": "assets/js/9.ca044f6a.js",
    "revision": "269742bd0f2d8474547109781e27d53e"
  },
  {
    "url": "assets/js/app.7b99c56f.js",
    "revision": "19396fbb04d069b36543023d99ef33cd"
  },
  {
    "url": "css/CommentCoreLibrary.min.css",
    "revision": "e578b37f4607d6f4231c8b7da5f1d844"
  },
  {
    "url": "css/mui-player.min.css",
    "revision": "0fabb6eb889737b594bb24c153cfd514"
  },
  {
    "url": "css/swiper.min.css",
    "revision": "6af34d0737ad0ca608111771cf74cc79"
  },
  {
    "url": "demo/danmaku-demo.html",
    "revision": "a9f982c089fa09854d7538651c30005e"
  },
  {
    "url": "demo/index.html",
    "revision": "e122b581deb8f1931f9bbe936c5d20e4"
  },
  {
    "url": "demo/live-demo.html",
    "revision": "0c1e7a11e055d4571de15574e7cfb77b"
  },
  {
    "url": "demo/multiple-demo.html",
    "revision": "6b4f3b2fcd904d35b4d926f8f8b54b5a"
  },
  {
    "url": "demo/subtitle-demo.html",
    "revision": "b890d375b30bacc475f64c98a1a9b393"
  },
  {
    "url": "guide/api.html",
    "revision": "83a396ab3866e4bb9322e750ed8c3560"
  },
  {
    "url": "guide/barrage.html",
    "revision": "4fe248ca4a18dbcd95d95477e8743e83"
  },
  {
    "url": "guide/begin.html",
    "revision": "55b3bdc1e58b4a4375f0d8d12052fe4f"
  },
  {
    "url": "guide/custom-control.html",
    "revision": "bc61472d368792876c60ae816f164689"
  },
  {
    "url": "guide/index.html",
    "revision": "d4297f9d238eb27b0d35c3bbb166829e"
  },
  {
    "url": "guide/mui-player-desktop-plugin.html",
    "revision": "85afd96b8c45af4d9e4f2c74fcb21490"
  },
  {
    "url": "guide/mui-player-mobile-plugin.html",
    "revision": "658bbe4c774139becfd72846193ff160"
  },
  {
    "url": "guide/other-problem.html",
    "revision": "986bc14a106ac77e1a963aeab829c27c"
  },
  {
    "url": "guide/preset.html",
    "revision": "38782bbf22396c6b81aafe94646517e4"
  },
  {
    "url": "guide/subtitle.html",
    "revision": "1c717a3c5323984389172db62c4c2e75"
  },
  {
    "url": "guide/thumbnails.html",
    "revision": "ad9e6a12fa237438cca6908107133651"
  },
  {
    "url": "guide/uni-app.html",
    "revision": "119074900b13b6c728a9f555598bde74"
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
    "revision": "2ad42f2135df7176f971459c82592593"
  },
  {
    "url": "joinUs/contact.html",
    "revision": "666876009d1c7a141eecd35a83308077"
  },
  {
    "url": "joinUs/index.html",
    "revision": "9cadf0d70fad340d6c9cbf6b7b61996a"
  },
  {
    "url": "js/CommentCoreLibrary.min.js",
    "revision": "e06a2f6319cc95c8ab5f5ffb15986255"
  },
  {
    "url": "js/comments.js",
    "revision": "a9d43af34c50db0d4efeb59b68053046"
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
    "revision": "bd7df36b1efdf8f0b40af43e461bc406"
  },
  {
    "url": "js/config.js",
    "revision": "228225e7d195bdfe6e12006f0617052a"
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
    "revision": "d8e356683ebc4c0e866ddad9ca5c19c5"
  },
  {
    "url": "js/mui-player.min.js",
    "revision": "f3d5bd7277005f77b422c0514120afd1"
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
    "revision": "37359aef33ef8ec0d7d3a9c1ce0b04c9"
  },
  {
    "url": "zh/demo/index.html",
    "revision": "318cfa73ab14813f23dc932f8e2a9b7b"
  },
  {
    "url": "zh/demo/live-demo.html",
    "revision": "9c51bef2393236fdc06849e1cb824a71"
  },
  {
    "url": "zh/demo/multiple-demo.html",
    "revision": "ad7d11960f096a8e4de92b7c07b6c13a"
  },
  {
    "url": "zh/demo/subtitle-demo.html",
    "revision": "e5ce6dd657e5e28f1ddc210ad8523886"
  },
  {
    "url": "zh/guide/api.html",
    "revision": "c1eabd669b6cfd3a2515ef477d05748f"
  },
  {
    "url": "zh/guide/barrage.html",
    "revision": "35f0a91db79d88614bdae22a0540b712"
  },
  {
    "url": "zh/guide/begin.html",
    "revision": "dfa897a4d936367e874be10a74144d25"
  },
  {
    "url": "zh/guide/custom-control.html",
    "revision": "b9158ffae8ac8648d2f6839c2988d7a2"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "6a40a4640b830cf2d29d5eb44319b8d2"
  },
  {
    "url": "zh/guide/mui-player-desktop-plugin.html",
    "revision": "2cb832383feec1dc3030feba4aa879ca"
  },
  {
    "url": "zh/guide/mui-player-mobile-plugin.html",
    "revision": "17701a7f5cb649adfd4a28377e4bf4b7"
  },
  {
    "url": "zh/guide/other-problem.html",
    "revision": "2bab525218c03e3f73c750ec5ac149ff"
  },
  {
    "url": "zh/guide/preset.html",
    "revision": "96cd2706ddb014b21966902353ebafe8"
  },
  {
    "url": "zh/guide/subtitle.html",
    "revision": "6153b5a28baf6245d2c7493fd5c68b64"
  },
  {
    "url": "zh/guide/thumbnails.html",
    "revision": "6a861698c562ca8917b6a1d0289dc50f"
  },
  {
    "url": "zh/guide/uni-app.html",
    "revision": "98dc59cce8b8a3d7067f09a20c5b5e88"
  },
  {
    "url": "zh/index.html",
    "revision": "438fd05b5f3804f8fea48a2ce7f43869"
  },
  {
    "url": "zh/joinUs/contact.html",
    "revision": "35dd0bbd759504bda3c6c6bd942f0c54"
  },
  {
    "url": "zh/joinUs/index.html",
    "revision": "76a495ab4c0678c368ceb90fa10abbe9"
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
