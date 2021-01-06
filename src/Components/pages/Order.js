import React from 'react';
import Info from '../Info';
import OrderScreen from '../OrderScreen';
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

export default function Order() {
    return (
        <motion.div initial='out'
        animate='in'
        exit='out'
        variants={pageTransition}
         id="slides">
<OrderScreen />
<Info />
    </motion.div>
    )};