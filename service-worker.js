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
    "revision": "5eda6a9d063b37aec7dc43324630b110"
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
    "url": "assets/js/1.a88d98e0.js",
    "revision": "52869524a29dd29fc1f029c135c072bd"
  },
  {
    "url": "assets/js/10.88e35281.js",
    "revision": "5fb548a0cffaba9fcf151d0e4b7b2fd0"
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
    "url": "assets/js/16.cabe726c.js",
    "revision": "72d69205ce3801c0068eb10ef77600b9"
  },
  {
    "url": "assets/js/17.c33caca7.js",
    "revision": "9a9ce858efb12d9c96b4f4f7bb1ff954"
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
    "url": "assets/js/20.a5a32aca.js",
    "revision": "a1fb37fb545054ccbf28932f12fc1120"
  },
  {
    "url": "assets/js/21.57679a6a.js",
    "revision": "1d7ce42d6e2b463efc848481c490c8cf"
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
    "url": "assets/js/25.d446f185.js",
    "revision": "64004277588fa20663be43553b2095a7"
  },
  {
    "url": "assets/js/26.98eb8b58.js",
    "revision": "68803bd0e15c12c92f0be696711cff44"
  },
  {
    "url": "assets/js/27.7b561245.js",
    "revision": "1ec915a33502d46b01ead22bf54010a9"
  },
  {
    "url": "assets/js/28.6ccde6a3.js",
    "revision": "c140a6fd9e6ac8e5d76973447357a66c"
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
    "url": "assets/js/30.a85263b5.js",
    "revision": "742592cdce2f4df6912797f156ca00ab"
  },
  {
    "url": "assets/js/31.a1e8a140.js",
    "revision": "d14085c3ce4105720799c62fff57f8d8"
  },
  {
    "url": "assets/js/32.4e1adf58.js",
    "revision": "178f1f14e9ac3f6981ce3a10c8ac581b"
  },
  {
    "url": "assets/js/33.6c7cbd91.js",
    "revision": "81e5b479ad162a049f8c6b21adb82fdc"
  },
  {
    "url": "assets/js/34.d9bf08c1.js",
    "revision": "1095cdf27b7fa5225a53f0151a39f4ff"
  },
  {
    "url": "assets/js/35.f6240d99.js",
    "revision": "627a9970dc005f4a92d4581cfba502ca"
  },
  {
    "url": "assets/js/36.96b5e696.js",
    "revision": "76c1afe4f7a722653b9a67feade0b7dc"
  },
  {
    "url": "assets/js/37.cbc64041.js",
    "revision": "192deefc87a61d86a2932cac7bccef08"
  },
  {
    "url": "assets/js/38.d426c80a.js",
    "revision": "276bef1154d75107edf8b2f8484e96eb"
  },
  {
    "url": "assets/js/39.938b3cae.js",
    "revision": "4d79396c47a110ab3553a236a7a75e10"
  },
  {
    "url": "assets/js/4.4747eb38.js",
    "revision": "9ba492d6d392cb5e797a40c4b4c71e40"
  },
  {
    "url": "assets/js/40.f27ed20c.js",
    "revision": "23e6e8093cc439b9a18437010bdf005e"
  },
  {
    "url": "assets/js/41.6404cb6f.js",
    "revision": "3226e5813373e47fcc0093d6dab4c264"
  },
  {
    "url": "assets/js/42.095bd2fe.js",
    "revision": "28ef4725bc7be03dd2dcb5fda4051728"
  },
  {
    "url": "assets/js/43.31fed85b.js",
    "revision": "2c2b52ebdf1a8e6277deb6d9851743cf"
  },
  {
    "url": "assets/js/44.f185f39d.js",
    "revision": "271cd8eba3ff573aed6b086a055e0c0b"
  },
  {
    "url": "assets/js/45.0b5b8671.js",
    "revision": "7cfd07c72364d11c192321128c775c9c"
  },
  {
    "url": "assets/js/46.ec1be666.js",
    "revision": "be9b506f47025b1bc22edcb7953d24ff"
  },
  {
    "url": "assets/js/47.6f33bd99.js",
    "revision": "b5a033ffe6fedb99da405d9d772a9db6"
  },
  {
    "url": "assets/js/48.fb6360aa.js",
    "revision": "7e0860eb89efa1cec4f7ad0b27366581"
  },
  {
    "url": "assets/js/49.9dc0a8a2.js",
    "revision": "7823f2cbf6f628c1eb6cd51c38d66ae5"
  },
  {
    "url": "assets/js/5.4fbd5a07.js",
    "revision": "10550444ad25bfd910a2a97073769ef8"
  },
  {
    "url": "assets/js/50.d64aef0a.js",
    "revision": "c303bb329f2135d80c4e63a3decf0ba0"
  },
  {
    "url": "assets/js/51.72f8cd13.js",
    "revision": "b1936dad3ed60a612ffc930bd2623098"
  },
  {
    "url": "assets/js/52.eb58f347.js",
    "revision": "40deb6088a4b23ceb9e65454ffda529d"
  },
  {
    "url": "assets/js/53.fe80a267.js",
    "revision": "755f0ca9402341cf84b3ceedb4733897"
  },
  {
    "url": "assets/js/54.0533d167.js",
    "revision": "4798d5c434ccc06fffa6afea439daa20"
  },
  {
    "url": "assets/js/55.db07e5ed.js",
    "revision": "69e771503c3d10fd02aa848886c0ca9e"
  },
  {
    "url": "assets/js/56.532aba77.js",
    "revision": "4fdb25c3786aa153419a18fdb6bcc336"
  },
  {
    "url": "assets/js/57.95552b09.js",
    "revision": "98f0ff9611c2c8a6d15831cea4311a19"
  },
  {
    "url": "assets/js/58.e901e564.js",
    "revision": "484614a42d15f734778ef72fe7152000"
  },
  {
    "url": "assets/js/59.0041d204.js",
    "revision": "24dd2c175312904b62da55f87829f123"
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
    "url": "assets/js/app.4a2cf593.js",
    "revision": "7ece67fb01ab4994060942fbde98d2b9"
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
    "revision": "9974ad7747fa32067305224f64f824aa"
  },
  {
    "url": "demo/index.html",
    "revision": "8450ea6aa6dd351721dcdeeb53a9f459"
  },
  {
    "url": "demo/live-demo.html",
    "revision": "afdf55e4376599d6314ca6831039ccc5"
  },
  {
    "url": "demo/multiple-demo.html",
    "revision": "92c4ad21080f052e38ce5a6e6b0ed8b3"
  },
  {
    "url": "demo/subtitle-demo.html",
    "revision": "4a57ea9e170b8a0848de39f38a69444b"
  },
  {
    "url": "guide/api.html",
    "revision": "4ce0b442db6f1285e3d9318bf4f2d700"
  },
  {
    "url": "guide/barrage.html",
    "revision": "3100908089df28c64425de222609d45b"
  },
  {
    "url": "guide/begin.html",
    "revision": "b63598540806e84f481240112c0bf424"
  },
  {
    "url": "guide/custom-control.html",
    "revision": "c08fc69e0ec7346daeb7a21a8cf19a4b"
  },
  {
    "url": "guide/index.html",
    "revision": "0f351ff38aceb914d03a3a0c6cb4d869"
  },
  {
    "url": "guide/mui-player-desktop-plugin.html",
    "revision": "809dd7c25293f6000cde196a9b6d918e"
  },
  {
    "url": "guide/mui-player-mobile-plugin.html",
    "revision": "a1e85889340a251a0ae2eadf25572e80"
  },
  {
    "url": "guide/other-problem.html",
    "revision": "7d543b899341b7d99b27886a62bc1f14"
  },
  {
    "url": "guide/preset.html",
    "revision": "4392625dc8cdf3fcf9f9aa3e3db587f0"
  },
  {
    "url": "guide/subtitle.html",
    "revision": "00bee86341415ce0993a8f660cc4a63e"
  },
  {
    "url": "guide/thumbnails.html",
    "revision": "38348644e1b6695f14e5f034362c707a"
  },
  {
    "url": "guide/uni-app.html",
    "revision": "48146888913ac8e1d8297f27029e3b46"
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
    "revision": "4308e6b8626f267fb0a232e113520a82"
  },
  {
    "url": "joinUs/contact.html",
    "revision": "c1541d83165c42bc169445d08237d8e5"
  },
  {
    "url": "joinUs/index.html",
    "revision": "bc7005ec65ec493d8ca036b47623a551"
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
    "revision": "f86d48bb397dddfeafbe678b8c933369"
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
    "revision": "08b0878728814f0849939229f9a9cb23"
  },
  {
    "url": "zh/demo/index.html",
    "revision": "887ecd9cd89f0aaeda2a66d408761b93"
  },
  {
    "url": "zh/demo/live-demo.html",
    "revision": "b00220a0752b3b2c41c756484e40d96b"
  },
  {
    "url": "zh/demo/multiple-demo.html",
    "revision": "c68c4bef12c9c9e1d18696ae87dd8085"
  },
  {
    "url": "zh/demo/subtitle-demo.html",
    "revision": "ac3eea050adbb6d46d2381728530a3dc"
  },
  {
    "url": "zh/guide/api.html",
    "revision": "38bb39e4272814584491d67339f5b0a7"
  },
  {
    "url": "zh/guide/barrage.html",
    "revision": "8a6014bf34111b629c6d1fec8805e240"
  },
  {
    "url": "zh/guide/begin.html",
    "revision": "00df3acd7e26922df063dce2c6d66095"
  },
  {
    "url": "zh/guide/custom-control.html",
    "revision": "1414c6b999b3b94d9f067991d0992815"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "b99d4142c6cde9d02cbdfba48cd07d54"
  },
  {
    "url": "zh/guide/mui-player-desktop-plugin.html",
    "revision": "f80832c3d1ee82918a572bde9da674ca"
  },
  {
    "url": "zh/guide/mui-player-mobile-plugin.html",
    "revision": "11484fab795bf09488b7810cb5d07836"
  },
  {
    "url": "zh/guide/other-problem.html",
    "revision": "7121419d6fefadd56934e0b545b6b868"
  },
  {
    "url": "zh/guide/preset.html",
    "revision": "de6a4ec04d1c9ebd98d64b60708866b7"
  },
  {
    "url": "zh/guide/subtitle.html",
    "revision": "a902f109684c13ef1d8e988747827527"
  },
  {
    "url": "zh/guide/thumbnails.html",
    "revision": "ad9cb46b9af25436a04ea09e71889681"
  },
  {
    "url": "zh/guide/uni-app.html",
    "revision": "e310682280f3fe809acaa4fbb43214b6"
  },
  {
    "url": "zh/index.html",
    "revision": "d0190ec68fef81200dd3ca8cd0dd3f5a"
  },
  {
    "url": "zh/joinUs/contact.html",
    "revision": "bfae08839f0376fb0a41531e67b3e3de"
  },
  {
    "url": "zh/joinUs/index.html",
    "revision": "492ff6c79d96cfe0247ad5b62268e35e"
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
