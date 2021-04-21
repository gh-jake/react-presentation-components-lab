import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

// simplerClick = () => {
//   return <div>me too</div>
// }

ReactDOM.render(
  
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={() => console.log('clicked')} />
  </div>,
  document.getElementById('root')
);