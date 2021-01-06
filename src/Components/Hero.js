import React, {useEffect} from 'react';
import './Hero.css';


function Hero(){
    const parallax = React.useRef(null);

    React.useEffect(() => {
      function scrollHandler() {
        const element = parallax.current;
        if (element) {
          let offset = window.pageYOffset;
          element.style.backgroundPositionY = offset * .1 + 'px';
        }
      }
      window.addEventListener('scroll', scrollHandler)
      return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

return(

    <div  className="hero-container" id='home' ref={parallax}>
        <link href='https://fonts.googleapis.com/css?family=Lobster' rel='stylesheet'></link>
        <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet"></link>
<p className='title'>The Burger Shop</p>

    </div>
)
}
export default Hero