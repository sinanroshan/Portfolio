function redirectToPortfolio() {
  window.location.href = "/portfolio.html";
}

function playVideo( card ) {
  var iframe = card.querySelector( 'iframe' );
  var player = new Vimeo.Player( iframe );
  player.play();
}

function pauseVideo( card ) {
  var iframe = card.querySelector( 'iframe' );
  var player = new Vimeo.Player( iframe );
  player.pause();
}