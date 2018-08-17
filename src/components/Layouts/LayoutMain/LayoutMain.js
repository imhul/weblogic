import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { Layout } from 'antd';
// components
import MainHeader from '../Headers/MainHeader';
import LeftSider from '../Siders/LeftSider';
import Home from '../../Pages/Home';
import Catalog from '../../Pages/Catalog';
import MainFooter from '../Footers/MainFooter';

const { Content } = Layout;

class LayoutMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // states
        };
    }

    render() {
        const NotFound = () => {
            <h1>Page Not Found</h1>
        }
        return (
            <Layout className="LayoutMain">

                <MainHeader />

                <Layout>
                    <LeftSider />
                    <Content>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/catalog" component={Catalog} />
                            <Route component={NotFound} />
                        </Switch>
                    </Content>
                </Layout>

                <MainFooter />

            </Layout>
        );
    }
}

export default LayoutMain;