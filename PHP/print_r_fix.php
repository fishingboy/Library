<?php
/**
 * 修正 print_r 無法正常顯示布林值的問題
 * 直接把布林值取代成字串
 * @author Leo.Kuo
 */
function print_r_fix($value)
{
    function print_r_boolean_fix($value)
    {
        if (is_array($value))
        {
            foreach ($value as $key => $v) 
            {
                $value[$key] = print_r_boolean_fix($v);
            }
        }
        else if (gettype($value) == "boolean")
        {
            $boolean_str = ($value) ? "True" : "False";
            $value = "{$boolean_str} (Boolean)";
        }

        return $value;
    }
    print_r(print_r_boolean_fix($value));
}

/**************************  demo  ******************************/
$arr = array
(
    'a' => 1,
    'b' => FALSE,
    'c' => array
    (
        'e' => TRUE,
        'f' => 'Hello World!',
        'g' => array
        (
            'h' => FALSE,
            'i' => 1.234
        )
    )
);

echo "<pre>";
print_r_fix($arr);
echo "</pre>";

?>