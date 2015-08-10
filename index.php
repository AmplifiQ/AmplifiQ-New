<?php
include('common.php');

// If no language is set, assume English (EN)
if (!isset($_GET['lang']) || $lang == '') {
    //$lang = "EN";
    $lang = "BR";
}

?><!DOCTYPE HTML>
<html
    lang="<?php echo t('Linguagem'); ?>"
    prefix="og: http://ogp.me/ns#">
<head>

<!--
<script type="text/javascript" src="_js/justice.min.js"></script>
<script type="text/javascript">
    Justice.init({
        metrics: {
            TTFB:             { budget: 200   },
            domInteractive:   { budget: 250   },
            domComplete:      { budget: 800   },
            firstPaint:       { budget: 1000  },
            pageLoad:         { budget: 2000  },
            requests:         { budget: 6     },
        },
        warnThreshold: 0.8,
        showFPS: true,
        chartType: 'spline'
    });
</script>
 -->

    <meta charset="utf-8">

    <title>AmplifiQ</title>

    <!-- <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <meta name="description" content="<?php echo t('Descrição'); ?>">
    <meta name="author" content="AmplifiQ">
    <meta name="keywords" content="<?php echo t('Palavras-chave'); ?>">
    <meta name="robots" content="index, follow">

    <!-- schema.org -->
    <meta itemscope itemtype="http://schema.org/WebPage">
    <meta itemprop="name" content="AmplifiQ">
    <meta itemprop="headline" content="AmplifiQ">
    <meta itemprop="description" content="<?php echo t('Descrição'); ?>">
    <meta itemprop="image" content="http://www.amplifiq.com.br/_img/fb-share-1200x630.jpg">

    <!-- open graph -->
    <meta property="og:type" content="website">
    <meta property="og:locale" content="pt_BR">
    <meta property="og:url" content="http://www.amplifiq.com.br/">
    <meta property="og:title" content="AmplifiQ">
    <meta property="og:description" content="<?php echo t('Descrição'); ?>">
    <meta property="og:image" content="http://www.amplifiq.com.br/_img/fb-share-1200x630.jpg">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">

    <!-- twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@AmplifiQ">
    <meta name="twitter:title" content="AmplifiQ">
    <meta name="twitter:description" content="<?php echo t('Descrição Twitter'); ?>">
    <meta name="twitter:creator" content="@AmplifiQ">
    <meta name="twitter:image:src" content="http://www.amplifiq.com.br/_img/tw-share-500x280.jpg">
    <meta name="twitter:domain" content="amplifiq.com.br">

    <!--
        Dosis Light (300), Normal (400), Medium (500), Semi-Bold (600)
    -->
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Dosis:300,400,500,600">
    <link rel="stylesheet" type="text/css" href="_css/base.css" media="all">
    <link rel="stylesheet" type="text/css" href="_css/default.css" media="all">

    <link rel="shortcut icon" href="_img/favicon.ico">
</head>

<body>
    <div class="mobile-bar"></div>

    <div class="rotation">
        <div class="aligner"></div>
        <div class="contents">
            <img src="_img/mobile/rotate.png">
            <p>Por favor, rotacione seu dispositivo para o modo retrato.</p>
        </div>

        <div class="logo-small">AmplifiQ - <?php echo t('Agência que faz. Produtora que pensa!'); ?></div>
    </div>

    <div class="loading">
        <div class="aligner"></div>
        <div class="logo-loader"></div>

        <div class="logo-type">AmplifiQ</div>
        <div class="line-rail">
            <div class="line-bar"></div>
        </div>
    </div>

    <div class="loaded">
        <div class="border-top"></div>

        <h1 class="logo" data-animate="1"><a href="#showreel">AmplifiQ - <?php echo t('Agência que faz. Produtora que pensa!'); ?></a></h1>

        <a class="close-menu" data-animate="1"><?php echo t('Fechar menu'); ?></a>
        <a class="open-menu" data-animate="1"><?php echo t('Abrir menu'); ?></a>
        <a class="close-button" data-animate="1"><?php echo t('Fechar janela'); ?></a>

        <div id="off-content" class="off-content"></div>

        <header id="header">
            <div class="nav-container">
                <nav id="nav" class="nav">
                    <ul class="menu">
                        <li data-menuanchor="showreel"><a href="#showreel"><?php echo t('Showreel'); ?></a></li>
                        <li data-menuanchor="solutions"><a href="#solutions"><?php echo t('Soluções'); ?></a></li>
                        <li data-menuanchor="clients"><a href="#clients"><?php echo t('Clientes'); ?></a></li>
                        <li data-menuanchor="iguatemi-porto-alegre" class="cases"><a href="#iguatemi-porto-alegre"><?php echo t('Cases'); ?></a></li>
                    </ul>
                    <hr>
                    <div class="mustache">Agência <strong>que faz</strong>,<br><strong>Produtora</strong> que pensa.</div>
                    <div class="contact">
                        <span><strong><a class="hello" href="mailto:hello@amplifiq.com.br?subject=Hello&#44;&#160;AmplifiQ!">hello@amplifiq.com.br</a></strong></span>
                        <span>POA // <a class="tel" href="tel:+555133773039">+55 51 3377.3039</a></span>
                        <span class="address">Av. Cristovão Colombo, 2834<br>Higienópolis, Porto Alegre - RS</span>
                        <?php
                        /*
                        <hr>
                        <ul class="social">
                            <li>
                                <a href="http://fb.com/AmplifiQEstudio" rel="external" class="facebook" title="Facebook">AmplifiQ <?php echo t('no Facebook'); ?></a>
                            </li>
                            <li>
                                <a href="http://twitter.com/AmplifiQ" rel="external" class="twitter" title="Twitter">AmplifiQ <?php echo t('no Twitter'); ?></a>
                            </li>
                            <li>
                                <a href="http://linkedin.com/company/amplifiq" rel="external" class="linkedin" title="LinkedIn">AmplifiQ <?php echo t('no LinkedIn'); ?></a>
                            </li>
                            <li>
                                <a href="http://vimeo.com/AmplifiQ" rel="external" class="vimeo" title="Vimeo">AmplifiQ <?php echo t('no Vimeo'); ?></a>
                            </li>
                        </ul>
                        */
                        ?>
                    </div>
                </nav>
            </div>
        </header>

        <div id="main-content" class="main-content">
            <!-- FULLPAGES -->
            <div class="full-pages">

                <!-- Showreel -->
                <section id="section-showreel" class="showreel section">

                    <div class="video-curtain"></div>
                    <iframe id="player-home-bg" class="video-bg video-home-bg" src="https://player.vimeo.com/video/134987859?api=1&amp;player_id=player-home-bg&amp;autoplay=1&amp;loop=1&amp;badge=0&amp;byline=0&amp;portrait=0&amp;title=0&amp;playbar=0&amp;fullscreen=0" width="2048" height="1152" frameborder="0"></iframe>
                    <div class="home-bg"></div>

                    <iframe id="player-home-showreel" class="video-bg video-home-showreel" src="https://player.vimeo.com/video/134987858?api=1&amp;player_id=player-home-showreel&amp;autoplay=0&amp;loop=0&amp;badge=0&amp;byline=0&amp;portrait=0&amp;title=0&amp;playbar=0&amp;fullscreen=0" width="2048" height="1152" frameborder="0" webkitAllowFullScreen="0" mozallowfullscreen="0" allowFullScreen="0"></iframe>

                    <div class="wrap">
                        <h2 class="title">
                            <span class="agency">Agência</span> <span class="who-does">que faz.</span> <span class="producer">Produtora</span> <span class="who-thinks">que pensa.</span>
                        </h2>
                        <div class="clear"></div>
                        <div class="intro">
                            <h3 class="headline">Somos especialistas em entregar soluções completas para o mundo digital.<br>Atendemos projetos de comunicação web em todas as suas fases, do planejamento<br>até o monitoramento e entrega de resultados.</h3>
                            <div class="clear"></div>
                            <a class="button-showreel" data-animate="1">Assista o showreel</a>
                            <div class="clear"></div>
                            <a class="get-to-know-us" href="#solutions" data-animate="1">Conheça nossos serviços</a>
                        </div>
                    </div>
                    <a class="button-hidereel" data-animate="1">HIDE SHOWREEL</a>
                </section>
                <!-- /Showreel -->

                <!-- Solutions -->
                <section id="section-solutions" class="solutions section">

                    <div class="container">
                        <div class="contents"></div>
                    </div>

                    <div class="wrap">

                        <div class="introduction clearfix">
                            <h2 class="title">Soluções</h2>
                            <div class="clear"></div>
                            <hr>
                            <div class="clear"></div>
                            <h3 class="headline">Aceitamos desafios e entregamos resultados para nossos clientes!</h3>
                        </div>

                        <ul class="list clearfix">

                            <li class="creation-design">
                                <div class="bg"></div>
                                <div class="contents">

                                    <div class="icon">
                                        <div class="lines"></div>
                                    </div>

                                    <div class="solution">
                                        <h4 class="what">Criação + Design</h4>
                                        <hr>
                                        <div class="intro">
                                            <p class="how">Ideias que viram realidade</p>
                                            <a class="know-more" data-animate="1">Saiba mais</a>
                                        </div>
                                    </div>

                                    <div class="content">
                                        <div class="creation-design-content text">
                                            <h4 class="what">Criação + Design</h4>
                                            <p class="how">Ideias que viram realidade</p>
                                            <p>A AmplifiQ tem por essência ser uma empresa preparada para criar em conjunto com o cliente. Estudamos as necessidades, planejamos e arquitetamos para fazer a ideia virar realidade.</p>
                                            <p>Nossos designers estão sempre desenvolvendo o seu lado artístico para soluções funcionais e muito bem desenhadas. Por isso, temos o layout dos nossos trabalhos como um dos principais diferenciais. Eles informam e deslumbram o usuário.</p>
                                            <ul>
                                                <li>Sites</li>
                                                <li>Hotsites</li>
                                                <li>E-commerce</li>
                                                <li>Blog</li>
                                                <li>Portais</li>
                                                <li>Aplicativos mobile</li>
                                                <li>Games</li>
                                                <li>Arquitetura da informação</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li class="digital-production">
                                <div class="bg"></div>
                                <div class="contents">

                                    <div class="icon">
                                        <div class="lines"></div>
                                    </div>

                                    <div class="solution">
                                        <h4 class="what">Produção Digital</h4>
                                        <hr>
                                        <div class="intro">
                                            <p class="how">Necessidades além de agência</p>
                                            <a class="know-more" data-animate="1">Saiba mais</a>
                                        </div>
                                    </div>

                                    <div class="content">
                                        <div class="digital-production-content text">
                                            <h4 class="what">Produção Digital</h4>
                                            <p class="how">Necessidades além de agência</p>
                                            <p>Além de termos um núcleo de criação e design, contamos com profissionais de ponta que dominam linguagens de front e back end.</p>
                                            <p>Se você tem necessidades que vão além de uma agência, nós somos a sua solução como produtora digital.</p>
                                            <ul>
                                                <li>CMS</li>
                                                <li>Front e Back End</li>
                                                <li>Aplicativos iOS, Android, Windows</li>
                                                <li>E-commerce</li>
                                                <li>Portais </li>
                                                <li>Web Sites</li>
                                                <li>Blogs</li>
                                                <li>Hotsites</li>
                                                <li>Touch Screen</li>
                                                <li>Kinect</li>
                                                <li>Facebook Apps</li>
                                                <li>Ferramentas para Redes sociais</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li class="strategy">
                                <div class="bg"></div>
                                <div class="contents">

                                    <div class="icon">
                                        <div class="lines"></div>
                                    </div>

                                    <div class="solution">
                                        <h4 class="what">Estratégia</h4>
                                        <hr>
                                        <div class="intro">
                                            <p class="how">Otimizar ações</p>
                                            <a class="know-more" data-animate="1">Saiba mais</a>
                                        </div>
                                    </div>

                                    <div class="content">
                                        <div class="strategy-content text">
                                            <h4 class="what">Estratégia</h4>
                                            <p class="how">Otimizar ações</p>
                                            <p>Contribuímos para que o nosso cliente consiga esclarecer os seus objetivos através de mecanismos que ajudam a empresa a ser mais ágil, não desperdiçar recursos e otimizar suas ações.</p>
                                            <ul>
                                                <li>Consultoria digital</li>
                                                <li>Campanhas de e-mail Marketing</li>
                                                <li>Posicionamento no Google</li>
                                                <li>Banners publicitários</li>
                                                <li>Campanha para Facebook</li>
                                                <li>Ações interativas</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li class="social-media">
                                <div class="bg"></div>
                                <div class="contents">

                                    <div class="icon">
                                        <div class="lines"></div>
                                    </div>

                                    <div class="solution">
                                        <h4 class="what">Mídias Sociais</h4>
                                        <hr>
                                        <div class="intro">
                                            <p class="how">Engajamento e resultado</p>
                                            <a class="know-more" data-animate="1">Saiba mais</a>
                                        </div>
                                    </div>

                                    <div class="content">
                                        <div class="social-media-content text">
                                            <h4 class="what">Mídias Sociais</h4>
                                            <p class="how">Engajamento e resultado</p>
                                            <p>Por meio de conteúdos atraentes, monitoramento e retornos ágeis, trabalhamos para que sua empresa tenha mais do que fãs em sua página. Trabalhamos pelo engajamento e pelo resultado concreto.</p>
                                            <p>Além disso, estudamos as melhores formas para que nossos clientes fiquem bem posicionados nos mecanismos de busca.</p>
                                            <ul>
                                                <li>Produção de conteúdo</li>
                                                <li>Monitoramento</li>
                                                <li>Gestão de relacionamento</li>
                                                <li>Mídia</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </section>
                <!-- /Solutions -->

                <!-- Clients -->
                <section id="section-clients" class="clients section">
                    <div class="wrap">
                        <div class="intro clearfix">
                            <h2 class="title">Clientes</h2>
                            <div class="clear"></div>
                            <hr>
                            <div class="clear"></div>
                            <h3 class="headline">Aceitamos desafios e entregamos resultados para nossos clientes!</h3>
                        </div>

                        <div class="clear"></div>

                        <ul class="list-clients">
                            <li><span>01</span><img src="_img/clients/banrisul.svg" alt="Imagem do logotipo de Banrisul"></li><!--
                         --><li><span>02</span><img src="_img/clients/baril.svg" alt="Imagem do logotipo de Báril"></li><!--
                         --><li><span>03</span><img src="_img/clients/capsula.svg" alt="Imagem do logotipo de Capsula"></li><!--
                         --><li><span>04</span><img src="_img/clients/converse.svg" alt="Imagem do logotipo de Converse"></li><!--
                         --><li><span>05</span><img src="_img/clients/elemidia.svg" alt="Imagem do logotipo de Elemidia"></li><!--
                         --><li><span>06</span><img src="_img/clients/gerdau.svg" alt="Imagem do logotipo de Gerdau"></li><!--
            07 --><li class="line-break"><!-- line break --></li><!--
                         --><li><span>08</span><img src="_img/clients/iguatemi.svg" alt="Imagem do logotipo de Iguatemi"></li><!--
                         --><li><span>09</span><img src="_img/clients/infomoney.svg" alt="Imagem do logotipo de InfoMoney"></li><!--
                         --><li><span>10</span><img src="_img/clients/grupometa.svg" alt="Imagem do logotipo do Grupo Meta "></li><!--
                         --><li><span>11</span><img src="_img/clients/nike.svg" alt="Imagem do logotipo de Nike"></li><!--
                         --><li><span>12</span><img src="_img/clients/oz.svg" alt="Imagem do logotipo de Oz Design"></li><!--
    13 --><li class="line-break"><!-- line break --></li><!--
                         --><li><span>14</span><img src="_img/clients/piccadilly.svg" alt="Imagem do logotipo de Piccadilly"></li><!--
                         --><li><span>15</span><img src="_img/clients/plaza.svg" alt="Imagem do logotipo de Plaza São Rafael"></li><!--
            16 --><li class="line-break"><!-- line break --></li><!--
                         --><li><span>17</span><img src="_img/clients/rge.svg" alt="Imagem do logotipo de RGE - Rio Grande Energia"></li><!--
                         --><li><span>18</span><img src="_img/clients/senai.svg" alt="Imagem do logotipo de Senai"></li><!--
                         --><li><span>19</span><img src="_img/clients/skol.svg" alt="Imagem do logotipo de Skol"></li><!--
                         --><li><span>20</span><img src="_img/clients/unidasul.svg" alt="Imagem do logotipo de Unidasul"></li><!--
    21 --><li class="line-break"><!-- line break --></li><!--
                         --><li><span>22</span><img src="_img/clients/vesta.svg" alt="Imagem do logotipo de Vesta"></li><!--
                         --><li><span>23</span><img src="_img/clients/xp.svg" alt="Imagem do logotipo de XP Investimentos"></li>
                        </ul>
                    </div>
                </section>
                <!-- /Clients -->

                <!-- CASES -->
<?php
    $cases = array(
        'iguatemi-porto-alegre',
        'converse',
        'expansao-iguatemi',
        'xp-educacao',
        'monster-high',
        'o-pequeno-principe',
        'baril',
        'shopping-cidade-jardim',
        'caravana-rge',
        'arena-frozen',
        'senai-em-libras',
        'formiguinhas-do-rissul'
        );

    foreach ($cases as $case) {
?>
                <section id="section-<?php echo $case; ?>" data-case="<?php echo $case; ?>" class="case <?php echo $case; ?> section"></section>
<?php
    }
?>
                <!-- /CASES -->

            </div>
            <!-- /FULLPAGES -->
        </div>

        <footer id="footer" class="footer">
            <div class="wrap"></div>

            <div class="col">
                <span><a class="tel" data-tooltip="Ligue pra gente" href="tel:+555133773039">+55 51 3377.3039</a></span>
                <a class="hello" data-tooltip="Entre em contato" href="mailto:hello@amplifiq.com.br?subject=Hello&#44;&#160;AmplifiQ!">hello@amplifiq.com.br</a>
            </div>

            <div class="col">
                <ul class="social">
                    <li>
                        <a href="http://fb.com/AmplifiQEstudio" rel="external" class="facebook" data-tooltip="Facebook">AmplifiQ <?php echo t('no Facebook'); ?></a>
                    </li>
                    <li>
                        <a href="http://linkedin.com/company/amplifiq" rel="external" class="linkedin" data-tooltip="LinkedIn">AmplifiQ <?php echo t('no LinkedIn'); ?></a>
                    </li>
                    <li>
                        <a href="http://vimeo.com/AmplifiQ" rel="external" class="vimeo" data-tooltip="Vimeo">AmplifiQ <?php echo t('no Vimeo'); ?></a>
                    </li>
                </ul>
                <span class="projects"><?php echo t('Visite nosso'); ?> <strong><a href="http://www.amplifiq.com.br/portfolio_amp/" target="_blank"><?php echo t('Arquivo de Projetos'); ?></a></strong> <?php //echo t('para ver mais do nosso trabalho'); ?>.</span>
            </div>
        </footer>
    </div>

    <div id="fb-root"></div>
    <script>
        // Facebook
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '1481388368838620',
                xfbml      : true,
                version    : 'v2.4'
            });
        };
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        // Google Analytics
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-66167505-1', 'auto');
        ga('send', 'pageview');

        // Browser-Update.org
        var $buoop = {
            vs: {i:8,f:25,o:15,s:6},c:2,
            reminder: 24,
            reminderClosed: 1,
            test: false
        };
        function buorg(){
            var e = document.createElement("script");
            e.src = "//browser-update.org/update.min.js";
            document.body.appendChild(e);
        };
        try { document.addEventListener("DOMContentLoaded", buorg, false); }
        catch(e) { window.attachEvent("onload", buorg); }

        // Common
        var lang = '<?php echo strtolower($lang); ?>';
        if (lang === undefined || lang !== 'br' || lang !== 'en') {
            //lang = 'en';
            lang = 'br';
        }
        var siteSections = ['<?php echo implode("', '", $cases) ?>'];
        siteSections.unshift('showreel', 'solutions', 'clients');
    </script>

    <script src="_js/jquery-2.1.4.min.js"></script>
    <script src="_js/plugins.js"></script>
    <script src="_js/default.js"></script>

</body>
</html>