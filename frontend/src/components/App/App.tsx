import * as React from 'react';
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from "react-router-dom";
import {Layout} from "antd";
import Home from '../Home';
import Counter from '../Counter';
import FetchData from '../FetchData';
import AppHeader from './AppHeader';
import {Flex} from "../../components/common/Flex/Flex";

import {BrowserRoutes} from "../../data/Routers/BrowserRouter";
import {AppRoutesRenders} from "./RoutesRegister";

const {Content} = Layout;

const App = () => (
    <Flex className='app' flexDirection='column'>
        <Layout style={{background: '#f9fafc'}}>
            <AppHeader/>
            <Content>
                <Switch>
                    {AppRoutesRenders}
                    {/* <Redirect to={BrowserRoutes.dashboard}/> */}
                </Switch>
            </Content>
        </Layout>
    </Flex>
    
);

export default withRouter(App);