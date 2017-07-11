const Mundo = () => {
  const container = $('<article class="container mundo">');
  const row = $('<div class="row">');
  const colTitle = $('<div class="col-sm-12">');
  const title = $('<h3 class="uppercase article-title">'+labNews.allCategories[1].title+'</h3>');

  container.append(row);
  row.append(colTitle);
  colTitle.append(title);

  const leftNew = $('<div class="col-xs-12 col-sm-3 left-new">');
  const leftNewImg = $('<img src="'+ paths.news + labNews.allNews[4].img + '" alt="" class="left-new__img">');
  const leftNewText = $('<div class="col-sm-12 left-new__text">'+ labNews.allNews[4].title +'</div>');

  row.append(leftNew);
  leftNew.append(leftNewImg);
  leftNew.append(leftNewText);

  const middleCol = $('<div class="col-sm-6 col-xs-12 middle-col">');
  const topRight = $('<div class="col-sm-6 top-right">');
  const topRightImg = $('<img src="'+ paths.news + labNews.allNews[5].img + '" alt="" class="top-right__img pull-left">');
  const topRightText = $('<div class="col-sm-12 col-xs-7 top-right__text">'+ labNews.allNews[5].title +'</div>');

  row.append(middleCol);
  middleCol.append(topRight);
  topRight.append(topRightImg);
  topRight.append(topRightText);

  const topLeft = $('<div class="col-sm-6 type-4 hidden-xs">');
  const topLeftImg = $('<img src="'+ paths.news + labNews.allNews[6].img + '" alt="" class="type-4__img">');
  const topLeftText = $('<div class="col-sm-12 type-4__text">'+ labNews.allNews[6].title +'</div>');

  middleCol.append(topLeft);
  topLeft.append(topLeftImg);
  topLeft.append(topLeftText);

  const middleNew = $('<div class="col-sm-12 type-5 ">');
  const middleNewImg = $('<img src="'+ paths.news + labNews.allNews[8].img + '" alt="" class="type-5__img pull-left">');
  const middleNewText = $('<div class="col-sm-7 col-xs-7 type-5__text">'+ labNews.allNews[8].title +'</div>');

  middleCol.append(middleNew);
  middleNew.append(middleNewImg);
  middleNew.append(middleNewText);

  const bottomNew = $('<div class="col-sm-12 bottom-new">');
  const bottomNewImg = $('<img src="'+ paths.news + labNews.allNews[9].img + '" alt="" class="bottom-new__img pull-left">');
  const bottomNewText = $('<div class="col-sm-7 col-xs-7 bottom-new__text">'+ labNews.allNews[9].title +'</div>');

  middleCol.append(bottomNew);
  bottomNew.append(bottomNewImg);
  bottomNew.append(bottomNewText);

  const rightNew = $('<div class="col-xs-12 col-sm-3 right-new hidden-xs">');
  const rightNewImg = $('<img src="'+ paths.news + labNews.allNews[7].img + '" alt="" class="right-new__img">');
  const rightNewText = $('<div class="col-sm-12 right-new__text">'+ labNews.allNews[7].title +'</div>');

  row.append(rightNew);
  rightNew.append(rightNewImg);
  rightNew.append(rightNewText);

  const row2 = $('<div class="row hidden-xs bottom-news">');
  const col1 = $('<div class="col-sm-3">');
  const img1 = $('<img src="'+ paths.news + labNews.allNews[10].img + '" alt="">');
  const text1 = $('<div class="col-sm-12 bottom-news__text">'+ labNews.allNews[10].title +'</div>');

  container.append(row2);
  row2.append(col1);
  col1.append(img1);
  col1.append(text1);

  const col2 = $('<div class="col-sm-3">');
  const img2 = $('<img src="'+ paths.news + labNews.allNews[11].img + '" alt="">');
  const text2 = $('<div class="col-sm-12 bottom-news__text">'+ labNews.allNews[11].title +'</div>');

  row2.append(col2);
  col2.append(img2);
  col2.append(text2);

  const col3 = $('<div class="col-sm-3">');
  const img3 = $('<img src="'+ paths.news + labNews.allNews[12].img + '" alt="">');
  const text3 = $('<div class="col-sm-12 bottom-news__text">'+ labNews.allNews[12].title +'</div>');

  row2.append(col3);
  col3.append(img3);
  col3.append(text3);

  const col4 = $('<div class="col-sm-3">');
  const img4 = $('<img src="'+ paths.news + labNews.allNews[13].img + '" alt="">');
  const text4 = $('<div class="col-sm-12 bottom-news__text">'+ labNews.allNews[13].title +'</div>');

  row2.append(col4);
  col4.append(img4);
  col4.append(text4);

  return container;
}
