import React, {useEffect} from 'react';
import './NavSec.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router,
    NavLink,}
from "react-router-dom";


function Section(){
    useEffect(() => {
        Aos.init({duration: 1500,
        once:true,
    mirror:true});
      }, []);


return(
<div className='sect-container' >
    <div className='btn-box' data-aos="fade-up">
<NavLink to='/order'>
    <button className='button' classtype="button">Order Pickup</button>
    </NavLink>
    <NavLink to='/menu'>
        <button className='button' classtype="button">Check Out The Menu</button>
        </NavLink>
</div>
</div>
)}
export default Section;