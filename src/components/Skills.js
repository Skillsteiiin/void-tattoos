import React, { useState, useEffect } from 'react';
// useInView hook
import { useInView } from 'react-intersection-observer';
// react circular
import { CircularProgressbar } from 'react-circular-progressbar';
// react circular styles
import 'react-circular-progressbar/dist/styles.css';
// import motion
import { motion } from 'framer-motion';
// import fade in
import { fadeIn } from '../variants';

const Skills = () => {
  // useInView hook
  const {ref, inView} = useInView({
    threshold: 0.2
  })

  // full body tatoo state
  const [fullBody, setFullBody] = useState(0)
  // safely piercing state
  const [piercing, setPiercing] = useState(0)
  // fullcolor state
  const [fullColor, setFullColor] = useState(0);
  // temporary state
  const [temporary, setTemporary] = useState(0);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (fullBody < 90) {
          setFullBody(fullBody + 1);
        }
        if (piercing < 80) {
          setPiercing(piercing + 1);
        }
        if (fullColor < 75) {
          setFullColor(fullColor + 1);
        }
        if (temporary < 95) {
          setTemporary(temporary + 1);
        }
      }, 50);
    } else {
      setFullBody(0);
      setPiercing(0);
      setFullColor(0);
      setTemporary(0);
    }
  }, [inView, fullBody, piercing, fullBody, temporary]);

  // circular styles
  const styles = {
    path: {
      stroke: '#111111'
    },
    trail: {
      stroke: '#eeeeee'
    }, 
    text: {
      fill: '#111111',
      fontSize: '24px',
    },
  }

  return <motion.section 
  variants={fadeIn('up')}
  initial='hidden'
  whileInView={'show'}
  viewport={{once: false, amount: 0.1}}
  ref={ref}
  className='section font-primary'>
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row justify-between items-center gap-y-[24px]'>

        {/* { circular item 1 } */}
        <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-[24px]'>
          <CircularProgressbar
          strokeWidth={1}
          value={fullBody}
          styles={styles}
          text={`${fullBody}%`}
          />

          {/* { text } */}
          <div className='uppercase font-light tracking-[1.2px] text-center'>
            full body tattoo
          </div>
        </div>

        {/* { circular item 2 } */}
        <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-[24px]'>
          <CircularProgressbar
          strokeWidth={1}
          value={piercing}
          styles={styles}
          text={`${piercing}%`}
          />

          {/* { text } */}
          <div className='uppercase font-light tracking-[1.2px] text-center'>
          Safely piercing
          </div>
        </div>
        {/* { circular item 3 } */}
        <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-[24px]'>
          <CircularProgressbar
          strokeWidth={1}
          value={fullColor}
          styles={styles}
          text={`${fullColor}%`}
          />

          {/* { text } */}
          <div className='uppercase font-light tracking-[1.2px] text-center'>
          Full Colour Tatoo
          </div>
        </div>
        {/* { circular item 4 } */}
        <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-[24px]'>
          <CircularProgressbar
          strokeWidth={1}
          value={temporary}
          styles={styles}
          text={`${temporary}%`}
          />

          {/* { text } */}
          <div className='uppercase font-light tracking-[1.2px] text-center'>
          Temporary Tatoo
          </div>
        </div>
      </div>
    </div>
  </motion.section>;
};

export default Skills;
