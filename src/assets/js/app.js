'use strict';
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Navbar());
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
