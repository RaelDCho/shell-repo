import { useRef, useEffect } from 'react';

import Prompt from '../Prompt/Prompt'

import './Output.css'

function Output({output}) {

    const scrollRef = useRef();

    // Not working
    // useEffect(() => {
    //   if (scrollRef.current) {
    //     console.log('Hallo');
    //     scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    //   }
    // }, []);

    // Not working
    // useEffect(() => {
    //   console.log('useEffect rendered');
    //   if (scrollRef.current) {
    //     console.log('Hallo');
    //     setTimeout(() => scrollRef.current.scrollIntoView(), 0);
    //   }
    // }, []);

    return(
      <div className='terminal' ref={scrollRef}>
        {output.map((item, index) => (
          <div className='output' key={index} >
            <Prompt />
            <span>{item}</span>
          </div>
        ))}
      </div>
    );
}


export default Output;