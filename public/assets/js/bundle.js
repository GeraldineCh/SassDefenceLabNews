const Navbar = () => {
  const nav = $('<nav class="container hidden-xs">');
  const sections = $('<div class="sections pull-left">');
  const sectionsIcon = $('<a href="#" class="sections__icon"></a>');
  const sectionsTitle = $('<h5 class="uppercase">Sections</h5>');

  nav.append(sections);
  sections.append(sectionsIcon);
  sections.append(sectionsTitle);

  const search = $('<div class="search pull-left">');
  const searchIcon = $('<a href="#" class="search__icon"></a>');
  const searchTitle = $('<h5 class="uppercase">Search</h5>');

  nav.append(search);
  search.append(searchIcon);
  search.append(searchTitle);

  const social = $('<div class="social pull-right">');
  const socialFb = $('<a href="" class="social__fb"></a>');
  const socialTw = $('<a href="" class="social__tw"></a>');
  const socialIn = $('<a href="" class="social__in"></a>');

  nav.append(social);
  social.append(socialFb);
  social.append(socialTw);
  social.append(socialIn);

  return nav;
}

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

'use strict';
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Navbar());
  wrapper.append(MainNav());
  root.append(wrapper);
}

const labNews = {
  allNews: null,
  selectedNew: 0,
  allCategories: null,
  selectedCategory: 0
}

$( _ => {
  /*
  getJSON('/api/news/', (err, json) => {
  labNews.allNews = json;
  console.log(labNews.allNews);
  });

  getJSON('/api/news/' + labNews.selectedNew, (err, json) => {
  labNews.selectedNew = json;
  console.log(labNews.selectedNew);
  });

  getJSON('/api/categories/', (err, json) => {
  labNews.allCategories = json;
  console.log(labNews.allCategories);
  });

  getJSON('/api/categories/' + labNews.selectedCategory, (err, json) => {
  labNews.selectedCategory = json;
  console.log(labNews.selectedCategory);
  });
*/
  const root = $('.root');
  render(root);
})


var getJSON = (url, cb) => {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    } cb(null, xhr.response);
  });

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};
