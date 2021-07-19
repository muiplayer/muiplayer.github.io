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
    "revision": "7ed5a485722129b59bbfd46b8c1b8a08"
  },
  {
    "url": "assets/css/0.styles.2d319555.css",
    "revision": "5e0aec928586ddcee86f52feb27e0865"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.7c51c208.js",
    "revision": "bb11fcc4b5d84902670a3df51440beb5"
  },
  {
    "url": "assets/js/10.391902bd.js",
    "revision": "e84d43c3a7cc4732eafdb00c036a63c7"
  },
  {
    "url": "assets/js/11.57375aa2.js",
    "revision": "e524a67486b2eedc60f8b18bb2fe84da"
  },
  {
    "url": "assets/js/12.c548ffd4.js",
    "revision": "3a72b4f4422edadc8b54f60d08681943"
  },
  {
    "url": "assets/js/13.31040105.js",
    "revision": "60b89aadd070a38d2ee26a5f1f6de59d"
  },
  {
    "url": "assets/js/14.87b5c464.js",
    "revision": "33ccc5288c80f0a35a9d5acbb5728bb1"
  },
  {
    "url": "assets/js/15.74754f4b.js",
    "revision": "bbdb2b9c13194ec654c0391e879f4137"
  },
  {
    "url": "assets/js/16.e0bcb587.js",
    "revision": "0ad82668004e5edd76c883e29390e92c"
  },
  {
    "url": "assets/js/17.c7e5932d.js",
    "revision": "af6862e8e4883fd0a5a61ce544350aaa"
  },
  {
    "url": "assets/js/18.2b0ba42b.js",
    "revision": "e7ae40a789535f9b5d45d12429ccead4"
  },
  {
    "url": "assets/js/19.f71be4ce.js",
    "revision": "d077036dcfde085a610fe62c48cdb824"
  },
  {
    "url": "assets/js/20.260f4264.js",
    "revision": "c0b99a51a7e8d4e1d49d97c7650c7589"
  },
  {
    "url": "assets/js/21.0e549a98.js",
    "revision": "4bf2ab2c1dc653426f261972ac4c3f8d"
  },
  {
    "url": "assets/js/22.dc3a0cd8.js",
    "revision": "a852d780dd41fe3f130f8a764939bd4a"
  },
  {
    "url": "assets/js/23.c49cc389.js",
    "revision": "48f439010988e143899bd026dda8f89f"
  },
  {
    "url": "assets/js/24.dc0fb384.js",
    "revision": "1e29446d69653e8876779ab936977867"
  },
  {
    "url": "assets/js/25.25402b02.js",
    "revision": "f326b348fe075134df590cf6c9d7a2dd"
  },
  {
    "url": "assets/js/26.e175d8a8.js",
    "revision": "153c7ab0e35ddc6d149c5316fa2f90e3"
  },
  {
    "url": "assets/js/27.85661710.js",
    "revision": "445161fd631a283e0fa0e7b938a59d7c"
  },
  {
    "url": "assets/js/28.0802ab1b.js",
    "revision": "4d761d32c9b9e92e225c30db2abd72a4"
  },
  {
    "url": "assets/js/29.cc855801.js",
    "revision": "b584d225e627308a8fcae7649ebe88e4"
  },
  {
    "url": "assets/js/3.45c4687d.js",
    "revision": "d94ac371ea61918c86e06ea0fc3014fc"
  },
  {
    "url": "assets/js/30.314faf3d.js",
    "revision": "dd05185c429d1d34ab9d431692f24919"
  },
  {
    "url": "assets/js/31.e644e87a.js",
    "revision": "793f32826bb16dbdaee7683f91bc140c"
  },
  {
    "url": "assets/js/32.9eeccc56.js",
    "revision": "7963cb63e833c32c73c1ca5cdae7fa6f"
  },
  {
    "url": "assets/js/33.e441a721.js",
    "revision": "9eb198f2412455366f93fe81a35ec2b9"
  },
  {
    "url": "assets/js/34.f2dd6ad3.js",
    "revision": "6fe82904e55f1d1613e52a05ecf42761"
  },
  {
    "url": "assets/js/35.637c8d67.js",
    "revision": "bc12f7520102e5de3040dd6c62c4c174"
  },
  {
    "url": "assets/js/36.4e91321e.js",
    "revision": "0c986e50ee460e13cbed3f1ced5aeb61"
  },
  {
    "url": "assets/js/37.9e671a21.js",
    "revision": "8b3cac9337fe0960542df10dda525595"
  },
  {
    "url": "assets/js/38.c7196ffe.js",
    "revision": "c31b0946b69a5a16b9f7fc116db9d5c2"
  },
  {
    "url": "assets/js/39.f412a79f.js",
    "revision": "6c7d43cc559b2bbe00d96e85617c4e94"
  },
  {
    "url": "assets/js/4.022ed031.js",
    "revision": "c171307557086730ce05ba7879dc3ffc"
  },
  {
    "url": "assets/js/40.68e48ce6.js",
    "revision": "8302935d75e4cb949dec75289f79e831"
  },
  {
    "url": "assets/js/41.20fff980.js",
    "revision": "4aeea087d5efa02cba15e1580f364078"
  },
  {
    "url": "assets/js/42.a5ce64ab.js",
    "revision": "5ae25b4411f1d332f44ba11e9af6b928"
  },
  {
    "url": "assets/js/43.dc4724fa.js",
    "revision": "8e115540826a2d4160e35a9818637433"
  },
  {
    "url": "assets/js/44.c0c3911b.js",
    "revision": "f4dc64d5789486fda135c46aaecb3367"
  },
  {
    "url": "assets/js/45.f2b4865c.js",
    "revision": "b35c37371837280abdfd64917e22e196"
  },
  {
    "url": "assets/js/46.1699901b.js",
    "revision": "0317775cde0c486c3b91614c9f147c47"
  },
  {
    "url": "assets/js/47.7312dfa3.js",
    "revision": "22faeaaa908a13caa86bea3cfd0f146d"
  },
  {
    "url": "assets/js/48.e459cec2.js",
    "revision": "9bcd38acc65d1e95c7f44894aab194e4"
  },
  {
    "url": "assets/js/49.21793b37.js",
    "revision": "5c975ae98dc26165249d207d4a280610"
  },
  {
    "url": "assets/js/5.31d6d94f.js",
    "revision": "229e85d4b6464e4d47355b0315110f38"
  },
  {
    "url": "assets/js/50.0ec8e428.js",
    "revision": "4bf8ab386ccadd30c89f91ab1da6c727"
  },
  {
    "url": "assets/js/51.277a14ef.js",
    "revision": "fa2ac4223ae70a70960c449e5440c4f2"
  },
  {
    "url": "assets/js/52.3b3f1cb7.js",
    "revision": "9bc681f9e6dc8985cbd2c5ed7f5ed098"
  },
  {
    "url": "assets/js/53.c7f83d07.js",
    "revision": "8cb967a9755226bae0d3a2074c297f68"
  },
  {
    "url": "assets/js/54.72bc743d.js",
    "revision": "b79b2df742d3c2169be0c185c60f7cb8"
  },
  {
    "url": "assets/js/55.3022f3b5.js",
    "revision": "07c70680a9a08a8a9b6ffaadf5309349"
  },
  {
    "url": "assets/js/56.d2bab827.js",
    "revision": "659944fb2f257fe64e4e3af7ee93315a"
  },
  {
    "url": "assets/js/57.9acc2c89.js",
    "revision": "de7e93679bf979abae49c10d90a73954"
  },
  {
    "url": "assets/js/58.5914b25c.js",
    "revision": "eb9f35e095d02652cc629f95e0f2c66e"
  },
  {
    "url": "assets/js/59.4cb287d5.js",
    "revision": "87a75da4e8ec2667f51a002e19fac9d8"
  },
  {
    "url": "assets/js/6.4c01b4c5.js",
    "revision": "7579460bbebbf20f2c1b5af44d0570df"
  },
  {
    "url": "assets/js/7.030132b6.js",
    "revision": "eee1ea0be29b28e9d74efed98ec63107"
  },
  {
    "url": "assets/js/8.f472a093.js",
    "revision": "d96cf87f1481986ed2896a38ab331fe1"
  },
  {
    "url": "assets/js/9.cbabb857.js",
    "revision": "b330e9ab4933e540a045e46af1618a99"
  },
  {
    "url": "assets/js/app.0ea0d3ef.js",
    "revision": "0473f79009d82b28cc3d2f95df9b5bbd"
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
    "url": "demo/danmaku-demo.html",
    "revision": "4629fde0bc474857a5ac592fdc0c7b60"
  },
  {
    "url": "demo/index.html",
    "revision": "337c5641bb2cb10a8d7368f35d260bb2"
  },
  {
    "url": "demo/live-demo.html",
    "revision": "7cfbe1ed37d7312e760e0bf42370be5f"
  },
  {
    "url": "demo/multiple-demo.html",
    "revision": "6c0824bc8a2ba25916134cf5490ee092"
  },
  {
    "url": "demo/subtitle-demo.html",
    "revision": "e20df666b43bd3daeb0a02020e7e6cd4"
  },
  {
    "url": "guide/api.html",
    "revision": "0d3632c70c0a5139b018a56c031ee14b"
  },
  {
    "url": "guide/barrage.html",
    "revision": "b27c80473d56133807c4c9b442ce0066"
  },
  {
    "url": "guide/begin.html",
    "revision": "33c8d27bdd6417bccc41d1a30c0613b7"
  },
  {
    "url": "guide/custom-control.html",
    "revision": "abe02852a5c6ee7a7ca05b38275bb2a7"
  },
  {
    "url": "guide/index.html",
    "revision": "2dfa2e17ded3e1258ece57115abdcc64"
  },
  {
    "url": "guide/mui-player-desktop-plugin.html",
    "revision": "be0e7c2864d140cbfd883c175c719a98"
  },
  {
    "url": "guide/mui-player-mobile-plugin.html",
    "revision": "1c2e2de784288d60be9a2bb1fd578890"
  },
  {
    "url": "guide/other-problem.html",
    "revision": "273e671b0bf3f6395f0929226d18bf18"
  },
  {
    "url": "guide/preset.html",
    "revision": "158ddf77248038c4807c23c87aea8075"
  },
  {
    "url": "guide/subtitle.html",
    "revision": "318565b380b25cec4a918c493af58510"
  },
  {
    "url": "guide/thumbnails.html",
    "revision": "983d4dcd08c1d6d722e68b8dd6983a83"
  },
  {
    "url": "guide/uni-app.html",
    "revision": "151883602d3b8030af574cfdba9971ac"
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
    "revision": "ac62f0a7f725f0f82eb013f65b053551"
  },
  {
    "url": "joinUs/contact.html",
    "revision": "8258a837fbfece096fc0fbd187a3239f"
  },
  {
    "url": "joinUs/index.html",
    "revision": "265a4e985056888afb59f5bf5f2866b1"
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
    "revision": "36838c080c03f9853d8972ed55ab6f47"
  },
  {
    "url": "zh/demo/index.html",
    "revision": "fdea10b420bd2931f797c9b0c43f8273"
  },
  {
    "url": "zh/demo/live-demo.html",
    "revision": "0bfb5c4af2b5fd5f416e67816027325d"
  },
  {
    "url": "zh/demo/multiple-demo.html",
    "revision": "d5fb0c94e31266c59e8b7d49fb9145a7"
  },
  {
    "url": "zh/demo/subtitle-demo.html",
    "revision": "9367e44389a87cc6b70e7f7d651ff5a9"
  },
  {
    "url": "zh/guide/api.html",
    "revision": "e5792c332ea5da9b8ffb799ca347c056"
  },
  {
    "url": "zh/guide/barrage.html",
    "revision": "d896e5c1dedbdc23f2775f93370c2e38"
  },
  {
    "url": "zh/guide/begin.html",
    "revision": "3cee172dbbe26fcf013d5801b1d55aaf"
  },
  {
    "url": "zh/guide/custom-control.html",
    "revision": "e700e82ec034a4dc886786cc6dba8c42"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "3f50e6f38f2dbb6a2dc58ab2e7c3a4fe"
  },
  {
    "url": "zh/guide/mui-player-desktop-plugin.html",
    "revision": "c347cc68f230084aa6c9cf507d2a1654"
  },
  {
    "url": "zh/guide/mui-player-mobile-plugin.html",
    "revision": "2f35962a980017c694414b0b876fde98"
  },
  {
    "url": "zh/guide/other-problem.html",
    "revision": "1db0055fd512b15382cf3792c13422f0"
  },
  {
    "url": "zh/guide/preset.html",
    "revision": "5c684a9cab64b28caf475c7233b04f8f"
  },
  {
    "url": "zh/guide/subtitle.html",
    "revision": "e639f88da9b4c93af190424cfb888278"
  },
  {
    "url": "zh/guide/thumbnails.html",
    "revision": "d304133d517a5c7583901fca8207c100"
  },
  {
    "url": "zh/guide/uni-app.html",
    "revision": "f3c7186a92738e825bfa0b6a059470ca"
  },
  {
    "url": "zh/index.html",
    "revision": "fd50df79e6556e4370ae0345b82c5298"
  },
  {
    "url": "zh/joinUs/contact.html",
    "revision": "7ef4a38df97b3eab4066efe9fefab630"
  },
  {
    "url": "zh/joinUs/index.html",
    "revision": "bc677145006314253e3e73ca9fff4131"
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
