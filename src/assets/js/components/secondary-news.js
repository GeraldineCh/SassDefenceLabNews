const SecondaryNews = () => {
  const container = $('<article class="container secondary-news">');
  const row = $('<div class="row">');
  const first = $('<div class="col-sm-6 type-2">');
  const firstImg = $('<img src="'+ paths.news + labNews.allNews[1].img + '" alt="" class="type-2__img">');
  const firstText = $('<div class="col-sm-12 col-xs-12 type-2__text">'+ labNews.allNews[1].title +'</div>');

  container.append(row);
  row.append(first);
  first.append(firstImg);
  first.append(firstText);

  const second = $('<div class="col-sm-3 col-xs-12 type-3">');
  const secondImg = $('<img src="'+ paths.news + labNews.allNews[2].img + '" alt="" class="type-3__img">');
  const secondText = $('<div class="col-sm-12 col-xs-6 type-3__text">'+ labNews.allNews[2].title +'</div>');

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
