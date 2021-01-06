import Hero from '../Hero';
import React from 'react';
import About from '../About';
import Section from '../NavSec';
import Info from '../Info';
import '../../App.css';
import { AnimatePresence, motion} from 'framer-motion';

const pageTransition ={
    in: {
        opacity:1,
    },
    out: {
        opacity:0,
    }
   }; 
   const moreTrans = {
       duration:5
   }


function Home() {
return (
    <motion.div initial='out'
    animate='in'
    exit='out'
    variants={pageTransition}
     id="slides">
    <Hero />
    <About />
     <Section />
     <Info />
    </ motion.div>
    );
}
export default Home;