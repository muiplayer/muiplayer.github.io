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
    "revision": "37a8de3c057488f040490e1215266880"
  },
  {
    "url": "assets/css/0.styles.e1254f3c.css",
    "revision": "f78f5fdb6b3eb645a7d7cfa0792ad285"
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
    "url": "assets/js/10.0d03b42b.js",
    "revision": "0ce0f3c2187cdb0032b566ccf0117700"
  },
  {
    "url": "assets/js/11.ef368b55.js",
    "revision": "8d097b8888677d0d33a17236ace736e5"
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
    "url": "assets/js/24.471a8bcd.js",
    "revision": "5da88c1c632bb8d2b1b4534a05a4bc2f"
  },
  {
    "url": "assets/js/25.29101930.js",
    "revision": "4c9df2ea91be84f82a6f70231784c4d7"
  },
  {
    "url": "assets/js/26.79d36f43.js",
    "revision": "b22f7ec325334d8940fb6d4343b3807b"
  },
  {
    "url": "assets/js/27.9744d628.js",
    "revision": "104b8c2a6bfaba86315d7ed56f037732"
  },
  {
    "url": "assets/js/28.805adf67.js",
    "revision": "3810474936470e4f34dcc131ebbd6daf"
  },
  {
    "url": "assets/js/29.2f6bd123.js",
    "revision": "1af57b4018213cc7f2d085b1c1739dba"
  },
  {
    "url": "assets/js/3.45c4687d.js",
    "revision": "d94ac371ea61918c86e06ea0fc3014fc"
  },
  {
    "url": "assets/js/30.623160aa.js",
    "revision": "9be202b54b38984c99548e571f097a60"
  },
  {
    "url": "assets/js/31.92f413c0.js",
    "revision": "aec69403abe22bc2cdc162e88268155a"
  },
  {
    "url": "assets/js/32.8b04007f.js",
    "revision": "f774ecd589027d2b3727e5f63c05f0f1"
  },
  {
    "url": "assets/js/33.1bcecf1e.js",
    "revision": "d8daea14477f873da36fad6baab62cd5"
  },
  {
    "url": "assets/js/34.85ac9cf4.js",
    "revision": "88beb0877e930e507b2ef2fd634ca5d0"
  },
  {
    "url": "assets/js/35.2de2039d.js",
    "revision": "ff040bffae70550571a8091ba3459550"
  },
  {
    "url": "assets/js/36.3331b40b.js",
    "revision": "4473d58d655241814a86348d5b6843d9"
  },
  {
    "url": "assets/js/37.b81bd26b.js",
    "revision": "f68f1fa616c99c4da6fe921f9ce2a4da"
  },
  {
    "url": "assets/js/38.25693d0f.js",
    "revision": "cc5dba40426c61f5b75cc9268b9eb9a3"
  },
  {
    "url": "assets/js/39.47f9b645.js",
    "revision": "91beaba7987f809165cfd622c4333a79"
  },
  {
    "url": "assets/js/4.23062a90.js",
    "revision": "7e2efb8ea566bfa34b52ef353a3c2611"
  },
  {
    "url": "assets/js/40.c4db1609.js",
    "revision": "854786e6ef37fdfae8c76be9c8874b61"
  },
  {
    "url": "assets/js/41.5dfc4d04.js",
    "revision": "b7d3b6807131455b2a65e2325d3663ef"
  },
  {
    "url": "assets/js/42.4f4b77ae.js",
    "revision": "5b5013c2cfbfdd8ed033014fb2a8e936"
  },
  {
    "url": "assets/js/43.00e58973.js",
    "revision": "d9d590455d2ec23cc2371beaf4b86579"
  },
  {
    "url": "assets/js/44.1fbca44f.js",
    "revision": "c63349cb262672298eb52d2119b197da"
  },
  {
    "url": "assets/js/45.6888c54e.js",
    "revision": "e4da2619922dee29a5a32f6972444a10"
  },
  {
    "url": "assets/js/46.a4534923.js",
    "revision": "741928d8d358de5c065a25704a466d85"
  },
  {
    "url": "assets/js/47.7c31d8b0.js",
    "revision": "44bbde93cb177326236ca8228da7807f"
  },
  {
    "url": "assets/js/48.075ab093.js",
    "revision": "4f0a48d675c540f4c51ad48e2b47d81c"
  },
  {
    "url": "assets/js/49.f86644f7.js",
    "revision": "22e890b3cd02c338006ddd9f0942ed55"
  },
  {
    "url": "assets/js/5.9beae823.js",
    "revision": "dff944fd5409d743a5498aa27b266c11"
  },
  {
    "url": "assets/js/50.822f8471.js",
    "revision": "cd135049a9c0feba22eae6cc29a0cbf8"
  },
  {
    "url": "assets/js/51.a8ed14da.js",
    "revision": "132504ead285cfe41418823b7e52ffdc"
  },
  {
    "url": "assets/js/52.35512b09.js",
    "revision": "443dbffcc4a18780b9e2f86f88507d1d"
  },
  {
    "url": "assets/js/53.ba3f7d6a.js",
    "revision": "a2a04e994e78a3fa3c9b5445336bc565"
  },
  {
    "url": "assets/js/54.76bd6c74.js",
    "revision": "e8f4841a94904a741ef6abebb7c79f99"
  },
  {
    "url": "assets/js/55.ca25c53d.js",
    "revision": "36e777858a50cc7da892e43e9132a97c"
  },
  {
    "url": "assets/js/56.daae5268.js",
    "revision": "5cbb12c0d27106e86444d3a6e7b15ec7"
  },
  {
    "url": "assets/js/57.0094f771.js",
    "revision": "c98da5c34365ce381f6423a2679f7cba"
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
    "url": "assets/js/6.97800caf.js",
    "revision": "ca839c7e9711e13a0fdc5b11bb5a90a0"
  },
  {
    "url": "assets/js/7.f6e370aa.js",
    "revision": "21c610158c28c465e6a368a3fade35ec"
  },
  {
    "url": "assets/js/8.9608a7a9.js",
    "revision": "4ca5de388d846f4d864b9ece60d6a71a"
  },
  {
    "url": "assets/js/9.cbabb857.js",
    "revision": "b330e9ab4933e540a045e46af1618a99"
  },
  {
    "url": "assets/js/app.f14d2339.js",
    "revision": "4eefa9ccc3ce1fac67c8c70b47fe8045"
  },
  {
    "url": "css/CommentCoreLibrary.min.css",
    "revision": "e578b37f4607d6f4231c8b7da5f1d844"
  },
  {
    "url": "css/mui-player.min.css",
    "revision": "71643a0f4abf317f8388549121f3087a"
  },
  {
    "url": "demo/danmaku-demo.html",
    "revision": "04b7aeff24a9533daecea73694cf188d"
  },
  {
    "url": "demo/index.html",
    "revision": "35b63cb7f52dcff9121ab701a121a792"
  },
  {
    "url": "demo/live-demo.html",
    "revision": "92927600a2104e355b56dc40933ea460"
  },
  {
    "url": "demo/multiple-demo.html",
    "revision": "ec08ac7aa343cedd8038e1db98943582"
  },
  {
    "url": "demo/subtitle-demo.html",
    "revision": "5a8b940183a54712096be99f08fd221f"
  },
  {
    "url": "guide/api.html",
    "revision": "27b3857bd2e5296fe8f3c3d6959741d4"
  },
  {
    "url": "guide/barrage.html",
    "revision": "8b7ab6a6bfcca9c6218ab4ca9bfd3ec3"
  },
  {
    "url": "guide/begin.html",
    "revision": "a5e0fed7f523976faec3acf89c6bb625"
  },
  {
    "url": "guide/custom-control.html",
    "revision": "baaeb57093f76a8a4015202e07237d1a"
  },
  {
    "url": "guide/index.html",
    "revision": "3b6242467faef50c3e391ecf3092bc49"
  },
  {
    "url": "guide/mui-player-desktop-plugin.html",
    "revision": "afe17757440df89c39cccaf237d8eec7"
  },
  {
    "url": "guide/mui-player-mobile-plugin.html",
    "revision": "6f6ce8bbffd7752e7a93cc0050d5afa7"
  },
  {
    "url": "guide/other-problem.html",
    "revision": "4d2d2cf74a80d551ebb78e0c4e0c0aef"
  },
  {
    "url": "guide/preset.html",
    "revision": "f18959ff97ebd20b58425fbe77920ee0"
  },
  {
    "url": "guide/subtitle.html",
    "revision": "b35193d6b6c6f1547a99fee94ee40a99"
  },
  {
    "url": "guide/thumbnails.html",
    "revision": "11916571562b3522e3cbdd616b0664df"
  },
  {
    "url": "guide/uni-app.html",
    "revision": "78dc204ffbe637102a7e1b1997aefcf4"
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
    "revision": "e73b6def6f5f730b4e2624f777eda00e"
  },
  {
    "url": "joinUs/contact.html",
    "revision": "55c290893462d5d6bfc615b0a15e1b98"
  },
  {
    "url": "joinUs/index.html",
    "revision": "b0a9c118b6877b0667c382acb2ce766b"
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
    "revision": "d8a96e71e6999c0dd641ff221e2ade6e"
  },
  {
    "url": "js/config_demo_live.js",
    "revision": "f158a91a6dc346471f91e8362bac666d"
  },
  {
    "url": "js/config_demo_subtitle.js",
    "revision": "f4ab2b577ff46237a073651934bf79cb"
  },
  {
    "url": "js/config_demo.js",
    "revision": "8487f94dbbb9a96c452c1f59229e27f2"
  },
  {
    "url": "js/config.js",
    "revision": "0125af3fbea1b744ea0203f49ee12a91"
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
    "revision": "4a45bb6c818747bcb36ed248c6126605"
  },
  {
    "url": "js/mui-player.min.js",
    "revision": "d6fd9d7b53e94ae04aede3826a434c47"
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
    "revision": "a68af2303c50ea52cd599d9a5eaa367a"
  },
  {
    "url": "zh/demo/index.html",
    "revision": "eaa9b746b038c19a72500040f549516e"
  },
  {
    "url": "zh/demo/live-demo.html",
    "revision": "cc060edace65a1fa5e09f79bcd265cca"
  },
  {
    "url": "zh/demo/multiple-demo.html",
    "revision": "baea4c927c31de9b8f8fdebf81227e3b"
  },
  {
    "url": "zh/demo/subtitle-demo.html",
    "revision": "a4680079565cdb07009b88b1de69fe2d"
  },
  {
    "url": "zh/guide/api.html",
    "revision": "0802049b8e870115328a0b9607f1c18f"
  },
  {
    "url": "zh/guide/barrage.html",
    "revision": "c9a14883694623ade10ce843c7dcb16a"
  },
  {
    "url": "zh/guide/begin.html",
    "revision": "926ae55be319496e06c15e84d13a2aab"
  },
  {
    "url": "zh/guide/custom-control.html",
    "revision": "fa92597a91f62a58cf7db90b377f1559"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "f2ed5e85cf5f99b09d5829dcee938ffb"
  },
  {
    "url": "zh/guide/mui-player-desktop-plugin.html",
    "revision": "c648d68764e2c3c4eacf5f52130951f6"
  },
  {
    "url": "zh/guide/mui-player-mobile-plugin.html",
    "revision": "c287a43034227d6f3a7935bd97e8f8e9"
  },
  {
    "url": "zh/guide/other-problem.html",
    "revision": "7a4dd26f1d3434852c0305eda2b27f6e"
  },
  {
    "url": "zh/guide/preset.html",
    "revision": "bbddb7919b9d99270f3d99437390a1ab"
  },
  {
    "url": "zh/guide/subtitle.html",
    "revision": "1ed8dd60f13ed960e447ebd88104b630"
  },
  {
    "url": "zh/guide/thumbnails.html",
    "revision": "4de40c7d6ad9d0258397fbf69d38e321"
  },
  {
    "url": "zh/guide/uni-app.html",
    "revision": "af777b95bc655075be72fc04b24188be"
  },
  {
    "url": "zh/index.html",
    "revision": "f0547bfab2a3705dadd61932f8561d01"
  },
  {
    "url": "zh/joinUs/contact.html",
    "revision": "db135b97c2dfa4ed61d18f1746b677e8"
  },
  {
    "url": "zh/joinUs/index.html",
    "revision": "f50c469e21e7079db7360a51542b7ba7"
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
