const Tecnologia = () => {
  const container = $('<article class="container tecnologia">');
  const row = $('<div class="row">');
  const colTitle = $('<div class="col-sm-12">');
  const title = $('<h3 class="uppercase article-title">'+labNews.allCategories[2].title+'</h3>');

  container.append(row);
  row.append(colTitle);
  colTitle.append(title);

  const leftNew = $('<div class="col-xs-12 col-sm-6 left-new">');
  const leftNewImg = $('<img src="'+ paths.news + labNews.allNews[14].img + '" alt="" class="left-new__img">');
  const leftNewText = $('<div class="col-sm-12 left-new__text">'+ labNews.allNews[14].title +'</div>');

  row.append(leftNew);
  leftNew.append(leftNewImg);
  leftNew.append(leftNewText);

  const leftCol = $('<div class="col-sm-6 col-xs-12 left-col">');
  const topLeft = $('<div class="col-sm-6 top-left">');
  const topLeftImg = $('<img src="'+ paths.news + labNews.allNews[15].img + '" alt="" class="top-left__img pull-left">');
  const topLeftText = $('<div class="col-sm-12 col-xs-7 top-left__text">'+ labNews.allNews[15].title +'</div>');

  row.append(leftCol);
  leftCol.append(topLeft);
  topLeft.append(topLeftImg);
  topLeft.append(topLeftText);

  const topRight =  $('<div class="col-sm-6 top-left">');
  const topRightImg = $('<img src="'+ paths.news + labNews.allNews[16].img + '" alt="" class="top-right__img pull-left">');
  const topRightText = $('<div class="col-sm-12 col-xs-7 top-right__text">'+ labNews.allNews[16].title +'</div>');

  leftCol.append(topRight);
  topRight.append(topRightImg);
  topRight.append(topRightText);

  const middleNew = $('<div class="col-sm-12 middle-new">');
  const middleNewImg = $('<img src="'+ paths.news + labNews.allNews[17].img + '" alt="" class="middle-new__img pull-left">');
  const middleNewText = $('<div class="col-sm-7 col-xs-7 middle-new__text">'+ labNews.allNews[17].title +'</div>');

  leftCol.append(middleNew);
  middleNew.append(middleNewImg);
  middleNew.append(middleNewText);

  const bottomNew = $('<div class="col-sm-12 bottom-new">');
  const bottomNewImg = $('<img src="'+ paths.news + labNews.allNews[18].img + '" alt="" class="bottom-new__img pull-left">');
  const bottomNewText = $('<div class="col-sm-7 col-xs-7 bottom-new__text">'+ labNews.allNews[18].title +'</div>');

  leftCol.append(bottomNew);
  bottomNew.append(bottomNewImg);
  bottomNew.append(bottomNewText);

  return container;
}
