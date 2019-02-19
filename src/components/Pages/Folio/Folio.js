import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import { Wave } from 'react-preloading-component';
import { Collapse, Icon } from 'antd';
import texts from './Texts';
import Toolbar from './Toolbar';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const Panel = Collapse.Panel;

class Folio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            active: false,
        };
        this.onCollapse = this.onCollapse.bind(this)
    };

    componentDidMount() {
        setTimeout(() => this.setState({
            loaded: true,
        }), 1000)
    };

    onCollapse(event) {
        if( !event ) {
            this.setState({
                active: false
            })
        } else if ( event && this.state.active == true ) {
            this.setState({
                active: true
            })
        } else if ( event && this.state.active == false ) {
            this.setState({
                active: true
            })
        }
    };

    render() {

        return (
            <div className="Folio">

                <Helmet>
                    <title>My Portfolio</title>
                </Helmet>

                <ContextMenuTrigger id="context-menu">
                    { !this.state.loaded ? <Wave color="#fdd835" /> : 
                        <Collapse 
                            accordion 
                            destroyInactivePanel
                            onChange={ this.onCollapse } 
                            className={ this.state.active ? 'active' : null }>
                        
                            <Toolbar key={0} />

                            { texts.map(( load ) => (
                                    <Panel header={ load.name } key={ load.key } showArrow={ false }>
                                        { load.text }
                                    </Panel>
                            )) } 
                        </Collapse>
                    }
                </ContextMenuTrigger>

                <ContextMenu id="context-menu">
                    <MenuItem>
                        <Link to="/"><Icon type="home" theme="outlined" /> Home</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/linkedin" onClick={(e) => {
                            e.preventDefault();
                            window.open("https://www.linkedin.com/in/tkachuk-zakhar-04733892/")
                        }}>
                            <Icon type='linkedin' /> Summary</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/github" onClick={(e) => {
                            e.preventDefault();
                            window.open("https://github.com/imhul")
                        }}>
                            <Icon type="github" /> Github
                        </Link>
                    </MenuItem>
                </ContextMenu>
            </div>
        )
    }
};

export default Folio;