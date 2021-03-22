import customSetting from './customSetting'
import globals from '../js/global'

export default {
    container:'#mui-player',
    src:globals.address.src_hd,
    title:'',
    poster:'/image/poster.jpg',
    autoplay:false,
    autoFit:false,
    live:false,
    objectFit:'cover',

    videoAttribute:[
        {attrKey:'webkit-playsinline',attrValue:''},
        {attrKey:'playsinline',attrValue:''},
        {attrKey:'x5-playsinline',attrValue:''},
        {attrKey:'t7-video-player-type',attrValue:'inline'},
        {attrKey:'x5-video-player-type',attrValue:'h5-page'},
        {attrKey:'x-webkit-airplay',attrValue:'allow'},
        {attrKey:'controlslist',attrValue:'nodownload'},
    ],

    custom:{
        headControls:[
            {
                slot:'castScreen',
                click:function(e) {
                    console.log('The head first custom button is clicked >>>');
                }
            },
            {
                slot:'likeButton',
                click:function(e) {
                    console.log('The head second custom button is clicked >>>');
                    // mp.showRightSidebar('HD');
                }
            }
        ],
        footerControls:[
            {
                slot:'nextMedia',
                position:'left',
                tooltip:'下一集',
                oftenShow:false,
                style:{},
                click:function(e) {
                    console.log('The footer first custom button is clicked >>>');
                }
            },
            {
                slot:'toggleleProgram',
                position:'right',
                tooltip:'切换选集',
                oftenShow:false,
                style:{ padding: 0 },
                click:function(e) {
                    console.log('The footer second custom button is clicked >>>');
                },
            },
        ]
    },
    plugins:[
        new MuiPlayerDesktopPlugin({
            customSetting:customSetting, // 自定义设置组菜单
            thumbnails:globals.thumbnails, // 缩略图配置
            contextmenu:[],  // 自定义右键菜单
        }),

        new MuiPlayerMobilePlugin({
            defaultMenuConfig:{
                showShare:[1,2,3,4],
            },
            thumbnails:globals.thumbnails,
        })
    ],
}