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
