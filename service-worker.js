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
    "revision": "065968bff9c2d22c8177ac3eec3ce577"
  },
  {
    "url": "assets/css/0.styles.46104d2a.css",
    "revision": "94c65debfdf99de89c9fa6f4c4529fca"
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
    "url": "assets/js/11.97eea2aa.js",
    "revision": "dbbe4ce5075916a7e6cc45efc770306f"
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
    "url": "assets/js/14.61ac91cf.js",
    "revision": "753b859b5874ed1644c253ca1d1d5015"
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
    "url": "assets/js/17.129667fc.js",
    "revision": "7c2590c1307b27545d975499d00d2729"
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
    "url": "assets/js/20.ba28d4fd.js",
    "revision": "913e95744b8f3bc7800f1324392906ba"
  },
  {
    "url": "assets/js/21.95bb35c7.js",
    "revision": "440d4f0abc01bca05bd3c0aadff71006"
  },
  {
    "url": "assets/js/22.0c215ed2.js",
    "revision": "c18b175a6f25400b6c4df05b26ca3541"
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
    "url": "assets/js/27.7b561245.js",
    "revision": "1ec915a33502d46b01ead22bf54010a9"
  },
  {
    "url": "assets/js/28.375f50fa.js",
    "revision": "cf1a0511995a7420a504397a6b212603"
  },
  {
    "url": "assets/js/29.3d97833a.js",
    "revision": "649ba3a6d5f108191b3e985f271c0a80"
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
    "url": "assets/js/31.a1e8a140.js",
    "revision": "d14085c3ce4105720799c62fff57f8d8"
  },
  {
    "url": "assets/js/32.eacf9a38.js",
    "revision": "0670e4d0db7293d5a9ea8e96c5494791"
  },
  {
    "url": "assets/js/33.4fc5da28.js",
    "revision": "b769906703eea3e75a7f76802151dc62"
  },
  {
    "url": "assets/js/34.760fe3a3.js",
    "revision": "9afc4f345de85c6d7dcc33682a7c71ed"
  },
  {
    "url": "assets/js/35.7e419010.js",
    "revision": "4c5756d3e048f6496ba47d6ca8ff5067"
  },
  {
    "url": "assets/js/36.cfe5f3b3.js",
    "revision": "0cd4ca1867f72611363e775af165719c"
  },
  {
    "url": "assets/js/37.620cb1a1.js",
    "revision": "4ddccdc818e55f5ffa612f711c30c0b9"
  },
  {
    "url": "assets/js/38.0a6c3466.js",
    "revision": "63de299bc7e0a5a1af4653ed3eb25555"
  },
  {
    "url": "assets/js/39.aa1cea68.js",
    "revision": "4f97beb21ad86289e2b85f2ce042bb40"
  },
  {
    "url": "assets/js/4.b2dae139.js",
    "revision": "9b1b449f136af6ade379b0e1b220e8da"
  },
  {
    "url": "assets/js/40.7b562135.js",
    "revision": "814ee0fa983a723326fbb260e43500a0"
  },
  {
    "url": "assets/js/41.8ffe6475.js",
    "revision": "1d7d0c52929eb19faaae6c69975e6676"
  },
  {
    "url": "assets/js/42.86252e52.js",
    "revision": "9283f518e9bf5329d0f34d95f1596cdc"
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
    "url": "assets/js/46.ecdeb8be.js",
    "revision": "793b127aeb54fa616442ab64562775b7"
  },
  {
    "url": "assets/js/47.fa3e4682.js",
    "revision": "af3c47510026322faf70784e562f2fe8"
  },
  {
    "url": "assets/js/48.5bb9841a.js",
    "revision": "2f122cbf297712195fe0e9e135684717"
  },
  {
    "url": "assets/js/49.ce639112.js",
    "revision": "0473216d99392b73970bc79f2d97919a"
  },
  {
    "url": "assets/js/5.55c12626.js",
    "revision": "3821540965b5e18f9532d30ded09e984"
  },
  {
    "url": "assets/js/50.342bc4f9.js",
    "revision": "9d503300a02c24f4cc64a1ffe9571dea"
  },
  {
    "url": "assets/js/51.ce7e138d.js",
    "revision": "ed8141e07479bec8221d7af743efba6e"
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
    "url": "assets/js/54.f5637944.js",
    "revision": "598e09e8da02a7f53a56ecf8511532cd"
  },
  {
    "url": "assets/js/55.2dd7145e.js",
    "revision": "83be2ede19e6aada4dfb2263645c00a0"
  },
  {
    "url": "assets/js/56.8c2338e5.js",
    "revision": "42f9fc8668da5aaababd0f6d213408a8"
  },
  {
    "url": "assets/js/57.60993b0a.js",
    "revision": "8e50e22508646b7530842ecb40723732"
  },
  {
    "url": "assets/js/58.d9ce8575.js",
    "revision": "0a24d89aecff83b5c1a794db5bd802a7"
  },
  {
    "url": "assets/js/59.a27d1ab6.js",
    "revision": "d0971c1640da3d014ab380cedc7f59df"
  },
  {
    "url": "assets/js/6.cccdee6c.js",
    "revision": "b58449ce7207c688f44cb1809e580cd9"
  },
  {
    "url": "assets/js/60.e26f2972.js",
    "revision": "e56e0fb9ba51b6a5569fb92a34ca7929"
  },
  {
    "url": "assets/js/61.8519d34e.js",
    "revision": "c37544faf928a5f86aec13485853b5b5"
  },
  {
    "url": "assets/js/7.e810472e.js",
    "revision": "1e8b374bd3c2f013d3ebc5c54006f314"
  },
  {
    "url": "assets/js/8.bab36a9c.js",
    "revision": "50280700e786ff50e12496754ec9a516"
  },
  {
    "url": "assets/js/9.ad0658de.js",
    "revision": "722a83adc293fc8302b6b11c8ebf9707"
  },
  {
    "url": "assets/js/app.ae8bac42.js",
    "revision": "818e708914a8cf5bd1ba7f026c70dd34"
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
    "revision": "86ebff8d4f3584a55784d43b042a9fb5"
  },
  {
    "url": "demo/index.html",
    "revision": "d3a12ce26c9665f6c95fc74ab1048627"
  },
  {
    "url": "demo/live-demo.html",
    "revision": "c27449e443cef976e5d200632cf94052"
  },
  {
    "url": "demo/multiple-demo.html",
    "revision": "026ba7ab8a60b7bdae7a1e83a9385492"
  },
  {
    "url": "demo/subtitle-demo.html",
    "revision": "763b699530e338176cc1061c68c13bd3"
  },
  {
    "url": "guide/api.html",
    "revision": "e3fe082ca1a7758e1d948977eb05828c"
  },
  {
    "url": "guide/barrage.html",
    "revision": "fc16db03e1d464a17c6fa77337aec95e"
  },
  {
    "url": "guide/begin.html",
    "revision": "f40cb36ce4f8c4e5c36020346f4d6bc7"
  },
  {
    "url": "guide/custom-control.html",
    "revision": "ac54b0fa95b108f7c606e430d95c6852"
  },
  {
    "url": "guide/index.html",
    "revision": "a591fcddbac1e3c6571acb902e062533"
  },
  {
    "url": "guide/mui-player-desktop-plugin.html",
    "revision": "1aeb49a062accc59fbde8da0270facd9"
  },
  {
    "url": "guide/mui-player-mobile-plugin.html",
    "revision": "5d839209da9371d9082cd74e3ad86b43"
  },
  {
    "url": "guide/other-problem.html",
    "revision": "914b0236cfc03610f0f2528080398db6"
  },
  {
    "url": "guide/preset.html",
    "revision": "50d21bda9a044da6aa35f02cd26a254e"
  },
  {
    "url": "guide/subtitle.html",
    "revision": "e94a1a7a53371326c3f0ce672588624f"
  },
  {
    "url": "guide/thumbnails.html",
    "revision": "f015c2d6e8c55d31f5cfeced499140e2"
  },
  {
    "url": "guide/uni-app.html",
    "revision": "e96610cee51698ace7857ddcf657cc59"
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
    "revision": "4433f06dae1d50c223c7d1a0dde021e6"
  },
  {
    "url": "joinUs/contact.html",
    "revision": "1b55f77bc928077cf871a41f887f4e9e"
  },
  {
    "url": "joinUs/index.html",
    "revision": "17e63fc9636c82c71bf0435ce661f88b"
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
    "revision": "06ea895775019655514124c7eaab6521"
  },
  {
    "url": "zh/demo/index.html",
    "revision": "f3632d1992bad91e9e9f6e0e955223db"
  },
  {
    "url": "zh/demo/live-demo.html",
    "revision": "9c9e8b3333e91a67386e90157451fcf1"
  },
  {
    "url": "zh/demo/multiple-demo.html",
    "revision": "2eb51bf82664512c55a26e4342ddde88"
  },
  {
    "url": "zh/demo/subtitle-demo.html",
    "revision": "d722573f65531a3c8277e177fd3f78a7"
  },
  {
    "url": "zh/guide/api.html",
    "revision": "058bd236c4a60c550e16e86a77199397"
  },
  {
    "url": "zh/guide/barrage.html",
    "revision": "770b37f274dbe3ca5404fb05fa43bded"
  },
  {
    "url": "zh/guide/begin.html",
    "revision": "cac5f4394f790611066fcf8ad72c718a"
  },
  {
    "url": "zh/guide/custom-control.html",
    "revision": "cc76a79093bb9c68f96164e167e71c5a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "efa17bec7947349ba8949e010ddc58b5"
  },
  {
    "url": "zh/guide/mui-player-desktop-plugin.html",
    "revision": "3a9561881ed27bdeb9031cbcca8c867e"
  },
  {
    "url": "zh/guide/mui-player-mobile-plugin.html",
    "revision": "40b35e162a1a9aefc5196587b762953b"
  },
  {
    "url": "zh/guide/other-problem.html",
    "revision": "9e6c9d1e3d1dee781351147cc2e2fd58"
  },
  {
    "url": "zh/guide/preset.html",
    "revision": "02f7b9d208fedd34e475cf3729af34ca"
  },
  {
    "url": "zh/guide/subtitle.html",
    "revision": "9c1a57ecc5627805e2e0439e261f3cad"
  },
  {
    "url": "zh/guide/thumbnails.html",
    "revision": "f9fc892f346fced37b41bccdc391c268"
  },
  {
    "url": "zh/guide/uni-app.html",
    "revision": "49eaba39ecb418308b6469d5dc7559f4"
  },
  {
    "url": "zh/index.html",
    "revision": "dc43d390ae0a29f651529ff05d500bf4"
  },
  {
    "url": "zh/joinUs/contact.html",
    "revision": "b71a6fe1a3d9dd37feab726293eef2f3"
  },
  {
    "url": "zh/joinUs/index.html",
    "revision": "27ea41fdd308a29a5d854507627663b4"
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
