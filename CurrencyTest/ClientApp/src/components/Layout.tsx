import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CurrencyData from './CurrencyData';
import NavMenu from './NavMenu';

const Layout: React.FunctionComponent = (props: any) => {
    return (
        <React.Fragment>
            <NavMenu />
            <Switch>
                <Route
                    key={1}
                    exact={true}
                    path={"/currency"}
                    component={CurrencyData}
                />
            </Switch>
        </React.Fragment>
    );
};

const mapStateToProps = (state: any) => {
    return {
        common: state.common,
    };
};

export default connect(mapStateToProps)(Layout);







// export default class Layout extends React.PureComponent<{}, { children?: React.ReactNode }> {
//     public render() {
//         return (
//             <React.Fragment>
//                 <NavMenu />
//                 <Container>
//                     {this.props.children}
//                 </Container>
//             </React.Fragment>
//         );
//     }
// }