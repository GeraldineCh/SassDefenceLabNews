const MainNav = () => {
  
  const nav = $('<nav class="navbar navbar-default">');
  const container = $('<div class="container">');
  const navbarHeader = $('<div class="navbar-header visible-xs">');
  const hamburguer = $('<span class="navbar-toggle collapsed navbar-header__hamburguer" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">');
  const logo = $('<img class="navbar-brand" alt="Laboratoria" src="assets/img/logoicon.png">');

  nav.append(container);
  container.append(navbarHeader);
  navbarHeader.append(hamburguer);
  navbarHeader.append(logo);


  const collapse = $('<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">');
  const ul = $('<ul class="nav navbar-nav">');
  const ultimo = $('<li><a href="#" class="navbar-nav__tab navbar-nav__tab--hover">Lo último</a></li>');
  const opinion = $('<li><a href="#" class="navbar-nav__tab navbar-nav__tab--hover">Opinión</a></li>');
  const cultura = $('<li><a href="#" class="navbar-nav__tab navbar-nav__tab--hover">Cultura</a></li>');
  const peru = $('<li><a href="#" class="navbar-nav__tab navbar-nav__tab--hover">Perú</a></li>');
  const tecnologia = $('<li><a href="#" class="navbar-nav__tab navbar-nav__tab--hover">Tecnología</a></li>');
  const mundo = $('<li><a href="#" class="navbar-nav__tab navbar-nav__tab--hover">Mundo</a></li>');
  const economia = $('<li><a href="#" class="navbar-nav__tab navbar-nav__tab--hover">Economía</a></li>');
  const lifestyle = $('<li><a href="#" class="navbar-nav__tab navbar-nav__tab--hover">Lifestyle</a></li>');
  const deporte = $('<li><a href="#" class="navbar-nav__tab navbar-nav__tab--hover">Deporte</a></li>');

  container.append(ul);
  ul.append(ultimo);
  ul.append(opinion);
  ul.append(cultura);
  ul.append(peru);
  ul.append(tecnologia);
  ul.append(mundo);
  ul.append(economia);
  ul.append(lifestyle);
  ul.append(deporte);

  hamburguer.on("click", function(){
   $(this).toggleClass("collapsed");
   //$(this).parent().addClass("active");
});


  return nav;
}
