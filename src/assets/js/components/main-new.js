const MainNew = (title) => {
  const mainNew = $('<article class="main-new container">');
  const row = $('<div class="row">');
  row.css('background-image', 'url('+ paths.news + labNews.allNews[0].img +')');
  const mainCol = $('<div class="col-xs-12">');
  const sectiontitle = $('<h5 class="title"></h5>');
  const text = $('<div class="col-xs-12 main-new__text">');
  const col = $('<div class="col-sm-9 col-xs-12">');
  const heading = $('<h1>'+ labNews.allNews[0].title +'</h1>');
  const col2 = $('<div class="col-sm-6 hidden-xs">');
  const subheading = $('<h5>'+ labNews.allNews[0].brief +'</h5>');

  mainNew.append(row);
  row.append(text);
  row.append(mainCol);
  mainCol.append(sectiontitle);
  row.append(text);
  text.append(col);
  col.append(heading);
  text.append(col2);
  col2.append(subheading);

  return mainNew;
}
