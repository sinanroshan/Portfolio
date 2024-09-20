$( document ).ready( function () {
  const HomeSlider = document.getElementById( "slider-home" );
  const sliderDetail = document.getElementById( "slider-detail" );
  const aboutPageSlider = document.getElementById( "aboutPageSlider" );

  if ( HomeSlider ) {
    startScroll( HomeSlider );
  }
  if ( sliderDetail ) {
    startScroll( sliderDetail );
  }
  if ( aboutPageSlider ) {
    startScroll( aboutPageSlider );
  }

  if ( document.getElementById( "cardSlider1" ) ) {
    startCardSlider( document.getElementById( "cardSlider1" ) );
  }

  if ( document.getElementById( "cardSlider2" ) ) {
    startCardSlider( document.getElementById( "cardSlider2" ) );
  }

} );

function startScroll( sliderItem ) {
  if ( !sliderItem.children[ 0 ] ) {
    return;
  }
  const sliderContent = sliderItem.children[ 0 ].firstElementChild;
  var speed = sliderItem.children[ 0 ].attributes[ "speed" ].value;
  var dir = sliderItem.children[ 0 ].attributes[ "dir" ].value;

  sliderItem.children[ 0 ].appendChild( sliderContent.cloneNode( true ) );

  const totalWidth = sliderContent.offsetWidth;

  // Set the width of the marquee container
  gsap.set( sliderItem.children[ 0 ], { width: totalWidth * 1.5 } );

  gsap.to( sliderItem.children[ 0 ], {
    x: dir == "ltr" ? -totalWidth - 20 : totalWidth - 20,
    duration: speed,
    ease: "linear",
    repeat: 2,
  } );
}
function startCardSlider( sliderItem ) {
  const speed = Number( sliderItem.getAttribute( 'speed' ) );
  const dir = sliderItem.getAttribute( 'dir' );

  const sliderCards = sliderItem.querySelectorAll( '.slider-card' );

  // Clone cards
  sliderCards.forEach( ( card ) => {
    const clonedCard = card.cloneNode( true );
    if ( dir === 'rtl' ) {
      sliderItem.insertBefore( clonedCard, sliderItem.firstChild );
    } else {
      sliderItem.appendChild( clonedCard );
    }
  } );

  const totalTrackWidth = sliderItem.offsetWidth * 1.8;
  gsap.set( sliderItem, { width: totalTrackWidth } );

  const distance = dir === 'ltr' ? -sliderItem.offsetWidth : sliderItem.offsetWidth;

  const animation = gsap.to( sliderItem, {
    x: distance,
    duration: speed,
    ease: 'linear',
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize( ( x ) => x % sliderItem.offsetWidth ),
    },
  } );

  // Pause the animation on hover
  // sliderItem.addEventListener( 'mouseenter', () => {
  //   animation.pause();
  // } );

  // Resume the animation when the mouse leaves
  // sliderItem.addEventListener( 'mouseleave', () => {
  //   animation.resume();
  // } );
}
