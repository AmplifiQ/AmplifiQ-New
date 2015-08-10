<?php
session_start();
include("_geoip/geoip.inc");

function getRealIpAddr() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}

$gi = geoip_open("_geoip/GeoIP.dat",GEOIP_STANDARD);
$country_code = geoip_country_code_by_addr($gi, getRealIpAddr());
geoip_close($gi);

if(isset($_GET['lang'])) {
    $lang = $_GET['lang'];
    $_SESSION['lang'] = $lang;
    setcookie('lang', $lang, time() + (3600 * 24 * 30));
} else if(isset($_SESSION['lang'])) {
    $lang = $_SESSION['lang'];
} else if(isset($_COOKIE['lang'])) {
    $lang = $_COOKIE['lang'];
} else {
    $lang = $country_code;
}

switch($lang) {
    case 'BR':
    $lang_file = 'lang.pt-br.php';
    break;

    default:
    //$lang_file = 'lang.en-us.php';
    $lang_file = 'lang.pt-br.php';
}

include_once '_languages/'.$lang_file;
?>