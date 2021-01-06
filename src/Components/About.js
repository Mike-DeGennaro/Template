import React, {useEffect} from 'react';
import './About.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


function About(){
    useEffect(() => {
        Aos.init({duration: 2000,
        once:true,
    mirror:true});
      }, []);

return(
<div className='about' id='abSec'>
<p className='who'>Who Are We?</p>
<div data-aos="fade-up">
<p className='burgers'>Burgers Crafted With Love</p>
<div className='picture'></div>
<p  className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 Proin rutrum lacus non velit ultrices ultricies. Integer dignissim
 dapibus tortor sit amet consectetur. Aliquam quis interdum mi, ut bibendum
 erat. Phasellus hendrerit maximus neque a interdum. Cras eu ligula urna.
 In nec commodo justo. Morbi eget urna augue. Proin quis odio vel neque
 volutpat placerat ut eu risus. Donec arcu mi, auctor non laoreet nec,
 sollicitudin non sapien. Vestibulum cursus ultrices lobortis.
 Vivamus a gravida nulla, quis feugiat lorem. Curabitur viverra sed justo
 a sagittis. Orci varius natoque penatibus et magnis dis parturient montes,
 nascetur ridiculus mus. Donec viverra tortor eu augue hendrerit placerat.
 Praesent pellentesque justo sed erat pharetra tincidunt nec in lectus.
 Donec efficitur dictum leo eu aliquam.</p>
 </div>
</div>
)}
export default About;