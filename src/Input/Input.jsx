import { useEffect, useRef } from "react";

import Prompt from "../Prompt/Prompt";

import './Input.css'

function Input({output, change, input, inputRef}) {
    

    useEffect(() => {
        inputRef.current.focus();
        console.log('If statement is not working');
        if (inputRef.current) {
            console.log('If statement is working');
            setTimeout(() => inputRef.current.scrollIntoView(), 0);
        }
    }, []);

    // useEffect(() => {
    //     console.log('useEffect rendered');
    //     if (scrollRef.current) {
    //       console.log('Hallo');
    //       setTimeout(() => scrollRef.current.scrollIntoView(), 0);
    //     }
    //   }, []);

    return(
        <div>
            <Prompt />
            <input id='user-input' className='user-input'
                type='text' 
                ref={inputRef}
                value={input} 
                onChange={change}
                onKeyDown={output} />
        </div>
    );
}


export default Input;