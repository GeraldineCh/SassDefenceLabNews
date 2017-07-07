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

const MainNew = () => {
  const mainNew = $('<article class="main-new container">');
  const row = $('<div class="row">');
  row.css('background-image', 'url('+ paths.news + labNews.allNews[0].img +')');
  const mainCol = $('<div class="col-xs-12">');
  const sectiontitle = $('<h5 class="title"></h5>');
  const text = $('<div class="col-xs-12 main-new__text">');
  const col = $('<div class="col-sm-9 col-xs-12">');
  const heading = $('<h1>'+ labNews.allNews[0].title +'</h1>');
  const col2 = $('<div class="col-sm-6 hidden-xs">');
  const subheading = $('<h5>'+ labNews.allNews[0].brief +'</h5>');

  mainNew.append(row);
  row.append(text);
  row.append(mainCol);
  mainCol.append(sectiontitle);
  row.append(text);
  text.append(col);
  col.append(heading);
  text.append(col2);
  col2.append(subheading);

  return mainNew;
}

const SecondaryNews = () => {
  const container = $('<article class="container secondary-news">');
  const row = $('<div class="row">');
  const first = $('<div class="col-sm-6 first-new">');
  const firstImg = $('<img src="'+ paths.news + labNews.allNews[1].img + '" alt="" class="first-new__img">');
  const firstText = $('<div class="col-sm-12 col-xs-12 first-new__text">'+ labNews.allNews[1].title +'</div>');

  container.append(row);
  row.append(first);
  first.append(firstImg);
  first.append(firstText);

  const second = $('<div class="col-sm-3 col-xs-12 second-new">');
  const secondImg = $('<img src="'+ paths.news + labNews.allNews[2].img + '" alt="" class="second-new__img">');
  const secondText = $('<div class="col-sm-12 col-xs-6 second-new__text">'+ labNews.allNews[2].title +'</div>');

  row.append(second);
  second.append(secondImg);
  second.append(secondText);

  const third = $('<div class="col-sm-3 col-xs-12 third-new">');
  const thirdImg = $('<img src="'+ paths.news + labNews.allNews[3].img + '" alt="" class="third-new__img">');
  const thirdText = $('<div class="col-sm-12 col-xs-6 third-new__text">'+ labNews.allNews[3].title +'</div>');

  row.append(third);
  third.append(thirdImg);
  third.append(thirdText);

  return container;
}

const Mundo = () => {
  const container = $('<article class="container mundo">');
  const row = $('<div class="row">');
  const colTitle = $('<div class="col-sm-12">');
  const title = $('<h5>Mundo</h5>');

  container.append(row);
  row.append(colTitle);
  colTitle.append(title);

  const leftNew = $('<div class="col-xs-12 col-sm-3 left-new">');
  const leftNewImg = $('<img src="'+ paths.news + labNews.allNews[4].img + '" alt="" class="left-new__img">');
  const leftNewText = $('<div class="col-sm-12 left-new__text">'+ labNews.allNews[4].title +'</div>');

  row.append(leftNew);
  leftNew.append(leftNewImg);
  leftNew.append(leftNewText);

  const middleCol = $('<div class="col-sm-6 col-xs-12">');
  const topRight = $('<div class="col-sm-6 top-right">');
  const topRightImg = $('<img src="'+ paths.news + labNews.allNews[5].img + '" alt="" class="top-right__img">');
  const topRightText = $('<div class="col-sm-12 top-right__text">'+ labNews.allNews[5].title +'</div>');

  row.append(middleCol);
  middleCol.append(topRight);
  topRight.append(topRightImg);
  topRight.append(topRightText);

  const topLeft = $('<div class="col-sm-6 top-left">');
  const topLeftImg = $('<img src="'+ paths.news + labNews.allNews[6].img + '" alt="" class="top-left__img">');
  const topLeftText = $('<div class="col-sm-12 top-left__text">'+ labNews.allNews[6].title +'</div>');

  middleCol.append(topLeft);
  topRight.append(topLeftImg);
  topRight.append(topLeftText);

  const middleNew = $('<div class="col-sm-12 middle-new">');
  const middleNewImg = $('<img src="'+ paths.news + labNews.allNews[7].img + '" alt="" class="middle-new__img">');
  const middleNewText = $('<div class="col-sm-7 middle-new__text">'+ labNews.allNews[7].title +'</div>');

  middleCol.append(middleNew);
  middleNew.append(middleNewImg);
  middleNew.append(middleNewText);

  const bottomNew = $('<div class="col-sm-12 bottom-new">');
  const bottomNewImg = $('<img src="'+ paths.news + labNews.allNews[8].img + '" alt="" class="bottom-new__img">');
  const bottomNewText = $('<div class="col-sm-7 bottom-new__text">'+ labNews.allNews[8].title +'</div>');

  middleCol.append(bottomNew);
  middleNew.append(bottomNewImg);
  middleNew.append(bottomNewText);

  const rightNew = $('<div class="col-xs-12 col-sm-3 right-new">');
  const rightNewImg = $('<img src="'+ paths.news + labNews.allNews[9].img + '" alt="" class="right-new__img">');
  const rightNewText = $('<div class="col-sm-12 right-new__text">'+ labNews.allNews[9].title +'</div>');

  row.append(rightNew);
  leftNew.append(rightNewImg);
  leftNew.append(rightNewText);

  return container;
}

'use strict';
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Navbar());
  wrapper.append(Header());
  wrapper.append(MainNav());
  wrapper.append(MainNew());
  wrapper.append(SecondaryNews());
  wrapper.append(Mundo());
  root.append(wrapper);
}
const paths = {
  news: 'assets/img/news/',
}
const labNews = {
  allNews: null,
  selectedNew: 0,
  allCategories: null,
  selectedCategory: null
}

$( _ => {

  getJSON('/api/news/', (err, json) => {
  labNews.allNews = json;
  console.log(labNews.allNews);
  const root = $('.root');
  render(root);
  });

  getJSON('/api/categories/', (err, json) => {
  labNews.allCategories = json;
  console.log(labNews.allCategories);
  });

  getJSON('/api/news/' + labNews.selectedNew, (err, json) => {
    labNews.selectedNew = json;
    console.log(labNews.selectedNew);
  });

});
/*
getJSON('/api/categories/' + labNews.selectedCategory, (err, json) => {
  labNews.selectedCategory = json;
  console.log(labNews.selectedCategory);
});
*/
