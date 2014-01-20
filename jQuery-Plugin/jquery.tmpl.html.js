/**
 * 把 jQuery Template 的 html 傳回來
 * 因為 jQuery Template 似乎沒有提供此功能，只好自己包一個 jQuery Plugin 的介面
 * @author Leo Kuo <et282523@hotmail.com>
 */
(function($) 
{
    $.fn.tmpl_html = function(data) 
    {
        return this.template("#" + this.attr('id'))($, {data: data}).join('');
    };
})(jQuery);