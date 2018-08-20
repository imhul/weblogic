import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { Layout } from 'antd';
// components
import Home from '../../Pages/Home';
import Folio from '../../Pages/Folio';

const { Content } = Layout;

class LayoutMain extends Component {
    render() {
        const NotFound = () => {
            <h1>Sorry! Page Not Found:(</h1>
        }
        return (
            <Layout className="LayoutMain">

                <Layout className="Main">
                    <Content>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/folio" component={Folio} />
                            <Route component={NotFound} />
                        </Switch>
                    </Content>
                </Layout>

            </Layout>
        );
    }
}

export default LayoutMain;