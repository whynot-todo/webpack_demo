import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './src/helloWorld.jsx' 

import img_small from './images/img_small.jpg' 
import img_big from './images/img_big.png' 
import './src/es6'
import './src/style.less'

// index.js
document.addEventListener('click', () =>{
    import(/* webpackPrefetch: true */ './src/click').then(({default: func}) => {
        func();
    })
});

ReactDOM.render(<HelloWorld/>,document.getElementById('root'))

