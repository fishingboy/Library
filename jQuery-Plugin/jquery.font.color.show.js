/**
 * 文字變色特效
 * @author Leo.Kuo
 */
(function($) 
{
    $.fn.fontColorShow = function()
    {
        // 初始化
        if (this.attr('color_0') == undefined)
        {
            this.attr('color_0', 0);
            this.attr('color_1', 0);
            this.attr('color_2', 0);
            this.attr('d_0', 1);
            this.attr('d_1', 1);
            this.attr('d_2', 1);
        }

        // 取得目前顏色
        var color = 
        [
            parseInt(this.attr('color_0')),
            parseInt(this.attr('color_1')),
            parseInt(this.attr('color_2'))
        ];

        // 取得顏色是遞增或遞減
        var d = 
        [
            parseInt(this.attr('d_0')),
            parseInt(this.attr('d_1')),
            parseInt(this.attr('d_2'))
        ];

        // 計算變換顏色
        for (var i=0; i<3; i++)
        {
            // 隨機變動量
            var rand = Math.ceil(Math.random() * 6 + 1);
            color[i] += d[i] * rand;

            // 反彈
            if (color[i]<0 || color[i] > 255)
            {
                d[i] *= -1;
                color[i] += d[i] * rand;              
            }

            // 儲存顏色及遞增狀態
            this.attr('color_' + i, color[i]);
            this.attr('d_' + i, d[i]);
        }
        
        // 換顏色
        this.css({color:'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')'});

        // 重複執行
        var jquery_obj = this;
        window.setTimeout(function()
        {
            for (var i=0, i_max=jquery_obj.size(); i<i_max; i++)
            {
                $(jquery_obj[i]).fontColorShow();
            }
        }, 100);
    };
})(jQuery);