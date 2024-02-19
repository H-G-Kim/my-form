import { useState } from 'react';
import App from './App';



function App(props) {

    

      return (

        <div >
          
            <label>
              {props.firstNameLabel}
            </label>
            <label>
            {props.LastNameLabel}
            </label>
       
        </div>
      );
    }
    
    export default App;
    