import { useState, useRef, useEffect } from 'react';

import Input from '../Input/Input';
import Output from '../Output/Output';

import './Shell.css';

function Shell() {
    /*
      React useState hooks
    */
    const [userOutput, setUserOutput] = useState([]);
    const [userInput, setUserInput] = useState('');
    const inputRef = useRef();

    /*
      text arrays
    */
    const asciiArt = [
      "      @.@        @                                           ",
      "      @  @     @  @    @@  @@                                 ",
      "      @.  @    %.  @  @*    @    =@@@@                         ",
      "    @@   @%  @:    +%        . ..   @                         ",
      "    @      :-                       @                         ",
      "    =@                              @@@%%@@#                   ",
      "    @-                                    @                    ",
      "    @                                    @                     ",
      "@@@ @                                    #+@@:                 ",
      "@   @@                                         %=               ",
      "@                                              .                ",
      "@             .*                              @                 ",
      "@        @@@    %                             @                 ",
      "-@     @@@@      =   @#  @                     :@                ",
      "  :@                   @@@*@                    :@             ",
      ".=                         @@@ @           @@@@@              ",
      "                                @          @                  ",
      "+:                             -@          @                  ",
      "@        @                      -  @.  .* #                   ",
      "@        @                         @@    *@                   ",
      "#  . :@   @%                       @@@@@:                      ",
      "@  @  @   @        @ @              @@@                        ",
      "@   -:    @       *@ @               #                         ",
      "@                   %               -.                         ",
      "@                                  @                          ",
      "@ :..             . .            .*                           ",
      "=* :.             ::-.:.        @                             ",
      "  @                . . .      @@                               ",
      "  @     *@@@              @@                                  ",
      "    @@                  :@:                _____             _                _   _____      _____ _           ",
      "      :@             +@@   @              |  __ \\           | |              | | |  __ \\    / ____| |                              ",
      "        =@@@@@@@@@@:      =:              | |__) |__ _ _ __ | |__   __ _  ___| | | |  | |  | |    | |__   ___                      ",
      "                            @             |  _  // _` | '_ \\| '_ \\ / _` |/ _ \\ | | |  | |  | |    | '_ \\ / _ \\                      ",
      "    .                       @             | | \\ \\ (_| | |_) | | | | (_| |  __/ | | |__| |  | |____| | | | (_) |                     ",
      "  @      :@%%@%@@%@@@@@@@   @             |_|  \\_\\__,_| .__/|_| |_|\\__,_|\\___|_| |_____(_)  \\_____|_| |_|\\___/                      ",
      "@        .@==:=%+#=--==@   @                          | |                                                                          ",
      "@%         %#-*@@+@%#*==@  =:    .                    |_|                                                                           ",
      "@           @*@     .@%%@         +@.                          ",
      "@           @          .             @@                        ",
      "@                                      @@                      ",
      "+                                        @                     "
    ]

    const help = [
      '\n\n',
      '---------------------------------------------------------------\n\n',
      'help           Show list of commands\n\n',
      'whois          Raphael D. Cho\n\n',
      'repo           :)\n\n',
      'clear          Clear terminal\n\n',
      '---------------------------------------------------------------\n\n',
      '\n'
    ]

    // const COMMANDS = {

    // }

    /*
      Functions
    */
    const execute = (input) => {
      let returnString = "";
      switch (input.toString().toLowerCase()) {
        case 'help':
          console.log('help');
          help.map(item => {
            returnString += item;
          })
          return returnString;
        case 'whois':
          console.log('whois');  
          return 'smirk emoji';
        case 'repo':
          console.log('repo');
          return 'repo';
        case 'clear':
          console.log('clear');  
          return 'stop';
        default:
          console.log('invalid command');
          return 'Invalid command';
      }
    }

    
    const changeOutput = (event) => {
      if (event.key == 'Enter') {
        const newString = userInput + '\n' + execute(userInput);
        setUserOutput(userOutput => userOutput.concat(newString));
        setUserInput('');
      }
    }

    return(
    <div className='app' onClick={event => {inputRef.current.focus()}}>
        <div className='banner'>
          {asciiArt.map((item, index) => (
            <div className='ascii-art' key={index}>
              {item}
            </div>
          ))}
          <p>Type `help` to see the list of available commands.</p>
        </div>
        <Output output={userOutput}/>
        <Input output={changeOutput} change={event => setUserInput(event.target.value)} input={userInput} inputRef={inputRef}/>
    </div>  
    )
}


export default Shell;