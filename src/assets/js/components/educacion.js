const Educacion = () => {
  const container = $('<article class="container educación">');
  const row = $('<div class="row">');
  const colTitle = $('<div class="col-sm-12">');
  const title = $('<h3 class="uppercase article-title">'+labNews.allCategories[2].title+'</h3>');

  const row = $('<div class="row hidden-xs bottom-news">');
  const col1 = $('<div class="col-sm-3">');
  const img1 = $('<img src="'+ paths.news + labNews.allNews[19].img + '" alt="">');
  const text1 = $('<div class="col-sm-12 bottom-news__text">'+ labNews.allNews[19].title +'</div>');

  container.append(row);
  row.append(col1);
  col1.append(img1);
  col1.append(text1);

  const col2 = $('<div class="col-sm-3">');
  const img2 = $('<img src="'+ paths.news + labNews.allNews[20].img + '" alt="">');
  const text2 = $('<div class="col-sm-12 bottom-news__text">'+ labNews.allNews[20].title +'</div>');

  row.append(col2);
  col2.append(img2);
  col2.append(text2);

  const col3 = $('<div class="col-sm-3">');
  const img3 = $('<img src="'+ paths.news + labNews.allNews[21].img + '" alt="">');
  const text3 = $('<div class="col-sm-12 bottom-news__text">'+ labNews.allNews[21].title +'</div>');

  row.append(col3);
  col3.append(img3);
  col3.append(text3);

  const col4 = $('<div class="col-sm-3">');
  const img4 = $('<img src="'+ paths.news + labNews.allNews[22].img + '" alt="">');
  const text4 = $('<div class="col-sm-12 bottom-news__text">'+ labNews.allNews[22].title +'</div>');

  row.append(col4);
  col4.append(img4);
  col4.append(text4);

  return container;
}
