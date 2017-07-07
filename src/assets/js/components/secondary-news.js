const SecondaryNews = () => {
  const container = $('<article class="container secondary-news">');
  const row = $('<div class="row">');
  const first = $('<div class="col-sm-6 first-new">');
  const firstImg = $('<div class="col-sm-12 col-xs-12"></div>');
  const firstText = $('<div class="col-sm-12 col-xs-12"></div>');

  container.append(row);
  row.append(first);
  first.append(firstImg);
  first.append(firstText);

  const second = $('<div class="col-sm-3 col-xs-12 second-new">');
  const secondImg = $('<div class="col-sm-12 col-xs-6"></div>');
  const secondText = $('<div class="col-sm-12 col-xs-6"></div>');

  row.append(second);
  second.append(secondImg);
  second.append(secondText);

  const third = $('<div class="col-sm-3 col-xs-12 second-new">');
  const thirdImg = $('<div class="col-sm-12 col-xs-6"></div>');
  const thirdText = $('<div class="col-sm-12 col-xs-6"></div>');

  row.append(third);
  second.append(thirdImg);
  second.append(thirdText);

  return container;
}
