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
    "revision": "1bd3a98a7b865eb4954364ac8a08f847"
  },
  {
    "url": "assets/css/0.styles.d534205b.css",
    "revision": "ae8a0f9185ba26f00602dee117fe7f1b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.71e0e834.js",
    "revision": "02215737075ce4fe48fade48d06d8af0"
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
    "url": "assets/js/12.cb05dda0.js",
    "revision": "9ef359076713f63cc454b2d03b98d0e8"
  },
  {
    "url": "assets/js/13.dfb28638.js",
    "revision": "43931c6c3973c76a3241d8b18cc06364"
  },
  {
    "url": "assets/js/14.37698ef8.js",
    "revision": "073f9af25ab755d89e9e51b794b18df4"
  },
  {
    "url": "assets/js/15.46ea9423.js",
    "revision": "d654d6a16b86d9634d44679c227177cc"
  },
  {
    "url": "assets/js/16.33bab316.js",
    "revision": "c786d1db5aaf2ba4c315f5672c252aab"
  },
  {
    "url": "assets/js/17.f820a12f.js",
    "revision": "c1e948af30e896b9c6749ef7702c057d"
  },
  {
    "url": "assets/js/18.3afa2442.js",
    "revision": "96079d018404a41dd948c626a4cc3917"
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
    "url": "assets/js/22.d8f90166.js",
    "revision": "340b5586be008210a918b6398c0a6bd0"
  },
  {
    "url": "assets/js/23.edac62cd.js",
    "revision": "bd446141d3ebfb3b57fe2d0ba45e0309"
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
    "url": "assets/js/27.f5191e61.js",
    "revision": "9aa5e06bf1d03f61bf3a7603ea1fd19c"
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
    "url": "assets/js/39.9e0d9fa4.js",
    "revision": "8bb633390eb5d1ba963d0890b9dac9fa"
  },
  {
    "url": "assets/js/4.8a5d1206.js",
    "revision": "1eec32e9606c8d3198827a4dfd3eae5c"
  },
  {
    "url": "assets/js/40.02ecee82.js",
    "revision": "7363e44af72c1f661e1335c7dda7f699"
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
    "url": "assets/js/44.40bb8be8.js",
    "revision": "bb6c265870bd3e633e60186d8fbc0395"
  },
  {
    "url": "assets/js/45.8b260131.js",
    "revision": "a2ebb64a06ce18b37552c7f743a07ea9"
  },
  {
    "url": "assets/js/46.b4f9e868.js",
    "revision": "92835182fc8c476921aae911a39d2caa"
  },
  {
    "url": "assets/js/47.00fbf3d2.js",
    "revision": "d5b7a80d8c1247582e1730b8992aefe4"
  },
  {
    "url": "assets/js/48.0a137490.js",
    "revision": "dca41515e221bdf99d97c291267cbb81"
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
    "url": "assets/js/50.c4067a97.js",
    "revision": "47cc90c295b375c29d6739c1a6f80745"
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
    "url": "assets/js/55.0aaf99d5.js",
    "revision": "cf9c4bc61256798ddcedbeb795653289"
  },
  {
    "url": "assets/js/56.81c4ce23.js",
    "revision": "207710cfd6a446fa70a77953a5ec49b4"
  },
  {
    "url": "assets/js/57.1cfac402.js",
    "revision": "41d7d21c75c4eaa5774d6ba687bbc8e7"
  },
  {
    "url": "assets/js/58.e2e3b9b7.js",
    "revision": "f60c902330ada6a2423f8f85a2778856"
  },
  {
    "url": "assets/js/59.47acd514.js",
    "revision": "0992f34d0804e882413715d0d3a3a166"
  },
  {
    "url": "assets/js/6.e108bc3c.js",
    "revision": "a0a3c9f61cd908027724c1fdd9315441"
  },
  {
    "url": "assets/js/60.964b5694.js",
    "revision": "52c717c4d3d01bfb47426be1ee448c8b"
  },
  {
    "url": "assets/js/61.48b7892c.js",
    "revision": "1775d2aa35087ab5a754490b84bd4599"
  },
  {
    "url": "assets/js/62.a22ae0f8.js",
    "revision": "1777e6f6b258bc997aa0efda44b16a95"
  },
  {
    "url": "assets/js/63.b3da5459.js",
    "revision": "cc34fe08766740a0cee41b6a8f31508b"
  },
  {
    "url": "assets/js/7.82516bb8.js",
    "revision": "51240720b67e4c8ed6b29d501b333cf8"
  },
  {
    "url": "assets/js/8.e509db8c.js",
    "revision": "ba415d51da0ee40e15c52660e80a8515"
  },
  {
    "url": "assets/js/9.e827206e.js",
    "revision": "a69e374d4c59a3420073bca1a91ccda2"
  },
  {
    "url": "assets/js/app.6b2b329f.js",
    "revision": "63e4bfa3dec0db292c46661cdf71a16f"
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
    "revision": "58f9899fc068d006a8273c04597838aa"
  },
  {
    "url": "demo/index.html",
    "revision": "b907763676567eed7a1c6db637a0a5cd"
  },
  {
    "url": "demo/live-demo.html",
    "revision": "9305d7966b1a293e912f0b0a6400ac71"
  },
  {
    "url": "demo/multiple-demo.html",
    "revision": "1504c73550ec2e90605694db96e8f348"
  },
  {
    "url": "demo/subtitle-demo.html",
    "revision": "bbcdad0a51aa15417f9880c39aeb76f3"
  },
  {
    "url": "guide/api.html",
    "revision": "81744d3734cb345d4fcb9e3f28503a43"
  },
  {
    "url": "guide/barrage.html",
    "revision": "e0d5e4299a47fc472c4370a47fe7f732"
  },
  {
    "url": "guide/begin.html",
    "revision": "fd27bb8c852edbb7ba3bf2307d2b0211"
  },
  {
    "url": "guide/custom-control.html",
    "revision": "532ee4b2890058f6a3213221340da470"
  },
  {
    "url": "guide/index.html",
    "revision": "367506f51f36bef8d7d52457eaaf42ea"
  },
  {
    "url": "guide/mui-player-desktop-plugin.html",
    "revision": "66a5070cc180d145049d4c98b4cb92bd"
  },
  {
    "url": "guide/other-problem.html",
    "revision": "1f376b6529dee818311aa9c8d8916261"
  },
  {
    "url": "guide/plus-desktop-plugin.html",
    "revision": "87555055d73a89253661590b5f25354b"
  },
  {
    "url": "guide/plus-mobile-plugin.html",
    "revision": "e64185aaacc68b16787f9d655094ee6b"
  },
  {
    "url": "guide/preset.html",
    "revision": "a594b3b5d47e200e48732803e112e1f0"
  },
  {
    "url": "guide/subtitle.html",
    "revision": "34b50a6d70476ce9a04720a23d5530df"
  },
  {
    "url": "guide/thumbnails.html",
    "revision": "918b069ac66a4e60d14373322ef4a62c"
  },
  {
    "url": "guide/uni-app.html",
    "revision": "9f0842abe611581e2ac1622af10a0634"
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
    "revision": "35fbee88fc1a4782ed7eb60b58286621"
  },
  {
    "url": "joinUs/contact.html",
    "revision": "6746953fe64505970533a492de219c8a"
  },
  {
    "url": "joinUs/index.html",
    "revision": "d238f3e8db20b54b0c56dcea7d221bb9"
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
    "revision": "98cbff1a1259f7551ce5a127aa8aca78"
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
    "revision": "80f1e547ab80204754a75bb544909547"
  },
  {
    "url": "zh/demo/index.html",
    "revision": "f9dd67d9a99638eae12da49c33d85c04"
  },
  {
    "url": "zh/demo/live-demo.html",
    "revision": "cccb375042d7ff48b56604ff1ee8ec37"
  },
  {
    "url": "zh/demo/multiple-demo.html",
    "revision": "1f932ec3cd7dd79c5869d20135f22ace"
  },
  {
    "url": "zh/demo/subtitle-demo.html",
    "revision": "fa5ed86d0f93d8f9230bb03e5830638a"
  },
  {
    "url": "zh/guide/api.html",
    "revision": "76945dfe1732de7a10bda9406ea964e8"
  },
  {
    "url": "zh/guide/barrage.html",
    "revision": "be56aefbebc3687f7898634764b85b71"
  },
  {
    "url": "zh/guide/begin.html",
    "revision": "0ea024f1e6625d9c16261eb0047b1806"
  },
  {
    "url": "zh/guide/custom-control.html",
    "revision": "30b414821d21c9dedd44d7acdbcf2485"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "26845096b194538898d3a36f68cff4cf"
  },
  {
    "url": "zh/guide/mui-player-desktop-plugin.html",
    "revision": "bd36a5c0393af4793e91c7151b3dbed6"
  },
  {
    "url": "zh/guide/other-problem.html",
    "revision": "08b0e955f8986bbf5ff4354ba62d26ee"
  },
  {
    "url": "zh/guide/plus-desktop-plugin.html",
    "revision": "797a1c28d490bd24e2dae8658872cf09"
  },
  {
    "url": "zh/guide/plus-mobile-plugin.html",
    "revision": "00eb3fb4188ff956c1cfb3ab0a873283"
  },
  {
    "url": "zh/guide/preset.html",
    "revision": "d89092393c1a2ca10b9827e374e2b833"
  },
  {
    "url": "zh/guide/subtitle.html",
    "revision": "5c0e3b1830227f6ffb9fb644833387ad"
  },
  {
    "url": "zh/guide/thumbnails.html",
    "revision": "ccef17a88f01dbaddcc13a984647f9cf"
  },
  {
    "url": "zh/guide/uni-app.html",
    "revision": "62033b903e0498327c86ff85071c768e"
  },
  {
    "url": "zh/index.html",
    "revision": "bbfc468802f3d54e30cda0077109b586"
  },
  {
    "url": "zh/joinUs/contact.html",
    "revision": "c4105fbba96ec9f0e8aa640bd03f674f"
  },
  {
    "url": "zh/joinUs/index.html",
    "revision": "9a23168123945d4b676a3e3161737d6f"
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
