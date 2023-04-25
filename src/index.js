import React from 'react';
import ReactDOM from 'react-dom';

//importo il component App
import App from './App';

//assegno id root all'App component
ReactDOM.render(<App/>, document.getElementById('root'));


   // function component, jsx code
   // component person
   // arrow const function
   // <> </> React Fragment useful for wrap more items
    /*<Person 
          name={'John'} ...
        />
    <Person name={'Mary'} .../> */  
   // props are used for change the proprieties 
   //never mutate the state of a component
   //states react import {useState} from 'react';