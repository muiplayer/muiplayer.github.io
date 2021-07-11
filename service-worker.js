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
    "revision": "2197fa7dc73847e9163610a39476c2ac"
  },
  {
    "url": "assets/css/0.styles.0acbe1b9.css",
    "revision": "f3aae8f61faacd63b124fb4206485aa5"
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
    "url": "assets/js/10.bd03393f.js",
    "revision": "a4cbd9c402df76f593a85d8a66e4d8cf"
  },
  {
    "url": "assets/js/11.c1a5ea9f.js",
    "revision": "7a0544976d223e92e152579028a807d7"
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
    "url": "assets/js/15.1905427c.js",
    "revision": "039c3f4d3eaa158b3ab9a99685decb78"
  },
  {
    "url": "assets/js/16.f9663f8c.js",
    "revision": "7c8b8d4c66819e504b3be8aa09c036d2"
  },
  {
    "url": "assets/js/17.306d6dee.js",
    "revision": "6ca5650662f1cd0e6146b06618debca0"
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
    "url": "assets/js/26.79d36f43.js",
    "revision": "b22f7ec325334d8940fb6d4343b3807b"
  },
  {
    "url": "assets/js/27.5485c3d2.js",
    "revision": "3a6f553c048e325d5dee0f8db8730844"
  },
  {
    "url": "assets/js/28.47e71f4c.js",
    "revision": "4e3a3e99d04c2b65374ad8a463236907"
  },
  {
    "url": "assets/js/29.df99e63e.js",
    "revision": "abd8adacb838dfa42a19b4394dcc15fc"
  },
  {
    "url": "assets/js/3.45c4687d.js",
    "revision": "d94ac371ea61918c86e06ea0fc3014fc"
  },
  {
    "url": "assets/js/30.4817c6ad.js",
    "revision": "8dfee84b7bb948ea293a8f3932b6036f"
  },
  {
    "url": "assets/js/31.7e9ae4ed.js",
    "revision": "8cbc08e4f4c5c5c4bc359fc24e7c6451"
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
    "url": "assets/js/36.ea463e3e.js",
    "revision": "0d80635d94e94e74fe5240976cad8530"
  },
  {
    "url": "assets/js/37.09d82e2b.js",
    "revision": "1f7c9a6cdfaf504e9535ccf194d711d7"
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
    "url": "assets/js/4.21131405.js",
    "revision": "bcd9eaa1e24928fece63182328aa0861"
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
    "url": "assets/js/47.49dc30ff.js",
    "revision": "76371c63e0b2337d3a0094e556fbc1fa"
  },
  {
    "url": "assets/js/48.dbb31eab.js",
    "revision": "af29e125bb48ab9d5ad9605e944a4ff2"
  },
  {
    "url": "assets/js/49.a3c09f5d.js",
    "revision": "6c88d7fd60676313bcc2956fff3c8ba0"
  },
  {
    "url": "assets/js/5.0cc1d523.js",
    "revision": "a43f87aba2cc9c7b723b93d19d2db880"
  },
  {
    "url": "assets/js/50.6fc7f4cd.js",
    "revision": "a626e0670bce47d513b808f905a8e441"
  },
  {
    "url": "assets/js/51.70d5e8be.js",
    "revision": "4334212a34b86fb981527b455f2bb7b3"
  },
  {
    "url": "assets/js/52.3b3f1cb7.js",
    "revision": "9bc681f9e6dc8985cbd2c5ed7f5ed098"
  },
  {
    "url": "assets/js/53.bbcb05f1.js",
    "revision": "bd1e9b3ff302651464b0e31f8142bfa5"
  },
  {
    "url": "assets/js/54.662c3ccd.js",
    "revision": "52d63468baf111da5abf688643b524a6"
  },
  {
    "url": "assets/js/55.3022f3b5.js",
    "revision": "07c70680a9a08a8a9b6ffaadf5309349"
  },
  {
    "url": "assets/js/56.ae922c94.js",
    "revision": "4f2e9247e22d45639243f71a29ce8ed9"
  },
  {
    "url": "assets/js/57.f352ebcf.js",
    "revision": "90428709cf1b5b72393bdd12c1ead1ea"
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
    "url": "assets/js/6.637a65b8.js",
    "revision": "10104b730269cb98b1c96ff87692877d"
  },
  {
    "url": "assets/js/7.df828117.js",
    "revision": "a90beeca0fd4a52176bce2e1eacd8d2e"
  },
  {
    "url": "assets/js/8.4eb714c2.js",
    "revision": "4d5377073843ad9cf47eb59392c98b3b"
  },
  {
    "url": "assets/js/9.cbabb857.js",
    "revision": "b330e9ab4933e540a045e46af1618a99"
  },
  {
    "url": "assets/js/app.4931857c.js",
    "revision": "44ab275c2090f12a7f8c4d8e2b2ba3c1"
  },
  {
    "url": "css/CommentCoreLibrary.min.css",
    "revision": "e578b37f4607d6f4231c8b7da5f1d844"
  },
  {
    "url": "css/mui-player.min.css",
    "revision": "50eb8148f7e0994312182f4a20e6a9c9"
  },
  {
    "url": "demo/danmaku-demo.html",
    "revision": "a8ead46b82796fd10fe0705cdb330f29"
  },
  {
    "url": "demo/index.html",
    "revision": "408e1ff01d0a3e82c696021165e07db1"
  },
  {
    "url": "demo/live-demo.html",
    "revision": "318a1765241b5469120b7783993205c8"
  },
  {
    "url": "demo/multiple-demo.html",
    "revision": "f1183eb2a2b602f4f4f6128a4382854a"
  },
  {
    "url": "demo/subtitle-demo.html",
    "revision": "311de2f783f083d51e8575e1e1977066"
  },
  {
    "url": "guide/api.html",
    "revision": "c8c4fde46ed2ca782e5d7e0ef82675ce"
  },
  {
    "url": "guide/barrage.html",
    "revision": "e87b859de8cb66eb807afd5f5cca489e"
  },
  {
    "url": "guide/begin.html",
    "revision": "d040a61e6d46c40e5a73d88f3e79d46b"
  },
  {
    "url": "guide/custom-control.html",
    "revision": "d9936bb535d550f17c6057492f682e08"
  },
  {
    "url": "guide/index.html",
    "revision": "5fe8fe86c44e6536f29373a56d570f64"
  },
  {
    "url": "guide/mui-player-desktop-plugin.html",
    "revision": "21b3becf1abbc7419b985835f3184e36"
  },
  {
    "url": "guide/mui-player-mobile-plugin.html",
    "revision": "19d76d9c2a3d96b881bc60ea78e24c46"
  },
  {
    "url": "guide/other-problem.html",
    "revision": "3d2e02d83e9306a1a529e68ef06c043e"
  },
  {
    "url": "guide/preset.html",
    "revision": "c1946636dc37c20df9babf5cb288c6d5"
  },
  {
    "url": "guide/subtitle.html",
    "revision": "bf685c17f6f7ccaa4505127608e8d23a"
  },
  {
    "url": "guide/thumbnails.html",
    "revision": "72c6e3618ce856d3bbce33ba6c3eeb36"
  },
  {
    "url": "guide/uni-app.html",
    "revision": "1de4b254febce66087ccdfd0b88150b5"
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
    "revision": "cf9c9f7c723c1625699383c5e565ac37"
  },
  {
    "url": "joinUs/contact.html",
    "revision": "372418d5430c32aa5a5141f20efb1139"
  },
  {
    "url": "joinUs/index.html",
    "revision": "8ca1c1c24e6d1952b8db63c6a380e3ea"
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
    "revision": "76356bcc04f1c454916d14aa9cbc3b24"
  },
  {
    "url": "js/mui-player.min.js",
    "revision": "0e77a9764ba895c347edadefcc4059c7"
  },
  {
    "url": "js/parseConfig.js",
    "revision": "a6ff26b00b3d8b35e3fdff9c08495c5f"
  },
  {
    "url": "js/playerListener.js",
    "revision": "3054c566e41664213853c970e66ad744"
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
    "revision": "3522703b4ebbfcb7bee0f02563508985"
  },
  {
    "url": "zh/demo/index.html",
    "revision": "aae6d23eb35023a63ca35c0e99ac48e7"
  },
  {
    "url": "zh/demo/live-demo.html",
    "revision": "fe9b66c10b547b43e162b58f4e750014"
  },
  {
    "url": "zh/demo/multiple-demo.html",
    "revision": "92c47bf4ace480b6522b8ad6f3a75ba0"
  },
  {
    "url": "zh/demo/subtitle-demo.html",
    "revision": "71120fb303d2e85ffce8f6cfc587bdcd"
  },
  {
    "url": "zh/guide/api.html",
    "revision": "a7b51f1d093ab15615a03664fc33b026"
  },
  {
    "url": "zh/guide/barrage.html",
    "revision": "03323ca332f38ca0b0d36022c8df190a"
  },
  {
    "url": "zh/guide/begin.html",
    "revision": "294d7596ce416a76dd5c3c04ded570c2"
  },
  {
    "url": "zh/guide/custom-control.html",
    "revision": "f0ec4949ada9dbcdd72766ab10a02205"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "6ff50bfa2d5fbb827f5a5653c7ca62c2"
  },
  {
    "url": "zh/guide/mui-player-desktop-plugin.html",
    "revision": "9e6af96507717cfdc525234e22bf5504"
  },
  {
    "url": "zh/guide/mui-player-mobile-plugin.html",
    "revision": "26551af18e9e22f92712bd5ccc8e0020"
  },
  {
    "url": "zh/guide/other-problem.html",
    "revision": "57f7642b2af3631d9cb9d3c647ca3af1"
  },
  {
    "url": "zh/guide/preset.html",
    "revision": "4a9efcf22d8ca4a9e60abbb1fe90c553"
  },
  {
    "url": "zh/guide/subtitle.html",
    "revision": "a5c83b358c745c1a396a79c71667e3ee"
  },
  {
    "url": "zh/guide/thumbnails.html",
    "revision": "fcb482354e44a737858fee1186bcd258"
  },
  {
    "url": "zh/guide/uni-app.html",
    "revision": "1949cb9b86a481213ffc72c2dd7b102e"
  },
  {
    "url": "zh/index.html",
    "revision": "bc03301368f59965d98fef54e263c5e6"
  },
  {
    "url": "zh/joinUs/contact.html",
    "revision": "84a98aa627ab2bb1d8b5fe33de4dcb28"
  },
  {
    "url": "zh/joinUs/index.html",
    "revision": "6bcfdd8358b7450a8d8f058c56ecc1fd"
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
