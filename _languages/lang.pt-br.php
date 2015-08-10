<?php
/*
--------------------------------
LANGUAGE: PORTUGUÊS (BRA) - pt-br
--------------------------------
*/
function t($phrase){
    static $language = array(
        "Linguagem" => "pt-br",

        'Agência que faz. Produtora que pensa!' => 'Agência que faz. Produtora que pensa!',

        'Descrição' => 'A AmplifiQ é uma Agência Digital Criativa localizada em Porto Alegre, RS, Brasil. Somos especialistas em tecnologias digitais e inovação. Nossas especialidades são Catálogos Digitais, Totems Interativos, Jogos Interativos, Search Engine Marketing, Search Engine Optimization, Portais, Sites Institucionais, Blogs e Hotsites, E-commerce e Aplicativos Móveis.',
        'Descrição Twitter' => 'A AmplifiQ é uma Agência Digital Criativa localizada em Porto Alegre, RS, Brasil. Somos especialistas em tecnologias digitais e inovação.',
        'Palavras-chave' => 'AmplifiQ, site, interatividade, hotsite, criação, website, flash, totem digital, totem interativo',

        "Carregando" => "Carregando",
        "Fechar janela" => "Fechar janela",
        "Abrir menu" => "Abrir menu",

        "Showreel" => "Showreel",
        "Soluções" => "Soluções",
        "Clientes" => "Clientes",
        "Cases" => "Cases",
        "Contato" => "Contato",

        "no Facebook" => "no Facebook",
        "no Twitter" => "no Twitter",
        "no LinkedIn" => "no LinkedIn",
        "no Vimeo" => "no Vimeo",

        "Visite nosso" => "Visite nosso",
        "Arquivo de Projetos" => "Arquivo de Projetos",
        "para ver mais do nosso trabalho" => "para ver mais do nosso trabalho",
        "em breve" => "em breve",

        "Case" => "Case",
        "Cliente" => "Cliente"
    );
    return (!array_key_exists($phrase,$language)) ? $phrase : $language[$phrase];
}
?>