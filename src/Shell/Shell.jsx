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
    const [commands, setCommands] = useState([]);
    const [commandResult, setCommandResult] = useState([]);
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

    // const help = [
    //   '\n',
    //   '---------------------------------------------------------------',
    //   'whois          Raphael D. Cho',
    //   'repo           :)',
    //   'clear          Clear terminal',
    //   '---------------------------------------------------------------',
    //   '\n'
    // ]

    // const COMMANDS = {
    //   help: "hi :)",
    //   quit: "quitting"
    // }

    /*
      Functions
    */
    const addString = (commandToAdd, commandIndex) => {
      userOutput.map((item, index) => {
        // console.log('Index is: ' + index);
        // console.log('CommandIndex is: ' + commandIndex);
        if (userOutput.index === commandIndex) {
          // console.log(index + ': ' + commandIndex);
        }
      })
    }

    const execute = (input) => {
      switch (input.toString().toLowerCase()) {
        case 'help':
          return 'help';
          console.log('help');
          break;
        case 'whois':
          return 'ur mother';
          console.log('whois');
          break;
        case 'repo':
          return 'repo';
          console.log('repo');
          break;
        case 'clear':
          return 'stop';
          console.log('clear');
          break;
        default:
          return 'Invalid command';
          console.log('invalid command');
          break;
      }
    }

    
    const changeOutput = (event) => {
      if (event.key == 'Enter') {
        const newString = userInput + '\n' + execute(userInput);
        setUserOutput(userOutput => userOutput.concat(newString));
        console.log('userOutput.length: ' + userOutput.length);
        
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
        <Output output={userOutput} commands={commands}/>
        <Input output={changeOutput} change={event => setUserInput(event.target.value)} input={userInput} inputRef={inputRef}/>
    </div>  
    )
}


export default Shell;