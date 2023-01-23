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
    "revision": "7fc95bcc1da5295da9c7961cea591cb9"
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
    "url": "assets/js/1.b853b477.js",
    "revision": "aa8dd3c35558273af0ab025bdc00a9bc"
  },
  {
    "url": "assets/js/10.932a2adc.js",
    "revision": "64c0875405e3c467d25c1259e5a774f1"
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
    "url": "assets/js/16.6c59e214.js",
    "revision": "046634c29f8ceed26c42fa24c92ea89f"
  },
  {
    "url": "assets/js/17.527b519d.js",
    "revision": "c14e3977f2da163152a25999fb026600"
  },
  {
    "url": "assets/js/18.7338939b.js",
    "revision": "eb9f39bc4b5c36af34f290fa2b7ee6b2"
  },
  {
    "url": "assets/js/19.13ce6fb6.js",
    "revision": "9c9687c85f4f9c856d6c6a6f94f633a5"
  },
  {
    "url": "assets/js/20.f2a7e674.js",
    "revision": "7dca9540b605c0cade7162f77fdd4b78"
  },
  {
    "url": "assets/js/21.1dd019d5.js",
    "revision": "90e045b7ba7e7d16f205a59ecb782c34"
  },
  {
    "url": "assets/js/22.2d70f4b9.js",
    "revision": "7c847efe5ee8f0b85fada8ff5aad16d3"
  },
  {
    "url": "assets/js/23.807e9e17.js",
    "revision": "6f1a035cf2271422de6518c2a0fdd354"
  },
  {
    "url": "assets/js/24.78264d91.js",
    "revision": "c13c62032ff637271b0fa3b795a830e2"
  },
  {
    "url": "assets/js/25.923c3faf.js",
    "revision": "eeadccdfed8fc4a04d53201101452cac"
  },
  {
    "url": "assets/js/26.c7bfe47f.js",
    "revision": "d6016038c73525efe3f8b5340eaa7459"
  },
  {
    "url": "assets/js/27.f5902c54.js",
    "revision": "849531592104185bb0d0e8b440ae98a3"
  },
  {
    "url": "assets/js/28.e7afd501.js",
    "revision": "61cbe58b263754c662e43f8758114647"
  },
  {
    "url": "assets/js/29.80b24cb9.js",
    "revision": "d648e836617ddde6a04063a3e18c6071"
  },
  {
    "url": "assets/js/3.67a24b41.js",
    "revision": "5d4ab1de7dc2e52f217d78617a0e6036"
  },
  {
    "url": "assets/js/30.255383f5.js",
    "revision": "c07b25fe4a0873de1210c45990733e22"
  },
  {
    "url": "assets/js/31.ec94feac.js",
    "revision": "d490334c3786a62fe60751b4c271861c"
  },
  {
    "url": "assets/js/32.fe3ab96e.js",
    "revision": "eb19516d24afd72e273bc1015bcd8328"
  },
  {
    "url": "assets/js/33.58732e7b.js",
    "revision": "f1e7f9d0d3a30f3f9ea200c8826a2899"
  },
  {
    "url": "assets/js/34.6657c6ab.js",
    "revision": "818bf806a892df1c689749b29b03deb9"
  },
  {
    "url": "assets/js/35.7b0aac85.js",
    "revision": "8a8590f4af7bcd68c95b595db6950ff5"
  },
  {
    "url": "assets/js/36.39008eb9.js",
    "revision": "075a415f3f88bd64acf7b1192ef67a5f"
  },
  {
    "url": "assets/js/37.cead27d1.js",
    "revision": "7b5685e2080c5a85b462730d5c5767b9"
  },
  {
    "url": "assets/js/38.fb7a2600.js",
    "revision": "32c5e021fe74a6101f45251e4b183068"
  },
  {
    "url": "assets/js/39.49aa7fd7.js",
    "revision": "001cc595357c0f4e33b5ffdbd5712000"
  },
  {
    "url": "assets/js/4.931c5566.js",
    "revision": "14cd9ed6546758ac42d05839d1af833a"
  },
  {
    "url": "assets/js/40.2bb754e1.js",
    "revision": "84fd29b71fe17b60ae6521987502b5a9"
  },
  {
    "url": "assets/js/41.3764d2e9.js",
    "revision": "be3a99ced0423e4d8bba474831c05a5d"
  },
  {
    "url": "assets/js/42.48cce9aa.js",
    "revision": "80bf319e621b9fbb80bc089c0adfe9d6"
  },
  {
    "url": "assets/js/43.d08392e5.js",
    "revision": "e2d34fb40942c69067f0dbf2d58eb752"
  },
  {
    "url": "assets/js/44.9d05560b.js",
    "revision": "490979a481b7e69e2b17ba8f38035501"
  },
  {
    "url": "assets/js/45.be01b315.js",
    "revision": "55090194017746b4737a617d7969a0cf"
  },
  {
    "url": "assets/js/46.2baaf8d7.js",
    "revision": "74f03ad079b41d0c7d616f8065475b37"
  },
  {
    "url": "assets/js/47.7cd3107c.js",
    "revision": "496a060be32232733bb36a639fa3bb2a"
  },
  {
    "url": "assets/js/48.96300764.js",
    "revision": "b212ddf15c1507604b7b421b62b42c7f"
  },
  {
    "url": "assets/js/49.72f8ca42.js",
    "revision": "0a329b2175bf4027c5e66e547929227d"
  },
  {
    "url": "assets/js/5.35f74ec6.js",
    "revision": "ff56f2c3aa9506ce1f5682577bf4fe47"
  },
  {
    "url": "assets/js/50.a798fd09.js",
    "revision": "372c4436b7fa4c875d1758722003cb72"
  },
  {
    "url": "assets/js/51.e7c00cd4.js",
    "revision": "04fef4d0c6259c8e4c6fdf2fd2d220c2"
  },
  {
    "url": "assets/js/52.b3342835.js",
    "revision": "214b9fd1a7945ad90fca1b49ef91b45b"
  },
  {
    "url": "assets/js/53.becf0d71.js",
    "revision": "82a1586db1d1d964131f8acb7fe94faf"
  },
  {
    "url": "assets/js/54.a550d288.js",
    "revision": "a808635886e85f0c13c17a5648a0093a"
  },
  {
    "url": "assets/js/55.cbe8a42b.js",
    "revision": "e5a61d14de5f896995585111c2a5f3c7"
  },
  {
    "url": "assets/js/56.fb30b5aa.js",
    "revision": "fe5fe4368e839e1cd05019d28477cd86"
  },
  {
    "url": "assets/js/57.d67ada50.js",
    "revision": "acc1380e5ab75a8587ff9483d9475685"
  },
  {
    "url": "assets/js/58.bc5c9901.js",
    "revision": "38cb09f19c3c776bcbd99da298483311"
  },
  {
    "url": "assets/js/59.f42e9c47.js",
    "revision": "c5af98277962f33cf893e12c4b5e58e8"
  },
  {
    "url": "assets/js/6.b73f5a92.js",
    "revision": "311e290959eab8dc2df09883514746f0"
  },
  {
    "url": "assets/js/60.f67ec975.js",
    "revision": "18c2c2544f44c8517b98a5051df78dab"
  },
  {
    "url": "assets/js/61.78bd6ed5.js",
    "revision": "27bc43b273a528e8d67e7a3bb0fb38f6"
  },
  {
    "url": "assets/js/62.427a7307.js",
    "revision": "e95485d5219e7fa1432dd0d80610b15b"
  },
  {
    "url": "assets/js/63.c9c995b6.js",
    "revision": "c1ddc75c70835fc8bd110b3ed2b9a15d"
  },
  {
    "url": "assets/js/64.eac869ba.js",
    "revision": "62f5a8ffaeaee71faf1d98c9150b14fb"
  },
  {
    "url": "assets/js/65.5ec34c8a.js",
    "revision": "7013969e79fa5148bd13aed59f1f8be8"
  },
  {
    "url": "assets/js/66.25acd7ec.js",
    "revision": "3cde9acd5df046d170813da6872ba411"
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
    "url": "assets/js/app.af2d1195.js",
    "revision": "5b87f8d537cd9a9c30a77a811da66f23"
  },
  {
    "url": "css/CommentCoreLibrary.min.css",
    "revision": "e578b37f4607d6f4231c8b7da5f1d844"
  },
  {
    "url": "css/mui-player.min.css",
    "revision": "3455819347bf56f6cea8f5c797e679c7"
  },
  {
    "url": "css/swiper.min.css",
    "revision": "6af34d0737ad0ca608111771cf74cc79"
  },
  {
    "url": "demo/danmaku-demo.html",
    "revision": "8ef2daf1ce0a2351b04c64a5e70663b7"
  },
  {
    "url": "demo/index.html",
    "revision": "7df167fd942af5f670ba1841cebcdd24"
  },
  {
    "url": "demo/live-demo.html",
    "revision": "5834ca5148e793742ed40daddc5f9679"
  },
  {
    "url": "demo/multiple-demo.html",
    "revision": "e4fd76432d059fe8507e4755b6679070"
  },
  {
    "url": "demo/subtitle-demo.html",
    "revision": "1604c695f26c696244da628909e57e04"
  },
  {
    "url": "guide/api.html",
    "revision": "35fbac43b5c0b856145b7d30039712bc"
  },
  {
    "url": "guide/barrage.html",
    "revision": "5b83dae6ddc3b35f99fb44ab0a043113"
  },
  {
    "url": "guide/begin.html",
    "revision": "f4d7c41715d2fb0ee1b5c5b2a0cf0215"
  },
  {
    "url": "guide/custom-control.html",
    "revision": "6910531e1205098ca6bfbf24af1b5764"
  },
  {
    "url": "guide/index.html",
    "revision": "953948a2269576bb2e1df600809d41dc"
  },
  {
    "url": "guide/mui-player-desktop-plugin.html",
    "revision": "bfa9a4d015631db753902296c4288c7c"
  },
  {
    "url": "guide/other-problem.html",
    "revision": "4a2ca98615fb59669e7f3180606d45ca"
  },
  {
    "url": "guide/plus-desktop-plugin.html",
    "revision": "fc0fab86371b5e236c9affeaafa3319e"
  },
  {
    "url": "guide/plus-mobile-plugin.html",
    "revision": "15808cf7d5fd4e3e5a17c000d244c4df"
  },
  {
    "url": "guide/preset.html",
    "revision": "5f9991053a717df2f88a5b38637f14fe"
  },
  {
    "url": "guide/subtitle.html",
    "revision": "f8430c59f7baf3e7751ac4ef84d9b27f"
  },
  {
    "url": "guide/thumbnails.html",
    "revision": "cd297ad47ba83adf8c658a40337402db"
  },
  {
    "url": "guide/uni-app.html",
    "revision": "ecdc940e20f0ddbe39e0dc6ce81923ae"
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
    "revision": "05bda8b3b7c9a0628f051937a52b3bcd"
  },
  {
    "url": "joinUs/contact.html",
    "revision": "2f9aeb77d32cd368dcb5f1b6535415c7"
  },
  {
    "url": "joinUs/index.html",
    "revision": "3f9f35f2b699db8348183a92cbe83ef6"
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
    "revision": "316279bf329d1d16abcb37b8c4df72d4"
  },
  {
    "url": "js/playerListener.js",
    "revision": "1a38230cbebb434352645ba11c8aad4d"
  },
  {
    "url": "js/plugins.js",
    "revision": "487c2c05a6f7acfdbd2951a9d425309b"
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
    "revision": "6f8e8dd70f0d42d037a21fb33ebf4375"
  },
  {
    "url": "zh/demo/index.html",
    "revision": "541ef9f79189d955d6ffa19936c7f7db"
  },
  {
    "url": "zh/demo/live-demo.html",
    "revision": "e67f5a1bc31fac2054423d587f82dc3b"
  },
  {
    "url": "zh/demo/multiple-demo.html",
    "revision": "c0852653d3fe5cbe1b29b506fb9c7990"
  },
  {
    "url": "zh/demo/subtitle-demo.html",
    "revision": "7501e2ea2054991c3d51ca461310eb4d"
  },
  {
    "url": "zh/guide/api.html",
    "revision": "c69a33517c233f07f83c854ebfca08f7"
  },
  {
    "url": "zh/guide/barrage.html",
    "revision": "3fcfc052ac4ca50871b90abb2919c05f"
  },
  {
    "url": "zh/guide/begin.html",
    "revision": "98d09ca11996d63b7c860c9a2f8b72c5"
  },
  {
    "url": "zh/guide/custom-control.html",
    "revision": "6a5956899d10bfdf706ac4cd05c4b704"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "52142d6d361c5b883a36ff020bd69994"
  },
  {
    "url": "zh/guide/mui-player-desktop-plugin.html",
    "revision": "f2e75ec0125527902af9aee72537e841"
  },
  {
    "url": "zh/guide/other-problem.html",
    "revision": "e89258c0feea7023e06664c3c9a429cc"
  },
  {
    "url": "zh/guide/plus-desktop-plugin.html",
    "revision": "07876a410c462e503981a473679b966d"
  },
  {
    "url": "zh/guide/plus-mobile-plugin.html",
    "revision": "42118dc4b83736688e75fffcc6343362"
  },
  {
    "url": "zh/guide/preset.html",
    "revision": "860c84862ba0d68df831bd501fde635b"
  },
  {
    "url": "zh/guide/subtitle.html",
    "revision": "abb528765635dccb033efe95bbdd246b"
  },
  {
    "url": "zh/guide/thumbnails.html",
    "revision": "82f45b96cf18e3fc28b843c1883b8a0c"
  },
  {
    "url": "zh/guide/uni-app.html",
    "revision": "bb3211447ec3bd403b99933c4d543203"
  },
  {
    "url": "zh/index.html",
    "revision": "1539f192e6d43f4126e145e4b7271450"
  },
  {
    "url": "zh/joinUs/contact.html",
    "revision": "5be8fc958dd5bc381a4888eaa0951024"
  },
  {
    "url": "zh/joinUs/index.html",
    "revision": "dcab1e1d29bc8488d09d3031a2f6d330"
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
