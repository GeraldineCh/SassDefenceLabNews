const buttonUp = () => {
  const iconUp = $('<a class="up visible-md"></a>');
  const icon = $('<img src="assets/img/flecha3.png"><p>SUBIR</p>');

  iconUp.append(icon);

  iconUp.on("click", _=>{
    $('body').animate({
      scrollTop: '0px'
    }, 300);
  });

  return iconUp;
}
