import { useEffect, useRef } from "react";

import Prompt from "../Prompt/Prompt";

import './Input.css'

function Input({output, change, input, inputRef}) {
    

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return(
        <div>
            {/* <span className='input-container'>guest@RaelDCho.com:$ ~ </span> */}
            {/* <label htmlFor='user-input'>guest@RaelDCho.com:$ ~ </label> */}
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