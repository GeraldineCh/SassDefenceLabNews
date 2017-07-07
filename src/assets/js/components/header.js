const Header = () => {
  const header = $('<header class="header hidden-xs text-center">');
  const logo = $('<img class="logo center-block" alt="Laboratoria" src="assets/img/logoicon.png">');
  const date = $('<span class="header__date">Lunes, 12 de Julio de 2017</span>');
  const divider = $('<span>|</span>');
  const weather = $('<span class="header__weather">22°</span>');

  header.append(logo);
  header.append(date);
  header.append(divider);
  header.append(weather);

  return header;
}

/*
<header class="header hidden-xs text-center">
  <img class="logo center-block" alt="Laboratoria" src="assets\img\logoicon.png">
  <span class="header__date">Lunes, 12 de Julio de 2017</span>
  <span>|</span>
  <span class="header__weather">22°</span>
</header>
*/
