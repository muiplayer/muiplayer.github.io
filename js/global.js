var mp = false;

// 【视频 URL 测试链接】
var address = {
    src_hd:'/media/media.mp4',
    src_sd:'/media/media_sd.mp4',
    src_mp4:'https://mpv.videocc.net/e785b2c81c/5/e785b2c81c9e018296671a1287e99615_2.mp4',
    src_flv:'/media/media.flv',
    src_hls:'/media/media.m3u8',
}

// 视频缩略图配置
var thumbnails = {
    preview:['/image/output_160x90_10x10_001.jpg'],
    tile:[10,10],
    scale:[160,90],
}

// 视频字幕配置
var subtitle = {
    tracks:[
        {
            kind:'subtitles',
            src:'/subtitle/sintel-en.vtt',
            label:'English',
            srclang:'en',
            default:true,
        },
        {
            kind:'subtitles',
            src:'/subtitle/sintel-de.vtt',
            label:'德语',
            srclang:'de',
        },
        {
            kind:'subtitles',
            src:'/subtitle/sintel-es.vtt',
            label:'西班牙语',
            srclang:'es',
        }
    ],
    styles:{},
}

export default {
    mp,
    address,
    thumbnails,
    subtitle,
}
