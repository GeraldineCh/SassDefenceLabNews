const Article = () => {
  const container = $('<div class="container">');
  const row = $('<div class="row">');
  const mainCol = $('<div class="col-sm-12">');
  const sectionTitle = $('<h5></h5>');

  container.append(row);
  row.append(mainCol);
  mainCol.append(sectionTitle);

  const colTitles = $('<div class="col-sm-12">');
  const h3 = $('<h3>'+ labNews.selectedNew.title +'</h3>');
  const h5 = $('<h5>'+ labNews.selectedNew.brief +'</h5>');
  const img = $('<img src="'+ paths.news + labNews.selectedNew.img +'" alt="">');

  row.append(colTitles);
  colTitles.append(h3);
  colTitles.append(h5);
  colTitles.append(img);

  const colArticle = $('<div class="col-sm-9">');
  const article = $(labNews.selectedNew.body);

  row.append(colArticle);
  colArticle.append(article);

  const about = $('<div class="col-sm-12">');
  const profile = $('<img src="assets/img/authors/' + labNews.selectedNew.author.picture +'" alt="">');
  const nombre = $('<p>'+labNews.selectedNew.author.name+'</p>');
  //const date = $('<p>'+labNews.selectedNew.published-date+'</p>');
  const user = $('<p>'+labNews.selectedNew.author.user+'</p>');

  colArticle.append(about);
  colArticle.append(profile);
  colArticle.append(nombre);
  //colArticle.append(date);
  colArticle.append(user);

/*
    <div class="col-sm-9">
      <p></p>
    </div>
    <div class="col-sm-3">
      <div class="col-sm-12">
        <div class="col-sm-6"></div>
        <div class="col-sm-6"></div>
      </div>
    </div>
  </div>
</div>
*/
  return container;
}
