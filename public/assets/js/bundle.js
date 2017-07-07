const Navbar = () => {
  const nav = $('<nav class="container">');
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

'use strict';
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Navbar());
  root.append(wrapper);
}


$( _ => {
  /*
  $.get('/api/news/', (response) => {
    alert(response);
  });
  */
  getJSON('/api/news/', (err, json) => {
  //if (err) { return alert(err.message);}
  console.log(json);

});

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
