import { useEffect, useRef } from "react";

import Prompt from "../Prompt/Prompt";

import './Input.css'

function Input({output, change, input, inputRef}) {
    

    useEffect(() => {
        inputRef.current.focus();
    }, []);

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