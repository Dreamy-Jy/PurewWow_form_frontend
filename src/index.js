import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App source="http://ec2-13-59-71-65.us-east-2.compute.amazonaws.com/api/events" />, document.getElementById('root'));
registerServiceWorker();
