import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import CurrencyData from './components/CurrencyData';

import './custom.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


const App: React.FunctionComponent = () => {
    //const notificationState = useSelector((state: any) => state.notification);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'ApplicationMounted'
        })
    }, []);

    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/currency' component={CurrencyData} />
        </Layout>
    )
};

export default App;





// export default () => (
//     <Layout>
//         <Route exact path='/' component={Home} />
//         <Route path='/currency' component={CurrencyData} />
//     </Layout>
// );
