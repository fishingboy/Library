/**
 * 判斷是否為手機
 * @author Leo.Kuo
 */
(function($, window) 
{
    // 判斷是否為手機
    var mobiles = 
    [
        "midp", "j2me", "avant", "docomo", "novarra", "palmos", "palmsource",
        "240x320", "opwv", "chtml", "pda", "windows ce", "mmp/",
        "blackberry", "mib/", "symbian", "wireless", "nokia", "hand", "mobi",
        "phone", "cdm", "up.b", "audio", "sie-", "sec-", "samsung", "htc",
        "mot-", "mitsu", "sagem", "sony", "alcatel", "lg", "eric", "vx",
        "NEC", "philips", "mmm", "xx", "panasonic", "sharp", "wap", "sch",
        "rover", "pocket", "benq", "java", "pt", "pg", "vox", "amoi",
        "bird", "compal", "kg", "voda", "sany", "kdd", "dbt", "sendo",
        "sgh", "gradi", "jb", "dddi", "moto", "iphone", "android",
        "iPod", "incognito", "webmate", "dream", "cupcake", "webos",
        "s8000", "bada", "googlebot-mobile"
    ];
    var is_mobile = false;
    var ua = window.navigator.userAgent.toLowerCase();
    for (var i = 0; i < mobiles.length; i++) 
    {
        if (ua.indexOf(mobiles[i]) > 0) 
        {
            is_mobile = true;
            break;
        }
    }
    $.is_mobile = is_mobile;

    // 判斷是不是 IOS 系統
    $.is_IOS     = window.navigator.userAgent.match(/iPhone|iPad|iPod/gi) ? true : false;

    // 判斷是不是 android 系統
    $.is_android = window.navigator.userAgent.match(/Android/gi) ? true : false;
})(jQuery, window);