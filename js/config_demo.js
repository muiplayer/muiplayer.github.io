import MuiPlayerMobilePlugin from '../../mui-player-mobile-plugin.min.js'
import globals from '../js/global'

export default {
    container:'#mui-player',
    src:globals.address.src_hd,
    title:'',
    poster:'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/poster.jpg',
    autoplay:false,
    autoFit:true,
    live:false,
    objectFit:'contain',
    themeColor:'rgb(62, 175, 124)',
    videoAttribute:[
        {attrKey:'webkit-playsinline',attrValue:''},
        {attrKey:'playsinline',attrValue:''},
        {attrKey:'x5-playsinline',attrValue:''},
        {attrKey:'t7-video-player-type',attrValue:'inline'},
        {attrKey:'x5-video-player-type',attrValue:'h5-page'},
        {attrKey:'x-webkit-airplay',attrValue:'allow'},
        {attrKey:'controlslist',attrValue:'nodownload'},
    ],
    plugins:[
        typeof MuiPlayerDesktopPlugin != 'undefined' ? new MuiPlayerDesktopPlugin({
        }) : {},

        typeof MuiPlayerMobilePlugin == 'function' ? new MuiPlayerMobilePlugin({
            key:'01K01L01K01I01H01I01L01K01C01H01L01K01H01J01J',
            defaultMenuConfig:{ 
                showShare:[1,2,3,4],
            },
            thumbnails:globals.thumbnails, // 缩略图配置
        }) : {},
    ],
}