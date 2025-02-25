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
      text arrays for responding to user input
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
      '---------------------------------------------------------------',
      '\n\nhelp           Show list of commands',
      '\n\ndate           Shows current date and time',
      '\n\nwhois          Raphael D. Cho',
      '\n\nrepo           :)',
      '\n\nclear          Clear terminal',
      '\n\n---------------------------------------------------------------\n',
      '\n\n'
    ]

    const whois = [
      '\nHi there, my name is Raphael D(avid). Cho.',
      '\nI\'m currently working as a cyber security consultant.',
      '\n\nWork Experience:',
      '\nRetail Assistant at Kmart Australia (2017-2019)',
      '\nCyber Security Consultant at RSM Australia (March 2022 - Present)',
      '\n\nResume:',
      '\nADD LINK TO RESUME',
      '\n\n'
    ]

    const repo = [
      '\nMy GitHub repositories: <a href="https://github.com/RaelDCho?tab=repositories">repo</a>',
      '\n\n'
    ]

    const invalidCommand = [
      '\nINVALID COMMAND',
      '\n\n'
    ]

    /*
      Functions
    */
    const execute = (input) => {
      let returnString = '';
      switch (input.toString().toLowerCase()) {
        case 'help':
          console.log('help');
          help.map(item => {
            returnString += item;
          })
          return returnString;
        case 'whois':
          console.log('whois');
          whois.map(item => {
            returnString += item;
          })
          return returnString;
        case 'repo':
          console.log('repo');
          repo.map(item => {
            returnString += item;
          })
          return returnString;
        case 'clear':
          console.log('clear');
          clearCommand();
          return '';
        default:
          console.log('invalid command');
          invalidCommand.map(item => {
            returnString += item;
          })
          return invalidCommand;
      }
    }

    const clearCommand = () => {
      // this.state.userOutput.length = 0;
      setUserOutput([]);
    }

    
    const changeOutput = (event) => {
      if (event.key == 'Enter') {
        const newString = userInput + '\n' + execute(userInput);
        if (userInput.toString.toLowerCase != 'clear') {
          setUserOutput(userOutput => userOutput.concat(newString));
        }
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