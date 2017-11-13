# landing
<!DOCTYPE html>
<html lang="en">

<style>
image-container {
    position: absolute;
}

div1 {
  position: relative;
}

div1 .image-container {
  position: absolute;
  top: -20px;
}

div2  {
    position: relative;
    } 
    
div2 .vuela {
    position: absolute;
    left: 0px;
    top: 20px;
    }

</style>

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <title>SALUPRO APP</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <!-- Carrousel -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://cdn.optimizely.com/js/732340058.js"></script>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WKMWZ6L');</script>
    <!-- End Google Tag Manager -->

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">

    <!--Material Icons-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!--Styles-->
    <link rel="stylesheet" href="./css/styles.css">
</head>
    
<body>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WKMWZ6L"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<!--More products modal-->
<div class="modal fade" id="modal-more-products" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content text-center">
            <div class="modal-header">
                <h5 class="modal-title">Recibe más información de este producto</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="alert alert-success" role="alert">
                <strong>Tu información se ha enviado con éxito,</strong> en breve uno de nuestro agentes se pondrá en contacto contigo.
            </div>
            <div class="alert alert-danger" role="alert">
                <strong>Ops!</strong> Ha habido algún problema con en el envío de tu información. Inténtalo de nuevo en unos minutos.
            </div>
            <div class="form-wrapper">
                <form id="leadFormModal">
                    <div class="modal-body">
                            <p class="text-center" style="padding-bottom: 10px">Nos ponemos en contacto contigo <b>sin compromiso</b></p>
                            <div class="form-group">
                                <input name="name" type="name" class="form-control" placeholder="Nombre..." onclick="dataLayer.push({'event': 'name-click'});">
                            </div>
                            <div class="form-group">
                                <input name="phone" type="phone" class="form-control" placeholder="Teléfono..." required onclick="dataLayer.push({'event': 'phone-click'});">
                            </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-block btn-warning d-flex justify-content-center align-items-center" style="cursor:pointer;">
                            Enviar <i class="material-icons md-24 md-light" style="margin-left: 1rem">send</i>
                        </button>
                    </div>
                </form>
            </div>
            <div class="or-call-us hidden-md-down">
                <p>o llamanos al </p>
                <h4><?php if(isset($_GET['phone'])){echo $_GET['phone'];}else{echo '911 712 253';}?></h4>
            </div>
        </div>
    </div>
</div>

<nav data-scroll-header class="navbar sticky-top navbar-toggleable-md navbar-light shadow">
    <a class="navbar-brand" href="https://www.salupro.com"><img src="./imgs/dental.png" width="250" alt=""></a>
    <div class="collapse navbar-collapse justify-content-end">
        <span class="navbar-text" style="color: black">
            <script language="JavaScript"> var verBase = navigator.appVersion; var url = "'http://www.misitio.com/'"; verBase = verBase.match(/MSIE ([^;]+);/); verBase =parseFloat(verBase[1]); if(navigator.appVersion.indexOf('MSIE') >-1 && verBase >=5) { with(document){ write('<A HREF="#" '); write('onClick="this.style.behavior='); write("'url(#default#homepage)';") write('this.setHomePage('+url+');">'); write('Pon mi sitio en tu página de inicio</a>') } }  </script> 
          <span style="font-size: 1.2rem">Llamanos al <b><?php if(isset($_GET['phone'])){echo $_GET['phone'];}else{echo '911 712 253';}?></b></span>
        </span>
    </div>
</nav>
    
<header class="shadow text-center" align="center">
                
                <div class="shadow" align="center" style="font-family: sans-serif; position: relative;" >
                
                    <div2 class="text-center" align="center">
                        <img src="/imgs/Websalupro_01.jpg" width="100%" alt="">
                        <!-- <form class="form-inline text-center" align="center">
                            <div class="input-group text-center" align="center">
                                <input type="email" class="form-control" size="50" placeholder="Email Address" required>
                                <div class="input-group-btn">
                                    <button type="button" class="btn btn-danger">Subscribe</button>
                                </div>
                            </div>
                        </form> -->
                    </div2>
                    
                    <!-- <div2 class="vuela">
                    <video width="320" height="240" autoplay>
                        <source src="/imgs/CompFinal_20.mp4" type="video/mp4">
                        
                        Your browser does not support the video tag.
                        </video></div2> -->
    </div>
                
</header>
    
<div class="row shadow" align="center" style="background: #ebebeb; justify-content: space-around;" ><br><br>
            <div class="col-md-1"></div>
            <div class="col-md-2"><br><br>
                    <img src="/imgs/log01.png" width="" alt="">
            </div>
            <div class="col-md-2"><br><br>
                    <img src="/imgs/log02.png" width="" alt="">
            </div>
            <div class="col-md-2"><br><br>     
                    <img src="/imgs/log03.png" width="" alt="">
            </div>
            <div class="col-md-2"><br><br>
                    <img src="/imgs/log04.png" width="" alt="">
            </div>
            <div class="col-md-2"><br><br>
                    <img src="/imgs/log05.png" width="" alt="">
            </div>
                <br><br>
            <div class="col-md-1"></div>

</div>
    <div style="position: relative;">
    <img class="shadow" style="position: relative;" src="/imgs/Websalupro_03.jpg" width="100%" alt="">
    </div>
    
<div class="shadow">

  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">

      <div class="item active">
        <img src="/imgs/Websalupro_04.jpg" alt="Clinica Millenium" style="width:100%;">
        <div class="carousel-caption">
          <h3>Clínica Millenium</h3>
          <p>La APP es muy completa y nos ahorra mucho tiempo</p>
        </div>
      </div>

      <div class="item">
        <!-- <img src="/imgs/Websalupro_04.jpg" alt="Clinica Madrid" style="width:100%;">
        <div class="carousel-caption">
          <h3>Clínica Madrid</h3>
          <p>Gracias a Salupro agilizamos nuestras compras</p>
        </div>
      </div>
    
      <div class="item">
        <!-- <img src="/imgs/Websalupro_04.jpg" alt="Clinica Dental Gala" style="width:100%;"> 
        <div class="carousel-caption">
          <h3>Clínica Dental Gala</h3>
          <p>Es una garantía de buen negocio</p>-->
        </div>
      </div>
  
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>


    <br><br><br>
    <div class="container-fluid" align="center" style="justify-content: space-around;">
    <div class="row form-title" style="justify-content: space-around;">
      <div class="col-md-8 col-md-offset-2">
          <span class="title-index" align="center"><h2>¿Tienes alguna duda o sugerencia?</h2></span>
        <br>
        <span class="subtitle-index" align="center">
                Ponte en contacto con nosotros llamando al <b>911 712 253</b> o completando el formulario a continuación.<br><br><br>
        </span>
      </div>
    </div>
    <div class="row" align="center" style="justify-content: space-around;">
      <div id="form-home" class="col-md-8 col-md-offset-2">
        <form action="" method="POST" id="contact_form">
          <div class="col-md-6 form-group">
            <!-- <span class="error hidden">Debes rellenar este campo.</span> -->
            <input type="text" class="form-control" name="email" placeholder="Email*">
          </div>
          <div class="col-md-6 form-group">
            <!-- <span class="error hidden">Debes rellenar este campo.</span> -->
            <input type="text" class="form-control" name="clinicname" placeholder="Nombre de la clínica*">
          </div>
          <div class="col-md-6 form-group">
            <!-- <span class="error hidden">Debes rellenar este campo.</span> -->
            <input type="text" class="form-control" name="contact" placeholder="Persona de contacto*">
          </div>
          <div class="col-md-6 form-group">
            <!-- <span class="error hidden">Debes rellenar este campo.</span> -->
            <input type="number" class="form-control" name="phone" placeholder="Teléfono*">
          </div>
          <div class="col-md-6 form-group">
            <!-- <span class="error hidden">Debes rellenar este campo.</span> -->
            <textarea class="form-control" name="text" rows="3" placeholder="Mensaje" style="height: auto !important;"></textarea>
          </div>
          <div class="col-md-6 form-group">
            <!-- <span class="error hidden">Debes rellenar este campo.</span> -->
            <input type="text" class="form-control" name="provider" placeholder="Proveedor habitual">
          </div>
          <div class="col-md-6 bottom-form">
            <div class="checkbox accept-terms">
              <label>
                <input id="accept-terms" type="checkbox"> He leído y acepto las <a href="/condiciones.html" target="_blank">condiciones generales de uso</a> y el
                <a href="/privacidad.html">aviso de protección de datos personales y publicidad</a>.*
              </label>
            </div>
            <button id="submit" name="submit" type="submit" value="submit" class="btn btn-primary material-btn pull-right" disabled="">Enviar</button><br><br><br><br>
          </div>
        </form>
          
        
          <br>
        
          
      </div>
  </div><br><br><br>
        <div class="container">
            <h2>¿Quieres probarlo durante un mes?</h2>
            <a href="#demo" class="btn btn-info" data-toggle="collapse">GRATIS</a>
            <div id="demo" class="collapse">
                Ahora puedes probar nuestra APP con todas las ventajas de socio durante un mes, totalmente gratis.
                ¡Descubre aquí cómo!
            </div>
        </div><br><br><br>
        <hr>
        
        <!-- Left-aligned -->
<div class="media">
  <div class="media-left">
    <img src="imgs/img_avatar3.png" class="media-object" style="width:60px">
  </div>
  <div class="media-body">
    <h4 class="media-heading">John Doe</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</div>
<hr>
<!-- Right-aligned -->
<div class="media">
  <div class="media-body">
    <h4 class="media-heading">John Doe</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <div class="media-right">
    <img src="/imgs/img_avatar4.png" class="media-object" style="width:60px">
  </div>
</div>
</div>
    
    <footer>
            <div class="footer-module">
                <div class="container">
                    <div class="row">
                        <div class="offset-md-1 bottom-legal">
                            <br>
                            
                            <p>*Esta página pertenece a Salupro Spain y a su creador Luis para el único fin de aprender y practicar lenguajes de programación y otras paranoias .</p>
                            <span style="text-decoration: underline; cursor: pointer;" href="" data-container="body"
                                  data-toggle="popover" data-placement="top"
                                  data-content="<p>Todo el contenido incluido en este site -diseño, textos, código HTML, gráficos, logotipos, iconos y botones-, así como el software utilizado, es propiedad de SALUPRO SPAIN S.L (en adelante 'SALUPRO') o de sus proveedores de contenido y está protegido por las leyes de Copyright españolas e internacionales.</p><p>Todo el software utilizado en este site es propiedad de SALUPRO o de sus proveedores de software, y esta protegido por las leyes nacionales e internacionales de Copyright.</p><p>Cualquier uso, incluida la reproducción, modificación, distribución, transmisión, reedición, arreglos o representación del contenido de este sitio web está estrictamente prohibido salvo consentimiento expreso de SALUPRO.</p>">© COPYRIGHT <span id="year"></span>
                            </span> - SALUPRO SPAIN S.L. CIF: B-87552501 - CALLE FRANCISCO
                            REMIRO, 2 (MÓDULO H) 1ª y 2ª PLANTA, 28028 MADRID, ESPAÑA. TELÉFONO: 911 712 253 / 677 493
                            735 - ÚLTIMA ACTUALIZACIÓN: <span id="full-date"></span><br>
                            
                            <?php 
                                echo $_SERVER['PHP_SELF'];
                                echo "<br>";
                                echo $_SERVER['SERVER_NAME'];
                                echo "<br>";
                                echo $_SERVER['HTTP_HOST'];
                                echo "<br>";
                                echo $_SERVER['HTTP_REFERER'];
                                echo "<br>";
                                echo $_SERVER['HTTP_USER_AGENT'];
                                echo "<br>";
                                echo $_SERVER['SCRIPT_NAME'];
                            ?>
                        </div>
            </div>  
            </div>  
            </div>  

        </footer>
    </body>
</html>
    
