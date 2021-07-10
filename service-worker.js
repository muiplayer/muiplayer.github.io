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
    "revision": "a5a1e16322baa29c65f93d4addf0823f"
  },
  {
    "url": "assets/css/0.styles.09d1853b.css",
    "revision": "d2eef2226f577114fa5ca6466dabb482"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.51452eff.js",
    "revision": "5333081473a0a81476faefed67a64356"
  },
  {
    "url": "assets/js/10.bd03393f.js",
    "revision": "a4cbd9c402df76f593a85d8a66e4d8cf"
  },
  {
    "url": "assets/js/11.6e9603d7.js",
    "revision": "74d120ffcd4bd8b01265dd469dcbd431"
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
    "url": "assets/js/16.c3fdb6df.js",
    "revision": "e432ab9db50539884b4d090e90a93206"
  },
  {
    "url": "assets/js/17.c7e5932d.js",
    "revision": "af6862e8e4883fd0a5a61ce544350aaa"
  },
  {
    "url": "assets/js/18.a1a33ade.js",
    "revision": "eaa6a48eb7f78515fbe334952d02ad8a"
  },
  {
    "url": "assets/js/19.20643d7f.js",
    "revision": "da62370461d1659a54708a94d7c05029"
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
    "url": "assets/js/24.a313a384.js",
    "revision": "ba8f89a3cd1008c8a40ea7503a0eb896"
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
    "url": "assets/js/36.317a8e0b.js",
    "revision": "08e4fa64354c040f5904108f29a3df0c"
  },
  {
    "url": "assets/js/37.9d5652ba.js",
    "revision": "166ea8530a5a154b1b4b42f9b525675d"
  },
  {
    "url": "assets/js/38.c7196ffe.js",
    "revision": "c31b0946b69a5a16b9f7fc116db9d5c2"
  },
  {
    "url": "assets/js/39.cb4362d7.js",
    "revision": "942acb0c075feb1e6cf6362084a6774b"
  },
  {
    "url": "assets/js/4.de32b243.js",
    "revision": "07f5f8104d77fa6e7ee62f6dfa027ec9"
  },
  {
    "url": "assets/js/40.3a33261e.js",
    "revision": "0e040139de0a19c72c7e92dd6eedda0c"
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
    "url": "assets/js/43.db179ac4.js",
    "revision": "f11430c8096f10a6be0cdd8b115a7e79"
  },
  {
    "url": "assets/js/44.6fa56cdc.js",
    "revision": "ce983d405d03793f9c5f8fe9ac1b5dc9"
  },
  {
    "url": "assets/js/45.7fb33cbe.js",
    "revision": "0d3fbe4500fb02e99997886110dd5d7e"
  },
  {
    "url": "assets/js/46.30c25c3a.js",
    "revision": "d04c0899017c08b16c881b36462714f2"
  },
  {
    "url": "assets/js/47.7312dfa3.js",
    "revision": "22faeaaa908a13caa86bea3cfd0f146d"
  },
  {
    "url": "assets/js/48.03323863.js",
    "revision": "1e1ea351569c10be05c20e25fe24aea4"
  },
  {
    "url": "assets/js/49.870980ff.js",
    "revision": "013ff87d654a019d157b160c8db5edcf"
  },
  {
    "url": "assets/js/5.4e70a0bf.js",
    "revision": "924aaf89aa1baf59ba37a085c37604f7"
  },
  {
    "url": "assets/js/50.d95e9ab0.js",
    "revision": "15aa84da5f541bb2e675fe2a6fac1104"
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
    "url": "assets/js/56.8772d963.js",
    "revision": "00e7b3fc5b9e3c9d9f00fad2f5de9277"
  },
  {
    "url": "assets/js/57.6c5e9821.js",
    "revision": "0bdf3bd2fb16069cf2ca44e81543b467"
  },
  {
    "url": "assets/js/58.a2fe1184.js",
    "revision": "a7de4c363b5d90b4299164e146a8b674"
  },
  {
    "url": "assets/js/59.4cb287d5.js",
    "revision": "87a75da4e8ec2667f51a002e19fac9d8"
  },
  {
    "url": "assets/js/6.ca8544b0.js",
    "revision": "ed4a50a0c18cf1642aa418e49faef1b6"
  },
  {
    "url": "assets/js/7.324d9418.js",
    "revision": "cab59f6cfe499f3d6fe786197b8169d4"
  },
  {
    "url": "assets/js/8.103c8cee.js",
    "revision": "f64f522b7f021e87893d7eede0f72ebb"
  },
  {
    "url": "assets/js/9.cbabb857.js",
    "revision": "b330e9ab4933e540a045e46af1618a99"
  },
  {
    "url": "assets/js/app.fd3dc5b5.js",
    "revision": "742481497c2f960b644a14c79394f1ce"
  },
  {
    "url": "css/CommentCoreLibrary.min.css",
    "revision": "e578b37f4607d6f4231c8b7da5f1d844"
  },
  {
    "url": "css/mui-player.min.css",
    "revision": "5446c6c4352205a272cc65cb1fd359ab"
  },
  {
    "url": "demo/danmaku-demo.html",
    "revision": "a2f7acebee55c366583439b1620c309f"
  },
  {
    "url": "demo/index.html",
    "revision": "03d2ead6f68226d1ddaae4e606f17514"
  },
  {
    "url": "demo/live-demo.html",
    "revision": "68ff60a93c1db8c7b4125aa2cd2ae619"
  },
  {
    "url": "demo/multiple-demo.html",
    "revision": "3e93dfc776a504034d484ec7493ea5b1"
  },
  {
    "url": "demo/subtitle-demo.html",
    "revision": "89130cfa8e403d4a7ebb5497ffdcd0b4"
  },
  {
    "url": "guide/api.html",
    "revision": "dcd60642c1bbe4726a21256edfb48069"
  },
  {
    "url": "guide/barrage.html",
    "revision": "8b58c9ffb49495f7c5a6cbb773484734"
  },
  {
    "url": "guide/begin.html",
    "revision": "8f0ed33a3d60d9a9483aec309423d563"
  },
  {
    "url": "guide/custom-control.html",
    "revision": "d5a601bfc710f7d37f38c86addb8a86e"
  },
  {
    "url": "guide/index.html",
    "revision": "8872530917f91ddfc39aa32eab6627fa"
  },
  {
    "url": "guide/mui-player-desktop-plugin.html",
    "revision": "a6e054f1eb5be9482c4134823d300885"
  },
  {
    "url": "guide/mui-player-mobile-plugin.html",
    "revision": "199b62408ea03b3df4a12a2ea9f78908"
  },
  {
    "url": "guide/other-problem.html",
    "revision": "43f79ccf8dcd9cdd1b23409a8d8fe6ba"
  },
  {
    "url": "guide/preset.html",
    "revision": "455ba1129d9eb4eb0befdc3dcfec90b8"
  },
  {
    "url": "guide/subtitle.html",
    "revision": "de657f60bc728160bd011380e4df8b18"
  },
  {
    "url": "guide/thumbnails.html",
    "revision": "0791c2bf1acc6b6cd8d604e2e90e2b0f"
  },
  {
    "url": "guide/uni-app.html",
    "revision": "fbad67814759f127368d7eabbd96e511"
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
    "revision": "418da7a250e76fa8b62235dea7e95485"
  },
  {
    "url": "joinUs/contact.html",
    "revision": "4c1ee1a3a20edbed4b2fa837f6494bdd"
  },
  {
    "url": "joinUs/index.html",
    "revision": "79831353e56da5be05126bd4f60ad6d2"
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
    "revision": "f4345da51c19aebf97569be42937ae66"
  },
  {
    "url": "js/config.js",
    "revision": "2b709cdc2fbfd9aa1eef118a7a89e4ac"
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
    "revision": "fe80d222ca66e87d7700859a8fa4cf2d"
  },
  {
    "url": "js/mui-player.min.js",
    "revision": "91ceddcec31aed78e1ca5240f0d4e40a"
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
    "revision": "3b2fb94bc36f8ea2cd70ef78e702f013"
  },
  {
    "url": "zh/demo/index.html",
    "revision": "d8b88699417f382a6809ed11a459177f"
  },
  {
    "url": "zh/demo/live-demo.html",
    "revision": "856efdfe1f931d5b1cb7f7a12177f5b8"
  },
  {
    "url": "zh/demo/multiple-demo.html",
    "revision": "0b90bb0698937addf7d71f7502a8746b"
  },
  {
    "url": "zh/demo/subtitle-demo.html",
    "revision": "8bfd7d667db9f0a3c93c9fee3c0e63bd"
  },
  {
    "url": "zh/guide/api.html",
    "revision": "cf7284edfe1043676448a84a7cbd5b8e"
  },
  {
    "url": "zh/guide/barrage.html",
    "revision": "01aa23804d72a6884c804ef8052eb5e6"
  },
  {
    "url": "zh/guide/begin.html",
    "revision": "dcc8ff1aa62974acab47fe3c0f5f9d81"
  },
  {
    "url": "zh/guide/custom-control.html",
    "revision": "561c59e9dc6c11e3181e84edba15f6b7"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "d41cef00634b672f7280d2cf8069d7fe"
  },
  {
    "url": "zh/guide/mui-player-desktop-plugin.html",
    "revision": "e10995360c409ddff36dc16ed0fffd5e"
  },
  {
    "url": "zh/guide/mui-player-mobile-plugin.html",
    "revision": "619698763cda3e7ee1d5bdb2a6a56268"
  },
  {
    "url": "zh/guide/other-problem.html",
    "revision": "e1460750193c60d59d88f096c4282c5e"
  },
  {
    "url": "zh/guide/preset.html",
    "revision": "a596586ab7d976446d27b5e11787840a"
  },
  {
    "url": "zh/guide/subtitle.html",
    "revision": "27697a9996983cc6abd0e8291b12c02a"
  },
  {
    "url": "zh/guide/thumbnails.html",
    "revision": "517156a5a10b5165b1ac45a16c46c6e0"
  },
  {
    "url": "zh/guide/uni-app.html",
    "revision": "ea226ad6dd35b5eafb262c2bfa66f41a"
  },
  {
    "url": "zh/index.html",
    "revision": "36b05c05b9a47a827b6c1161451325ad"
  },
  {
    "url": "zh/joinUs/contact.html",
    "revision": "96dbd06c69387dce2485a2fe022769aa"
  },
  {
    "url": "zh/joinUs/index.html",
    "revision": "f120f35af5e20dec100970352c97fb16"
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
