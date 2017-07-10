const MainNav = (update) => {

const header = $('<header></header>');
    const nav = $(`<nav class="navbar navbar-default" role="navigation">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse"
                data-target=".navbar-ex1-collapse">
          <span class="sr-only">Desplegar navegación</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class=" visible-xs" href="#"><img src="assets/img/logoicon.png" class="logo" alt="" width="100%"></a>
      </div>
      <div class="collapse navbar-collapse navbar-ex1-collapse">
        <ul class="nav navbar-nav">
          <li><a href="#">Lo último</a></li>
          <li><a href="#">Opinión</a></li>
          <li><a href="#">Cultura</a></li>
          <li><a href="#">Perú</a></li>
          <li><a href="#">Tecología</a></li>
          <li><a href="#">Mundo</a></li>
          <li><a href="#">Economía</a></li>
          <li><a href="#">Lifestyle</a></li>
          <li><a href="#">Deporte</a></li>
        </ul>
      </div>
      </nav>`);

      header.append(nav);
      return header;
}
