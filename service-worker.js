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
    "revision": "0ba44ad0109f50e191fb92dd2af07ecd"
  },
  {
    "url": "assets/css/0.styles.a875243f.css",
    "revision": "f00f391b379a5f200d6032db30cbc669"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.14561326.js",
    "revision": "2800ebeea12a2848e2f91fbadeb9c08c"
  },
  {
    "url": "assets/js/11.f7bb224f.js",
    "revision": "50f5ab2d95789ebf5bbf624640af4dbc"
  },
  {
    "url": "assets/js/12.df4ca3d4.js",
    "revision": "5b220e4d15ccd04f0493376f74780894"
  },
  {
    "url": "assets/js/13.438fcf46.js",
    "revision": "44ff3a7ca4ce0ad009e6f1f206990287"
  },
  {
    "url": "assets/js/14.6cbac9c2.js",
    "revision": "fe0374954ef7674cc8e7d7ae28bd7eed"
  },
  {
    "url": "assets/js/15.de40c2b9.js",
    "revision": "0eb4aa308571808c231733a9c99f929f"
  },
  {
    "url": "assets/js/16.e0fc9dec.js",
    "revision": "475668efe5efcd1ed09e8131a944c941"
  },
  {
    "url": "assets/js/17.4279c369.js",
    "revision": "9af108d27448f3ea51a0ea0f7c298d79"
  },
  {
    "url": "assets/js/18.559f1d9d.js",
    "revision": "33866b6a21747a492f4a23e8b628d29f"
  },
  {
    "url": "assets/js/19.7ac6f0b9.js",
    "revision": "22b83c145b6618ed912252c797cd93d5"
  },
  {
    "url": "assets/js/2.053bcfba.js",
    "revision": "6ec3b02ea7cf52ec6b4fc8cee453fe07"
  },
  {
    "url": "assets/js/20.d6ceac30.js",
    "revision": "427ea08a8f9f2e430554ff1da6694db3"
  },
  {
    "url": "assets/js/21.e22c4c59.js",
    "revision": "f9426229f14c96922f6c2a72c444ac76"
  },
  {
    "url": "assets/js/22.54c8c323.js",
    "revision": "66e5ea44977b23fa77b8e4d0e23dfe2a"
  },
  {
    "url": "assets/js/23.edaec0c2.js",
    "revision": "a9a19f08c9ffd3a1c225f9025be33aca"
  },
  {
    "url": "assets/js/24.914b1f3a.js",
    "revision": "ba767221bcebbe2e33496d40580deaa0"
  },
  {
    "url": "assets/js/25.76c4add4.js",
    "revision": "a2bd999c91ec0795b71e0eebdd877d26"
  },
  {
    "url": "assets/js/26.1c656f11.js",
    "revision": "c1d809b9e7d46d2dfd34adb34ab56c9b"
  },
  {
    "url": "assets/js/27.77d30bd7.js",
    "revision": "e3fc24f1dce5b8d2f28d9e6ddf70708c"
  },
  {
    "url": "assets/js/28.31824528.js",
    "revision": "c91254f835948ea9def91fa83900efad"
  },
  {
    "url": "assets/js/29.05d3f839.js",
    "revision": "0896be2ae5af1d6d1d2cd9a47e696cf0"
  },
  {
    "url": "assets/js/3.b12c51dc.js",
    "revision": "0aab9cfbb6b87b6ecf4c8f1e440ea39d"
  },
  {
    "url": "assets/js/30.a5677a7c.js",
    "revision": "adb2e2cfdd1a771c2e984c4d30a8940b"
  },
  {
    "url": "assets/js/31.2850e781.js",
    "revision": "26c8827ae7b1e3888f48feabddaa6201"
  },
  {
    "url": "assets/js/32.dcc64ce1.js",
    "revision": "44a135a3987558210dfee79f1f46c6d6"
  },
  {
    "url": "assets/js/33.98db9b84.js",
    "revision": "1ae06c63f954341a23b0f168f5cf5bff"
  },
  {
    "url": "assets/js/34.f15429c9.js",
    "revision": "04a6ce247bf8145e4cff13902db15be4"
  },
  {
    "url": "assets/js/35.b4cf8398.js",
    "revision": "f605503f2c3e7a3a086729b1ed9916b3"
  },
  {
    "url": "assets/js/36.f3a5d676.js",
    "revision": "5b8742e1ed0b3a37b0c56eb603992263"
  },
  {
    "url": "assets/js/37.0828ee16.js",
    "revision": "21de6e5aeb0ddf9f7cb5ae63aa301285"
  },
  {
    "url": "assets/js/38.11a002d2.js",
    "revision": "74fe1b9d3856925d0fa5986127f7f07d"
  },
  {
    "url": "assets/js/39.06dfe30c.js",
    "revision": "858e9e33ccbe3fcc0706dde9bbc681ef"
  },
  {
    "url": "assets/js/4.3bc267c1.js",
    "revision": "36b123c56a5820f8b4eff6b8536efebc"
  },
  {
    "url": "assets/js/40.23ab4a72.js",
    "revision": "4593506e40c7fd68e007f7ddb1485462"
  },
  {
    "url": "assets/js/41.7000f434.js",
    "revision": "54a8c30bc029936a0c53f02a635af92b"
  },
  {
    "url": "assets/js/42.a422e02b.js",
    "revision": "d28cbd2f7712a2cfba1ff4c004c71310"
  },
  {
    "url": "assets/js/43.cd139ead.js",
    "revision": "d6824ad20c0026020158ad67a9ec0f7e"
  },
  {
    "url": "assets/js/44.3fcbed54.js",
    "revision": "ec62bc1758b32c1e1f73ec581154ff29"
  },
  {
    "url": "assets/js/45.e8f4d274.js",
    "revision": "c3e161fec7ec7a7072e457ca8b9fd0a1"
  },
  {
    "url": "assets/js/46.4eacbc70.js",
    "revision": "514a2ac97dfc46757d20931d6ea99fc7"
  },
  {
    "url": "assets/js/47.f5a4ec50.js",
    "revision": "f11c11805ad212d2d5a8cc53f8d140de"
  },
  {
    "url": "assets/js/48.82972948.js",
    "revision": "83497ac9755901b2b820b6af02ddd07c"
  },
  {
    "url": "assets/js/49.6276aaa1.js",
    "revision": "731197f5817a7a1a9d595f3f1ee47e6b"
  },
  {
    "url": "assets/js/5.4da5a51f.js",
    "revision": "f13ef432a53a7f18c3ed2d3e0cfe66ec"
  },
  {
    "url": "assets/js/50.f94ad2c1.js",
    "revision": "8a23b4542ed8730cec91fb4ade6a5c30"
  },
  {
    "url": "assets/js/51.fdd1029d.js",
    "revision": "138f997be296f6d82bf0ebd6dff96db7"
  },
  {
    "url": "assets/js/52.896ebc25.js",
    "revision": "d225124ae88144b939a8bb0bcb7114a1"
  },
  {
    "url": "assets/js/53.79e14296.js",
    "revision": "662966f1d33a12f332bd440e82cccdf8"
  },
  {
    "url": "assets/js/54.73d2dbe2.js",
    "revision": "8ef45a9a5135493f87c3cd0d5db4b837"
  },
  {
    "url": "assets/js/55.a54a3ffd.js",
    "revision": "e65562861130663c7cbbd3b430c9732e"
  },
  {
    "url": "assets/js/56.7b6cb8cd.js",
    "revision": "11975df639db6f0357e1c991fec125e0"
  },
  {
    "url": "assets/js/57.ceb10ae4.js",
    "revision": "f1acef1b181b08b56d8bf0c4632224f7"
  },
  {
    "url": "assets/js/58.5e3971e0.js",
    "revision": "e9784ea126af240b7fc43e22127a362a"
  },
  {
    "url": "assets/js/59.6350d846.js",
    "revision": "465a0b1d82cd50606a639e95e5116d24"
  },
  {
    "url": "assets/js/6.8a4d2dd0.js",
    "revision": "108a2a519c9cf4aab63bc8e7d05d3005"
  },
  {
    "url": "assets/js/60.6780aecb.js",
    "revision": "e4509237c0bc2881d43419637959f706"
  },
  {
    "url": "assets/js/61.c3b05b2e.js",
    "revision": "d98c0b6d663cb71076f8a8902b7ae40c"
  },
  {
    "url": "assets/js/62.009d3324.js",
    "revision": "388e48e9a15b68edf25320993711d71d"
  },
  {
    "url": "assets/js/63.b08342ca.js",
    "revision": "e4e90f493af5bc5fcaf2acff3fbb1f61"
  },
  {
    "url": "assets/js/64.3e5b01c2.js",
    "revision": "04f0fa01bac7e17db61e831ccb421569"
  },
  {
    "url": "assets/js/65.6989f0bd.js",
    "revision": "4d36d60389bedb37fdc6edd8fb21021e"
  },
  {
    "url": "assets/js/66.666982bc.js",
    "revision": "cfe97a6f07e68df077003572078e8cf8"
  },
  {
    "url": "assets/js/67.e0619dc7.js",
    "revision": "5cb6a4e48c9685739b60bbd5d94a7f47"
  },
  {
    "url": "assets/js/68.bace46c1.js",
    "revision": "b5b33f12d867956b827343772d92a806"
  },
  {
    "url": "assets/js/69.63e3fcfc.js",
    "revision": "b600d43f41d9880903f8364d680ddff1"
  },
  {
    "url": "assets/js/7.e1f57f28.js",
    "revision": "65a0e647636dfa65c25258b8a74b586e"
  },
  {
    "url": "assets/js/70.52bd9b98.js",
    "revision": "bf4a6dd10ae6bbf9f4083aae23b8ba80"
  },
  {
    "url": "assets/js/71.a3836fef.js",
    "revision": "d9f8c07137e60781f65bf9331db3dc52"
  },
  {
    "url": "assets/js/72.d91e5ed5.js",
    "revision": "d3b67732b4621d6379daa76133df183f"
  },
  {
    "url": "assets/js/73.af5822ec.js",
    "revision": "3cd29fa76cc1f7625672b8c033782c3a"
  },
  {
    "url": "assets/js/74.5fb1bea1.js",
    "revision": "5792f377adfbca4adb3f36db9713d568"
  },
  {
    "url": "assets/js/75.094bc6f3.js",
    "revision": "d280c823fb7dd4e78adda81d4b02d781"
  },
  {
    "url": "assets/js/76.fcc01f10.js",
    "revision": "725181b3c09ea1b03475d203a1cd64d2"
  },
  {
    "url": "assets/js/77.0a8260a9.js",
    "revision": "c75d6959100486895b7551f364650cda"
  },
  {
    "url": "assets/js/78.d2f3d68c.js",
    "revision": "efc96531caa79f16615eee9901da64df"
  },
  {
    "url": "assets/js/79.1d868644.js",
    "revision": "102743273e89ef2815d99414d37a61ad"
  },
  {
    "url": "assets/js/8.f8927e18.js",
    "revision": "e413d87393c5ca144368e9a9c8919eb9"
  },
  {
    "url": "assets/js/80.658850de.js",
    "revision": "b0aa7e9403dbd1438c1d856895895bc4"
  },
  {
    "url": "assets/js/81.3e11191a.js",
    "revision": "ea978042cfc88c56e62b2dbecc5d5f7d"
  },
  {
    "url": "assets/js/82.366b577d.js",
    "revision": "fa7b881b0c60fbab3e3192b2b5b64a3f"
  },
  {
    "url": "assets/js/83.468d54d1.js",
    "revision": "92a303d8b5867a01f32590ea6f3a486c"
  },
  {
    "url": "assets/js/84.823eee2d.js",
    "revision": "dbfb351d15aed1f5c370dad9801dc13c"
  },
  {
    "url": "assets/js/85.6af47c85.js",
    "revision": "4cbf1f2bfe93808a2ce699b71af74a30"
  },
  {
    "url": "assets/js/86.0484cff7.js",
    "revision": "36932c63373b06302d28ab209b05c1b4"
  },
  {
    "url": "assets/js/app.c9392eda.js",
    "revision": "bc5afe1eb9a94eef83b252799304340d"
  },
  {
    "url": "assets/js/vendors~docsearch.7323f314.js",
    "revision": "0249dbe317dcfcdaf0a546a64962185b"
  },
  {
    "url": "css/CommentCoreLibrary.min.css",
    "revision": "e578b37f4607d6f4231c8b7da5f1d844"
  },
  {
    "url": "css/mui-player.min.css",
    "revision": "204f27869a06f32aa6c9b69c3ff55288"
  },
  {
    "url": "css/swiper.min.css",
    "revision": "018da5e642fda033e4debef641f6f582"
  },
  {
    "url": "demo/danmaku-demo.html",
    "revision": "1134e6848853793bce7a89f89cc3a9e9"
  },
  {
    "url": "demo/index.html",
    "revision": "d5f60813775e2964b23ba262673c798e"
  },
  {
    "url": "demo/live-demo.html",
    "revision": "08e1a483e14f3a8f3f781faa298ed29d"
  },
  {
    "url": "demo/multiple-demo.html",
    "revision": "cdac2c41b1dfadfa7d1431274178aaad"
  },
  {
    "url": "demo/subtitle-demo.html",
    "revision": "aba9e231272763dcfa049f4265c2a2fe"
  },
  {
    "url": "guide/api.html",
    "revision": "de480a5f2f40f3aa6dfc5086f9f7d947"
  },
  {
    "url": "guide/barrage.html",
    "revision": "8006f143c6ce5a7689cd55b86ebb4cec"
  },
  {
    "url": "guide/begin.html",
    "revision": "c880e0dc58f8075d87eb60b77cd05221"
  },
  {
    "url": "guide/custom-control.html",
    "revision": "9c60a81fabcb5b15ac3d38fbcaa02533"
  },
  {
    "url": "guide/index.html",
    "revision": "1748b21a13df12edefea3a80700e4402"
  },
  {
    "url": "guide/mui-player-desktop-plugin.html",
    "revision": "ff0ba59611744066723e573aa81c90d1"
  },
  {
    "url": "guide/other-problem.html",
    "revision": "4967bdd3e851b3a567dd71fc80f2da81"
  },
  {
    "url": "guide/plus-desktop-plugin.html",
    "revision": "b9c55fa3f281ed4a94b1f7744fe485c8"
  },
  {
    "url": "guide/plus-mobile-plugin.html",
    "revision": "6a3bcca2da35b6d1db32618e5752a078"
  },
  {
    "url": "guide/preset.html",
    "revision": "21647b7db3898b56bf299c04caa57d05"
  },
  {
    "url": "guide/subtitle.html",
    "revision": "06c07656a2bab66d4cb680e49a7c89ee"
  },
  {
    "url": "guide/thumbnails.html",
    "revision": "3d7d57f181db541f68a49a0f4a007575"
  },
  {
    "url": "guide/uni-app.html",
    "revision": "1b1b5fb9dd46f773aaa27e0812fddbf0"
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
    "revision": "8bdb0ef46e431b269314e532ba853fd4"
  },
  {
    "url": "joinUs/contact.html",
    "revision": "5ac5ebfc24e44c21eab0adbf8ab5f9b9"
  },
  {
    "url": "joinUs/index.html",
    "revision": "f6c56c6dfe7967f224cb46ad25cc283a"
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
    "revision": "f99aa092775237bfd241a9012459fb97"
  },
  {
    "url": "js/playerListener.js",
    "revision": "1a38230cbebb434352645ba11c8aad4d"
  },
  {
    "url": "js/plugins.js",
    "revision": "91e4e54c9d91a523b43b8f46972d1ce9"
  },
  {
    "url": "js/qrcode.min.js",
    "revision": "517b55d3688ce9ef1085a3d9632bcb97"
  },
  {
    "url": "js/swiper.min.js",
    "revision": "da9effeb9447655663c5e0861e58d1dc"
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
    "url": "svg/three-dots.svg",
    "revision": "fda955217fba34c7929c13f7aca87839"
  },
  {
    "url": "zh/demo/danmaku-demo.html",
    "revision": "3c9d029e7ddb67b4913a645262999ff5"
  },
  {
    "url": "zh/demo/index.html",
    "revision": "3625958b3f71f0098f94af50d2929f1f"
  },
  {
    "url": "zh/demo/live-demo.html",
    "revision": "d3ccaff291676f350ed3e12d4962ea02"
  },
  {
    "url": "zh/demo/multiple-demo.html",
    "revision": "5e27f8a6a84ead43799693db8da840fc"
  },
  {
    "url": "zh/demo/subtitle-demo.html",
    "revision": "3aba14c2caffe7b8ce7cd8e4e91a6d8b"
  },
  {
    "url": "zh/guide/api.html",
    "revision": "263f3c49dd8e7122742e84020e622a49"
  },
  {
    "url": "zh/guide/barrage.html",
    "revision": "beb8c7b9cee78e93cbacd5c8070dd110"
  },
  {
    "url": "zh/guide/begin.html",
    "revision": "464eb97206f98f23f38d906e70282c52"
  },
  {
    "url": "zh/guide/custom-control.html",
    "revision": "f99ac0dedac24dfbb20b4658ff400578"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "71ae4151e6a357581e510a7d6d3d558a"
  },
  {
    "url": "zh/guide/mui-player-desktop-plugin.html",
    "revision": "e34436bb1ba51d4af8af4c5854a7a67c"
  },
  {
    "url": "zh/guide/other-problem.html",
    "revision": "2d68469f8e15c44fb7b9ab73fa677eda"
  },
  {
    "url": "zh/guide/plus-desktop-plugin.html",
    "revision": "f13fca1f87d8ef96b470392bfa476302"
  },
  {
    "url": "zh/guide/plus-mobile-plugin.html",
    "revision": "5fbf57f891a4e211aadd41d43b757246"
  },
  {
    "url": "zh/guide/preset.html",
    "revision": "7d20bf3533e2f7c0204beee6c5c49520"
  },
  {
    "url": "zh/guide/subtitle.html",
    "revision": "483eae50779c1d341cceeeafbfe998dd"
  },
  {
    "url": "zh/guide/thumbnails.html",
    "revision": "68fa923e17292c71767278a094f2ad21"
  },
  {
    "url": "zh/guide/uni-app.html",
    "revision": "abe09b3440b958f4c2bc98465a762629"
  },
  {
    "url": "zh/index.html",
    "revision": "ca017bc5c1c0f7ab54aefffcbe83cda1"
  },
  {
    "url": "zh/joinUs/contact.html",
    "revision": "2d782d75796735c353171dc65efdb9e3"
  },
  {
    "url": "zh/joinUs/index.html",
    "revision": "98a76801473439bfc86b89b24503189e"
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
