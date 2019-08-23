## Installation

    $ npm i scrambler.js
    or
    $ yarn add scrambler.js

## Usage

#### main.js

    const Scramble = require('scrambler.js');

    Scramble({
        elements: [{id: 'text', string: 'Hello World!'}],
        speed: 100
    })

#### index.html

    ...
    <span id="text">Hello World!</span>
    ...

## To-do

- Looping
- Duration
- Cycle Strings
- Play
- Pause
