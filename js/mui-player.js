!function(self,definition) {
	typeof exports == 'object' && typeof module == 'object' ? module.exports = definition() : typeof define == 'function' && typeof define.amd ? define(definition) : self.MuiPlayer = definition();
}(window,function() {
	var MuiPlayer = function(config) {
		var _this = this;
		
		var webpagePlugin = ''; // desktop plugin object
		var mobilePlugin = ''; // mobile plugin object
		var hls = null; // hls object
		var flv = null; // flv object
		
		var option = config || {};
		
		var plugins = option['plugins'] || [];
		
		this._event_ = {}; // 订阅器事件保存对象
		
		
		// var videoOrigin = document.createElement('video');
		// videoOrigin.setAttribute('src',option['src']);
		// videoOrigin.setAttribute('controls','controls');
		// option['container'].appendChild(videoOrigin);
		// return;
		
		var con = typeof option['container'] == 'string' ? document.querySelector(option['container']) : option['container'];
		if(!con) { return };
		
		var $CONSTANT = {
			// 样式默认可选用的大小单位
			unitLengthReg:/^\d\d?\d?\%?(px)?(cm)?(mm)?(em)?(rem)?(vw)?(vh)?(auto)?(inherit)?(initial)?$/,
		};
		
		var $habit = {
			themeColor:'#1e98d4', //主题样色
		};
		
		var $node = {
			// Mplayer Log write area
			// logWrite:'<div id="testarea"style="word-break: break-all;color: white;position: absolute;width: 200px;height: 150px;background-color:rgba(255,255,255,0.6);top: 50%;transform: translateY(-50%);"><p id="p1"></p><p id="p2"></p><p id="p3"></p><p id="p4"></p></div>',
			
			// HTML5 Video
			video:'<!-- HTML5 Video --><div class="video-wrapper"><video width="100%" height="100%"></video></div>',
			// 视频加载时封面
			mplayerPoster:'<div class="mplayer-poster" id="mplayer-poster"></div>',
			// Mplayer遮罩层
			mplayerCover:'<!-- 媒体播放遮罩层 --><div class="mplayer-cover" id="mplayer-cover"></div>',
			// Mplayer加载Loading
			mplayerLoading:'<!-- Mplayer加载Loading --><div class="mplayer-loading"id="mplayer-loading"control><svg viewBox="25 25 50 50"class="mplayer-loading__circular"><circle cx="50"cy="50"r="20"fill="none"></circle></svg></div>',
			// 视频加载错误显示元素
			mplayerError:'<!-- 视频加载错误显示 --><div class="mplayer-error"id="mplayer-error"control><div class="errop-tip">播放加载失败，请稍后重试</div><svg t="1575125481608"class="icon"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"p-id="5893"width="28"height="28"><path d="M513.34 831.74C337.03 831.74 193.6 688.31 193.6 512c0-71.09 23.31-138.85 65.53-194.03v51.61c0 17.67 14.33 32 32 32s32-14.33 32-32V239.45c0-5.87-1.59-11.36-4.34-16.09-0.06-0.1-0.11-0.2-0.17-0.3-0.16-0.28-0.34-0.55-0.51-0.82-0.13-0.2-0.26-0.41-0.39-0.61-0.08-0.13-0.17-0.25-0.26-0.37a35.5 35.5 0 0 0-1.58-2.13c-6.81-8.35-16.96-12.35-26.95-11.69h-130c-17.67 0-32 14.33-32 32s14.33 32 32 32h55.35C159.8 339 129.6 423.35 129.6 512c0 51.79 10.15 102.05 30.17 149.38 19.33 45.7 46.99 86.74 82.23 121.97 35.23 35.23 76.27 62.9 121.97 82.23 47.33 20.02 97.59 30.17 149.38 30.17 17.67 0 32-14.33 32-32s-14.34-32.01-32.01-32.01zM855.38 762.3h-51.23c19.81-23 36.93-48.3 50.75-75.22 27.6-53.74 42.18-114.28 42.18-175.08 0-51.79-10.15-102.05-30.17-149.38-19.33-45.7-46.99-86.73-82.23-121.97-35.23-35.23-76.27-62.9-121.97-82.23-47.33-20.02-97.59-30.17-149.38-30.17-17.67 0-32 14.33-32 32s14.33 32 32 32c176.31 0 319.74 143.44 319.74 319.74 0 78.31-27.68 151.61-77.6 209.05l0.24-56.04c0.08-17.67-14.19-32.06-31.86-32.14h-0.14c-17.61 0-31.92 14.24-32 31.86l-0.55 129.43a31.988 31.988 0 0 0 9.32 22.71 31.68 31.68 0 0 0 5.33 4.3c0.02 0.01 0.04 0.02 0.06 0.04 0.48 0.31 0.97 0.61 1.47 0.89l0.15 0.09c0.5 0.28 1 0.54 1.51 0.8 0.03 0.01 0.05 0.03 0.08 0.04 1.64 0.8 3.34 1.46 5.1 1.98 0.01 0 0.02 0.01 0.03 0.01 0.55 0.16 1.1 0.3 1.66 0.43 0.07 0.02 0.15 0.03 0.22 0.05 0.5 0.11 1 0.21 1.5 0.3 0.1 0.02 0.2 0.04 0.3 0.05 0.48 0.08 0.96 0.15 1.44 0.21 0.11 0.01 0.23 0.03 0.34 0.04 0.48 0.05 0.95 0.09 1.43 0.12l0.34 0.03c0.53 0.03 1.07 0.04 1.61 0.05h132.31c17.67 0 32-14.33 32-32s-14.31-31.99-31.98-31.99z"p-id="5894"fill="#ffffff"></path></svg></div>',
			// Mplayer 头部容器
			mplayerHeader:'<!-- Mplayer 顶部导航 --><div class="mplayer-header"id="mplayer-header"><div class="title-groupt"id="title-groupt"><button class="player-btn header-control back-button keyboard-input"id="back-button"control><svg id="back-icon-svg"t="1573891955387"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"p-id="4550"width="18"height="18"><path d="M305.519192 557.640404c-11.636364 0-23.40202-4.39596-32.323232-13.317172-17.842424-17.842424-17.842424-46.674747 0-64.517171L683.830303 69.30101c17.842424-17.842424 46.674747-17.842424 64.517172 0 17.842424 17.842424 17.842424 46.674747 0 64.517172L337.713131 544.323232c-8.921212 8.921212-20.557576 13.317172-32.193939 13.317172z m0 0"fill="#ffffff"p-id="4551"></path><path d="M715.894949 968.145455c-11.636364 0-23.40202-4.39596-32.323232-13.317172L273.19596 544.323232c-17.842424-17.842424-17.842424-46.674747 0-64.517171 17.842424-17.842424 46.674747-17.842424 64.517171 0l410.505051 410.50505c17.842424 17.842424 17.842424 46.674747 0 64.517172-8.921212 8.921212-20.557576 13.317172-32.323233 13.317172z m0 0"fill="#ffffff"p-id="4552"></path></svg><div class="title-name"id="title-name"></div></button></div><div class="buttom-group"id="buttom-group"></div></div>',
			// Mplayer 底部容器
			mplayerFooter:'<!-- Mplayer 底部操作控件 --><div class="mplayer-footer"id="mplayer-footer"><div class="progress"id="progress"><div class="left-part"id="left-part"><button class="player-btn keyboard-input play-switch footer-control"id="play-switch"control><!--play button--><div class="_play"><svg t="1574051894346"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"p-id="1212"><path d="M324.085 95.787l500.422 300.664c82.373 50.453 79.284 136.946-1.030 186.37v0l-506.6 304.784c-41.187 23.683-87.522 37.068-131.798 9.267-36.037-22.653-46.335-58.691-46.335-97.819v-616.774c0-39.127 13.386-75.166 48.395-97.819 45.305-27.801 94.731-14.416 136.946 11.327v0z"p-id="1213"fill="#ffffff"></path></svg></div><!--pause button--><div class="_pause"style="display: none;"><svg t="1574051952939"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"p-id="1434"><path d="M248.26311111 515.072c0-110.592-0.22755555-221.184 0.11377778-331.776 0.11377778-35.84 18.20444445-60.87111111 49.26577778-70.99733333 27.53422222-8.87466667 56.88888889 0.34133333 75.32088888 23.77955555 10.58133333 13.42577778 15.13244445 28.89955555 15.01866667 45.96622223-0.11377778 223.11822222 0.11377778 446.23644445-0.22755555 669.35466666-0.11377778 42.55288889-31.06133333 73.27288889-70.54222222 72.81777778-39.25333333-0.45511111-68.72177778-31.51644445-68.94933334-74.52444444-0.34133333-111.50222222 0-223.11822222 0-334.62044445zM638.52088889 516.66488889V193.64977778c0-52.45155555 27.42044445-85.21955555 70.54222222-84.65066667 42.43911111 0.56888889 69.17688889 32.42666667 69.17688889 83.05777778 0.11377778 218.22577778 0.11377778 436.56533333 0 654.79111111 0 38.34311111-17.29422222 63.60177778-49.152 73.95555555-27.648 8.98844445-56.54755555 0-75.43466667-23.552-12.17422222-15.13244445-15.36-32.768-15.24622222-51.76888888 0.22755555-109.568 0.11377778-219.136 0.11377778-328.81777778z"p-id="1435"fill="#ffffff"></path></svg></div></button><!--直播模式--><button class="player-btn live-mode footer-control"id="live-mode"control><div class="spot"></div><div class="mode-text">直播</div></button></div><!--底部进度容器--><div class="progress-container"id="progress-container"><!--安全进度时长--><div class="progress-begin"id="progress-begin">开始</div><!--拖动有效的作用域--><div class="touch-effective"id="touch-effective"><!--加载进度条总长--><div class="progress-total"id="progress-total"></div><!--资源缓存进度--><div class="progress-buffered"id="progress-buffered"></div><!--播放进度--><div class="progress-play"id="progress-play"></div><!--拖动进度球--><div class="ball-container"><div class="progress-drag"id="progress-ball"><div class="progress-ball"></div></div></div></div><!--总时长--><div class="progress-long"id="progress-long">结束</div></div><div class="right-part"id="right-part"><!--全屏开关--><button class="player-btn keyboard-input full-switch footer-control"id="full-switch"tooltip="全屏"control><div class="_full"><svg t="1607611836872"class="icon"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"p-id="2384"><path d="M842 797.08l-226.07999999-226.08a30 30 0 0 0-42.42000001 42.42000001L799.58 839.5 692 839.5a30 30 0 0 0 0 60L872 899.5a29.91 29.91 0 0 0 30-29.99999999l0-180a30 30 0 0 0-60 0l0 107.57999999zM130.79 128.29A29.91 29.91 0 0 1 152 119.5l180 0a30 30 0 0 1 0 60l-107.58 0 226.08 226.08a30 30 0 0 1-42.42000001 42.42L182 221.92 182 329.50000001a30 30 0 0 1-60 0L122 149.50000001a29.91 29.91 0 0 1 8.79-21.21000001z"fill="#ffffff"p-id="2385"></path></svg></div><div class="_unfull"style="display: none;"><svg t="1607611848290"class="icon"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"p-id="2546"><path d="M416.00000001 370.752L174.848 129.59999999a32 32 0 0 0-45.24800001 45.24800001L370.752 416.00000001 256 416a32 32 0 0 0 0 64l192 0a31.904 31.904 0 0 0 32-32L480 256a32 32 0 0 0-64 0l1e-8 114.752z m137.37599999 182.624A31.904 31.904 0 0 1 576 544L768 544a32 32 0 0 1 0 64l-114.752-1e-8 241.15200001 241.15200001a32 32 0 1 1-45.24800001 45.24800001L607.99999999 653.248 608 768a32 32 0 0 1-64 0l0-192a31.904 31.904 0 0 1 9.376-22.624z"fill="#ffffff"p-id="2547"></path></svg></div></button></div></div></div>',
			// 底部播放迷你进度条
			miniProgress:'<!-- Mplayer 底部播放迷你进度条 --><div class="mini-progress"id="mini-progress"><!--加载进度条总长--><div class="mini-total"id="mini-total"></div><!--资源缓存进度--><div class="mini-buffered"id="mini-buffered"></div><!--播放进度--><div class="mini-play"id="mini-play"></div></div>',
		};
		
		// 全局变量保存对象
		var $global = function() {
			return {
				first_authplay:false,
				isReady:false,
				webpagePlugin:{},
				mobilePlugin:{},
				cssAutoprefixer:['webkit','ms','moz','o'],
			}
		};
		
		var element = function() {
			return {
				mPlayer:con,
				videoObject:con.querySelector('video'), // 频媒体对象
				mplayerCover:con.querySelector('#mplayer-cover'), //mplayer 播放遮罩层
				mplayerPoster:con.querySelector('#mplayer-poster'), //mplayer 初始化播放前封面
				
				mplayerHeader:con.querySelector('#mplayer-header'), //视屏头部栏容器
				headerMenu:con.querySelector('#buttom-group'), //视频头部按钮组
				backButton:con.querySelector('#back-button'), //返回按钮
				
				mplayerFooter:con.querySelector('#mplayer-footer'), //视频底部栏容器
				progressContainer:con.querySelector('#progress-container'), // 底部进度容器
				playSwitch:con.querySelector('#play-switch'), //播放开关
				fullSwitch:con.querySelector('#full-switch'), //全屏开关
				progressBall:con.querySelector('#progress-ball'), //进度拖动球
				progressBegin:con.querySelector('#progress-begin'), //当前播放时间
				progressLong:con.querySelector('#progress-long'), //当前播放总时长
				touchEffective:con.querySelector('#touch-effective'), //Footer，播放进度条父级容器
				progressBuffered:con.querySelector('#progress-buffered'), //媒体资源缓冲进度条容器
				progressPlay:con.querySelector('#progress-play'), //正在播放的进度条容器
				
				miniProgress:con.querySelector('#mini-progress'), //底部迷你进度条父级容器
				miniBuffered:con.querySelector('#mini-buffered'), //底部迷你缓冲进度条
				miniPlay:con.querySelector('#mini-play'), //底部迷你播放进度条
				
				mplayerLoading:con.querySelector('#mplayer-loading'), //播放器加载中Loading父级容器
				mplayerError:con.querySelector('#mplayer-error'), //播放加载错误显示容器
			}
		};
		var $el = new element();
		
		// 主应用，声明播放器所有依赖使用的变量
		var variable = function() {
			return {
				// 播放器状态变量
				mediaPlayDirectives:0, // 标识发送媒体播放指令。0：暂停 / 1：播放. 改变量标识当preload=none 时,hls/flv视频该如何开始解码播放
				isFullScreen:false, //当前是否全屏播放
				showScreenControls:false, //是否显示界面操作控件
				ball_move_status:false,	//标识进度拖动球是否正在触发Touch Move事件，状态值true or false
				
				isPlay:false, //标识当前媒体状态是否正在播放
				mediaStatus:false,		//媒体文件是否初始化，在onDurationChange 之后改为true,默认为false
				duration:0,				//媒体资源的总时长
				percentage:0,			//当前播放百分比
				currentTime:0,		//当前播放的时间节点/秒
				playError:0, //标识当前播放是否发生错误, 0 标识没有错误状态,1 表示当前已发生 1 一次错误
				isDestory:false, //标识当前播放器是否已销毁
				
				// 播放器页面动作变量
				startX:null,
				startY:null,
				moveX:null,
				moveY:null,
				_defaultPlayProgressPro:null, // 默认播放进度百分比
				isTouchMove:false,
			}
		}
		var $data = new variable();
		
		var $method = {
			getLanguageText:function() {
				var languageText = {
					'zh-cn':{
						settings:'设置',
						coveredPlay:'铺满播放',
						loopPlay:'循环播放',
						playbackSpeed:'播放速度',
						share:'分享',
						pictureInPicture:'画中画',
						exitPictureInPicture:'退出画中画',
						pageScreen:'网页全屏',
						exitPageScreen:'退出网页全屏',
						fullScreen:'全屏',
						exitFullScreen:'退出全屏',
						normal:'正常',
						open:'打开',
						subtitles:'字幕',
						selectLangage:'选择语言',
					},
					'en':{
						settings:'Settings',
						coveredPlay:'Covered play',
						loopPlay:'Loop play',
						playbackSpeed:'Playback speed',
						share:'Share',
						pictureInPicture:'Picture in picture',
						exitPictureInPicture:'Exit picture in picture',
						pageScreen:'Page screen',
						exitPageScreen:'Exit page screen',
						fullScreen:'Full screen',
						exitFullScreen:'Exit full screen',
						normal:'Normal',
						open:'Open',
						subtitles:'Subtitles',
						selectLangage:'Select langage',
					},
					'zh-tw':{
						settings:'設置',
						coveredPlay:'鋪滿播放',
						loopPlay:'循環播放',
						playbackSpeed:'播放速度',
						share:'分享',
						pictureInPicture:'畫中畫',
						exitPictureInPicture:'退出畫中畫',
						pageScreen:'網頁全屏',
						exitPageScreen:'退出網頁全屏',
						fullScreen:'全屏',
						exitFullScreen:'退出全屏',
						normal:'正常',
						open:'打開',
						subtitles:'字幕',
						selectLangage:'選擇語言',
					}
				}
				
				return languageText;
			},
			// 获取语言字符对象
			getLangObject:function() {
				var _optional = ['zh-cn','en','zh-tw'];
				var _language = (option['lang']) || (navigator.language || navigator.browserLanguage || 'zh-cn');
				var langObject = null;
				if(_optional.indexOf(_language.toLowerCase()) != -1) {
					langObject = $method.getLanguageText()[_language.toLowerCase()];
				}else {
					langObject = $method.getLanguageText()['zh-cn']
				}
				return langObject;
			},
			// 初始化创建Mplayer 元素
			initCreateMplayer:function(isReload) {
				var template = $node.video + $node.mplayerPoster + $node.mplayerCover + $node.mplayerLoading + $node.mplayerError + $node.mplayerHeader + $node.mplayerFooter + $node.miniProgress;
				template = $node.logWrite ? template + $node.logWrite : template;
				
				// here init create mobile or webpage plugin
				for(var i = 0;i < plugins.length;i++) {
					if($method.returnSys() == 'androd' || $method.returnSys() == 'ios') {
						if(plugins[i] instanceof Object && plugins[i].name == 'MuiPlayerMobilePlugin') {
							mobilePlugin = plugins[i];
						}
					}
					
					if($method.returnSys() == 'window') {
						if(plugins[i] instanceof Object && plugins[i].name == 'MuiPlayerDesktopPlugin') {
							webpagePlugin = plugins[i];
						}
					}
				}
				
				// runtime delete annotation
				var deleteReg = /<!--.*?-->/g;
				template = template.toString().replace(deleteReg,"");

				var fragment = $method.createRangeIsDocFragment(template)
				
				// 1、initialization config attribute
				fragment = $method.initConifgAttribute(fragment,isReload);
				// 2、initialization config control is show
				fragment = $method.initConfigControl(fragment);
				// 3、initialization custom control config 
				fragment = $method.initConfigCustom(fragment);
				// 4、initialization custom mplayer theme
				fragment = $method.initConfigTheme(fragment);
				
				var _option = {
					option:option,
					_this:_this,
					$el:element,
					$data:$data,
					$method:$method,
					$habit:$habit,
					$CONSTANT:$CONSTANT,
				}
				mobilePlugin ? fragment = mobilePlugin.appendTemplate(fragment,_option) : '';
				webpagePlugin ? fragment = webpagePlugin.appendTemplate(fragment,_option) : '';
				
				var _wrapper = con.querySelector('#mplayer-media-wrapper');
				_wrapper ? $method.removeNode(con,'#mplayer-media-wrapper') : '';
				_wrapper = document.createElement('div');
				_wrapper.setAttribute('id','mplayer-media-wrapper');
				_wrapper.setAttribute('class','player-wrapper');

				// append player element
				_wrapper.appendChild(fragment);
				$el.mPlayer.appendChild(_wrapper);
				// here if video src at null than return execute
				if(!option['src']) { $method.showToast('视频地址为空'); return;};
				
				$method.playerReady();
				
				// delay active trigger player ready event
				setTimeout(function() {
					_this._global_.isReady = true;
					_this.emit('ready');

					// status change and event trigger
					setTimeout(() => {
						$method.onScreenResize({ type:'showControls' }); 
					}, 10);
				},100);
			},
			// 添加触发事件监听
			onAction:function() {
				
			},
			// 播放器已创建完成时
			playerReady:function() {
				$method.resetVariable();
				
				// if option authplay at true. than initialization loading show ?. then method execute
				if(option['autoplay'] === true) {
					$data.mediaPlayDirectives = 1;
					$method.onPlay();
				};
				
				$method.toggleEventListenerGlobal('add','playerReady');
				$method.toggleEventListenerCustom('add');
			},
			// 重载控件元素
			overloadingEl:function() {
				$el = new element();
				for(var key of Object.keys($el)) {
					if(key == 'mPlayer') { continue };
					!$el[key] ? $el[key] = {
						style:{},
						classList:{
							add:() => {},
							contains:() => {},
							remove:() => {},
						},
						addEventListener:() => {},
						removeEventListener:() => {},
					} : '';
					
					$el[key].querySelector = function(selector) {
						// var tors = ['._play','._pause','._full','._unfull'];
						var node = this.querySelectorAll ? this.querySelectorAll(selector) : [];
						if(node[0]) {
							return node[0];
						}else {
							return {
								exist:false,
								style:{},
								height:'',
								width:'',
							}
						}
					}
				}
			},
			// 初始化播放器变量 / 事件管理
			resetVariable:function() {
				// reset $data
				var _data = new variable();
				for(var i = 0;i < Object.keys(_data).length;i++) {
					var key = Object.keys(_data)[i];
					$data[key] = _data[key];
				}
				
				// overloading $el
				$method.overloadingEl();
				
				// reset $global
				_this._global_ = new $global();
			},
			// html5 plus 环境处理
			plusRuntimeHandle:function(e) {
				e = e ? e : {};

				// 运行环境从后台切换到前台事件
				if(e.type == 'resume') {
					_this._global_._beferPlayState ? $el.videoObject.play() : '';
					$data.isFullScreen ? plus.navigator.hideSystemNavigation() : '';
				}

				// 运行环境从前台切换到后台事件
				if(e.type == 'pause') {
					_this._global_._beferPlayState = $data.isPlay;
					$el.videoObject.pause();
				}
			},
			/**
			 * 针对运行环境独立兼容性处理
			 * @param {Object} obj flag object
			 */
			runtimeCompatibleHandle:function(e) {
				e = e ? e : {};
				
				if(e.type == 'webkitbeginfullscreen') {
					$method.createTimerCloseControl({ type:'cancel' });
				}
				
				if(e.type == 'webkitendfullscreen') {
					$method.createTimerCloseControl();
				}
			},
			// 合并主题配置
			assginConfig:function() {
				option['themeColor'] ? $habit.themeColor = option['themeColor'] : '';
			},
			// 驼峰命名解析
			parseCamel:function(name) {
				return name.replace(/\B([A-Z])/g, '-$1').toLowerCase();
			},
			// 创建 Range 并生成 DocumentFragment
			createRangeIsDocFragment:function(innerhtml) {
				var range = document.createRange();
				range.selectNode($el.mPlayer);
				var fragment = range.createContextualFragment(innerhtml);
				return fragment;
			},
			// 控制台输出log. 可指定 type 输出类型 error/warn...
			consoleLog:function(text,type) {
				if(process.env.NODE_ENV == 'development') {
					console[type ? type : 'log'](text);
				}
			},
			/**
			 * 删除元素节点
			 * @param {Object} content 指定删除元素的主体元素 no required
			 * @param {Object} selector 选择器，指定删除元素的节点 required
			 */
			removeNode:function(content,selector) {
				// specified body element execute
				if(content instanceof Element || content instanceof DocumentFragment) {
					var node = content.querySelector(selector);
					if(node instanceof Element) {
						var parentNode = node.parentNode;
						parentNode.removeChild(node);
					}else {
						console.log('the body element not query the selector node......','error');
					}
					return
				}
				
				// un specified body element execute，from document query selector
				var el = document.querySelector(selector);
				if(el) {
					var parentNode = el.parentNode;
					parentNode.removeChild(el);
				}else {
					console.log('from document not query the selector node......','error');
				}
			},
			// 获取键 Key Code 值
			getKeyCode:function(event) {
				return event.keyCode ? event.keyCode : (event.which ? event.which : '');
			},
			// 设置焦点开关，status 可取值【ON、OFF】
			focusToggle:function(status) {
				var _mPlayer = $el.mPlayer;
				_mPlayer.classList[status == 'ON' ? 'add' : 'remove']('mp-keyboard-focus');
			},
			// 指定元素添加样式
			setElementStyle:function(element,styleObject) {
				var styles = Object.keys(styleObject);
				if(styles.length > 0) {
					for(var value of styles) {
						element.style[$method.parseCamel(value)] = styleObject[value];
					}

					element.setAttribute('stylesheet',JSON.stringify(styleObject));
				}
			},
			// 4、初始化设置主题
			initConfigTheme:function(html) {
				$method.assginConfig();
				html.querySelector('#progress-play') ? html.querySelector('#progress-play').style.background = $habit.themeColor : '';
				html.querySelector('#mplayer-loading') ? html.querySelector('#mplayer-loading').style.color = $habit.themeColor : '';
				html.querySelector('#mini-play') ? html.querySelector('#mini-play').style.background = $habit.themeColor : '';
				html.querySelector('#live-mode') ? html.querySelector('#live-mode .spot').style.background = $habit.themeColor : '';
				return html;
			},
			// 3、初始化自定义控件配置
			initConfigCustom:function(html) {
				var custom = option['custom'] || {};
				
				// 自定义播放器 “页头” 按钮控件组
				var headControls = custom['headControls'] || [];
				for(var i = 0;i < headControls.length;i++) {
					// set max config option size 5 count
					if(i >= 5) { break };
					
					// query template slot at element
					if(headControls[i] instanceof Object && headControls[i].slot) {
						var slotName = headControls[i].slot;
						var slot = $el.mPlayer.querySelector('[slot='+slotName+']');
						if(slot) {
							var nodeStr = slot.tagName == 'TEMPLATE' ? slot.content.cloneNode(true) : $method.createRangeIsDocFragment(slot.innerHTML);
							var div = document.createElement('button');
							div.setAttribute('class','player-btn header-control');
							div.setAttribute('slot',slotName);
							div.setAttribute('control','');
							headControls[i].click instanceof Function ? div.classList.add('keyboard-input') : '';
							(headControls[i].style && headControls[i].style instanceof Object) ? $method.setElementStyle(div,headControls[i].style) : '';

							div.appendChild(nodeStr);
							html.querySelector('#buttom-group').insertBefore(div,html.querySelector('#buttom-group .header-control'));

							// hidden node
							slot.style.display = 'none';
						}
					}
				}
				
				// 自定义播放器 “页脚” 按钮控件组
				var footerControls = custom['footerControls'] || [];
				for(var i = 0;i < footerControls.length;i++) {
					// set max config option size 5 count
					if(i >= 5) { break };
					
					// query template slot at element
					if(footerControls[i] instanceof Object && footerControls[i].slot) {
						var slotName = footerControls[i].slot;
						var slot = $el.mPlayer.querySelector('[slot='+slotName+']');
						if(slot) {
							var nodeStr = slot.tagName == 'TEMPLATE' ? slot.content.cloneNode(true) : $method.createRangeIsDocFragment(slot.innerHTML);
							// create footer custom button
							var div = document.createElement('button');
							div.setAttribute('class','player-btn footer-control');
							div.setAttribute('slot',slotName);
							div.setAttribute('control','');
							footerControls[i].tooltip ? div.setAttribute('tooltip',footerControls[i].tooltip) : '';
							footerControls[i].click instanceof Function ? div.classList.add('keyboard-input') : '';
							(footerControls[i].style && footerControls[i].style instanceof Object) ? $method.setElementStyle(div,footerControls[i].style) : '';

							div.appendChild(nodeStr);
							
							// insertBefore at eleemnt
							if(footerControls[i].position == 'left') {
								html.querySelector('#mplayer-footer #left-part').appendChild(div);
							}else {
								html.querySelector('#mplayer-footer #right-part').insertBefore(div,html.querySelector('#mplayer-footer #right-part').childNodes[0]);
							}

							// hidden node
							slot.style.display = 'none';
						}
					}
				}
				
				// 自定义弹出右侧栏内容配置
				var rightSidebar = custom['rightSidebar'] || [];
				for(var i = 0;i < rightSidebar.length;i++) {
					// set max config option size 5 count
					if(i >= 5) { break };

					if(rightSidebar[i] instanceof Object && rightSidebar[i].slot) {
						var slotName = rightSidebar[i].slot;
						var slot = $el.mPlayer.querySelector('[slot='+slotName+']');
						if(slot) {
							var nodeStr = slot.tagName == 'TEMPLATE' ? slot.content.cloneNode(true) : $method.createRangeIsDocFragment(slot.innerHTML);
							// create header custom button
							var div = document.createElement('div');
							div.appendChild(nodeStr);
							div.setAttribute('slot',slotName);
							div.setAttribute('class','mplayer-sidebar');
							
							// params at wdith config
							var width = rightSidebar[i].width || '';
							if($CONSTANT.unitLengthReg.test(width)) {
								div.style.width = isNaN(Number(width)) ? width : width + 'px';
							}
							
							// appendChild at eleemnt
							html.appendChild(div);

							// hidden node
							slot.style.display = 'none';
						}
					}
				}
				
				return html;
			},
			//2、初始化配置主要控件 状态/显示
			initConfigControl:function(fragment) {
				// 是否显示底部迷你进度条
				if(option['showMiniProgress'] === false || option['live'] === true) {
					$method.removeNode(fragment,'#mini-progress');
				};
				
				// 判断是否直播模式
				if(option['live'] === true) {
					$method.removeNode(fragment,'#progress-container');
				}else {
					$method.removeNode(fragment,'#live-mode');
				};
				
				// 非全屏模式下，是否显示头部操作控件
				if(option['pageHead'] === false) {
					fragment.querySelector('#mplayer-header').style.opacity = 0;
				};
				
				// 字幕设置
				var subtitle = option['subtitle'] || {};
				var _tracks = subtitle.tracks;
				var _styles = subtitle.styles;
				// add video track element
				if(Object.prototype.toString.call(_tracks) === '[object Array]' && _tracks.length > 0) {
					var trackFragment = document.createDocumentFragment();
					for(var i = 0;i < _tracks.length;i++) {
						var opt = _tracks[i];
						if(typeof opt == 'object' && /.\.vtt$/.test(opt.src)) {
							var trackEl = document.createElement('track');
							trackEl.setAttribute('src',opt.src);
							trackEl.setAttribute('kind',opt.kind ? opt.kind : 'subtitles');
							trackEl.setAttribute('label',opt.label ? opt.label : '字幕' + (i + 1));
							opt.srclang ? trackEl.setAttribute('srclang',opt.srclang) : '';
							opt.default === true ? trackEl.setAttribute('default',true) : '';
							trackFragment.appendChild(trackEl);
						}
					}
					fragment.querySelector('video').appendChild(trackFragment);
				}

				// set video subtitle style
				if(Object.prototype.toString.call(_styles) == "[object Object]" && Object.keys(_styles).length > 0) {
					var style = document.createElement('style');
					style.setAttribute('id','pseudo-classes-cue');
					style.setAttribute('type','text/css');

					var _cssGroup = '';
					for(var key of Object.keys(_styles)) {
						_cssGroup += $method.parseCamel(key) + ':' + _styles[key] + '!important;';
					}
					var styleContent = document.createTextNode('.m-player video::cue {'+_cssGroup+'}');
					style.appendChild(styleContent);
					document.getElementsByTagName('head').item(0).appendChild(style);
				}
				
				return fragment;
			},
			// 1、初始化配置控件 属性/状态
			initConifgAttribute:function(fragment,isReload) {
				var { width,height} = $el.mPlayer.getBoundingClientRect();

				// 初始化Mplayer 样式配置
				$el.mPlayer.setAttribute('class','m-player');
				$el.mPlayer.setAttribute('tabindex','0');

				// 设置播放器宽度
				if(($CONSTANT.unitLengthReg.test(option['width']) || isReload === true) && !$data.isFullScreen) {
					var appointWidth = isNaN(Number(option['width'])) ? option['width'] : option['width'] + 'px';
					$el.mPlayer.style.width = isReload === true ? (width + 'px') : appointWidth;
				}
				
				// 设置播放器高度
				if(($CONSTANT.unitLengthReg.test(option['height']) || isReload === true) && !$data.isFullScreen) {
					var appointHeight = isNaN(Number(option['height'])) ? option['height'] : option['height'] + 'px';
					$el.mPlayer.style.height = isReload === true ? (height + 'px') : appointHeight;
				}

				// 设置初始化播放音量
				if(option['volume'] >= 0 && option['volume'] <= 1) {
					fragment.querySelector('video').volume = option['volume'];
				}
				
				/**
				 * set video tag attribute
				 * @param {Object} attribute 属性
				 * @param {Object} data 属性值
				 */
				var setAttribute = function(attribute,data) {
					var videoEl = fragment.querySelector('video');

					// Determine if there is a core decoder
					if(attribute == 'src') {
						console.log(data);
						var parse = option['parse'] || {};
						var type = parse['type'];
						var loader = parse['loader'];
						var config = parse['config'] || {};
						// if define custom keynel. then use
						if(parse.customKernel && parse.customKernel instanceof Function) {
							console.info('custom kernel...');
							parse.customKernel(videoEl,data);
							return;
						}

						videoEl.setAttribute(attribute,data);

						// M3U8 Decode Condition
						if(type == 'hls') {
							if(typeof loader != 'function') { return };
							if(loader.isSupported() == true) {
								$method.hlsDecodeAction(videoEl,data,{ loader,config });
							}else {
								console.error('browser does not support hls js. to check whether your browser is supporting MediaSource Extensions.');
								
							}
						}

						if(type == 'flv') {
							if(typeof loader != 'object') { return };
							if(loader.isSupported() == true) {
								$method.flvDecodeAction(videoEl,data,{ loader,config })
							}else {
								console.error('browser does not support flv js. to check whether your browser is supporting MediaSource Extensions.');
							}
						}
					}else {
						videoEl.setAttribute(attribute,data);
					}
				};
				
				// config video src
				option['src'] ? setAttribute('src',option['src']) : '';
				// config video autoplay
				option['autoplay'] === true ? setAttribute('autoplay','autoplay') : '';
				// config video preload
				(option['autoplay'] != true) ? setAttribute('preload',option['preload']) : '';
				
				// 判断是否开启循环播放模式
				option['loop'] ? setAttribute('loop','loop') : '';
				
				// 为video 标签添加更多的属性
				var videoAttribute = option['videoAttribute'] || [];
				if(videoAttribute.length > 0) {
					for(var i = 0;i < videoAttribute.length;i++) {
						var attrKey = videoAttribute[i].attrKey;
						var attrValue = videoAttribute[i].attrValue;
						setAttribute(attrKey,attrValue);
					}
				}
				
				// 设置视频封面
				if(option['poster']) {
					var img = document.createElement('img');
					img.setAttribute('src',option['poster']);
					img.setAttribute('style','width: 100%;height: 100%;object-fit: cover;');
					fragment.querySelector('#mplayer-poster').appendChild(img);
				}else {
					$method.removeNode(fragment,'#mplayer-poster');
				}
				
				// 设置媒体标题
				if(option['title']) {
					fragment.querySelector('#title-name').innerHTML = option['title'];
				}
				
				// 初始化是否默认铺满屏幕播放
				if(option['initFullFixed'] === true) {
					$el.mPlayer.classList.add('page-fullscreen');
				};
				
				if(option['dragSpotShape'] == 'square') {
					fragment.querySelector('#progress-ball .progress-ball').style.borderRadius = '3px';
					fragment.querySelector('#progress-ball .progress-ball').style.width = '9px';
					fragment.querySelector('#progress-ball .progress-ball').style.height = '14px';
				};
				
				// 设置视频大小与容器的表现形式
				if(option['objectFit'] == 'cover') {
					fragment.querySelector('video').classList.add('covered');
				}
				
				// 设初始化播放器语言面板
				fragment.querySelector('#mplayer-footer #full-switch').setAttribute('tooltip',$method.getLangObject().fullScreen);

				return fragment;
			},
			/**
			 * HLS.JS 视频解析加载操作行为
			 * @param { Element } element videoElement
			 * @param { String } src videoSrc
			 * @param { Object } hlsKernels hls kernel object
			 */
			hlsDecodeAction:function(element,src,hlsKernels) {
				console.info('hls create...');
				let hlsConfig = Object.assign({
					autoStartLoad:option['autoplay'] === true ? true : (option['preload'] != 'none' ? true : false),
				},hlsKernels.config);
				hls = new hlsKernels.loader(hlsConfig);
				hls.attachMedia(element);
				// MEDIA_ATTACHED event is fired by hls object once MediaSource is ready
				hls.on(hlsKernels.loader.Events.MEDIA_ATTACHED,function() {
					hls.loadSource(src);
				})

				// add hls trigger error event
				hls.on(hlsKernels.loader.Events.ERROR,$method.onError);
			},
			/**
			 * FLV.JS 视频解析加载操作行为
			 * @param { Element } element videoElement
			 * @param { String } src videoSrc
			 * @param { Object } flvKernels flv kernel object
			 */
			flvDecodeAction:function(element,src,flvKernels) {
				console.info('flv create...');
				let flvConfig = Object.assign({
					type:'flv',
					url:src,
				},flvKernels.config);
				flv = flvKernels.loader.createPlayer(flvConfig);
				flv.attachMediaElement(element);
				option['autoplay'] === true ? flv.load() : (option['preload'] != 'none' ? flv.load() : false);
				
				// add flv trigger error event
				flv.on(flvKernels.loader.Events.ERROR,$method.onError);
			},
			// Plus 环境查询设备是否为刘海屏
			hasNotchInScreen:function() {
				if(window.plus) {
					return plus.navigator.hasNotchInScreen();
				}else {
					return false;
				}
			},
			// 全屏时Plus+ 环境处理
			applicationFullHandle:function(state) {
				if(!window.plus) { return };
				
				// 视频播放，锁死屏幕方向为横屏
				this._landscape_lock = function() {
					plus.navigator.setFullscreen(true);
					plus.screen.lockOrientation('landscape'); 
					setTimeout(function() { plus.navigator.hideSystemNavigation() },200);
					
					// set screen control style
					setTimeout(function() {
						var statusHeight = plus.navigator.getStatusbarHeight();
						var distanceSize = $method.hasNotchInScreen() ? (statusHeight + 10) : 10;
						
						$el.mplayerHeader.style.paddingLeft = distanceSize + 'px';
						$el.mplayerHeader.style.paddingRight = distanceSize + 'px';
						
						$el.mplayerFooter.style.paddingLeft = distanceSize + 'px';
						$el.mplayerFooter.style.paddingRight = distanceSize + 'px';
						
						$el.progressContainer.style.left = distanceSize + 'px';
						$el.progressContainer.style.right = distanceSize + 'px';
					},100);
				};
				
				// 视频播放，锁死屏幕方向为竖屏
				this._portrait_lock = function() {
					plus.navigator.setFullscreen(false);
					plus.screen.lockOrientation('portrait');
					
					// reset screen control style
					setTimeout(function() {
						$el.mplayerHeader.style.paddingLeft = '16px';
						$el.mplayerHeader.style.paddingRight = '16px';
						
						$el.mplayerFooter.style.paddingLeft = '16px';
						$el.mplayerFooter.style.paddingRight = '16px';
					},100);
				}
			},
			/**
			 * 设置工具提示文字
			 * @param { Element } element 设置工具提示的元素
			 * @param { String } text 设置文本
			 */
			setTooltipText:function(element,text) {
				element.setAttribute ? element.setAttribute('tooltip',text) : '';
				$el.mplayerFooter.querySelector('.mp-tooltip').innerText = text;
			},
			// 全屏开关按钮点击处理
			fullToggle:function(e) {
				e = e ? e : { type:'' };
				if(e.stopPropagation) { e.stopPropagation(); };
				
				// full event listener
				var fullScreenEventListener = function() {
					_this._global_.generate_fullscreen_listener = true;
					if($el.mPlayer.requestFullscreen) {
						document.addEventListener('fullscreenchange',function() {
							document.fullscreenElement ? $method.fullScreenChangeAction('Y') : $method.fullScreenChangeAction('N');
						});
					}else if($el.mPlayer.webkitRequestFullscreen) {
						document.addEventListener('webkitfullscreenchange',function() {
							document.webkitFullscreenElement ? $method.fullScreenChangeAction('Y') : $method.fullScreenChangeAction('N');
						});
					}else if($el.mPlayer.mozRequestFullScreen) {
						document.addEventListener('mozfullscreenchange',function() {
							document.mozFullScreenElement ? $method.fullScreenChangeAction('Y') : $method.fullScreenChangeAction('N');
						});
					}else if($el.mPlayer.msRequestFullscreen) {
						document.addEventListener('msfullscreenchange',function() {
							document.msFullscreenElement ? $method.fullScreenChangeAction('Y') : $method.fullScreenChangeAction('N');
						});
					}
				};
				
				!_this._global_.generate_fullscreen_listener ? fullScreenEventListener() : '';
				$data.isFullScreen ? $method.closeFullScreen() : $method.openFullScreen();
			},
			// 浏览器全屏状态发生变更时行为，参数接受 Y OR N. 表示是否全屏状态
			fullScreenChangeAction:function(isFull) {
				if(isFull == 'Y') {
					$data.isFullScreen = true;
					$el.fullSwitch.querySelector('._full').style.display = 'none';
					$el.fullSwitch.querySelector('._unfull').style.display = 'block';
					$method.setTooltipText($el.fullSwitch,$method.getLangObject().exitFullScreen);
				}else if(isFull == 'N') {
					$data.isFullScreen = false;
					$el.fullSwitch.querySelector('._full').style.display = 'block';
					$el.fullSwitch.querySelector('._unfull').style.display = 'none';
					$method.setTooltipText($el.fullSwitch,$method.getLangObject().fullScreen);
					$el.mPlayer.classList.contains('browser-fullscreen') ? $method.closeFullScreen('completed') : '';
				}
				
				// plus runtime screen wake lock
				window.plus ? ($data.isPlay ? plus.device.setWakelock(true) : plus.device.setWakelock(false)) : '';
			},
			// 关闭全屏播放
			closeFullScreen:function(action) {
				var exitFullAction = function() {
                    $data.isFullScreen = false;
					$method.createTimerCloseControl();
                    $el.mPlayer.classList.remove('browser-fullscreen');
                    
                    if(action == 'completed') { return };
					if(document.exitFullscreen) {
						document.exitFullscreen();
					}else if(document.webkitExitFullscreen) {
						document.webkitExitFullscreen();
					}else if(document.mozCancelFullScreen) {
						document.mozCancelFullScreen();
					}else if(document.msExitFullscreen) {
						document.msExitFullscreen();
					}
				};
				
				if(option['autoOrientaion'] != false && window.plus && $method.returnSys() != 'ios') {
					new $method.applicationFullHandle()._portrait_lock();
					// delayed execute
					setTimeout(function() {
						exitFullAction();
						// set mplayer head show status
						option['pageHead'] === false ? $el.mplayerHeader.style.opacity = 0 : '';
					},100);
				}else {
					exitFullAction();
					// set mplayer head show status
					option['pageHead'] === false ? $el.mplayerHeader.style.opacity = 0 : '';
				};
			},
			// 开启全屏播放
			openFullScreen:function() {
				// IOS
				if($method.returnSys() == 'ios') {
					$el.videoObject.webkitEnterFullscreen();
					return;
				}
				
				var openFullAction = function() {
					// Android Or Window
					if($el.mPlayer.requestFullscreen) {
						$el.mPlayer.requestFullscreen();
					}else if($el.mPlayer.webkitRequestFullscreen) {
						$el.mPlayer.webkitRequestFullscreen();
					}else if($el.mPlayer.mozRequestFullScreen) {
						$el.mPlayer.mozRequestFullScreen();
					}else if($el.mPlayer.msRequestFullscreen) {
						$el.mPlayer.msRequestFullscreen();
					};
					
					$data.isFullScreen = true;
					$method.createTimerCloseControl();
					$el.mPlayer.classList.add('browser-fullscreen');
				};
				
				if(option['autoOrientaion'] != false && window.plus) {
					new $method.applicationFullHandle()._landscape_lock();
					// delayed execute
					setTimeout(function() { 
						openFullAction();
						// set mplayer head show status
						option['pageHead'] === false ? $el.mplayerHeader.style.opacity = 1 : '';
					},100);
				}else {
					openFullAction();
					// set mplayer head show status
					option['pageHead'] === false ? $el.mplayerHeader.style.opacity = 1 : '';
				}
			},
			// 播放开关按钮点击处理
			onPlayTap:function(e) {
				e = e ? e : { type:'' };
				if(e.stopPropagation) { e.stopPropagation(); };

				var _play_display = $el.playSwitch.querySelector('._play').style.display;
				var _pause_display = $el.playSwitch.querySelector('._pause').style.display;

				if($data.isPlay || _play_display == 'none') {
					$el.videoObject.pause();
				}else if(!$data.isPlay) {
					if(!option['src']) { $method.showToast('视频地址为空');return; };
					
					// if hls resource to action
					if((hls || flv) && !$data.mediaStatus) {
						$data.mediaPlayDirectives = 1;
						if(hls) { hls.startLoad() };
						if(flv) { flv.load() };
						
					}else {
						$data.mediaPlayDirectives = 0;
						$el.videoObject.play();
					}
					
					// delayed checked media is play. if no play status then show loading style
					if(!_this._global_.mp_timeout_4) {
						_this._global_.mp_timeout_4 = setTimeout(function() {
							_this._global_.mp_timeout_4 = null;
							if(!$data.isPlay) { $method.showLoading() };
						},500);
					}
				}
				
				$method.createTimerCloseControl(e);
			},
			/**
			 * 视频播放容器点击事件处理，可处理点击或者双击响应
			 * @param {Object} e Event
			 */
			// numbers:0,
			// eventMap:[],
			onContrainerTap:function(e) {
				e = e ? e : {};
				e.stopPropagation ? e.stopPropagation() : '';
				if($data.isTouchMove) { return };
				
				// once trigger click
				var onceClick = function() {
					if(mobilePlugin) { // agent event handle
						new mobilePlugin.interface(e)._onAgentMpTap('click');
					}else if(webpagePlugin){
						new webpagePlugin.interface(e)._onAgentMpTap('click');
					}else {
						$method.toggleControlsDisplay(e);
					}
				};
				
				// on trigger dbclick action
				var onDbClick = function(string) {
					if(_this._global_.triggerDblclickEvent) { return };
					
					if(mobilePlugin) { // agent event handle
						new mobilePlugin.interface(e)._onAgentMpTap('dbclick');
					}else if(webpagePlugin) {
						new webpagePlugin.interface(e)._onAgentMpTap('dbclick');
					}else {
						$method.onPlayTap({ type:'dblscreen' });
					}
					
					// handle ios plafoform player container click event penetration problem
					_this._global_.triggerDblclickEvent = true;
					setTimeout(function() { _this._global_.triggerDblclickEvent = false }, 310);
				};
				
				_this._global_.clickCount = _this._global_.clickCount ? _this._global_.clickCount : 0;
				_this._global_.clickCount++;
				
				if(_this._global_.clickCount == 2) {
					onDbClick();
					_this._global_.clickCount = 0;
				}else {
					if(_this._global_.mp_timeout_2) { clearTimeout(_this._global_.mp_timeout_2) };
					_this._global_.mp_timeout_2 = setTimeout(function() {
						if(_this._global_.clickCount == 1) {
							!_this._global_.triggerDblclickEvent ? onceClick() : '';
						}
						_this._global_.clickCount = 0;
					},300)
				}
				
				if(e.type == 'dblclick') {
					onDbClick();
					_this._global_.clickCount = 0;
				};
			},
			// 当视频已暂停时触发
			onPause:function(e) {
				e = e ? e : {};
				console.log('onPaused...');
				
				$data.isPlay = false;
				setTimeout(function() { $method.hideLoading() },500);
				
				// toggle play button
				$el.playSwitch.querySelector('._play').style.display = 'block';
				$el.playSwitch.querySelector('._pause').style.display = 'none';
				
				// plus runtime screen wake lock
				if(window.plus) { plus.device.setWakelock(false) };
			},
			// 当视频可以开始播放时运行的脚本
			onPlay:function(e) {
				e = e ? e : {};
				console.log('onPlay...');
				setTimeout(function() {
					$method.computeLoadingStatus(function(status) {
						if(!status && !$data.playError) { $method.showLoading() }
					});
				},500);
			},
			// 当视频已开始播放时执行的脚本
			onPlaying:function() {
				console.log('onPlaying...');
				
				// playing event effective validate
				$method.computeLoadingStatus(function(status){
					if(status) {
						$method.hideLoading();
						$method.hideCover();
						
						// reload trigger timeupdate event. at handle loading
						!option['live'] ? $method.onTimeupdate() : '';
					}
				});
				
				// plus runtime screen wake lock
				if(window.plus) { plus.device.setWakelock(true) };
				
				$data.isPlay = true;
				
				// show video control
				if($data.duration > 1 && $el.videoObject.style.opacity != 1) {
					setTimeout(function() { $el.videoObject.style.opacity = 1; },500);
				}
				
				// toggle play button
				$el.playSwitch.querySelector('._play').style.display = 'none';
				$el.playSwitch.querySelector('._pause').style.display = 'block';
				
				// mplayer error node
				if($el.mplayerError.style.display != 'none') {
					$el.mplayerError.style.display = 'none';
				};
				
				// appoint style
				if(option['poster'] && $el.mplayerPoster.style.display != 'none') {
					$el.mplayerPoster.style.display ='none';
				};
				
				if(option['autoFit'] != false && $data.duration > 1 && $el.mPlayer.style.height != 'auto' && !$data.isFullScreen) {
					$el.mPlayer.style.height = 'auto';
				}
			},
			/**
			 * 1. 计算当前视频资源总时长加载状态. 做此函数判断主要是针对各平台获取视频信息时差不同的处理
			 * 2. 如果视频是直播源,那么则做不同处理. 这是为了防止各不同手机浏览器存在兼容性问题统一做出的调整
			 * @param { Function } callback 获取当前视频加载的状态. 函数回调接收一个Boolean 类型的参数.
			 */
			computeLoadingStatus:function(callback) {
				var pollingCount = 0;
				var getVInfo = function() {
					var duration = $el.videoObject.duration || 0;
					var currentTime = $el.videoObject.currentTime || 0;
					if(duration > 1 || currentTime > 0) {
						callback(true);
					}else if(pollingCount >= 1000) { // max at 1s
						callback(false);
					} else {
						setTimeout(function() {
							pollingCount += 200;
							getVInfo();
						},200);
					}
				};
				// begin execute...
				getVInfo();
			},
			// 返回按钮点击事件
			onBack:function(e) {
				e.stopPropagation();
				if($data.isFullScreen) {
					$method.fullToggle();
				}else {
					_this.emit('back');
				};
				$method.createTimerCloseControl();
			},
			// 当浏览器可以不因缓存而暂定,可以进行播放时
			onCanplaythrough:function(e) {
				console.log('onCanplaythrough...');
				
				$method.hideCover();
				$method.hideLoading();
			},
			// 当视频时长已更改时触发. 该函数初始化获取并设置媒体文件的基本信息
			onDurationChange:function(e) {
				console.log('onDurationChange => ' + $el.videoObject.duration);
				
				var setMediaData = function() {
					var duration = $el.videoObject.duration;
					if(duration > 1) {
						$data.mediaStatus = true;
						$data.duration = duration;
						
						// delay 100 ms send event
						_this.emit('duration-change',{ duration:duration })
						// setTimeout(function() {  },100);
						
						// option autoplay at true. than first execute autoplay action
						if($data.mediaPlayDirectives == 1 && !_this._global_.first_authplay) {
							_this._global_.first_authplay = true;
							$el.videoObject.play();
							
							// close loaidng
							$method.hideLoading();
						}
						
						// update page progress info
						if(duration != Infinity) {
							var timeFormat = $method.formatCurrentTime($data.duration);
							$el.progressLong.innerHTML = timeFormat;
							$el.progressBegin.innerHTML = '00:00';
						}
						
						// show video html
						if($el.videoObject.style.opacity != 1) {
							setTimeout(function() { $el.videoObject.style.opacity = 1; },500);
						};
						
						if(option['autoFit'] != false && $el.mPlayer.style.height != 'auto') {
							$el.mPlayer.style.height = 'auto';
						};
					}
				};
				setMediaData();
			},
			// 根据当前video currentTime格式化为时间字符
			formatCurrentTime:function(currentTime) {
				// 时
				var hours = parseInt(currentTime / 3600);
				hours = hours > 0 ? hours+':' : '';
				
				// 分
				var minutes = parseInt((currentTime % 3600) / 60);
				minutes = minutes > 0 && minutes.toString().length == 1 ? '0'+minutes+':' : minutes+':';
				minutes = minutes == 0 ? '00:' : minutes;
				
				// 秒
				var seconds = parseInt((currentTime % 60));
				seconds = seconds > 0 && seconds.toString().length == 1 ? '0'+seconds : seconds;
				seconds = seconds == 0 ? '00' : seconds;
				
				var formatTime = hours.toString() + minutes.toString() + seconds.toString();
				return formatTime;
			},
			/**
			 * 更新进度条
			 * @param { Number } percentage 需要更新的百分比进度
			 */
			updateProgressBar:function(percentage) {
				$data.percentage = percentage;
				// update setting progress bar
				$el.progressBall.style.left = $data.percentage + '%';
				$el.progressPlay.style.width = $data.percentage + '%';
				
				// update setting play time
				$method.computePlayTime($data.percentage,$data.duration,function(timeString) {
					$el.progressBegin.innerHTML = timeString;
				});
				
				_this.emit('seek-progress',{ percentage:percentage });
			},
			/**
			 * 进度控件进度设置
			 * @param { Number } moveDistance 触摸移动的距离
			 * @param { Element } progressControl 触发进度控件的元素
			 * @param { Number } forwardRate  进退速率 mobile.js 
			 * @param { Function } callback 执行函数回调
			 */
			progressControlHandle:function(moveDistance,progressControl,forwardRate,callback) {
				// set then play progress position
				$method.computeProgress(moveDistance,progressControl,function(percentage) {
					var size = Number.parseFloat($data._defaultPlayProgressPro || 0) + (percentage * (forwardRate ? forwardRate : 1));
					if(size >= 100) {
						size = 100;
					}else if(size <= 0) {
						size = 0;
					}
					// update progress bar
					$method.updateProgressBar(size);
					// call back
					callback ? callback() : '';
				});
			},
			/**
			 * 根据指定需要传入的参数，计算进度条的播放百分比！
			 * 通用计算方法，计算的百分比值传入到一个callback回调函数！
			 * @param { Number } moveDistance 当前移动的距离
			 * @param { Element } progressContainer 指定一个进度条父级容器
			 * @param { Function } allback 计算值传入到该回调函数接收
			 */
			computeProgress:function(moveDistance,progressContainer,callback) {
				//进度条父容器的宽度
				var touchEffectiveWidth = progressContainer.getBoundingClientRect().width;
				//百分比计算 = 当前滑动的距离 / 父容器进度条总的长度 * 100
				var percentage = moveDistance / touchEffectiveWidth *100;
				callback(percentage);
			},
			/**
			 * 根据进度条的播放百分比以及视频资源总时长，计算指定播放阶段的时间！
			 * 通用计算方法，计算的播放段时间传入到一个callback回调函数！
			 * @param { Number } percentage	当前播放百分比
			 * @param { Number } duration	媒体资源总时长
			 * @param { Function } allback 计算值传入到该回调函数接收
			 */
			computePlayTime:function(percentage,duration,callback) {
				if(percentage >= 100){
					percentage = 100;
				}else if(percentage <= 0 ){
					percentage = 0;
				}
				$data.currentTime = percentage / 100 * duration;
				
				//设置当前播放的时间
				var timeFormat = $method.formatCurrentTime($data.currentTime);
				callback(timeFormat);
			},
			/**
			 * 当目前的播放位置已更改时
			 * . 更新当前进度球的位置
			 * . 更新进度条的宽度
			 * . 更新当前播放时间
			 * . hot 检查视频源播放过程中是否动态处理加载中 loading
			 */
			onTimeupdate:function(e) {
				if($data.duration <= 1 || $data.duration == Infinity) { return };
				
				var currentTime = $el.videoObject.currentTime || 0;
				if(currentTime < 0.1) { return };
				
				var percentage = currentTime / $data.duration * 100;
				if(percentage >= 100) {
					percentage = 100;
				}

				// 进度更新. 需要进行缓存等待状态的检查操作行为
				var waitingStatusChekAction = function() {
					// time update timer execute handle.
					_this._global_.playingState = false;
					if(_this._global_.mp_timeout_5) { clearTimeout(_this._global_.mp_timeout_5) };
					_this._global_.mp_timeout_5 = setTimeout(function() {
						if(!_this._global_.playingState && $data.isPlay) {
							$method.showLoading();
						}
					},700);
					
					// if un play that return.
					if(!$data.isPlay) { return };
					
					// control
					if(!_this._global_.beginTimeDot) {
						_this._global_.beginTimeDot = new Date();
						_this._global_.nextTimeUpdateState = true;
					}else {
						_this._global_.endTimeDot = new Date();
						// 计算进度更新与上一次相差的毫秒数
						var millisecondSize = _this._global_.endTimeDot.getTime() - _this._global_.beginTimeDot.getTime();
						if(millisecondSize <= 700) {
							_this._global_.playingState = true;
							$method.hideLoading();
							clearTimeout(_this._global_.mp_timeout_5);
						}
						
						// 计算进度更新持续有效. 最后媒体是否持续播放的处理
						_this._global_.nextTimeUpdateState = false;
						if(_this._global_.mp_timeout_6) { clearTimeout(_this._global_.mp_timeout_6) };
						_this._global_.mp_timeout_6 = setTimeout(function() {
							if(!_this._global_.nextTimeUpdateState && $data.isPlay) {
								console.log('execute next timeupdate loading......');
								$method.showLoading();
							}
						},700);
						
						_this._global_.beginTimeDot = null;
					}
				};
				
				// set primary progress
				var mainProgress = function() {
					// set then progress ball position
					$el.progressBall.style.left = percentage + '%';
					
					// set then progress lines width
					$el.progressPlay.style.width = percentage + '%';
					
					// set then play time
					var timeFormat = $method.formatCurrentTime(currentTime);
					if($el.progressBegin.innerHTML != timeFormat) {
						$el.progressBegin.innerHTML = timeFormat;
					}
				};
				
				// ser footer mini progress
				$el.miniPlay.style.width = percentage + '%';
				
				if(!$data.ball_move_status) { mainProgress() };
				
				if(!option['live']) { waitingStatusChekAction() };
				
				if(!$data.mediaStatus) { $method.onDurationChange(e) };
			},
			// 底部进度条拖动触发
			progressBarSeeking:function(event) {
				event = event ? event : {};
				if(event.stopPropagation) { event.stopPropagation(); };
				if(event.preventDefault) { event.preventDefault(); };
				
				if(!$data.mediaStatus || $data.duration == Infinity || $data.duration == 'NaN') { return };
				
				// 开始按下
				var onStart = function() {
					// var pbFontsize = document.defaultView.getComputedStyle($el.progressBegin, null).fontSize;
					// _this._global_.pbFontsize = Number(pbFontsize.replace('px',''));

					$data.ball_move_status = true;
					$method.createTimerCloseControl({ type:'cancel' });
					
					// touch start set progress bar
					$data.startX = event.type == 'touchstart' ? event.touches[0].clientX : event.clientX;
					$data._defaultPlayProgressPro = 0;
					var posistion = $el.touchEffective.getClientRects()[0];
					var distance = $data.startX - posistion.left;
					$method.progressControlHandle(distance,$el.touchEffective);
					
					$data._defaultPlayProgressPro = $el.progressPlay.style.width.substr(0,$el.progressPlay.style.width.length - 1) || 0;
					
					// add touch event
					if(event.type == 'touchstart') {
						$el.touchEffective.addEventListener('touchmove',$method.progressBarSeeking);
						$el.touchEffective.addEventListener('touchend',$method.progressBarSeeking);
						$el.touchEffective.addEventListener('touchcancel',$method.progressBarSeeking);
					}else {
						document.addEventListener('mousemove',$method.progressBarSeeking);
						document.addEventListener('mouseup',$method.progressBarSeeking);
					}
				};
				
				// 开始移动
				var onMove = function() {
					$data.moveX = event.type == 'touchmove' ? event.touches[0].clientX : event.clientX;
					if(!$data.isTouchMove) {
						$data.isTouchMove = true;
						// $el.progressBegin.style.fontSize = (_this._global_.pbFontsize + 2) + 'px';
						$el.progressBall.querySelector('.progress-ball').style.boxShadow = '0 0 20px 3px '+$habit.themeColor+'';
						mobilePlugin ? new mobilePlugin.interface()._onAgentEventAction('touchmove-footerbar') : '';
					}
					!$data.startX ? $data.startX = $data.moveX : '';
					var moveDistance = $data.moveX - $data.startX;
					$method.progressControlHandle(moveDistance,$el.touchEffective);
				};
				
				// 释放
				var onEnd = function() {
					if(event.type == 'touchend') {
						$el.touchEffective.removeEventListener('touchmove',$method.progressBarSeeking);
						$el.touchEffective.removeEventListener('touchend',$method.progressBarSeeking);
						$el.touchEffective.removeEventListener('touchcancel',$method.progressBarSeeking);
					}else {
						document.removeEventListener('mousemove',$method.progressBarSeeking);
						document.removeEventListener('mouseup',$method.progressBarSeeking);
					}
					
					
					if($data.isTouchMove) {
						// $el.progressBegin.style.fontSize = _this._global_.pbFontsize + 'px';
						$el.progressBall.querySelector('.progress-ball').style.boxShadow = '0 1px 10px #cccccc';
						mobilePlugin ? new mobilePlugin.interface()._onAgentEventAction('touchend-footerbar') : '';
					}
					
					$el.videoObject.currentTime = $data.currentTime;
					$data.ball_move_status = false;
					$method.resetTouchVariable();
					$method.createTimerCloseControl();
				};
				
				// 其他动作
				var onCancel = function() {
					$el.touchEffective.removeEventListener('touchmove',$method.progressBarSeeking);
					$el.touchEffective.removeEventListener('touchend',$method.progressBarSeeking);
					$el.touchEffective.removeEventListener('touchcancel',$method.progressBarSeeking);
					
					$data.ball_move_status = false;
					// $el.progressBegin.style.fontSize = _this._global_.pbFontsize + 'px';
					$method.resetTouchVariable();
					$method.createTimerCloseControl();
					mobilePlugin ? new mobilePlugin.interface()._onAgentEventAction('touchend-footerbar') : '';
				};
				
				switch (event.type){
					case 'mousedown': //PC 事件鼠标按下
						onStart();
						break;
					case 'mousemove':
						onMove();
						break;
					case 'mouseup':
						onEnd();
						break;
					case 'touchstart': //Mobile 事件手势按下
						onStart();
						break;
					case 'touchmove':
						onMove();
						break;
					case 'touchend':
						onEnd();
						break;
					case 'touchcancel':
						onCancel();
						break;
					default:
						console.log(event.type);
						break;
				}
			},
			// 重清理Touch 定义赋值的变量
			resetTouchVariable:function() {
				$data.startX = null;
				$data.startY = null;
				$data.moveX = null;
				$data.moveY = null;
				
				// delay execute is used to define variable, to prevent event conflict
				setTimeout(function() { $data.isTouchMove = false },50);
			},
			/**
			 * 创建一个定时器，定时关闭Mplayer 界面操作控件
			 * @param { String } action 操作行为。如果action=cancel，那么取定时器执行。使用场景（弹出右侧栏、进度条拖动...）
			 */
			createTimerCloseControl:function(action) {
				action = action ? action : {};
				
				// if params action equal at "cancel",that cancel timer execute
				if(action.type == 'cancel') {
					if(_this._global_.mp_timeout_3) { clearTimeout(_this._global_.mp_timeout_3); }
					return;
                }
				
				// create timer 6000
				var createTimer = function() {
					_this._global_.mp_timeout_3 = setTimeout(function() {
						$method.toggleControlsDisplay({ type:action.type ? action.type : 'timer' });
					},3500);
				};
				
				if(_this._global_.mp_timeout_3) {
					clearTimeout(_this._global_.mp_timeout_3);
					createTimer();
				}else {
					createTimer();
				}
			},
			// 查询并关闭弹出右侧栏内容
			closeMpSidebar:function() {
				// if mplayer sidebar is show，that close
				var _isExistSidebar = false;
				var _mplayerSidebar = $el.mPlayer.querySelectorAll('.mplayer-sidebar');
				for(var i = 0;i < _mplayerSidebar.length;i++) {
					if(_mplayerSidebar[i].classList.contains('open')) {
						_mplayerSidebar[i].classList.remove('open');
						_isExistSidebar = true;
						
						if(typeof _this._global_.webpagePlugin == 'object' && _this._global_.webpagePlugin.eventStatus == 'removeEventListener') {
							new webpagePlugin.interface()._addEvent();
						}
					}
				};
				return _isExistSidebar;
			},
			// 切换播放器页面控制器的显示状态
			toggleControlsDisplay:function(e) {
				e = e ? e : {type:''};
				if(e.stopPropagation) { e.stopPropagation(); };
				// console.log(e.type);
				
				var closeMpSidebar = $method.closeMpSidebar();
				if(closeMpSidebar) { return };
				
				// if trigger event
				if(e.type == 'DOMContentLoaded' || e.type == 'resize' || e.type == 'orientationchange') {
					return;
				}

				var cssAttr = ['webkitTransform','transform','msTransform'];
				
				var ON_Header = function() {
					$el.mplayerHeader.classList.toggle('show',true);
				}
				var OFF_Header = function() {
					$el.mplayerHeader.classList.toggle('show',false);
					var headerHeight = $el.mplayerHeader.getBoundingClientRect().height;
					for(var j = 0;j < cssAttr.length;j++) {
						$el.mplayerHeader.style[cssAttr[j]] = 'translateY('+(-headerHeight)+'px)';
					}
				}
				var ON_Footer = function() {
					$el.mplayerFooter.classList.toggle('show',true);
					// set mini progress display
					$el.miniProgress.style.opacity = 0;
				}
				var OFF_Footer = function() {
					$el.mplayerFooter.classList.toggle('show',false);
					var footerHeight = $el.mplayerFooter.getBoundingClientRect().height;
					
					var isContains = $el.progressContainer.classList.contains('upper-position');
					var upperHeight = isContains ? (Number.parseInt($el.progressContainer.getBoundingClientRect().height / 2) + 1) : 0;
					for(var j = 0;j < cssAttr.length;j++) {
						$el.mplayerFooter.style[cssAttr[j]] = 'translateY('+(footerHeight + upperHeight)+'px)';
					}
					// set mini progress display
					$el.miniProgress.style.opacity = 1;
				}
				var OFF_SystemNavigation = function() {
					if(window.plus && $data.isFullScreen) {
						plus.navigator.hideSystemNavigation();
					}
				}
				
				// if event type at init reset action
				if(e.type == 'showControls') {
					ON_Footer();
					ON_Header();
					$data.showScreenControls = true;
					$method.createTimerCloseControl();
					
					_this.emit('controls-toggle',{ show:true });
					return;
				}
				
				if(e.type == 'hideControls') {
					OFF_Footer();
					OFF_Header();
					$data.showScreenControls = false;
					$method.createTimerCloseControl({ type:'cancel' });
					
					_this.emit('controls-toggle',{ show:false });
					return;
				}
				
				// if event type at timer and data showScreenControls equal
				if((e.type == 'timer' || e.type == 'dblscreen') && $data.showScreenControls == false) {
					return;
				};
				
				// toggle screen controls
				if($data.showScreenControls) {
					OFF_Footer();
					OFF_Header();
					$data.showScreenControls = false;
					
					_this.emit('controls-toggle',{ show:false });
				}else {
					ON_Footer();
					ON_Header();
					$data.showScreenControls = true;
					$method.createTimerCloseControl();
					
					_this.emit('controls-toggle',{ show:true });
					OFF_SystemNavigation();
				}
			},
			// 视频因缓冲等待时
			onWaiting:function() {
				console.log('onWaiting...');
				$data.isPlay = false;
				
				if(!_this._global_.mp_timeout_1) {
					_this._global_.mp_timeout_1 = setTimeout(function() {
						if(!$data.isPlay) {
							$method.showLoading();
						}
						_this._global_.mp_timeout_1 = null;
					},500);	
				}
			},
			// 当视频加载错误状态时
			onError:function(errMes) {
				console.error(errMes);
				// if player destory. than return execute
				if($data.isDestory && $data.playError >= 1) { return };
				
				// $method.showLoading();
				// if video loading fail,that execute
				var loadingFailExecute = function() {
					$data.playError++;
					
					// setting page show status
					$el.mplayerError.style.display = 'block';
					$el.videoObject.style.opacity = 0;
					$method.showCover();
					$method.hideLoading();
					$method.toggleControlsDisplay({ type:'hideControls' });
					
					// remove appoint listener event
					$method.toggleEventListenerGlobal('remove');
					$method.toggleEventListenerCustom('remove');
					
					// add node click listener event
					$el.mplayerError.addEventListener("click",function(e) {
						e.stopPropagation();
						$method.reloadUrl();
					},{ once:true });
					
					_this.emit('error',errMes);
				};
				
				// resource loading error,delay execute handle
				setTimeout(function() {
					var readyState = $el.videoObject.readyState || 0;
					if(readyState === 0 || $el.videoObject.duration <= 1) {
						loadingFailExecute();
					}
				},3000);
			},
			// 指定URL 或者重新加载视频资源. 参数接受一个字符传的URL,不传参则默认执行重新加载视频
			reloadUrl:function(url) {
				$method.destory();
				$method.createTimerCloseControl({ type:'cancel' });
				
				var config = option;
				url ? config['src'] = url : '';

				if($data.isFullScreen) {
					setTimeout(() => { // use delay is wait ready event
						$method.openFullScreen();
						$method.fullScreenChangeAction('Y');
					}, 50);
				}
				
				$method.initCreateMplayer(true);
			},
			// 销毁播放器
			destory:function() {
				if($el.mPlayer.querySelector('#mplayer-media-wrapper video')) {
					$data.isDestory = true;
					$method.toggleEventListenerGlobal('remove');
					$method.toggleEventListenerCustom('remove');
					
					// hls/flv source destory
					(hls && hls.media) ? (hls.detachMedia(),hls = '') : '';
					flv ? (flv.destroy(),flv = '') : '';
					
					var posistion = $el.mPlayer.querySelector('#mplayer-media-wrapper').getBoundingClientRect();
					$el.mPlayer.querySelector('#mplayer-media-wrapper').style.height = posistion.height + 'px';
					$el.mPlayer.querySelector('#mplayer-media-wrapper').style.width = posistion.width + 'px';
					$el.mPlayer.querySelector('#mplayer-media-wrapper video').pause();
					$el.mPlayer.querySelector('#mplayer-media-wrapper video').removeAttribute('src');
					$el.mPlayer.querySelector('#mplayer-media-wrapper').innerHTML = '';

					_this.emit('destory');
				}
			},
			// 当浏览器正在下载视频时
			onProgress:function() {
				// console.log('on download progress...');
				var buffered = $el.videoObject.buffered;
				if(buffered.length > 0 && $data.duration > 0) {
					// if loading buffered complete
					if(buffered.end(0) == $data.duration) {
						$el.miniBuffered.style.width = '100%';
						
						$el.progressBuffered.style.width = '100%';
						$el.progressBuffered.style.borderRadius = '5px';
						console.log('Loading Buffered Complete...');
						return;
					}
					
					// if no buffered complete，at get current buffered duration
					for(var i = 0;i < buffered.length;i++) {
						var start = buffered.start(i);
						var end = buffered.end(i);
						if(end > $data.currentTime) {
							var total = end / $data.duration * 100;
							$el.progressBuffered.style.width = total + '%';
							
							$el.miniBuffered.style.width = total + '%';
							break;
						}
					}
				}
			},
			// 显示视频加载Loading
			showLoading:function() {
				if($el.mplayerLoading.style.display != 'inline-block') {
					$el.mplayerLoading.style.display = 'inline-block';
				}
			},
			// 隐藏视频加载Loading
			hideLoading:function() {
				if($el.mplayerLoading.style.display != 'none') {
					$el.mplayerLoading.style.display = 'none';
				}
			},
			// 显示播放透明遮罩层
			showCover:function() {
				if($el.mplayerCover.style.opacity <=0 ) {
					$el.mplayerCover.style.zIndex = 888;
					$el.mplayerCover.style.opacity = 0.2;
				}
			},
			// 隐藏播放透明遮罩层
			hideCover:function() {
				if($el.mplayerCover.style.opacity != '0') {
					$el.mplayerCover.style.opacity = 0;
					$el.mplayerCover.style.zIndex = -1;
				}
			},
			// 显示消息提示气泡，参数接受一个提示信息
			showToast:function(message) {
				var mmw = $el.mPlayer.querySelector('#mplayer-media-wrapper');
				var createToast = () => {
					var toastEl = document.createElement('div');
					toastEl.setAttribute('class','mplayer-toast toast-scaling');
					toastEl.setAttribute('id','mplayer-toast');
					toastEl.innerHTML = message;
					mmw.appendChild(toastEl);
				}

				mmw.querySelector('#mplayer-toast') ? $method.removeNode(mmw,'#mplayer-toast') : '';
				createToast();

				if(_this._global_.handleIconTimer_2) { window.clearTimeout(_this._global_.handleIconTimer_2) };
				_this._global_.handleIconTimer_2 = setTimeout(function() {
					$method.removeNode(mmw,'#mplayer-toast')
				},1500);
			},
			/**
			 * 页面方向改变. 切换播放器控件的显示状态、样式
			 * @param { String } direction portrait or landscape
			 */
			toggleControlsStyle:function(direction) {
				// change set footer controls show status
				var custom = option['custom'] || {};
				var footerControls = custom['footerControls'] || [];
				for(var i = 0;i < footerControls.length;i++) {
					if(footerControls[i].oftenShow === true) { continue };
					
					var slot = footerControls[i].slot;
					var slotEl = $el.mplayerFooter.querySelector('[slot='+slot+']')
					if(slotEl) {
						// if then play direction at portrait
						if(direction == 'portrait') {
							slotEl.style.display = 'none';
						}
						
						// if then play direction at landscape
						if(direction == 'landscape') {
							slotEl.style.display = 'block';
						}
					}
				}
			},
			// 浏览器窗口可见性发生变化时触发
			onDocVisibilitychange:function(e) {
				if($data.showScreenControls === false) return;
				$method.createTimerCloseControl({ type:document.visibilityState == 'visible' ? '' : 'cancel'});
			},
			// 窗口大小变化时处理
			onScreenResize:function(e) {
				e = e ? e : { type:'' };
				if(e.stopPropagation) { e.stopPropagation(); };
				
				// 竖屏执行
				var portraitAction = function() {
					$method.toggleControlsDisplay(e);
					
					$el.progressContainer.classList.remove('upper-position');
					
					$method.toggleControlsStyle('portrait');
					
					// callback trigger function
					setTimeout(function() {
						var data = { direction:'portrait' };
						$method.returnSys() == 'window' ? data.fullscreen = $data.isFullScreen : '';
						_this.emit('fullscreen-change',data);
					},10);
				};
				
				// 横屏执行
				var landscapeAction = function() {
					$method.toggleControlsDisplay(e);
					
					$el.progressContainer.classList.add('upper-position');
					
					$method.toggleControlsStyle('landscape');
					
					// callback trigger function
					setTimeout(function() {
						var data = { direction:'landscape' };
						$method.returnSys() == 'window' ? data.fullscreen = $data.isFullScreen : '';
						_this.emit('fullscreen-change',data);
					},10);
					
					// delayed close system navigation
					if(window.plus && $data.isFullScreen) {
						setTimeout(function() { plus.navigator.hideSystemNavigation() },200);
					}
				};
				
				var mobileRun = function() {
					if(window.orientation == 0 || window.orientation == 180) { // 竖屏
						portraitAction();
					}else { // 横屏
						landscapeAction();
					}
				};
				
				var pcRun = function() {
					var playerWidth = $el.mPlayer.getBoundingClientRect().width;
					if(playerWidth >= 500) {
						landscapeAction();
					}else {
						portraitAction();
					}
				};
				
				$method.createTimerCloseControl();
				if(window.orientation || window.orientation == 0) {
					mobileRun();
				}else {
					setTimeout(() => { pcRun() },0);
				}
			},
			// 平台判断IOS OR Anndroid
			returnSys:function() {
				var sys = "";
				var browser = function() {
					var u = navigator.userAgent, app = navigator.appVersion;
					return { //移动终端浏览器版本信息
						ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
						android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
						iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
						iPad: u.indexOf('iPad') > -1, //是否iPad
					};
				};
				
				var b = new browser();
				if (b.iPhone || b.iPad || b.ios) {
					sys = "ios"; 
				}else if (b.android) { 
					sys= "androd"; 
				}else {
					sys = 'window';
				}
				return sys;
			},
			// 自定义配置项处理监听事件
			toggleEventListenerCustom:function(type) {
				var custom = option['custom'] || {};
				var action = type == 'add' ? 'addEventListener' : 'removeEventListener';
				
				// player “head control” add event
				var headControls = custom['headControls'] || [];
				if(headControls.length > 0) {
					for(var i = 0;i < headControls.length;i++) {
						if(!headControls[i].click instanceof Function) { continue };
						
						var slotName = headControls[i].slot;
						var slot = $el.headerMenu.querySelector('[slot='+slotName+']');
						if(slot instanceof Element) {
							slot[action]('click',headControls[i].click);
						}
					}
				}
				
				// player “footer control” add event
				var footerControls = custom['footerControls'] || [];
				if(footerControls.length > 0) {
					for(var i = 0;i < footerControls.length;i++) {
						if(!footerControls[i].click instanceof Function) { continue };
						
						var slotName = footerControls[i].slot;
						var slot = $el.mplayerFooter.querySelector('[slot='+slotName+']');
						if(slot instanceof Element) {
							slot[action]('click',footerControls[i].click);
						}
					}
				}
			},
			/**
			 * “添加” 或者 “移除” 定义的 Mplayer 监听事件
			 * @param { String } type add or remove key
			 * @param { String } sign specified sign action
			 */
			toggleEventListenerGlobal:function(type,sign) {
				var action = type == 'add' ? 'addEventListener' : 'removeEventListener';

				var _toggleEvent = function() {
					// 监听屏幕屏幕横竖屏处理
					var evt = "onorientationchange" in window ? "orientationchange" : "resize";
					window[action](evt,$method.onScreenResize);

					// 返回按钮点击事件监听
					$el.backButton[action]('click',$method.onBack);

					// 全屏开关点击事件监听
					$el.fullSwitch[action]("click",$method.fullToggle);
					// 播放开关点击事件监听
					$el.playSwitch[action]('click',$method.onPlayTap);

					// 视频播放容器点击事件监听
					$el.mPlayer[action]('click',$method.onContrainerTap);
					$el.mPlayer[action]('dblclick',$method.onContrainerTap);

					// 底部进度条拖动触发
					$el.touchEffective instanceof Element ? $el.touchEffective[action]('touchstart',$method.progressBarSeeking) : '';
					$el.touchEffective instanceof Element ? $el.touchEffective[action]('mousedown',$method.progressBarSeeking) : '';

					// ios platform fullscreen toggle event
					$el.videoObject[action]('webkitbeginfullscreen',$method.runtimeCompatibleHandle);
					$el.videoObject[action]('webkitendfullscreen',$method.runtimeCompatibleHandle)

					// plus runtime add event listener
					document[action]('resume',$method.plusRuntimeHandle);
					document[action]('pause',$method.plusRuntimeHandle);

					// 浏览器窗口可见性变化监听
					document[action]('visibilitychange',$method.onDocVisibilitychange)
				}

				var _onceEvent = function() {
					$el.mplayerCover.addEventListener('touchstart',function(e) { e.stopPropagation(); } );
					$el.mplayerCover.addEventListener('touchmove',function(e) { e.stopPropagation(); } );
					
					$el.mplayerHeader.addEventListener('touchmove',function(e) { e.stopPropagation(); } );
					$el.mplayerHeader.addEventListener('click',function(e) { e.stopPropagation(); } );
					$el.mplayerHeader.addEventListener('dblclick',function(e) { e.stopPropagation(); } );
					
					$el.mplayerFooter.addEventListener('touchmove',function(e) { e.stopPropagation(); } );
					$el.mplayerFooter.addEventListener('click',function(e) { e.stopPropagation(); } );
					$el.mplayerFooter.addEventListener('dblclick',function(e) { e.stopPropagation(); } );
					
					$el.mplayerError.addEventListener('touchstart',function(e) { e.stopPropagation(); } );
					$el.mplayerError.addEventListener('touchmove',function(e) { e.stopPropagation(); } );

					// 《原生Video监听事件》
					// 当浏览器可以不因缓存而暂定,可以进行播放时
					$el.videoObject.addEventListener('canplaythrough',$method.onCanplaythrough);
					// 当视频时长已更改时
					$el.videoObject.addEventListener('durationchange',$method.onDurationChange);
					// 当目前的播放位置已更改时
					!option['live'] ? $el.videoObject.addEventListener('timeupdate',$method.onTimeupdate) : '';
					// 当视频可以开始播放时运行的脚本
					$el.videoObject.addEventListener('play',$method.onPlay);
					// 当视频已开始播放时允许的脚本
					$el.videoObject.addEventListener('playing',$method.onPlaying);
					// 当音频/视频已暂停时
					$el.videoObject.addEventListener('pause',$method.onPause);
					// 当视频由于需要缓冲下一帧而停止
					$el.videoObject.addEventListener('waiting',$method.onWaiting);
					// 当视频加载发生错误状态时
					$el.videoObject.addEventListener('error',$method.onError);
					// 当浏览器正在下载音频/视频时
					!option['live'] ? $el.videoObject.addEventListener('progress',$method.onProgress) : '';

					// sidebar event stop propagation
					var sidebar = $el.mPlayer.querySelectorAll('.mplayer-sidebar');
					for(var i = 0;i < sidebar.length;i++) {
						sidebar[i].addEventListener('touchstart',function(e) { e.stopPropagation() });
						sidebar[i].addEventListener('touchmove',function(e) { e.stopPropagation() });
						sidebar[i].addEventListener('touchend',function(e) { e.stopPropagation() });
						sidebar[i].addEventListener('click',function(e) { e.stopPropagation() });
						sidebar[i].addEventListener('dblclick',function(e) { e.stopPropagation() });
					}
				}

				_toggleEvent();
				sign == 'playerReady' ? _onceEvent() : '';
			}
		};
		
		// 弹出自定义右侧栏导航
		this.showRightSidebar = function(slotName) {
			// query custom sidebar and open
			var customSidebar = $el.mPlayer.querySelector("#mplayer-media-wrapper [slot="+slotName+"]");
			if(customSidebar && customSidebar.classList.contains('mplayer-sidebar')) {
				$method.toggleControlsDisplay({ type:'sidebarRight' });
				$method.createTimerCloseControl({ type:'cancel' });
				customSidebar.classList.add('open');

				webpagePlugin ? new webpagePlugin.interface()._removeEvent() : '';
			}
			
		};
		// 方法提供动态 隐藏/显示 播放器操作控件
		this.toggleControls = function(status) {
			if(status === true) {
				$data.showScreenControls == false ? $method.toggleControlsDisplay({ type:'showControls' }) : $method.createTimerCloseControl();
			}else if(status === false) {
				$data.showScreenControls == true ? $method.toggleControlsDisplay({ type:'hideControls' }) : '';
			}else {
				$method.toggleControlsDisplay();
			}
		},
		// 方法提供显示播放提示的Toast,参数接收一个提示信息
		this.showToast = function(message) {
			$method.showToast(message);
		}
		// 方法提供显示视频加载Loading
		this.showLoading = function() {
			$method.showLoading();
		}
		// 方法提供显示视频加载Loading
		this.hideLoading = function() {
			$method.hideLoading();
		}
		// 返回当前video 原生对象，以便于自定义下操作更多原生接口
		this.video = function() {
			return $el.videoObject;
		}
		// 指定URL 或者重新加载视频资源. 参数接受一个字符传的URL,不传参则默认执行重新加载视频.改方法重新加载Mplayer
		this.reloadUrl = function(url) {
			$method.reloadUrl(url);
		}
		// 销毁播放器
		this.destory = function() {
			$method.destory();
		}
		// 开启全屏播放
		this.openFullScreen = function() {
			$method.openFullScreen();
		}
		// 关闭全屏播放
		this.closeFullScreen = function() {
			$method.closeFullScreen();
		}
		// 主动发送错误报告
		this.sendError = function(mes) {
			$method.onError(mes);
		}
		// 获取所有播放器默认控件
		this.getControls = function() {
			// overloading $el
			setTimeout(() => { $method.overloadingEl() }, 10);
			return $el.mPlayer.querySelectorAll('[control]');
		}
		
		if(document.readyState == 'interactive' || document.readyState == 'complete') {
			$method.initCreateMplayer();
		} else {
			document.addEventListener('readystatechange',function() {
				if(document.readyState == 'interactive') { $method.initCreateMplayer() };
			})
		}
	};
	
	MuiPlayer.prototype.on = function(type, fn) {
		!this._event_[type] ? this._event_[type] = [] : '';
		this._event_[type].push(fn);
	}
	
	MuiPlayer.prototype.off = function(type, fn) {
		if (!this._event_[type]) {
			return;
		};
		
		if (!fn) {
			this._event_[type] = undefined;
			return;
		}
		
		var index = this._event_[type].indexOf(fn);
		index >= 0 ? this._event_[type].splice(index, 1) : '';
	}
	
	MuiPlayer.prototype.emit = function(type,content) {
		if (this._event_[type]) {
			for(var i = 0;i < this._event_[type].length;i++) {
				var fn = this._event_[type][i];
				fn(content);
			}
		}
	}
	
	MuiPlayer.prototype.once = function(type, fn) {
		var _self = this;
		var _fn = function(content) {
			fn(content);
			setTimeout(() => { _self.off(type,_fn) }, 200); // use delay is wait ready event
		}
		this.on(type, _fn);
	}
	
	return MuiPlayer;
});