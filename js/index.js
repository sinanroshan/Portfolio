function redirectToPortfolio() {
  window.location.href = "/portfolio.html";
}
function openResume() {
  var fileUrl = 'https://drive.google.com/drive/folders/1snRSbCG8mcUejGjTVNl0E2pL_O6_xzxe'
  window.open( fileUrl, '_blank' );
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
