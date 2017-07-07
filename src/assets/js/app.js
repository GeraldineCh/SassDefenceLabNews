'use strict';
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Navbar());
  root.append(wrapper);
}

const labNews = {
  allNews: null,
  selectedNew: null,
  allCategories: null,
  selectedCategory: null
}


$( _ => {
  /*
  $.get('/api/news/', (response) => {
    alert(response);
  });
  */
  getJSON('/api/news/', (err, json) => {
  //if (err) { return alert(err.message);}
  labNews.allNews = json;
  console.log(labNews.allNews);

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
