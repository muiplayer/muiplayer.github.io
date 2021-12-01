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
    "revision": "703c75b45956fe0a7cc7382021655d4a"
  },
  {
    "url": "assets/css/0.styles.8adb7fa4.css",
    "revision": "e0064d84590d19c404f8889b2589ff39"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.edd77b11.js",
    "revision": "254c0d8aa394c833e6e18bdba9a314dd"
  },
  {
    "url": "assets/js/10.d74a9bb5.js",
    "revision": "123c3d269923620239e182e70b78f885"
  },
  {
    "url": "assets/js/11.4d220879.js",
    "revision": "60a3f637ed20c449b7b33463a802c640"
  },
  {
    "url": "assets/js/12.0b60c373.js",
    "revision": "db3686e1af2dd475426bf6dd478665c6"
  },
  {
    "url": "assets/js/13.587bc324.js",
    "revision": "2434679c75fe2ecd50f041ef82a238ec"
  },
  {
    "url": "assets/js/14.50310458.js",
    "revision": "fb146270b041a2e01f6dfe4c8e606437"
  },
  {
    "url": "assets/js/15.c5028b04.js",
    "revision": "261ba5f68caa7a879883976d1ebc43bb"
  },
  {
    "url": "assets/js/16.423c31fd.js",
    "revision": "755e9b38f4594bb06d3b96ccc768a91d"
  },
  {
    "url": "assets/js/17.07c31112.js",
    "revision": "a78c1eb2ee344fe6d51af47a3690e067"
  },
  {
    "url": "assets/js/18.d1a21b84.js",
    "revision": "2add90861108e702a25676e0d27daa54"
  },
  {
    "url": "assets/js/19.4ee75f45.js",
    "revision": "c51afec392934a07a62266ebb8000117"
  },
  {
    "url": "assets/js/20.32e9fca3.js",
    "revision": "4795f5bd0f9c12fccc557764ad311601"
  },
  {
    "url": "assets/js/21.e9956e2b.js",
    "revision": "a24721101da470505e701f497ed298fb"
  },
  {
    "url": "assets/js/22.263cfa84.js",
    "revision": "6e55921cc1f09350240fc62159d766cd"
  },
  {
    "url": "assets/js/23.90d22e6e.js",
    "revision": "4d6bc3441f8297d37d1163072f518f11"
  },
  {
    "url": "assets/js/24.4ff4f4d9.js",
    "revision": "b0d20395450f4345cad2f6a28a70fa63"
  },
  {
    "url": "assets/js/25.336e6406.js",
    "revision": "fd14d35ca7fba5119e3e9437aafa8271"
  },
  {
    "url": "assets/js/26.bf22380c.js",
    "revision": "3e0d3fd0c0b17317b96f8811dd6fabb8"
  },
  {
    "url": "assets/js/27.57de0dd1.js",
    "revision": "2c3ea57c277823796538aeff6331c90f"
  },
  {
    "url": "assets/js/28.0fd33b45.js",
    "revision": "52d1464f66259177bcbd256c6eb46c4a"
  },
  {
    "url": "assets/js/29.0076d8c0.js",
    "revision": "f022f8a02cedbfcf769c63a58e5c10c0"
  },
  {
    "url": "assets/js/3.c77ee85b.js",
    "revision": "16824f3e6cadedd069d7394efa0be695"
  },
  {
    "url": "assets/js/30.cded38ac.js",
    "revision": "f9d60c650fbf50e90644cf840ef81c82"
  },
  {
    "url": "assets/js/31.f7e978d1.js",
    "revision": "4394192a2a25e3fe5d2296dcb14d1092"
  },
  {
    "url": "assets/js/32.a1bab6f9.js",
    "revision": "698a792c31b461ebe467c38ee1adcbdc"
  },
  {
    "url": "assets/js/33.a4c48047.js",
    "revision": "e6d1d04f59a84d2daa6fb12ac2d3512f"
  },
  {
    "url": "assets/js/34.59122eea.js",
    "revision": "a3e847aafc9d7d9d17b8d41df2f6402e"
  },
  {
    "url": "assets/js/35.62f85fae.js",
    "revision": "58812d917f7269a2a3910d46f5f3a914"
  },
  {
    "url": "assets/js/36.5e12f6f9.js",
    "revision": "f10d0aa8b199a2fd8df247e668f115bb"
  },
  {
    "url": "assets/js/37.d9bb2dcb.js",
    "revision": "d61e184abc711a5c91c0fbd4cb197f97"
  },
  {
    "url": "assets/js/38.2c797b7c.js",
    "revision": "6e97d9df8b78b62085afa7f748ab7e67"
  },
  {
    "url": "assets/js/39.e7630cf2.js",
    "revision": "1c856b1c39d772e5bd27773d48599038"
  },
  {
    "url": "assets/js/4.029224a8.js",
    "revision": "a24418252756cc079289edfdb660410b"
  },
  {
    "url": "assets/js/40.99ebc6f3.js",
    "revision": "18085acda317900c448631b8b4079b52"
  },
  {
    "url": "assets/js/41.45253a78.js",
    "revision": "6e3b1d75fd0f8b26849d40974c2ff523"
  },
  {
    "url": "assets/js/42.fae505f7.js",
    "revision": "f9d982058cf02469c1209000c490d636"
  },
  {
    "url": "assets/js/43.c5ceee9b.js",
    "revision": "fd4157cff9d0a7f251cc8c3a12c23872"
  },
  {
    "url": "assets/js/44.13897ecf.js",
    "revision": "429a4e047491a67063de6785ff88a7ba"
  },
  {
    "url": "assets/js/45.3429c10d.js",
    "revision": "171513301db9036e79b99918608fefcb"
  },
  {
    "url": "assets/js/46.70b44388.js",
    "revision": "d06dad2c605b7c7d07777a976b2eea5f"
  },
  {
    "url": "assets/js/47.2be5c30b.js",
    "revision": "c307949fe342e584b8b309ac84ee4118"
  },
  {
    "url": "assets/js/48.53993711.js",
    "revision": "bd86331211c64ce4f07d63c44f0634e8"
  },
  {
    "url": "assets/js/49.ec2fa373.js",
    "revision": "7f3f06036898b4ab6f6644e42b90a02b"
  },
  {
    "url": "assets/js/5.745289f0.js",
    "revision": "f18933162042bfe7c467b229a3035543"
  },
  {
    "url": "assets/js/50.b0cf889c.js",
    "revision": "1bf167a5cfeb6decb197073186f0af6f"
  },
  {
    "url": "assets/js/51.46bc8c24.js",
    "revision": "0778a6c2d54787028f0596d59afe78bc"
  },
  {
    "url": "assets/js/52.d4eac7d0.js",
    "revision": "9341c0f584dbc953051d60fe676976ad"
  },
  {
    "url": "assets/js/53.38831b5b.js",
    "revision": "2bcb964089e955d7477c1f80cea12131"
  },
  {
    "url": "assets/js/54.508a2130.js",
    "revision": "837db9370dc5b7d044fac9d7b66723c8"
  },
  {
    "url": "assets/js/55.1df95144.js",
    "revision": "72b6e9ee76befe944c42af98e6510fb6"
  },
  {
    "url": "assets/js/56.b7501963.js",
    "revision": "f765136e358c0e5804199f0b4b1fd057"
  },
  {
    "url": "assets/js/57.02d53909.js",
    "revision": "69b5f4d14f4c3b18cee6f59f66ecb1b1"
  },
  {
    "url": "assets/js/58.c2323735.js",
    "revision": "d9512cf679f5abb1b8cb0755d2e66759"
  },
  {
    "url": "assets/js/59.8e254499.js",
    "revision": "aa654f2efcef7adf926186f04d1e2546"
  },
  {
    "url": "assets/js/6.e83dbf47.js",
    "revision": "cf899faf409049555349342edd7ae0f9"
  },
  {
    "url": "assets/js/60.66104166.js",
    "revision": "710602c41b2ba3a7694edd061a71f856"
  },
  {
    "url": "assets/js/61.a6fd66bc.js",
    "revision": "282a07964c083f3a6733d47b6f6bc523"
  },
  {
    "url": "assets/js/7.759cb39c.js",
    "revision": "4d5530959910a5ec95342ca8c91dec81"
  },
  {
    "url": "assets/js/8.bbbf651b.js",
    "revision": "fe993275dc0d7706244f3d64a8fda31d"
  },
  {
    "url": "assets/js/9.ff01c528.js",
    "revision": "32ff9679591114deda8daab74e9c1d23"
  },
  {
    "url": "assets/js/app.15cecec7.js",
    "revision": "2fab7fae4f864b8ae7284368a7fca336"
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
    "revision": "e58ffb91495a4d114e579f584512fa79"
  },
  {
    "url": "demo/index.html",
    "revision": "1225e0164d904bcc5025c449336f5e27"
  },
  {
    "url": "demo/live-demo.html",
    "revision": "1dd636cbf16977995d1d00739c86f4d3"
  },
  {
    "url": "demo/multiple-demo.html",
    "revision": "f5af6751c969b0d9ae37f4aa19381a8c"
  },
  {
    "url": "demo/subtitle-demo.html",
    "revision": "a2ebbf88c956fba28f413b9396a0ca19"
  },
  {
    "url": "guide/api.html",
    "revision": "e9f2427a28af1cc0a190507cc8baba3c"
  },
  {
    "url": "guide/barrage.html",
    "revision": "45c3f04298e76f62da35f4c48eaa2dff"
  },
  {
    "url": "guide/begin.html",
    "revision": "0952d3c5c5560f5eaff7f6f1b75ea8a8"
  },
  {
    "url": "guide/custom-control.html",
    "revision": "681627cd23ec5d043c8f02d8ddc4ba97"
  },
  {
    "url": "guide/index.html",
    "revision": "efa1c23a1cb4e06d18270c81855a5b59"
  },
  {
    "url": "guide/mui-player-desktop-plugin.html",
    "revision": "c73b5137df56250454cdf310d7f1974d"
  },
  {
    "url": "guide/mui-player-mobile-plugin.html",
    "revision": "26d3e221504d7d088cdf6ac1440367dd"
  },
  {
    "url": "guide/other-problem.html",
    "revision": "6a9e3b82fb73b2b96c1279b39745cabb"
  },
  {
    "url": "guide/preset.html",
    "revision": "ba455b33d9a4f9cf8ea7af3a9ce76117"
  },
  {
    "url": "guide/subtitle.html",
    "revision": "084f73998955686ec8aa257bd0808c54"
  },
  {
    "url": "guide/thumbnails.html",
    "revision": "fb1b0f975647594ac3cb68c42c1e7c48"
  },
  {
    "url": "guide/uni-app.html",
    "revision": "08b08e83adc97b6fdd15c12d85aa4da0"
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
    "revision": "81a8b9e6cda67339a0bee822853eedcb"
  },
  {
    "url": "joinUs/contact.html",
    "revision": "b6db61af7fe416f10cf5ce9984015592"
  },
  {
    "url": "joinUs/index.html",
    "revision": "5c207e052e1b5910c2df3cb11f9e4b9e"
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
    "revision": "641d19572cc39ef091ab9c831d125779"
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
    "revision": "f3b4e925684ca029b7036913126e6572"
  },
  {
    "url": "zh/demo/index.html",
    "revision": "b47b08196968f9402bae93af4d50659c"
  },
  {
    "url": "zh/demo/live-demo.html",
    "revision": "93ec1b0ef92e16fd39daa6b8a420cfb6"
  },
  {
    "url": "zh/demo/multiple-demo.html",
    "revision": "81737e32e108ee28e3417c108ecd4d33"
  },
  {
    "url": "zh/demo/subtitle-demo.html",
    "revision": "52784c5dbb6c6868ee84e55eda30b635"
  },
  {
    "url": "zh/guide/api.html",
    "revision": "30ef32c82d76084985fdf612e806ff56"
  },
  {
    "url": "zh/guide/barrage.html",
    "revision": "91cf1b95b482ad8eabf7219e715fa052"
  },
  {
    "url": "zh/guide/begin.html",
    "revision": "4df69124b5ec29b45be230c43d15ae36"
  },
  {
    "url": "zh/guide/custom-control.html",
    "revision": "9c1e842def8c9159d62a6a86c67799ad"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "76e2e1954232ed28e4105465012e731c"
  },
  {
    "url": "zh/guide/mui-player-desktop-plugin.html",
    "revision": "60efe1cc2348ca11e68ededfc9ddef62"
  },
  {
    "url": "zh/guide/mui-player-mobile-plugin.html",
    "revision": "30a8f7e7657b82f759520d11fc8d6499"
  },
  {
    "url": "zh/guide/other-problem.html",
    "revision": "7402b0e326992ab98150097fde521b5a"
  },
  {
    "url": "zh/guide/preset.html",
    "revision": "1dd5c9902b4e7a020f1c97d33fc8da0a"
  },
  {
    "url": "zh/guide/subtitle.html",
    "revision": "16369db9d7ba8108cee8254734b72e7b"
  },
  {
    "url": "zh/guide/thumbnails.html",
    "revision": "86b7fb967d6b2bdb75dea93faff1db7a"
  },
  {
    "url": "zh/guide/uni-app.html",
    "revision": "813592575899b88b2c104ce5e3e9d04b"
  },
  {
    "url": "zh/index.html",
    "revision": "1960447b35ed434261edb8e242fcbade"
  },
  {
    "url": "zh/joinUs/contact.html",
    "revision": "b0ceacc4cd318c355e83a377f633a178"
  },
  {
    "url": "zh/joinUs/index.html",
    "revision": "80f2053cfe7db49c843c04218420477f"
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
