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
    "revision": "8a99bbc48ee1eaa6bf744b53868a154c"
  },
  {
    "url": "assets/css/0.styles.c3f80e3b.css",
    "revision": "3d4751650da8991628a74e59140891a8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.5c9c45cd.js",
    "revision": "9e9fa64536895e2ce1675f970ac715db"
  },
  {
    "url": "assets/js/10.8d7c3da3.js",
    "revision": "e662aec376fcebd7c7debc0399c0e947"
  },
  {
    "url": "assets/js/11.dcfcbf82.js",
    "revision": "4937a86faaab6094507c8f674f2ae077"
  },
  {
    "url": "assets/js/12.a78ea22b.js",
    "revision": "2287e7ed8abcab8837e990bed530d399"
  },
  {
    "url": "assets/js/13.dfb28638.js",
    "revision": "43931c6c3973c76a3241d8b18cc06364"
  },
  {
    "url": "assets/js/14.67908e99.js",
    "revision": "a535b8330d9fd8ea1b0b44af4c7b6a37"
  },
  {
    "url": "assets/js/15.558b3a67.js",
    "revision": "deca758d323c355fc57c827327489f0c"
  },
  {
    "url": "assets/js/16.41209c9a.js",
    "revision": "cfa83014230dedba7da1f49553827d82"
  },
  {
    "url": "assets/js/17.f820a12f.js",
    "revision": "c1e948af30e896b9c6749ef7702c057d"
  },
  {
    "url": "assets/js/18.a83f0527.js",
    "revision": "a2bd4d95a70540f50b424caf880bdc3b"
  },
  {
    "url": "assets/js/19.aa8f22e2.js",
    "revision": "a58af10c9cc376b176b2fdcf6ef9e187"
  },
  {
    "url": "assets/js/20.c5c443bd.js",
    "revision": "134c255641a79d8910fe481a8e809541"
  },
  {
    "url": "assets/js/21.0d8c15a1.js",
    "revision": "87f186de84da71428dc88bf5cce60d46"
  },
  {
    "url": "assets/js/22.27ec36b1.js",
    "revision": "a3696e1cf2f6c54fa6ca008d8f3186e2"
  },
  {
    "url": "assets/js/23.bfe2e802.js",
    "revision": "0dcac66f09ff5c198fe25250bcb89174"
  },
  {
    "url": "assets/js/24.28ad70e3.js",
    "revision": "7e15fea5d7e51d1dd975b42782b14c62"
  },
  {
    "url": "assets/js/25.32805556.js",
    "revision": "06d2f5aca51b16e2407d17cc29e7edb6"
  },
  {
    "url": "assets/js/26.d5d45c57.js",
    "revision": "a0a008111a06cd96ed2e5b96c4e99fa4"
  },
  {
    "url": "assets/js/27.eb15fb93.js",
    "revision": "5d62dcdfaf6464998d9537b6b84a9435"
  },
  {
    "url": "assets/js/28.b57fcd63.js",
    "revision": "f5c292a4ada6dfef7a1380ffa07c072c"
  },
  {
    "url": "assets/js/29.0c224fe1.js",
    "revision": "475df60195d3b189f04f3c637256788a"
  },
  {
    "url": "assets/js/3.c1eaf68c.js",
    "revision": "b7677430a69119bf93e606aa86af9801"
  },
  {
    "url": "assets/js/30.e3c3620d.js",
    "revision": "02343045c76238bd1eda09f6014d1163"
  },
  {
    "url": "assets/js/31.c4072a82.js",
    "revision": "e0b3df73d2d4b2780e74c494dca3dc4f"
  },
  {
    "url": "assets/js/32.bfda448c.js",
    "revision": "2e4418e284f7d395776c3017d061dabf"
  },
  {
    "url": "assets/js/33.7625c9c1.js",
    "revision": "708c68c53b84837f5a66344b4a915626"
  },
  {
    "url": "assets/js/34.7ddc51f1.js",
    "revision": "ffc11482a5765146234903badc98ced1"
  },
  {
    "url": "assets/js/35.1a9e80b3.js",
    "revision": "63cda73b10e7feab165a2f311deb40c4"
  },
  {
    "url": "assets/js/36.5d9cd83a.js",
    "revision": "72b3c8d7512c057f98f05db08259d963"
  },
  {
    "url": "assets/js/37.473636e9.js",
    "revision": "14d62a6a1acb7f78585b7fc1aa2f16db"
  },
  {
    "url": "assets/js/38.5b0128d3.js",
    "revision": "b41c41c2b53b4a374f32680fca35311d"
  },
  {
    "url": "assets/js/39.cc846c1d.js",
    "revision": "0d3ee443933072ad30f3a8798660c3e3"
  },
  {
    "url": "assets/js/4.10cb33c7.js",
    "revision": "5d38c82b5d308f2bb91236c0e6bcc2d9"
  },
  {
    "url": "assets/js/40.df905b18.js",
    "revision": "f4ea17a6dbff66b63c2bc1cc30879d90"
  },
  {
    "url": "assets/js/41.648ee600.js",
    "revision": "f12cf2d7ccb01b2bdd4c5dc3778da003"
  },
  {
    "url": "assets/js/42.721b8026.js",
    "revision": "2f1d7b67275180e6864fe4852dab3d78"
  },
  {
    "url": "assets/js/43.379b84ce.js",
    "revision": "8ff177425e9cfeb537438b276f154cbc"
  },
  {
    "url": "assets/js/44.4afdd41b.js",
    "revision": "b4c1b29f08106dfb3b8a45d3e772634f"
  },
  {
    "url": "assets/js/45.40352cc7.js",
    "revision": "7358dd480e652d4f45c9cb1eb0d375de"
  },
  {
    "url": "assets/js/46.c6eb3f82.js",
    "revision": "86ad52fc7af052331bea9355aab29889"
  },
  {
    "url": "assets/js/47.0c9ef1ff.js",
    "revision": "f07770e53725823da06dc404a53b432a"
  },
  {
    "url": "assets/js/48.e5a0e89a.js",
    "revision": "6ccff0439693f047713439c346c42a60"
  },
  {
    "url": "assets/js/49.574c4849.js",
    "revision": "c6064fa599cafbbaedcff7c0d5892538"
  },
  {
    "url": "assets/js/5.79e7a005.js",
    "revision": "5a279b314652cedd76e057a7aff3eeba"
  },
  {
    "url": "assets/js/50.15f2bf50.js",
    "revision": "95a1e35fcf2374e68d9ed417736e740d"
  },
  {
    "url": "assets/js/51.817f6193.js",
    "revision": "407396e1a1650551e503b4b5d5768e75"
  },
  {
    "url": "assets/js/52.2dc70057.js",
    "revision": "30bb1752d4e7bc171aa585609d11b671"
  },
  {
    "url": "assets/js/53.0bbc8646.js",
    "revision": "d309c056300e4fd81cbf51817fa9305c"
  },
  {
    "url": "assets/js/54.2dfc5257.js",
    "revision": "f4c50a64aa497a3a49d759329569353e"
  },
  {
    "url": "assets/js/55.332ec25e.js",
    "revision": "90b27b9477ed532b896180358b3ef843"
  },
  {
    "url": "assets/js/56.81c4ce23.js",
    "revision": "207710cfd6a446fa70a77953a5ec49b4"
  },
  {
    "url": "assets/js/57.9ff5a005.js",
    "revision": "764d63372e279d5d7d6d6d7c6220bcde"
  },
  {
    "url": "assets/js/58.f9041497.js",
    "revision": "0cb7f91408f9c73dca55bf9aef1b980d"
  },
  {
    "url": "assets/js/59.0c29f421.js",
    "revision": "955da353e7ed358f5939baa87faa881f"
  },
  {
    "url": "assets/js/6.e108bc3c.js",
    "revision": "a0a3c9f61cd908027724c1fdd9315441"
  },
  {
    "url": "assets/js/60.0e1b5658.js",
    "revision": "5669017afe405083c572cad5358105c2"
  },
  {
    "url": "assets/js/61.48b7892c.js",
    "revision": "1775d2aa35087ab5a754490b84bd4599"
  },
  {
    "url": "assets/js/62.f45ff085.js",
    "revision": "3359509ec3483c3b9aa6d714ac1403ab"
  },
  {
    "url": "assets/js/63.b3da5459.js",
    "revision": "cc34fe08766740a0cee41b6a8f31508b"
  },
  {
    "url": "assets/js/7.2047e674.js",
    "revision": "7d52dd263d9492f89ebb4310bbc4ae06"
  },
  {
    "url": "assets/js/8.e509db8c.js",
    "revision": "ba415d51da0ee40e15c52660e80a8515"
  },
  {
    "url": "assets/js/9.84c0798c.js",
    "revision": "c630ef37fcca748b23a4b1c1d19fe0d5"
  },
  {
    "url": "assets/js/app.03a26d25.js",
    "revision": "c1b9c33cdad6c92e910b03eab79af8e8"
  },
  {
    "url": "css/CommentCoreLibrary.min.css",
    "revision": "e578b37f4607d6f4231c8b7da5f1d844"
  },
  {
    "url": "css/mui-player.min.css",
    "revision": "f73225483edfc164fcfd6f5f5d5d4fbd"
  },
  {
    "url": "css/swiper.min.css",
    "revision": "6af34d0737ad0ca608111771cf74cc79"
  },
  {
    "url": "demo/danmaku-demo.html",
    "revision": "17ea3a02063f806f26927066312aecf5"
  },
  {
    "url": "demo/index.html",
    "revision": "ce5864f1370950466f3efd970a3a3524"
  },
  {
    "url": "demo/live-demo.html",
    "revision": "0c468b3f10a3b54fc0645dd6b53e1bbf"
  },
  {
    "url": "demo/multiple-demo.html",
    "revision": "132769fbb2ac4c5505dbd01eff056d34"
  },
  {
    "url": "demo/subtitle-demo.html",
    "revision": "4511636f79241c4356caed1f4cc12d40"
  },
  {
    "url": "guide/api.html",
    "revision": "e4ec8b9c96c1f24da237d3ab0dad5ac2"
  },
  {
    "url": "guide/barrage.html",
    "revision": "c9be3c7191ae97dcd19581e577a036c3"
  },
  {
    "url": "guide/begin.html",
    "revision": "43eb10fbf5743a718988a3f62887ddf6"
  },
  {
    "url": "guide/custom-control.html",
    "revision": "f1258308f3a84f5b74143a8f5613960f"
  },
  {
    "url": "guide/index.html",
    "revision": "9c2a8c27f7d999db8cf31ab9b74d7659"
  },
  {
    "url": "guide/mui-player-desktop-plugin.html",
    "revision": "f5c4879caab90db40b89fa5dc8b5ecd7"
  },
  {
    "url": "guide/other-problem.html",
    "revision": "cd54069c7eae2ea4606ed6ea003bc32e"
  },
  {
    "url": "guide/plus-desktop-plugin.html",
    "revision": "b60dbf4c6c10b7bd0639f4a65de76f70"
  },
  {
    "url": "guide/plus-mobile-plugin.html",
    "revision": "22b5a108a771077503cfeec398feaea2"
  },
  {
    "url": "guide/preset.html",
    "revision": "fcd3df7a70dd26b10f453d6a99965dd1"
  },
  {
    "url": "guide/subtitle.html",
    "revision": "09abda2769238595fd43a314c63bdd3d"
  },
  {
    "url": "guide/thumbnails.html",
    "revision": "dec6626462fe5adc0987990231af8d52"
  },
  {
    "url": "guide/uni-app.html",
    "revision": "6df3dca78c11bd57daefc66338874cee"
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
    "revision": "dbd34fc47ed13af44cb96437891f5f18"
  },
  {
    "url": "joinUs/contact.html",
    "revision": "2b6008a29c65401e912ab4ac6640f99a"
  },
  {
    "url": "joinUs/index.html",
    "revision": "bc50a8790988468f7d6feac03b018d1f"
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
    "revision": "45f29995fccaf54a5d1962697e0a2232"
  },
  {
    "url": "js/config_demo_subtitle.js",
    "revision": "0365d921d6e41fd44c8cedd78f800250"
  },
  {
    "url": "js/config_demo.js",
    "revision": "7c2b0be436873a56dc2081cb9dcd2612"
  },
  {
    "url": "js/config.js",
    "revision": "dad987aa73c9673c7496505c723a3e81"
  },
  {
    "url": "js/customSetting.js",
    "revision": "3cc6f839b02610a5d541ef418115389d"
  },
  {
    "url": "js/global.js",
    "revision": "7265a299f39e812a985c02f887bfaed2"
  },
  {
    "url": "js/mui-player-desktop-plugin.min.js",
    "revision": "0c21a455e30dccecc8eb03ca7d736563"
  },
  {
    "url": "js/mui-player.min.js",
    "revision": "226fd29fee092e96c01bc078cdaf4945"
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
    "revision": "706f4b9e5d2ed0d688b4154ee8260787"
  },
  {
    "url": "zh/demo/index.html",
    "revision": "1747487fc4d961b903c1ca9aabac7480"
  },
  {
    "url": "zh/demo/live-demo.html",
    "revision": "d278e151eb5c3d61089874f2e3b4494b"
  },
  {
    "url": "zh/demo/multiple-demo.html",
    "revision": "85f4ef4ff9711d3c9f660010d9593cbf"
  },
  {
    "url": "zh/demo/subtitle-demo.html",
    "revision": "6c620c03b6fbba3cc069ee308ddf9652"
  },
  {
    "url": "zh/guide/api.html",
    "revision": "c29981301ee6d8f06a9b1bbe6ede38ea"
  },
  {
    "url": "zh/guide/barrage.html",
    "revision": "07576d6ab7a5ed536643fd9b3b2bd985"
  },
  {
    "url": "zh/guide/begin.html",
    "revision": "dbff670f67fd03c977a99e5afd64ef20"
  },
  {
    "url": "zh/guide/custom-control.html",
    "revision": "009666e885546c3421373f73bf706a9d"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "2ada86ea22a791fc58cab04242285e06"
  },
  {
    "url": "zh/guide/mui-player-desktop-plugin.html",
    "revision": "0ee27900d57085ddbcea3f0b39455ee3"
  },
  {
    "url": "zh/guide/other-problem.html",
    "revision": "36a302c5fc4406444326c21af599a2b3"
  },
  {
    "url": "zh/guide/plus-desktop-plugin.html",
    "revision": "59af7fe042357d312b8556cfdeb4a8d6"
  },
  {
    "url": "zh/guide/plus-mobile-plugin.html",
    "revision": "1c2c0d43fffe52e9658f388296e32cac"
  },
  {
    "url": "zh/guide/preset.html",
    "revision": "98e5e45e235b49fc6e5c09c6c5cab0c9"
  },
  {
    "url": "zh/guide/subtitle.html",
    "revision": "6429d6b45ba3f4d92bf6af18ca1a3142"
  },
  {
    "url": "zh/guide/thumbnails.html",
    "revision": "66315c44474f4602db35234285d60d89"
  },
  {
    "url": "zh/guide/uni-app.html",
    "revision": "b1103ab1bff5ba8d2308fe036f0114cd"
  },
  {
    "url": "zh/index.html",
    "revision": "f0704d0870294a9dcc579678d743ecc2"
  },
  {
    "url": "zh/joinUs/contact.html",
    "revision": "51a0c85729a858216dc06c6ae69b80e1"
  },
  {
    "url": "zh/joinUs/index.html",
    "revision": "a309a336010e9073d1aceb49fe13ac9c"
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
