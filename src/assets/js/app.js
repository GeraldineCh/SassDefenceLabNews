'use strict';
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Navbar());
  wrapper.append(Header(_ => render(root)));
  wrapper.append(MainNav(_ => render(root)));

  switch (state.currScreen) {
    case 'principal':
    wrapper.append(MainNew(_ => render(root)));
    wrapper.append(SecondaryNews());
    wrapper.append(Mundo());
    wrapper.append(Tecnologia());
    break;

    case 'article':
    wrapper.append(Article());
    break;
  }

  root.append(wrapper);
}

const paths = {
  news: 'assets/img/news/',
}

const labNews = {
  allNews: null,
  id: null,
  selectedNew: null,
  allCategories: null,
  selectedCategory: null
}

const state = {
  currScreen: 'principal'
}

$( _ => {

  getJSON('/api/news/', (err, json) => {
  labNews.allNews = json;
  console.log(labNews.allNews);

    getJSON('/api/categories/', (err, json) => {
      labNews.allCategories = json;
      console.log(labNews.allCategories);

        const root = $('.root');
        render(root);
    });
  });
});

/*
getJSON('/api/categories/' + labNews.selectedCategory, (err, json) => {
  labNews.selectedCategory = json;
  console.log(labNews.selectedCategory);
});
*/
