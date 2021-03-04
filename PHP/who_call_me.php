/**
 * 取得誰呼叫這個 method
 * @param  integer $level 顯示的層數
 * @return string         呼叫的結構
 */
function who_call_me($level = 999)
{
    $trace_info = debug_backtrace();
    $infos = [];
    for ($i=1, $i_max=count($trace_info); $i < 1 + $level && $i < $i_max; $i++)
    {
        $info = $trace_info[$i];
        $msg = "";
        $msg .= (isset($info['file'])) ? "file:{$info['file']} - " : "";
        $msg .= (isset($info['line'])) ? "line:{$info['line']} : " : "";
        $msg .= (isset($info['class'])) ? "{$info['class']}::" : "";
        $msg .= "{$info['function']}()";
        $infos[] = $msg;
    }
    $msg = implode("<br>\r\n --> ", array_reverse($infos));
    return $msg;
}
