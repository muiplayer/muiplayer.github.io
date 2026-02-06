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
    "revision": "88b2468059fcdcefab709fd9fb3fcfd3"
  },
  {
    "url": "assets/css/0.styles.00569078.css",
    "revision": "80868738112ac7790f4c0fae090a6f46"
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
    "url": "assets/js/12.d3a625c0.js",
    "revision": "5e18b6e343389b0dfed715d4365010d5"
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
    "url": "assets/js/17.ccab804d.js",
    "revision": "abea375c7e54b768a46e59f74c27dfc4"
  },
  {
    "url": "assets/js/18.559f1d9d.js",
    "revision": "33866b6a21747a492f4a23e8b628d29f"
  },
  {
    "url": "assets/js/19.35356f75.js",
    "revision": "f208ef1b3037f5ad5db009c109fd7c47"
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
    "url": "assets/js/21.61e2ab2a.js",
    "revision": "60f37e8a486378645b141c55be3af50d"
  },
  {
    "url": "assets/js/22.54c8c323.js",
    "revision": "66e5ea44977b23fa77b8e4d0e23dfe2a"
  },
  {
    "url": "assets/js/23.772648ce.js",
    "revision": "8db5fef0f844ffb4e19aa0ee734174c3"
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
    "url": "assets/js/26.d79f83c7.js",
    "revision": "b796c8cbf7e84cbf6fbafa12ccf5c261"
  },
  {
    "url": "assets/js/27.2c17e9e5.js",
    "revision": "12f8f96a51a26b58a093b2f86d4a6573"
  },
  {
    "url": "assets/js/28.8b1d0c8c.js",
    "revision": "5325ccdb2e54d8365640ec527b99398a"
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
    "url": "assets/js/40.b60ad3ba.js",
    "revision": "ef501274de083ce97fa35e10d0cef2ac"
  },
  {
    "url": "assets/js/41.4bc31e9c.js",
    "revision": "f816a0ca9d60c32ed9cd25fc65ba6023"
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
    "url": "assets/js/45.bc857623.js",
    "revision": "48bf5218b2b7ba6241e2d4aeeb981931"
  },
  {
    "url": "assets/js/46.b59d9030.js",
    "revision": "1e1caeeb81b9e3cbbde8c73392c7a532"
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
    "url": "assets/js/49.8d8fe03b.js",
    "revision": "8e255b780cb5c2d27d921398b98f18a6"
  },
  {
    "url": "assets/js/5.4da5a51f.js",
    "revision": "f13ef432a53a7f18c3ed2d3e0cfe66ec"
  },
  {
    "url": "assets/js/50.c191045c.js",
    "revision": "ce129ac2eae469aef258105d4c25c883"
  },
  {
    "url": "assets/js/51.d35ea5d5.js",
    "revision": "c49dd7e83cb94d34e2f67b79701a96c3"
  },
  {
    "url": "assets/js/52.218e6757.js",
    "revision": "964c4b6a11b8e680446f2f6a0816dfaa"
  },
  {
    "url": "assets/js/53.0c39649f.js",
    "revision": "91c27c37f2486f16322c5f71c67e7cdf"
  },
  {
    "url": "assets/js/54.7d4c068f.js",
    "revision": "eda32fbc9cb8aefe618877b1c1f593ea"
  },
  {
    "url": "assets/js/55.16adb7dd.js",
    "revision": "f0071110ed3793dda9bced014b5f396a"
  },
  {
    "url": "assets/js/56.0c1aeb0f.js",
    "revision": "e710c43dc88f95705c3c6722ef7c38bf"
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
    "url": "assets/js/59.f32c32d5.js",
    "revision": "c5b838641d81f3e623fb1cda8a5d3688"
  },
  {
    "url": "assets/js/6.8a4d2dd0.js",
    "revision": "108a2a519c9cf4aab63bc8e7d05d3005"
  },
  {
    "url": "assets/js/60.e690b82f.js",
    "revision": "1b6e84b65dd3785d9b4b6400b5fe3912"
  },
  {
    "url": "assets/js/61.d69f24ca.js",
    "revision": "7b06a0eef61f976471d9495f919e31eb"
  },
  {
    "url": "assets/js/62.9d5382eb.js",
    "revision": "8fd39b07430b35c49e5f9a527b9cc54a"
  },
  {
    "url": "assets/js/63.daadbb33.js",
    "revision": "442b9fa7f02f41ec0cf44f539f3bb0b3"
  },
  {
    "url": "assets/js/64.399a78be.js",
    "revision": "67f5bc6bd5154d9342d5f85d12fa1204"
  },
  {
    "url": "assets/js/65.73611985.js",
    "revision": "1e438de580e7b4161f4b046b5551ec1e"
  },
  {
    "url": "assets/js/66.72743756.js",
    "revision": "77831d8a1ea0361eee28a9184668a8a0"
  },
  {
    "url": "assets/js/67.84ea8b84.js",
    "revision": "5f87a2f904ec7ab21055d04d593e1d7d"
  },
  {
    "url": "assets/js/68.2fe4d6c9.js",
    "revision": "c209cb65dea819078c3a1a985e834f49"
  },
  {
    "url": "assets/js/69.5bc0108b.js",
    "revision": "128a59def9dec4b511c12c896b3f50f9"
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
    "url": "assets/js/71.74bf5264.js",
    "revision": "6f2c7fb8e484d0214811edb4b1239e76"
  },
  {
    "url": "assets/js/72.54199713.js",
    "revision": "035a2ae3ccdc70a9589a7c162f16b698"
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
    "url": "assets/js/75.b30212a2.js",
    "revision": "58e2b86e910e37ea5443da01fccc6499"
  },
  {
    "url": "assets/js/76.e9b0b3cb.js",
    "revision": "93c3a12f3825782494893199015788fe"
  },
  {
    "url": "assets/js/77.cef71562.js",
    "revision": "88127eb76560dc8e0f0920479f486feb"
  },
  {
    "url": "assets/js/78.fb75d77b.js",
    "revision": "2ee50fb2632279321bb54b86b90d2ed5"
  },
  {
    "url": "assets/js/79.3f23c07e.js",
    "revision": "7e16f7b9c82afcf8d2b255c9ef27fec3"
  },
  {
    "url": "assets/js/8.f8927e18.js",
    "revision": "e413d87393c5ca144368e9a9c8919eb9"
  },
  {
    "url": "assets/js/80.2c7ad347.js",
    "revision": "ed50d21dc8ca7e83352310084f608e36"
  },
  {
    "url": "assets/js/81.a47ccd2b.js",
    "revision": "a68a1ade4bca55e2eed1304884d2cca5"
  },
  {
    "url": "assets/js/82.a82f49f5.js",
    "revision": "ff19ddefe720ded4d25e18272ca557f9"
  },
  {
    "url": "assets/js/83.e474083f.js",
    "revision": "ade34fde75ff90e7e7e1e43f59c453c7"
  },
  {
    "url": "assets/js/84.f10670c1.js",
    "revision": "ef60b55c5141898a7b2445dbbd3e5bcc"
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
    "url": "assets/js/app.b56f42d4.js",
    "revision": "8b97043dd00666cb53d5cc6083708fcc"
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
    "revision": "58b6f849ff7666f96a1775f747ad72e0"
  },
  {
    "url": "demo/index.html",
    "revision": "18e657644347e720a2ac109dd30b9856"
  },
  {
    "url": "demo/live-demo.html",
    "revision": "d645731c5def3356f20241147f0f4271"
  },
  {
    "url": "demo/multiple-demo.html",
    "revision": "2c57c98d22927a37b712e29e0f8db1ea"
  },
  {
    "url": "demo/subtitle-demo.html",
    "revision": "31b9b7977f0c3cf1214d0cd8e851ea3f"
  },
  {
    "url": "guide/api.html",
    "revision": "62e98d9351d5e17ec5fa143f94c25124"
  },
  {
    "url": "guide/barrage.html",
    "revision": "1839eda14ff7dc1e103ba5a6715c68cb"
  },
  {
    "url": "guide/begin.html",
    "revision": "6e86748a5249c659c2052b09e085b808"
  },
  {
    "url": "guide/custom-control.html",
    "revision": "d20e71fbda607ffa4eb7bf6053219901"
  },
  {
    "url": "guide/index.html",
    "revision": "abcd3ac7c3a2679dfa368b2f730fa917"
  },
  {
    "url": "guide/mui-player-desktop-plugin.html",
    "revision": "add24f2f72a01af50c78704d823aa430"
  },
  {
    "url": "guide/other-problem.html",
    "revision": "0706f55dce820328500ab4c853ed0f37"
  },
  {
    "url": "guide/plus-desktop-plugin.html",
    "revision": "a7773e9d464e800be16532fd2717d80e"
  },
  {
    "url": "guide/plus-mobile-plugin.html",
    "revision": "63644a8637e3632d2df5e8f4ac13e62b"
  },
  {
    "url": "guide/preset.html",
    "revision": "0267a60ad74888f7a0baac0f283ad766"
  },
  {
    "url": "guide/subtitle.html",
    "revision": "42477cafb3a3f00bb50625044b0e5571"
  },
  {
    "url": "guide/thumbnails.html",
    "revision": "c79371baf792f7041575ad5168ea3609"
  },
  {
    "url": "guide/uni-app.html",
    "revision": "f3bc06112b99866bf3762cef8391b1e0"
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
    "revision": "86aacc6b48777c5726009d62f1be9520"
  },
  {
    "url": "joinUs/contact.html",
    "revision": "5e1030c2bdb371f46564284d693c002c"
  },
  {
    "url": "joinUs/index.html",
    "revision": "389bb6182e454a90a6635b17a5b19892"
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
    "revision": "e0be4f28799171c2526ddbb15d5ea2c4"
  },
  {
    "url": "zh/demo/index.html",
    "revision": "ec0ca0ef1e774dc44d50396a5f56adb3"
  },
  {
    "url": "zh/demo/live-demo.html",
    "revision": "5015f8f465556680c7d5beab73c898e2"
  },
  {
    "url": "zh/demo/multiple-demo.html",
    "revision": "ed8250602a073c07ec873db70f161807"
  },
  {
    "url": "zh/demo/subtitle-demo.html",
    "revision": "4cb1408157830c48402cb90ff32bd4bb"
  },
  {
    "url": "zh/guide/api.html",
    "revision": "bc76b1942cb48ede3ba739c343cb7a18"
  },
  {
    "url": "zh/guide/barrage.html",
    "revision": "c810675c25eabe82bcf2df486be8b719"
  },
  {
    "url": "zh/guide/begin.html",
    "revision": "33e74bd5ceaf6f03f8a721acb3f68571"
  },
  {
    "url": "zh/guide/custom-control.html",
    "revision": "e5a4a6eb0263f77cecb66a09a954cd99"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "0d8f5cbb3162474ad2048cce2521a917"
  },
  {
    "url": "zh/guide/mui-player-desktop-plugin.html",
    "revision": "cbd00d143b7a68065efde2dd5bc8ee29"
  },
  {
    "url": "zh/guide/other-problem.html",
    "revision": "dd81a50f6b043e49028fd69aad5b1a76"
  },
  {
    "url": "zh/guide/plus-desktop-plugin.html",
    "revision": "b5a5d6fc7464590fcc5f7f79ca67afd2"
  },
  {
    "url": "zh/guide/plus-mobile-plugin.html",
    "revision": "ee480953ba1ded9ffc397944a65e44e0"
  },
  {
    "url": "zh/guide/preset.html",
    "revision": "a209adef4b86b211763e91acb8c231f9"
  },
  {
    "url": "zh/guide/subtitle.html",
    "revision": "432b56ee9300ce4e62086c51ce87a9e0"
  },
  {
    "url": "zh/guide/thumbnails.html",
    "revision": "87ccf8bcfec0b3d8de81ec590e0ffe22"
  },
  {
    "url": "zh/guide/uni-app.html",
    "revision": "551f1311e5255bf9b37b0418587df6f3"
  },
  {
    "url": "zh/index.html",
    "revision": "56d54fea077c5c20f04729e71a46193c"
  },
  {
    "url": "zh/joinUs/contact.html",
    "revision": "46fbcb1481a78672f2eb8e72e726e6cf"
  },
  {
    "url": "zh/joinUs/index.html",
    "revision": "77a7783a647871a94b291709e1cd5381"
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
