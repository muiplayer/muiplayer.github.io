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
    "revision": "982dc20b10a2457bdb5bf36e3b65642b"
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
    "url": "assets/js/1.5f74f4fb.js",
    "revision": "a7375399a72eb48bb36f3f2c5080cfb6"
  },
  {
    "url": "assets/js/10.674b2a83.js",
    "revision": "34d397291c700160ce1f45dfa66666f4"
  },
  {
    "url": "assets/js/11.14eaa1a3.js",
    "revision": "806476b523ab0ae1c07d8002dcce0187"
  },
  {
    "url": "assets/js/12.9dfb213a.js",
    "revision": "92fd8484a3ed2046949576171bf79f84"
  },
  {
    "url": "assets/js/13.83e313bb.js",
    "revision": "37fd72fe7351bbc48b45fe29a7e50e9e"
  },
  {
    "url": "assets/js/14.e890af43.js",
    "revision": "e613df14f5f1e0403386eedf499a5dbb"
  },
  {
    "url": "assets/js/15.bcc870a1.js",
    "revision": "24f436193d017954ea3e30d253bd316f"
  },
  {
    "url": "assets/js/16.b2bf5836.js",
    "revision": "ae2fbc03a23bf25cee4dacd49dff7a46"
  },
  {
    "url": "assets/js/17.a916d21a.js",
    "revision": "dc372affc1e1da3a0b8ed42cd704af03"
  },
  {
    "url": "assets/js/18.4326a6aa.js",
    "revision": "2af6388330ebfe898172ce39d5820f3e"
  },
  {
    "url": "assets/js/19.d330b46a.js",
    "revision": "627a525e7b5b1e2827b6c29887a1de71"
  },
  {
    "url": "assets/js/20.5c7fbb54.js",
    "revision": "1ea669ef88fe8b7ab011416340c993e1"
  },
  {
    "url": "assets/js/21.95bb35c7.js",
    "revision": "440d4f0abc01bca05bd3c0aadff71006"
  },
  {
    "url": "assets/js/22.c626b10b.js",
    "revision": "d23ec7c36793a97378011d0ef2959df5"
  },
  {
    "url": "assets/js/23.3a81b187.js",
    "revision": "f73ece64c08ae906c80608c1b922502e"
  },
  {
    "url": "assets/js/24.449eced3.js",
    "revision": "101b306ba52e807525adfb7439986d48"
  },
  {
    "url": "assets/js/25.7d2604a2.js",
    "revision": "b82895b292fdc19a7b93f7969b87210f"
  },
  {
    "url": "assets/js/26.5929f423.js",
    "revision": "48641680b7e6e2602eab83114ed51290"
  },
  {
    "url": "assets/js/27.82e56143.js",
    "revision": "270c0a475124ec7ee62edc98003b5354"
  },
  {
    "url": "assets/js/28.f91c5344.js",
    "revision": "58f71de9da1250e976876af60d658a9a"
  },
  {
    "url": "assets/js/29.e2a0edaa.js",
    "revision": "a57a28c095b1197fe2241e75f9e56a67"
  },
  {
    "url": "assets/js/3.f1673be1.js",
    "revision": "aff83779e79c18220dfce6f0f00e1a6b"
  },
  {
    "url": "assets/js/30.7f98520d.js",
    "revision": "c70af4adcd20769dd0c190219f7e107b"
  },
  {
    "url": "assets/js/31.5d32f345.js",
    "revision": "68810402f93834666b2790cacdbc992f"
  },
  {
    "url": "assets/js/32.b1b6e3b0.js",
    "revision": "99686668c64881682587ad072e68c46f"
  },
  {
    "url": "assets/js/33.81368f63.js",
    "revision": "446665bafa58025258993e3d76e4ba19"
  },
  {
    "url": "assets/js/34.da47d35f.js",
    "revision": "e56cfcdff5ba1c004f20001461137333"
  },
  {
    "url": "assets/js/35.d3164334.js",
    "revision": "1309964b7d78ef10a6cca16ecbe2b131"
  },
  {
    "url": "assets/js/36.9ebbad98.js",
    "revision": "a62870e831fb61d819555d80d35af43c"
  },
  {
    "url": "assets/js/37.8b1445ea.js",
    "revision": "b303f38922f5cd35ddcacff672194f1a"
  },
  {
    "url": "assets/js/38.30479315.js",
    "revision": "44c9d68fd7fb091e3ceefabd51df299d"
  },
  {
    "url": "assets/js/39.201533eb.js",
    "revision": "2196486b9cc00518996741f36f95d889"
  },
  {
    "url": "assets/js/4.fbd45cee.js",
    "revision": "94b116ddc472549a080f060652ca8324"
  },
  {
    "url": "assets/js/40.6e0de21c.js",
    "revision": "7b6fde237ca1b19c7b6a1567e408893d"
  },
  {
    "url": "assets/js/41.8ffe6475.js",
    "revision": "1d7d0c52929eb19faaae6c69975e6676"
  },
  {
    "url": "assets/js/42.f7afdc88.js",
    "revision": "83746ed7af26f74ed9043ccea537ad69"
  },
  {
    "url": "assets/js/43.f8a08b74.js",
    "revision": "e389331bf8d16e57c3d0cf3f96f4d864"
  },
  {
    "url": "assets/js/44.c3ca188e.js",
    "revision": "5b9b941e7d83739317bd95b67d82e857"
  },
  {
    "url": "assets/js/45.da4f83d2.js",
    "revision": "4e568a248d6aa22034f66fb521dc3b83"
  },
  {
    "url": "assets/js/46.1aa3cc35.js",
    "revision": "a9004fd021fd745ad6396c9db0edf2b2"
  },
  {
    "url": "assets/js/47.fa3e4682.js",
    "revision": "af3c47510026322faf70784e562f2fe8"
  },
  {
    "url": "assets/js/48.63f5cf67.js",
    "revision": "f75823c8a6820b9e89d59d03a69f17c5"
  },
  {
    "url": "assets/js/49.305ca3b5.js",
    "revision": "710699f9bc7c59163daad28a98964189"
  },
  {
    "url": "assets/js/5.55c12626.js",
    "revision": "3821540965b5e18f9532d30ded09e984"
  },
  {
    "url": "assets/js/50.e5f00182.js",
    "revision": "87d04df64db49d96bc330c66eeba2602"
  },
  {
    "url": "assets/js/51.aea0a1d8.js",
    "revision": "2483b2ca8f2e2b6a312d89077a855ddc"
  },
  {
    "url": "assets/js/52.de615c0b.js",
    "revision": "693e7c0cb812b0e28df6bb6d083a7284"
  },
  {
    "url": "assets/js/53.4f944e39.js",
    "revision": "52fd3346c97a1000a77ac8dcd575cddf"
  },
  {
    "url": "assets/js/54.c6839e5a.js",
    "revision": "099cdeda75f60536b93a0ea3f159c62c"
  },
  {
    "url": "assets/js/55.c2a3e659.js",
    "revision": "837b4837e21543d3c0526e181967219c"
  },
  {
    "url": "assets/js/56.7e7e97cf.js",
    "revision": "cf29dbcdab803b0c5b2a872e75bac963"
  },
  {
    "url": "assets/js/57.aa70e778.js",
    "revision": "d8ca61b4afdb4cce7623ea529bff8dca"
  },
  {
    "url": "assets/js/58.d9ce8575.js",
    "revision": "0a24d89aecff83b5c1a794db5bd802a7"
  },
  {
    "url": "assets/js/59.9a9164fe.js",
    "revision": "8b5c8831aa3084127527daa69f89cb15"
  },
  {
    "url": "assets/js/6.a27c7556.js",
    "revision": "5e47d63763a3aba195a0dbe4d10edb87"
  },
  {
    "url": "assets/js/60.3efde64e.js",
    "revision": "5ea69bed9c4ed03975dba929f5933299"
  },
  {
    "url": "assets/js/61.8519d34e.js",
    "revision": "c37544faf928a5f86aec13485853b5b5"
  },
  {
    "url": "assets/js/7.672f27cd.js",
    "revision": "903219fff75986d16dd20c790367a3b9"
  },
  {
    "url": "assets/js/8.e496e675.js",
    "revision": "ef028ca6680e27bd65c3529a4c897ba8"
  },
  {
    "url": "assets/js/9.23fc763c.js",
    "revision": "6a2bcdb3bf71e6e2c5e96ef5880a0b82"
  },
  {
    "url": "assets/js/app.4118adac.js",
    "revision": "8b26fb2446b08f9f844a3a0a5e007804"
  },
  {
    "url": "css/CommentCoreLibrary.min.css",
    "revision": "e578b37f4607d6f4231c8b7da5f1d844"
  },
  {
    "url": "css/mui-player.min.css",
    "revision": "e43d11cd7437186ee7c62e10b11adb5f"
  },
  {
    "url": "css/swiper.min.css",
    "revision": "6af34d0737ad0ca608111771cf74cc79"
  },
  {
    "url": "demo/danmaku-demo.html",
    "revision": "bfba23a2d1b3bfb12e45e76ee0c1c945"
  },
  {
    "url": "demo/index.html",
    "revision": "90292a8a12cd5178c91c61d42cf9fd02"
  },
  {
    "url": "demo/live-demo.html",
    "revision": "f2e10c10e2db6bb665b2d3e2426c2b90"
  },
  {
    "url": "demo/multiple-demo.html",
    "revision": "dcf04a8024dae223220c0ae7e5cdeb2f"
  },
  {
    "url": "demo/subtitle-demo.html",
    "revision": "0e1af44c434daba71c29548254699b4a"
  },
  {
    "url": "guide/api.html",
    "revision": "de11983138c738e5ea9c3d89517df3b0"
  },
  {
    "url": "guide/barrage.html",
    "revision": "ed5055629b5cd699726c4c7b54523002"
  },
  {
    "url": "guide/begin.html",
    "revision": "812a3012632dbf3a2e073fa2e961a57b"
  },
  {
    "url": "guide/custom-control.html",
    "revision": "4551c8ccc028f472d07b4bf0c15b5565"
  },
  {
    "url": "guide/index.html",
    "revision": "d11da4439351ddf273f791f47307dc9b"
  },
  {
    "url": "guide/mui-player-desktop-plugin.html",
    "revision": "5b2fdfae2f0d0431d772a9369c86507a"
  },
  {
    "url": "guide/mui-player-mobile-plugin.html",
    "revision": "a151fca943dbe5a77707a941ffc4b9dd"
  },
  {
    "url": "guide/other-problem.html",
    "revision": "6b4caba72d757f1b80eb65638bad8c2a"
  },
  {
    "url": "guide/preset.html",
    "revision": "406ba4c22990f040e56a00f71b0955b6"
  },
  {
    "url": "guide/subtitle.html",
    "revision": "4d348ccc1d8515d4eb53bd90aabc4033"
  },
  {
    "url": "guide/thumbnails.html",
    "revision": "f7dfc618519ff08a9e8a8734df940dc1"
  },
  {
    "url": "guide/uni-app.html",
    "revision": "c022413d3fb0e4c32b631b74826f97fa"
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
    "revision": "4512b09769677bec329c8d81a2575530"
  },
  {
    "url": "joinUs/contact.html",
    "revision": "38fd0d5b3cc24696ff5d761e860ab33d"
  },
  {
    "url": "joinUs/index.html",
    "revision": "44f55388ccde4ce678d9feb60b166b07"
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
    "revision": "c763c9ef8ee15666dd4bc42b101723df"
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
    "revision": "4cbe7251fc84d101da8779b339cd56cd"
  },
  {
    "url": "js/mui-player.min.js",
    "revision": "dfb6b3d501c66dd684e350a094f93873"
  },
  {
    "url": "js/parseConfig.js",
    "revision": "f9b39500013cde51329d00d96ff16c54"
  },
  {
    "url": "js/playerListener.js",
    "revision": "1a38230cbebb434352645ba11c8aad4d"
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
    "revision": "f16047acb6e317458de8d4d39aea14ea"
  },
  {
    "url": "zh/demo/index.html",
    "revision": "d38834cf26d2b82c5565f70c6391a0a7"
  },
  {
    "url": "zh/demo/live-demo.html",
    "revision": "ba7b39c5798e0742556931d1ac4b2cad"
  },
  {
    "url": "zh/demo/multiple-demo.html",
    "revision": "d74839be9d61f5034181abf564611986"
  },
  {
    "url": "zh/demo/subtitle-demo.html",
    "revision": "a0c25e25d3302502a97699da61e99eed"
  },
  {
    "url": "zh/guide/api.html",
    "revision": "eba4bd82f90b73ec05e5a6ddf682883b"
  },
  {
    "url": "zh/guide/barrage.html",
    "revision": "bca7e5c241a3cade968857776f8f5e33"
  },
  {
    "url": "zh/guide/begin.html",
    "revision": "f0eccc8861de93e1ab7da8814cc73180"
  },
  {
    "url": "zh/guide/custom-control.html",
    "revision": "24c9774215871d7726c172034b15af9d"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "7442a5f8b80484b16bd7f94b3144ebc3"
  },
  {
    "url": "zh/guide/mui-player-desktop-plugin.html",
    "revision": "8bd68e9b013a044e8be5e679b16992b7"
  },
  {
    "url": "zh/guide/mui-player-mobile-plugin.html",
    "revision": "c2e50b3442fa5a0d6575315932055fce"
  },
  {
    "url": "zh/guide/other-problem.html",
    "revision": "c67e28b53da3eedbe60d446757ec6d33"
  },
  {
    "url": "zh/guide/preset.html",
    "revision": "9d86dc83a3b6c92c17b1dea3edafc47b"
  },
  {
    "url": "zh/guide/subtitle.html",
    "revision": "461099898eda285ccdfd4790d7ff685d"
  },
  {
    "url": "zh/guide/thumbnails.html",
    "revision": "b159ec50124417938a725c16d4d16023"
  },
  {
    "url": "zh/guide/uni-app.html",
    "revision": "a5fb9d5a3ffa80abe8c78219cf44eee0"
  },
  {
    "url": "zh/index.html",
    "revision": "c8d9ebdf345cff2b6efe7431eef9241f"
  },
  {
    "url": "zh/joinUs/contact.html",
    "revision": "883aedf733ab5aa3963a1d1971188707"
  },
  {
    "url": "zh/joinUs/index.html",
    "revision": "4daa38fb0c20f282a12f24c641520817"
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
