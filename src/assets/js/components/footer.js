const Footer = () => {
  const footer = $('<footer class="container footer">');
  const row = $('<div class="row">');
  const containerFooter = $('<div class="col-sm-12 padding-top-text">');

  const footerLeft = $('<div class="col-xs-12 col-sm-4">');
  const imgLogo = $('<div class="col-xs-12 footer_logo"><img src="assets/img/logo-footer.png" alt="logo Laboratoria">');
  const textLeft = $('<p class="footer_left">© Editado por Laboratoria<br>Av. José Pardo #601 Lima 1 Perú<br>Copyright © Laboratoria.la<br>Todos los derechos reservados.</p>');

  const footerCenter = $('<div class="col-xs-12 col-sm-4 hidden-xs footer_center">');
  const textCenter = $('<p>DIRECTOR GENERAL:<br>Francisco Miró Quesada Cantuarias</p><p>DIRECTOR PERIODÍSTICO:<br>Fernando Berckemeyer Olaechea</p><p>SUSCRIPCIONES:<br>suscriptores@comercio.com.pe</p><p>PUBLICIDAD ONLINE:<br>fonoavisos@comercio.com.pe</p><p>CLUB EL COMERCIO:<br>clubelcomercio@comercio.com.pe<br>Compromiso de Autorregulación Comercial</p>');

  const footerRight = $('<div class="col-xs-12 col-sm-4 hidden-xs footer_right">');
  const textRight = $('<p><a>TÉRMINOS Y CONDICIONES DE USO</a><br><a>TRABAJA CON NOSOTROS</a><br><a>LIBRO DE RECLAMACIONES</a><br><a>SEDES PRINCIPALES</a><br><a>POLÍTICAS DE PRIVACIDAD</a></p>');

  const footerSocial = $('<div class="footerSocial col-xs-12">SÍGUENOS</div>');
  // const social = $('<div class="col-xs-8 ">');
  const socialFb = $('<a><div class="col-xs-2"><img src="assets/img/fb.png" class="social-footer"></div></a>');
  const socialTw = $('<a><div class="col-xs-2"><img src="assets/img/tw.png" class="social-footer"></div></a>');
  const socialIn = $('<a><div class="col-xs-2"><img src="assets/img/in.png" class="social-footer"></div></a>');

  footerLeft.append(imgLogo);
  footerLeft.append(textLeft);
  containerFooter.append(footerLeft);

  footerCenter.append(textCenter);
  containerFooter.append(footerCenter);

  // social.append(socialFb);
  // social.append(socialTw);
  // social.append(socialIn);
  footerSocial.append(socialFb);
  footerSocial.append(socialTw);
  footerSocial.append(socialIn);

  footerRight.append(textRight);
  // footerSocial.append(social);

  footerRight.append(footerSocial);
  containerFooter.append(footerRight);

  row.append(containerFooter);
  footer.append(row);
  return footer;
}
