<?php
/*
--------------------------------
LANGUAGE: ENGLISH (USA) - en-us
--------------------------------
*/
function t($phrase){
    static $language = array(
        "linguagem" => "en-us",
        "descrição" => "AmplifiQ is a Digital Creative Agency located in Porto Alegre, RS, Brazil. We specialize in digital technologies and innovation. Our specialties are Digital Catalogues, Interactive Totems, Interactive Games, Search Engine Marketing, Search Engine Optimization, Web Portals, Corporate Websites, Blogs and Hotsites, E-commerce and Mobile Applications.",
        "descrição twitter" => "AmplifiQ is a Digital Creative Agency located in Porto Alegre, RS, Brazil. We specialize in digital technologies and innovation.",
        "palavras-chave" => "AmplifiQ, website, interactivity, hot site, creation, website, flash, digital totems, interactive totems",
        "Carregando" => "Loading",
        "Cliente" => "Client"
    );
    return (!array_key_exists($phrase,$language)) ? $phrase : $language[$phrase];
}
?>