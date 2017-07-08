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

    getJSON('/api/categories/', (err, json) => {
      labNews.allCategories = json;
      console.log(labNews.allCategories);

      getJSON('/api/news/' + labNews.selectedNew, (err, json) => {
        labNews.selectedNew = json;
        console.log(labNews.selectedNew);

        const root = $('.root');
        render(root);
      });
    });
  });

});

/*
getJSON('/api/categories/' + labNews.selectedCategory, (err, json) => {
  labNews.selectedCategory = json;
  console.log(labNews.selectedCategory);
});
*/
