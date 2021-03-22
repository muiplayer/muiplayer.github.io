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
    "revision": "e4bec4f14b066867f0c1a3bc115c779d"
  },
  {
    "url": "api/index.html",
    "revision": "21778739def0ee0477f927047a56fe65"
  },
  {
    "url": "assets/css/0.styles.cda95fef.css",
    "revision": "9ab6b19b7aa511af15f4cbbc985ac520"
  },
  {
    "url": "assets/img/laptop3.9cd8ee36.png",
    "revision": "9cd8ee3688833684bb190e880c614865"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e53dabc1.js",
    "revision": "552e3c691764fcd32ad5f0f4d722da73"
  },
  {
    "url": "assets/js/11.f7f480a5.js",
    "revision": "13601a0a3fe8586bc3241f60edc0edad"
  },
  {
    "url": "assets/js/12.d1df1569.js",
    "revision": "96a2641473bb8ff004d40d6174c52aff"
  },
  {
    "url": "assets/js/13.5ca54374.js",
    "revision": "aa8e26b3784b403d04a2d87ff66fd925"
  },
  {
    "url": "assets/js/14.4438db97.js",
    "revision": "e43b9c69a4c48038b3a6dd174ec44478"
  },
  {
    "url": "assets/js/15.ce839b75.js",
    "revision": "c8b9a36cbdde359ad2a757ac2de26be7"
  },
  {
    "url": "assets/js/16.83b429c6.js",
    "revision": "98a37ad0f5123237b04a5c47ce1ee907"
  },
  {
    "url": "assets/js/17.19cda97f.js",
    "revision": "34d9ad1e2360e08ccc1b123049fe45e1"
  },
  {
    "url": "assets/js/18.fcff2ea3.js",
    "revision": "b6fc8bf45f3d694aac03188709d81957"
  },
  {
    "url": "assets/js/19.4f7d0c52.js",
    "revision": "99d1bd373987178787441297a1509fb0"
  },
  {
    "url": "assets/js/2.5deba227.js",
    "revision": "c72e22e784e42f0e05630b630d569d68"
  },
  {
    "url": "assets/js/20.e5c565a5.js",
    "revision": "bc9d241dfaca78091d3d32d2f8772607"
  },
  {
    "url": "assets/js/21.06f77596.js",
    "revision": "4b6deb00e50e0b46406cdf12b8c35fc4"
  },
  {
    "url": "assets/js/22.91bd3211.js",
    "revision": "c8f6f310d86042a9bf6e398c835a038c"
  },
  {
    "url": "assets/js/23.14dd81da.js",
    "revision": "ddc8449bd0837a1063ff941cf82b6ce6"
  },
  {
    "url": "assets/js/24.3c26fa36.js",
    "revision": "0aeff245e10862483c5b746d3cc6bab4"
  },
  {
    "url": "assets/js/25.4731437e.js",
    "revision": "ba9854989528731062e8b5c397bb6fad"
  },
  {
    "url": "assets/js/26.d4ebcbf0.js",
    "revision": "66b172ef8e007750623a3543eb8064e0"
  },
  {
    "url": "assets/js/27.8f1c8f8d.js",
    "revision": "f2eb39ad35e1310debd7350631136d64"
  },
  {
    "url": "assets/js/28.f87cc156.js",
    "revision": "1d6cda45227a4d32e63b870c6e0a9dad"
  },
  {
    "url": "assets/js/29.f3629e01.js",
    "revision": "2b7706b8cfdfce63c1dde604bb95b08c"
  },
  {
    "url": "assets/js/3.461e2a24.js",
    "revision": "8637afbe4b712c1f348288b0463bab38"
  },
  {
    "url": "assets/js/30.417fa236.js",
    "revision": "c82307db2f976b7e89419859922e9ddc"
  },
  {
    "url": "assets/js/31.2424a918.js",
    "revision": "88d92ad50c21d202be63043f82a87eec"
  },
  {
    "url": "assets/js/32.814775bb.js",
    "revision": "1205e123446715538c9868192091ae50"
  },
  {
    "url": "assets/js/33.75fcf86f.js",
    "revision": "ba4a0587dd4f935b0ff079a26e01e71a"
  },
  {
    "url": "assets/js/34.e5b74d64.js",
    "revision": "eec5a7bfbcd6ea34ca0ac14c9ba1f792"
  },
  {
    "url": "assets/js/35.db0be411.js",
    "revision": "67c9ae00ae2eaf2b85342d73a2281136"
  },
  {
    "url": "assets/js/36.94816f32.js",
    "revision": "b043ffaadd44389c009176eeaafb7b6a"
  },
  {
    "url": "assets/js/37.b83eeb81.js",
    "revision": "1289ca8c28612b1660d0c31539c9a471"
  },
  {
    "url": "assets/js/38.f5031f83.js",
    "revision": "74db6faa4d4e78defe3092fc7df7c74a"
  },
  {
    "url": "assets/js/39.0a7d8757.js",
    "revision": "c2451801f7ddf678298a87c793a72e7d"
  },
  {
    "url": "assets/js/4.161630a9.js",
    "revision": "ab0ff83b8ab2bb5c5e1519f35f029136"
  },
  {
    "url": "assets/js/5.b5425ab7.js",
    "revision": "56daaade20b8e77910048be0e84a2a22"
  },
  {
    "url": "assets/js/6.22fc33b5.js",
    "revision": "2b4702c65fec527047d7d91a5f2487d3"
  },
  {
    "url": "assets/js/7.84fbc57f.js",
    "revision": "d8a71a3e34eeec7d45f384aad5701067"
  },
  {
    "url": "assets/js/8.05cb0b60.js",
    "revision": "ce5e57b978ac36d02a0c129b544660b8"
  },
  {
    "url": "assets/js/9.aacec4c7.js",
    "revision": "e09148eeb800d5cdba92aa5c0081fd5e"
  },
  {
    "url": "assets/js/app.460a20b2.js",
    "revision": "172bf1d4642cafea83c6eb316587bba6"
  },
  {
    "url": "barrage/index.html",
    "revision": "088b0337aa18a0230ae55ec4d6443ca6"
  },
  {
    "url": "begin/index.html",
    "revision": "a8c2fe771f0f30c3bb7f8ef0e1ff12b3"
  },
  {
    "url": "buy/index.html",
    "revision": "afbee46f9cb55dd10682952e83d651b2"
  },
  {
    "url": "css/mui-player.min.css",
    "revision": "8b10fd418150962030efa48ab2c0341f"
  },
  {
    "url": "custom-control/index.html",
    "revision": "2088f3287b5849dc3554a1f0e0f3b37e"
  },
  {
    "url": "guide/index.html",
    "revision": "46f28409396eb1acb837f4e3b81d4bd4"
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
    "url": "image/laptop3.png",
    "revision": "9cd8ee3688833684bb190e880c614865"
  },
  {
    "url": "image/output_160x90_10x10_001.jpg",
    "revision": "6576b712e2509cbe4c27a21db3b7fd49"
  },
  {
    "url": "image/poster.jpg",
    "revision": "2ebfa890afdbcb99cf52a9fbd1be0f0d"
  },
  {
    "url": "image/thumbnails_preview.png",
    "revision": "bc59a0e9122193f84b1f93488b054c19"
  },
  {
    "url": "index.html",
    "revision": "a7a9fbcf61e13e3afc8bcb2cf4ed357b"
  },
  {
    "url": "js/config.js",
    "revision": "d0e06b9510ee362a1c2cb90f24e744b1"
  },
  {
    "url": "js/customSetting.js",
    "revision": "3cc6f839b02610a5d541ef418115389d"
  },
  {
    "url": "js/global.js",
    "revision": "8b4719a14223a9f955299210309c510d"
  },
  {
    "url": "js/mui-player-desktop-plugin.min.js",
    "revision": "82c3044636be8430d5f214232a6bb4b6"
  },
  {
    "url": "js/mui-player-mobile-plugin.min.js",
    "revision": "53140a62205d798fc97f58d75a41ddd3"
  },
  {
    "url": "js/mui-player.js",
    "revision": "f69c8e659977913e77fb0dd1b51cf418"
  },
  {
    "url": "js/mui-player.min.js",
    "revision": "a717dda1e45a7bd4ce01cdd55b8a0584"
  },
  {
    "url": "js/parseConfig.js",
    "revision": "a6ff26b00b3d8b35e3fdff9c08495c5f"
  },
  {
    "url": "logo.png",
    "revision": "93a0432e28c96840828109dbc2bcfd11"
  },
  {
    "url": "mui-player-desktop-plugin/index.html",
    "revision": "e110150f28f7e078433daf7621ba9ce7"
  },
  {
    "url": "mui-player-mobile-plugin/index.html",
    "revision": "8a2631f21af5a46a8cbc7decddb11c0a"
  },
  {
    "url": "other-problem/index.html",
    "revision": "586dfe5615933a5947b8fdcb2cc7da48"
  },
  {
    "url": "plugin/flv.min.js",
    "revision": "0db806b0c05991d191121dd1e94c39d8"
  },
  {
    "url": "plugin/hls.js",
    "revision": "9f28243faf7f902d45d5ceed8cf78218"
  },
  {
    "url": "plugin/hls.min.js",
    "revision": "d2b846afa1bb7cd6fc981556511e16f1"
  },
  {
    "url": "preset/index.html",
    "revision": "95344d7da2de34d849fc7e5ead2ae84e"
  },
  {
    "url": "subtitle/index.html",
    "revision": "6389ebbceaf72496c3f150cdaa02645a"
  },
  {
    "url": "thumbnails/index.html",
    "revision": "545c7a4441d900d8524d220e92150bb9"
  },
  {
    "url": "uni-app/index.html",
    "revision": "0d6039aa51ded2531f9c62384f10a957"
  },
  {
    "url": "zh/api/index.html",
    "revision": "a585b8f3e7ad91ac8e96f8e473ac66e1"
  },
  {
    "url": "zh/barrage/index.html",
    "revision": "acdf7d13884b0d77fe38734813ddbf10"
  },
  {
    "url": "zh/begin/index.html",
    "revision": "3aea52e5070482ecff8119b677303861"
  },
  {
    "url": "zh/buy/index.html",
    "revision": "1ed94ebf75c4a38add79aba21311a2ad"
  },
  {
    "url": "zh/custom-control/index.html",
    "revision": "4009a6f8b897fe085a0c4ee6ceba4fcf"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "d37a4e3b04bf97dae22eb1af17bd5c83"
  },
  {
    "url": "zh/index.html",
    "revision": "b2c6794b617be4e178a6ce420bdb9e76"
  },
  {
    "url": "zh/mui-player-desktop-plugin/index.html",
    "revision": "3a6b6017218b9b8461b8ba8cfc85457d"
  },
  {
    "url": "zh/mui-player-mobile-plugin/index.html",
    "revision": "b520d92214e46d35f57ba80659678262"
  },
  {
    "url": "zh/other-problem/index.html",
    "revision": "b0b679283c46f10454ce1772aa88aec7"
  },
  {
    "url": "zh/preset/index.html",
    "revision": "ea1199fa3160a9e0fece2acb12e04fb5"
  },
  {
    "url": "zh/subtitle/index.html",
    "revision": "5ee46a515936200042eeab3fcf80d576"
  },
  {
    "url": "zh/thumbnails/index.html",
    "revision": "4bf296f688b83015dfa38e74a0d07d0c"
  },
  {
    "url": "zh/uni-app/index.html",
    "revision": "2a589c21a96b81defc08d4dc32c7e4b4"
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
