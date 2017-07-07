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
