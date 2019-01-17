// npm installs
import React from 'react';
import ReactDOM from 'react-dom';

// rel path imports
import Root from './Components/Root';
import store from './store';

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
