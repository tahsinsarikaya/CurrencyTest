import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';


// const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
// const history = createBrowserHistory({ basename: baseUrl });


ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={<div className="spinner"></div>}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        </Suspense>
    </Provider>,
    document.getElementById('root'));