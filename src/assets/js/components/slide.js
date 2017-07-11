const Slide = () => {
  const slideContainer = $('<div class="owl-carousel owl-theme"></div>');

  for(var i=26; i<=31; i++){
    const newsContainer = $('<div class="slide__newsContainer"></div>');
    const img = $('<img src="assets/img/news/' + labNews.allNews[i].img + ' "alt="" class="slide__img">');
    const titleContainer = $('<div class="slide__titleCont"></div>');
    const title = $('<span class="slide__title">'+ labNews.allNews[i].title + '</span>');

    slideContainer.append(newsContainer);
    newsContainer.append(img);
    newsContainer.append(titleContainer);
    titleContainer.append(title);
  }

  return slideContainer.owlCarousel({
    loop:true,
    margin: 7,
    dots: false,
    nav: true,
    navText: ['<img src="assets/img/flecha1.png">', '<img src="assets/img/flecha2.png">'],
    responsive:{
      0:{
        items:4
      },
      600:{
        items:4
      },
      1000:{
        items:4
      }
    }
  });

  //return slideContainer;
}
