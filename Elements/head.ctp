<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript">
        //<![CDATA[
        try {
            if (!window.CloudFlare) {
                var CloudFlare = [{
                    verbose: 0,
                    p: 0,
                    byc: 0,
                    owlid: "cf",
                    bag2: 1,
                    mirage2: 0,
                    oracle: 0,
                    paths: {cloudflare: "/cdn-cgi/nexp/dok3v=1613a3a185/"},
                    atok: "7e7ee3eb6d68fdd16081c57cd1f9ad29",
                    petok: "bb0794d281bb59993a9b78b284a55d4438c1bc5f-1431455423-1800",
                    zone: "templatecycle.com",
                    rocket: "0",
                    apps: {}
                }];
                CloudFlare.push({"apps": {"ape": "3a6373ca545007d271be322636d225e3"}});
                !function (a, b) {
                    a = document.createElement("script"), b = document.getElementsByTagName("script")[0], a.async = !0, a.src = "//ajax.cloudflare.com/cdn-cgi/nexp/dok3v=7e13c32551/cloudflare.min.js", b.parentNode.insertBefore(a, b)
                }()
            }
        } catch (e) {
        }
        ;
        //]]>
    </script>
    <!--    <link rel="shortcut icon" href="/assets/ico/favicon.png">-->
    <title><?php echo $title_for_layout; ?> &raquo; <?php echo Configure::read('Site.title'); ?></title>

    <?php
    echo $this->Html->css(array(
        '/assets/bootstrap/css/bootstrap.css',
        '/assets/css/skin-3.css',
        '/assets/css/style.css',
    ));
    echo $this->fetch('css');
    echo $this->Html->script(array(
        '/assets/js/pace.min.js',
    ));
    echo $this->fetch('topScript');
    ?>
    <!--[if lt IE 9]>
    <?php
        echo $this->Html->script(array(
    '/assets/js/ie9/html5shiv.js',
    '/assets/js/ie9/respond.min.js',
    ));
    ?>
    <![endif]-->
    <script>
        paceOptions = {
            elements: true
        };
    </script>
    <style>
        .themeControll {
            background: #2d3e50;
            height: auto;
            width: 100px;
            position: fixed;
            left: 0;
            padding: 20px;
            top: 20%;
            z-index: 999999;
            -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -o-transform: translateX(0);
            -ms-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
            -ms-filter: none;
            filter: none;
            -webkit-transition: opacity .5s linear, -webkit-transform .7s cubic-bezier(.56, .48, 0, .99);
            -moz-transition: opacity .5s linear, -moz-transform .7s cubic-bezier(.56, .48, 0, .99);
            -o-transition: opacity .5s linear, -o-transform .7s cubic-bezier(.56, .48, 0, .99);
            -ms-transition: opacity .5s linear, -ms-transform .7s cubic-bezier(.56, .48, 0, .99);
            transition: opacity .5s linear, transform .7s cubic-bezier(.56, .48, 0, .99);
        }

        .themeControll.active {
            display: block;
            -webkit-transform: translateX(-100px);
            -moz-transform: translateX(-100px);
            -o-transform: translateX(-100px);
            -ms-transform: translateX(-1020px);
            transform: translateX(-100px);
            -webkit-transition: opacity .5s linear, -webkit-transform .7s cubic-bezier(.56, .48, 0, .99);
            -moz-transition: opacity .5s linear, -moz-transform .7s cubic-bezier(.56, .48, 0, .99);
            -o-transition: opacity .5s linear, -o-transform .7s cubic-bezier(.56, .48, 0, .99);
            -ms-transition: opacity .5s linear, -ms-transform .7s cubic-bezier(.56, .48, 0, .99);
            transition: opacity .5s linear, transform .7s cubic-bezier(.56, .48, 0, .99);
        }

        .themeControll a {
            border-radius: 3px;
            clear: both;
            display: block;
            height: 25px;
            margin-bottom: 4px;
            width: 50px;
        }

        .tbtn {
            background: #2D3E50;
            color: #FFFFFF !important;
            font-size: 30px;
            height: auto;
            padding: 10px;
            position: absolute;
            right: -40px;
            top: 0;
            width: 40px;
            cursor: pointer;
        }

        @media (max-width: 780px) {
            .themeControll {
                display: none;
            }
        }</style>
</head>