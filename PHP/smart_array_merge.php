<?php
/**
 * 若傳入的參數不是陣列的話就直接略過，不會再發生錯誤
 * @author Leo.Kuo
 */
function smart_array_merge()
{
    $result_array = array();
    foreach (func_get_args() as $arg) 
    {
        if (is_array($arg))
        {
            $result_array = array_merge($result_array, $arg);
        }
    }
    return $result_array;
}
