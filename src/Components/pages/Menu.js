import React from 'react';
import MenuScreen from '../MenuScreen';
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



export default function Menu() {
    return (
        <motion.div initial='out'
        animate='in'
        exit='out'
        variants={pageTransition}
         id="slides">
    <MenuScreen />
    <Info />
    </motion.div>
    )};