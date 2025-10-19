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
    "revision": "8fcb914a6dd7991c175d29121b13762c"
  },
  {
    "url": "assets/css/0.styles.a99ceca7.css",
    "revision": "6ff41b65ec03bc112b162bec9816e58f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.6c6ce7f4.js",
    "revision": "f8f28ec1035f8eb18053c2d68410a19a"
  },
  {
    "url": "assets/js/11.71228670.js",
    "revision": "36cce24c947082c6fcd6b42382fb2d40"
  },
  {
    "url": "assets/js/12.49db7241.js",
    "revision": "9aa8ff127605a87c025d77c887cdc4fe"
  },
  {
    "url": "assets/js/13.28abae15.js",
    "revision": "a62788c16b60d2fcb11f9487184073b4"
  },
  {
    "url": "assets/js/14.bcf99c76.js",
    "revision": "d4a490818bd8b216c5c44f36747dddc7"
  },
  {
    "url": "assets/js/15.7299b08a.js",
    "revision": "0cdec362da059d0bfd0788934ee0bfd0"
  },
  {
    "url": "assets/js/16.116484ad.js",
    "revision": "8be7c6cd09b629b6956272f35cd05ca1"
  },
  {
    "url": "assets/js/17.6a7ba19e.js",
    "revision": "ab3aa98cbb9fca89c018474897aadf0f"
  },
  {
    "url": "assets/js/18.e495832c.js",
    "revision": "80f9c538b1fb4579a753ffad788b5278"
  },
  {
    "url": "assets/js/19.d402da78.js",
    "revision": "23024790ca2fb81dac78c9949adef14d"
  },
  {
    "url": "assets/js/2.0b77eb2f.js",
    "revision": "0ac6617ec1025fd737ab41e363eeb89a"
  },
  {
    "url": "assets/js/20.cee1a53a.js",
    "revision": "4b4f3e0fd97de2812a7070356412f7a0"
  },
  {
    "url": "assets/js/21.6e5fffd7.js",
    "revision": "92c4d19f2f2b18f98f8a49fd5c459fea"
  },
  {
    "url": "assets/js/22.8781e900.js",
    "revision": "59be33060b5a21437ca64f7bd1129279"
  },
  {
    "url": "assets/js/23.af04608e.js",
    "revision": "41d342e2f4e21f7d2435c59685db3eb9"
  },
  {
    "url": "assets/js/24.84f20f78.js",
    "revision": "80cfa0426f9e215a6ce1827c07cb4c5f"
  },
  {
    "url": "assets/js/25.4fc02cb3.js",
    "revision": "b400fa804ff32549b472460632d059b0"
  },
  {
    "url": "assets/js/26.e7313778.js",
    "revision": "0d8149bd5c09e5e0ea8d7c5425e610fa"
  },
  {
    "url": "assets/js/27.e9912dfc.js",
    "revision": "0b9e93bfba073c7148be24e44928b2ba"
  },
  {
    "url": "assets/js/28.278b16fe.js",
    "revision": "3e8b65c3a8a8b4016834f7e5c2c6b458"
  },
  {
    "url": "assets/js/29.fdaf8fad.js",
    "revision": "30ccef9cd7345d717b1b67d1366e0044"
  },
  {
    "url": "assets/js/3.5a98390a.js",
    "revision": "694b3229e50df80c26f31236015629f4"
  },
  {
    "url": "assets/js/30.7463019f.js",
    "revision": "e452d1c21f6cc7cbc13669dee3a09a77"
  },
  {
    "url": "assets/js/31.6a2cf095.js",
    "revision": "0d7586bb610177e623f73ea7d4a8be73"
  },
  {
    "url": "assets/js/32.391c4764.js",
    "revision": "02602d010fb928692f7757b5bdd5f84f"
  },
  {
    "url": "assets/js/33.e2f423c7.js",
    "revision": "ff04011a19eeeaadf08d2dce4879af9d"
  },
  {
    "url": "assets/js/34.a495a429.js",
    "revision": "6028978dbee449241e65097ecd244a62"
  },
  {
    "url": "assets/js/35.99645bfe.js",
    "revision": "6c4efd633cb7832e29b6c87001133a3b"
  },
  {
    "url": "assets/js/36.6eacbec0.js",
    "revision": "940deb8316187bd5d23fbdf93562a119"
  },
  {
    "url": "assets/js/37.10da3707.js",
    "revision": "d9ce8c4c5ec5df3b2bb949ab32a9153c"
  },
  {
    "url": "assets/js/38.d065c952.js",
    "revision": "900692d394634d18ddbc8ae9c5ebd808"
  },
  {
    "url": "assets/js/39.948ad36c.js",
    "revision": "d803a22e1ed297fed710f9c8872c2e3e"
  },
  {
    "url": "assets/js/4.26b1327e.js",
    "revision": "25f2fd09a0a6f0e5b738ef3a2d5a7f7a"
  },
  {
    "url": "assets/js/40.283085d5.js",
    "revision": "55554bfee18f875070d9bee7be363045"
  },
  {
    "url": "assets/js/41.0cda6467.js",
    "revision": "bff67d81470a026084532b558f373c4c"
  },
  {
    "url": "assets/js/42.9c8f0a08.js",
    "revision": "640ef213e0091398ba61d3cfc3b6e30c"
  },
  {
    "url": "assets/js/43.57ba8ee8.js",
    "revision": "4c800573637e0b09f62f3ca70ff47d25"
  },
  {
    "url": "assets/js/44.f40a2041.js",
    "revision": "f2ba8980c6a7168fa96098f222993a9a"
  },
  {
    "url": "assets/js/45.01596528.js",
    "revision": "b3576e51893d39bd7d0e8f66ce3b491b"
  },
  {
    "url": "assets/js/46.b800afd9.js",
    "revision": "01eb0b78e4684ac3fcc76ad3169ce95b"
  },
  {
    "url": "assets/js/47.c2a2e02a.js",
    "revision": "9c44c163e877234c5136c60451730d8a"
  },
  {
    "url": "assets/js/48.a974a200.js",
    "revision": "225c152eaca051a2e589080f3a2ed83e"
  },
  {
    "url": "assets/js/49.f21b5dd4.js",
    "revision": "89478f2e7a9870dca4c4aafa56795d1c"
  },
  {
    "url": "assets/js/5.5fa446f7.js",
    "revision": "1aff5b1f1178e95798f49e4208d8e85c"
  },
  {
    "url": "assets/js/50.87f71bc8.js",
    "revision": "0818412fa501c9c7037e8d3a83d269d3"
  },
  {
    "url": "assets/js/51.84fd01b9.js",
    "revision": "c07092d153c3e42a8df5140fbf7afa5d"
  },
  {
    "url": "assets/js/52.02d20820.js",
    "revision": "988e2a4605c132868354eaa237b013e5"
  },
  {
    "url": "assets/js/53.04fc8504.js",
    "revision": "807dbc436aced1fb5d8a3f41ca6ca068"
  },
  {
    "url": "assets/js/54.abfb498c.js",
    "revision": "50f1f8debd12ad55d8713157d0ae4e73"
  },
  {
    "url": "assets/js/55.6b6320c5.js",
    "revision": "661f9762caa6ac27a5f7c64dc8067534"
  },
  {
    "url": "assets/js/56.e2756133.js",
    "revision": "eee101df7e73300ea40d7aaee97ef30a"
  },
  {
    "url": "assets/js/57.c03cdba5.js",
    "revision": "463a32fd8309a703cbc25b550c9c741b"
  },
  {
    "url": "assets/js/58.63e80580.js",
    "revision": "340fc06b3bb9572cf3618e2076d0176e"
  },
  {
    "url": "assets/js/59.25456434.js",
    "revision": "ef53fd89d1bfee3b5a847995e7ea19b8"
  },
  {
    "url": "assets/js/6.5d56e1b8.js",
    "revision": "018983be93f43bc3435dbb2d5a30fad3"
  },
  {
    "url": "assets/js/60.e268260d.js",
    "revision": "33fe2c0e3af0a5180b27515161396596"
  },
  {
    "url": "assets/js/61.c2cdc948.js",
    "revision": "64cbbc2b502a3da30e17f23319f68d67"
  },
  {
    "url": "assets/js/62.b5914e19.js",
    "revision": "0812ec6a4427427ff00b0129d1688059"
  },
  {
    "url": "assets/js/63.e2d3aa7f.js",
    "revision": "a793da22db545701c693df4db849c42f"
  },
  {
    "url": "assets/js/64.6d3df0e1.js",
    "revision": "ed432c4486184a9f632f87b5849b885b"
  },
  {
    "url": "assets/js/65.926def32.js",
    "revision": "e3c8386eda308adaa4da3a2b2c2e86c6"
  },
  {
    "url": "assets/js/66.cdca1284.js",
    "revision": "cae0040444c8ade4942633f9acd09b61"
  },
  {
    "url": "assets/js/67.1657d2de.js",
    "revision": "21262190777afe7ae3b993b34f9d4848"
  },
  {
    "url": "assets/js/68.aa1ef206.js",
    "revision": "aefb9879ac355c5f60c06f6e68065751"
  },
  {
    "url": "assets/js/69.d92a1ad6.js",
    "revision": "ec8437bb849c503dd7b4c7d5e1fd46c8"
  },
  {
    "url": "assets/js/7.5a53d2fd.js",
    "revision": "5d063b58d5dd1b927a2e4c78f0e17aef"
  },
  {
    "url": "assets/js/70.cb737a6f.js",
    "revision": "83c9f896d6954bd3a7662f8e70253faf"
  },
  {
    "url": "assets/js/71.ecc5bf0a.js",
    "revision": "d30d12d9e99dd67ce5c675d936dd00d8"
  },
  {
    "url": "assets/js/72.3c04ec9e.js",
    "revision": "437393086914ddb20b68bf60fab030ec"
  },
  {
    "url": "assets/js/73.414b9ef6.js",
    "revision": "e3a10534bdb12714544a18a25dad114e"
  },
  {
    "url": "assets/js/74.f0f05a05.js",
    "revision": "7db93985b529916cb7b36ed460ec3f56"
  },
  {
    "url": "assets/js/75.9a4e6bbf.js",
    "revision": "895fbd83337455d8af2d15082356158f"
  },
  {
    "url": "assets/js/76.e30decc7.js",
    "revision": "eea5d01270130a0276f629041806ca52"
  },
  {
    "url": "assets/js/77.c76702e9.js",
    "revision": "9e01eaeadb9224dda66ae9da98760681"
  },
  {
    "url": "assets/js/78.072e9615.js",
    "revision": "970bf372445e8d86955bfbe6a53afeef"
  },
  {
    "url": "assets/js/79.8e2d84dd.js",
    "revision": "21a27a7b23208f9585e192dad27e1e31"
  },
  {
    "url": "assets/js/8.7236180c.js",
    "revision": "7be0d5e743fcdf25702b86873a5b8218"
  },
  {
    "url": "assets/js/80.a6e95e9f.js",
    "revision": "6e4ffa950264a9b63a17e05c5e28aaee"
  },
  {
    "url": "assets/js/81.902e642b.js",
    "revision": "46c7115b117addd23c8693921f535cc1"
  },
  {
    "url": "assets/js/82.970bccee.js",
    "revision": "b4b28fea19bb136f6fd1e178b2d56219"
  },
  {
    "url": "assets/js/83.8ea57703.js",
    "revision": "b6919ace7e8010f208e072c5c4329215"
  },
  {
    "url": "assets/js/app.5556f936.js",
    "revision": "a3c493f3631f3a81cf3f07668a35e672"
  },
  {
    "url": "assets/js/vendors~docsearch.a0069ed9.js",
    "revision": "7abbb55e227e0b7b782d27527dee5d99"
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
    "revision": "3bc05f549ff713959e20781543a8bef8"
  },
  {
    "url": "demo/index.html",
    "revision": "3f6edaa4f46a7876d95723dd4a8e6dfc"
  },
  {
    "url": "demo/live-demo.html",
    "revision": "af5f99781010c2321bd8e26a0f7ddbe0"
  },
  {
    "url": "demo/multiple-demo.html",
    "revision": "6686005b2206624000bac6bd2d40aced"
  },
  {
    "url": "demo/subtitle-demo.html",
    "revision": "b225e78cee6669be133b88a6e2b37b48"
  },
  {
    "url": "guide/api.html",
    "revision": "bcc078fc83cf2e0d093011cd08cd08e2"
  },
  {
    "url": "guide/barrage.html",
    "revision": "d8f40bde65cb7966f2e8530d54ed7ca0"
  },
  {
    "url": "guide/begin.html",
    "revision": "020263e323dfbf97b7ed0bcbcd84b35b"
  },
  {
    "url": "guide/custom-control.html",
    "revision": "5991ba31a32ebab0b4a9fc3a2767ce13"
  },
  {
    "url": "guide/index.html",
    "revision": "985e5e636ea9fb03253ae95a17edd857"
  },
  {
    "url": "guide/mui-player-desktop-plugin.html",
    "revision": "36a71b83b5e27e6f9f2d9fdffe47931e"
  },
  {
    "url": "guide/other-problem.html",
    "revision": "e59c02ec141fec56b41baa50bc17874b"
  },
  {
    "url": "guide/plus-desktop-plugin.html",
    "revision": "953ff7ec5f536be165bee3bfe394ae3f"
  },
  {
    "url": "guide/plus-mobile-plugin.html",
    "revision": "66089883d99c36486ed5049516e7559e"
  },
  {
    "url": "guide/preset.html",
    "revision": "d9b6bb5398f57698a4634b0ccb40a966"
  },
  {
    "url": "guide/subtitle.html",
    "revision": "7ecdbb801d33ed378d3c0c11b8e83fb7"
  },
  {
    "url": "guide/thumbnails.html",
    "revision": "fda1eb5773181f864121c956b58bba3b"
  },
  {
    "url": "guide/uni-app.html",
    "revision": "f59f1c7f8faa43f9b29ba8ef1a2c2fce"
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
    "revision": "3b24f7cf98ada0d26ec8de820b3c55ab"
  },
  {
    "url": "joinUs/contact.html",
    "revision": "c0e136451b3476a4ee55ad92c1fcb8bf"
  },
  {
    "url": "joinUs/index.html",
    "revision": "a1943bc28827a0cd40aec4041f5fec63"
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
    "url": "zh/demo/danmaku-demo.html",
    "revision": "4b4e9a907820208f64f38cf5924596aa"
  },
  {
    "url": "zh/demo/index.html",
    "revision": "308de1ca4a0f7ebd48f5e06fa9149c86"
  },
  {
    "url": "zh/demo/live-demo.html",
    "revision": "e385df33a22fd5c0cdd5506726c97fe6"
  },
  {
    "url": "zh/demo/multiple-demo.html",
    "revision": "9195fdb279d8991cae4a9cfa23ec70c4"
  },
  {
    "url": "zh/demo/subtitle-demo.html",
    "revision": "a2b01286f8b3e5ceac20dd1822e08357"
  },
  {
    "url": "zh/guide/api.html",
    "revision": "1372f179d772215b5780c4c0cc6a09d0"
  },
  {
    "url": "zh/guide/barrage.html",
    "revision": "1db209eef8e38bb29cff7c197fd49a2c"
  },
  {
    "url": "zh/guide/begin.html",
    "revision": "a45dcfcfebeb5058039a78d7fdc7ef70"
  },
  {
    "url": "zh/guide/custom-control.html",
    "revision": "cac589c80095adccdee5e5662b406fee"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "81185ab0ff3a887a76b12cd028f395a1"
  },
  {
    "url": "zh/guide/mui-player-desktop-plugin.html",
    "revision": "2e56fac2051de9d2852bb9fba1537d86"
  },
  {
    "url": "zh/guide/other-problem.html",
    "revision": "1aacec8e9a239fb371474b9dbf8844fc"
  },
  {
    "url": "zh/guide/plus-desktop-plugin.html",
    "revision": "98be48c6a9d01edcf9fa597f67b2b0f1"
  },
  {
    "url": "zh/guide/plus-mobile-plugin.html",
    "revision": "958740dbbaa092a5e2c552cd030f5f27"
  },
  {
    "url": "zh/guide/preset.html",
    "revision": "b4bd7f565fdff07fc30590902dde7a33"
  },
  {
    "url": "zh/guide/subtitle.html",
    "revision": "bc0c4c4826c3191bc59075201f81a137"
  },
  {
    "url": "zh/guide/thumbnails.html",
    "revision": "806aa8ec8bdf804731a67feb1cd54867"
  },
  {
    "url": "zh/guide/uni-app.html",
    "revision": "f8177ccabbf95e1829bb4d0d8ac94ea3"
  },
  {
    "url": "zh/index.html",
    "revision": "3e1a83df4c93f094046752a88ddfd052"
  },
  {
    "url": "zh/joinUs/contact.html",
    "revision": "616e385704bdf45a6fe7d9bb42bee96b"
  },
  {
    "url": "zh/joinUs/index.html",
    "revision": "749acd2302fa2d57f03b91ad4a64d2cf"
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
