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
    "revision": "605f8a5f68912aae58d0a11045772cb7"
  },
  {
    "url": "assets/css/0.styles.ae6ed136.css",
    "revision": "79e4ab831410400afe12136f5a31377a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.54927c41.js",
    "revision": "b8b022668dcc1608398a2ec74156f66b"
  },
  {
    "url": "assets/js/10.dd4adaf8.js",
    "revision": "4267ee68870f8d98e74c9405b665d269"
  },
  {
    "url": "assets/js/11.ea997365.js",
    "revision": "6e84ac01f4db86e7161f2667eb2654bf"
  },
  {
    "url": "assets/js/12.01af38a6.js",
    "revision": "a7468de24b5af4d50faf35bb86c7bd31"
  },
  {
    "url": "assets/js/13.75800705.js",
    "revision": "67817738459797ec6d95902d3cd189f6"
  },
  {
    "url": "assets/js/14.9fc60c4c.js",
    "revision": "b7ff3eee88374bec943fd65121d047e5"
  },
  {
    "url": "assets/js/15.78fdfcaf.js",
    "revision": "1b17111a6a4f06cff2d431f59f28344e"
  },
  {
    "url": "assets/js/16.0101612c.js",
    "revision": "26173144b7ec253b49264306993c56dc"
  },
  {
    "url": "assets/js/17.a9b41ba5.js",
    "revision": "b51d0a97e499ab28582b5e2da0744cae"
  },
  {
    "url": "assets/js/18.a55912b8.js",
    "revision": "1c7c0b5d045a26f470beaeb16101cc82"
  },
  {
    "url": "assets/js/19.13ce6fb6.js",
    "revision": "9c9687c85f4f9c856d6c6a6f94f633a5"
  },
  {
    "url": "assets/js/20.57cf3163.js",
    "revision": "a63daf126fb6a3991bab40cc0c3f1f99"
  },
  {
    "url": "assets/js/21.a9f966ac.js",
    "revision": "ee067bb74fac56ad7830ee2aec75c199"
  },
  {
    "url": "assets/js/22.65e9060e.js",
    "revision": "bc5c0756547b01f87d717a74c32eea82"
  },
  {
    "url": "assets/js/23.35f66f6c.js",
    "revision": "771a45fd42d20ad632a657f5604f8aff"
  },
  {
    "url": "assets/js/24.3adbb4ca.js",
    "revision": "bde284202f056d7c69d3b9179e94a62e"
  },
  {
    "url": "assets/js/25.00421a1d.js",
    "revision": "3a8e86ad6ac9de77d557ba50990dc8ed"
  },
  {
    "url": "assets/js/26.ba6e1ac8.js",
    "revision": "7fa590700ccaee2298a078ffdb62e3df"
  },
  {
    "url": "assets/js/27.4e1b228b.js",
    "revision": "566a82ec030c92d8802b567e4a102bb9"
  },
  {
    "url": "assets/js/28.2d7617cb.js",
    "revision": "10dc5347db5d8245e886320a37ac3060"
  },
  {
    "url": "assets/js/29.ff74fd8e.js",
    "revision": "0d17cd4226731327f343b28c9dc5f245"
  },
  {
    "url": "assets/js/3.67a24b41.js",
    "revision": "5d4ab1de7dc2e52f217d78617a0e6036"
  },
  {
    "url": "assets/js/30.ff8d825c.js",
    "revision": "7cf3efaecc0d33aaede52f8a0bf74aba"
  },
  {
    "url": "assets/js/31.daa6ba5b.js",
    "revision": "c3142df355c3b1e3d00c46a699ed96ca"
  },
  {
    "url": "assets/js/32.9eac0031.js",
    "revision": "c3b676fa3026627b17919514602e1de8"
  },
  {
    "url": "assets/js/33.32a2153a.js",
    "revision": "a0b845a905dd6b1282783bbee705264c"
  },
  {
    "url": "assets/js/34.da24de19.js",
    "revision": "924634271fad8205953b892e55562dc5"
  },
  {
    "url": "assets/js/35.c97bfd00.js",
    "revision": "a6277012393b130d39b58509a2b5b8b3"
  },
  {
    "url": "assets/js/36.3fd6a073.js",
    "revision": "af1bb5c2e7cec675e17afdab7ddfd40f"
  },
  {
    "url": "assets/js/37.262c376a.js",
    "revision": "6c3a33dbdba13defe55ef0341feb715c"
  },
  {
    "url": "assets/js/38.2bd8c4ba.js",
    "revision": "a6c9e85230b749f7b716114b2866e308"
  },
  {
    "url": "assets/js/39.618c3695.js",
    "revision": "2c2a6c48fa9cca8b6f036c86514a2c36"
  },
  {
    "url": "assets/js/4.9edd66f8.js",
    "revision": "08720c8aa7f2378537ea96d7d2ed6f72"
  },
  {
    "url": "assets/js/40.0502620b.js",
    "revision": "abf3b957131d4cebdf7856557d3d53e2"
  },
  {
    "url": "assets/js/41.9a3bd9b3.js",
    "revision": "7bb5cc3b88500cc01b0fdf611cd1d5c6"
  },
  {
    "url": "assets/js/42.8ac30a45.js",
    "revision": "2e9320b86a0cdccaf3796098f68f7177"
  },
  {
    "url": "assets/js/43.e3fc5609.js",
    "revision": "d78d8c70bf0d46afc81e6223bc4cb7e4"
  },
  {
    "url": "assets/js/44.9acf05da.js",
    "revision": "f81c5b47d351e2b76fe4049aee675694"
  },
  {
    "url": "assets/js/45.8c740c98.js",
    "revision": "e42b5b2d4983811fcae7f3f0720d760a"
  },
  {
    "url": "assets/js/46.250aba22.js",
    "revision": "e7e8c9a3e7f41336928546ee75cf870e"
  },
  {
    "url": "assets/js/47.83ee64f1.js",
    "revision": "9930f000ecbb515bdcdc3359aead3683"
  },
  {
    "url": "assets/js/48.8d559ee8.js",
    "revision": "fd0fc832d209859bcb8a1a913bb1a4ce"
  },
  {
    "url": "assets/js/49.6eeaca4b.js",
    "revision": "3b3b79469a96111c50fa2c0b8fb7feb9"
  },
  {
    "url": "assets/js/5.35f74ec6.js",
    "revision": "ff56f2c3aa9506ce1f5682577bf4fe47"
  },
  {
    "url": "assets/js/50.6e5e287b.js",
    "revision": "8d39b871db1beac8eac27c983b4df822"
  },
  {
    "url": "assets/js/51.ff3ae70a.js",
    "revision": "e5d256e531033cf2baf7d96f4d484899"
  },
  {
    "url": "assets/js/52.378b3b20.js",
    "revision": "028645a65dad22107397b711fab682a4"
  },
  {
    "url": "assets/js/53.868673eb.js",
    "revision": "87182ddb9eecf53eb64a48e824cae89a"
  },
  {
    "url": "assets/js/54.3c62a57a.js",
    "revision": "d035bd903f30ee9cb2dc53ae0d4cc857"
  },
  {
    "url": "assets/js/55.035ed35d.js",
    "revision": "2a125d7190baf889485722bdeb43bb58"
  },
  {
    "url": "assets/js/56.08925c33.js",
    "revision": "4cd4d9cc850a2feb3014f9f0947fa45f"
  },
  {
    "url": "assets/js/57.5d073ed4.js",
    "revision": "8624ba06ad1e4904af8dea1e293c31c6"
  },
  {
    "url": "assets/js/58.dce950e6.js",
    "revision": "5421f2ec8ff049b5d31e2367715fe5d3"
  },
  {
    "url": "assets/js/59.092c0de9.js",
    "revision": "59655456076211ea769e461653fc8e03"
  },
  {
    "url": "assets/js/6.30b43e5d.js",
    "revision": "68ddc5db30d705aab3366be4bbfc2b77"
  },
  {
    "url": "assets/js/60.8526ebe1.js",
    "revision": "d870da4a7e66c345fd7245888e5a298e"
  },
  {
    "url": "assets/js/61.c02d2349.js",
    "revision": "3e6c047b1e8fe25445e8de69be8b8bbe"
  },
  {
    "url": "assets/js/62.b93eeaf2.js",
    "revision": "5cbb5dc2c298019e1ed1c2dbcd1f5118"
  },
  {
    "url": "assets/js/63.b363131d.js",
    "revision": "5640f4997fdcd7a49718d0a61d0e1246"
  },
  {
    "url": "assets/js/64.0cda51e1.js",
    "revision": "31320e4ccfc6fb32e22621af607cc91f"
  },
  {
    "url": "assets/js/65.d26b33ae.js",
    "revision": "2d309d7f6706f36999eac1077cecf7ee"
  },
  {
    "url": "assets/js/66.d07350b7.js",
    "revision": "d0320a737c20a5f2bc0901e033928826"
  },
  {
    "url": "assets/js/67.85653372.js",
    "revision": "4eca468734683190d2619f455bd73976"
  },
  {
    "url": "assets/js/7.7232d571.js",
    "revision": "4a6b31e5e7439a0945f407a308aed560"
  },
  {
    "url": "assets/js/8.772a3a10.js",
    "revision": "ab78a290a3ff0430011886df88cb5d1f"
  },
  {
    "url": "assets/js/9.5f308baf.js",
    "revision": "debc5e1d985305a1eca0b4568f3309ff"
  },
  {
    "url": "assets/js/app.3641bd26.js",
    "revision": "bfff4fa8633d0ea0eb9cd9e04afe1abd"
  },
  {
    "url": "css/CommentCoreLibrary.min.css",
    "revision": "e578b37f4607d6f4231c8b7da5f1d844"
  },
  {
    "url": "css/mui-player.min.css",
    "revision": "ee1ee954f23ada840bee0ae65716a4a6"
  },
  {
    "url": "css/swiper.min.css",
    "revision": "6af34d0737ad0ca608111771cf74cc79"
  },
  {
    "url": "demo/danmaku-demo.html",
    "revision": "ea731af11df229772fe9fdfafd747d82"
  },
  {
    "url": "demo/index.html",
    "revision": "5f1dba30dda393961e8c79a30c9ab194"
  },
  {
    "url": "demo/live-demo.html",
    "revision": "f694eba9f3c176ea219b6a5ad1b071a5"
  },
  {
    "url": "demo/multiple-demo.html",
    "revision": "32ea549ec7e52963de8474262e7239f8"
  },
  {
    "url": "demo/subtitle-demo.html",
    "revision": "7b999f2e8c64494d8b50cc58a3341b35"
  },
  {
    "url": "guide/api.html",
    "revision": "d04113c0f6dffef716d54d5e691542c0"
  },
  {
    "url": "guide/barrage.html",
    "revision": "f332009a03a7d7370be48b483770ddd3"
  },
  {
    "url": "guide/begin.html",
    "revision": "b3f5b0ad41723d23943118eabbebca3b"
  },
  {
    "url": "guide/custom-control.html",
    "revision": "1bfb24c5bdcb51ce45ac60f957366510"
  },
  {
    "url": "guide/index.html",
    "revision": "90c19ac66abee357631715bbf7509f57"
  },
  {
    "url": "guide/mui-player-desktop-plugin.html",
    "revision": "253986065118ac4ebcc2e417445f21cb"
  },
  {
    "url": "guide/other-problem.html",
    "revision": "d091665f1294b5dc31e383bac965b778"
  },
  {
    "url": "guide/plus-desktop-plugin.html",
    "revision": "c0b987135452c2038fc55251c81ce711"
  },
  {
    "url": "guide/plus-mobile-plugin.html",
    "revision": "d0b7e39167d683408c31609bf371102d"
  },
  {
    "url": "guide/preset.html",
    "revision": "619335a77eaa60121cf5516669fb4cc2"
  },
  {
    "url": "guide/subtitle.html",
    "revision": "21314f7301839266fa8628f29b0e286f"
  },
  {
    "url": "guide/thumbnails.html",
    "revision": "975c14b3d85688ac4d0de59f2db73ae3"
  },
  {
    "url": "guide/uni-app.html",
    "revision": "e18f08239bb0ff46f29157debb10dd06"
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
    "revision": "2d431f8a40cf4f9163504e77be286b3a"
  },
  {
    "url": "joinUs/contact.html",
    "revision": "997e46207b3cbd7a4749e03689f5d136"
  },
  {
    "url": "joinUs/index.html",
    "revision": "a873ad6cfb13f25a6cae7318f1d722b2"
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
    "revision": "16f1604756c851c57e7c562002e99785"
  },
  {
    "url": "js/playerListener.js",
    "revision": "1a38230cbebb434352645ba11c8aad4d"
  },
  {
    "url": "js/plugins.js",
    "revision": "bad42288eb96bdc1dbe7b8e868b50948"
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
    "revision": "b5bf3686bb3283dc51287a10edc4d8f3"
  },
  {
    "url": "zh/demo/index.html",
    "revision": "bee00269b83f703f5927081e52391331"
  },
  {
    "url": "zh/demo/live-demo.html",
    "revision": "935545cc855b088b16b098f33266e38e"
  },
  {
    "url": "zh/demo/multiple-demo.html",
    "revision": "fb3674c773f718385c30a4d4351da06c"
  },
  {
    "url": "zh/demo/subtitle-demo.html",
    "revision": "7bc7181630496ab3c88df553759e6a03"
  },
  {
    "url": "zh/guide/api.html",
    "revision": "b5ffabc57520d88a0407d6e30dc7ad65"
  },
  {
    "url": "zh/guide/barrage.html",
    "revision": "7e9d31b42992215ad345cc6333846478"
  },
  {
    "url": "zh/guide/begin.html",
    "revision": "da1ce7e00092fc0390657fc44c687c50"
  },
  {
    "url": "zh/guide/custom-control.html",
    "revision": "35b63ffd2da585ee8e370ba78c5616cc"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "574803650be62c657679b0c70d4a0e85"
  },
  {
    "url": "zh/guide/mui-player-desktop-plugin.html",
    "revision": "c8947401d281af102aeaf572bab99228"
  },
  {
    "url": "zh/guide/other-problem.html",
    "revision": "dba44a0d2704243b4c4aadbb59b0cfec"
  },
  {
    "url": "zh/guide/plus-desktop-plugin.html",
    "revision": "39e2d26732a2c3602960c4bfa05d18f1"
  },
  {
    "url": "zh/guide/plus-mobile-plugin.html",
    "revision": "0027755b5be6ce132858a489249362c2"
  },
  {
    "url": "zh/guide/preset.html",
    "revision": "9cc27e1162457fbf3cdbf4306e0331ff"
  },
  {
    "url": "zh/guide/subtitle.html",
    "revision": "1924e4e2c547672cdc24382dc32872b2"
  },
  {
    "url": "zh/guide/thumbnails.html",
    "revision": "9d2bcbac0fce573e0f138dbfce713747"
  },
  {
    "url": "zh/guide/uni-app.html",
    "revision": "a422f7cb520ac445b0abda309f3516d4"
  },
  {
    "url": "zh/index.html",
    "revision": "4cd2ab6f50069928eb768501d0ebeed0"
  },
  {
    "url": "zh/joinUs/contact.html",
    "revision": "03fd5f9791a29284308feb9d466052e1"
  },
  {
    "url": "zh/joinUs/index.html",
    "revision": "8fbf77db47f662cf628f8c44c6bd813c"
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
