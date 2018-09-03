import React, { Component } from 'react';
import { Wave } from 'react-preloading-component';
import { Collapse } from 'antd';
import Texts from './Texts';
import Toolbar from './Toolbar';

const Panel = Collapse.Panel;
const counterLeft = document.getElementById('data-counters');
const counterRight = document.getElementById('stats');

class Folio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            active: false,
        };
        this.onCollapse = this.onCollapse.bind(this);
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            loaded: true
        }), 2000);
        if( counterLeft && counterRight ) {
            console.log("REMOVED");
            counterLeft.remove();
            counterRight.remove();
        }
    }

    onCollapse(event) {
        if( !event ) {
            this.setState({
                active: false
            });
        } else if ( event && this.state.active == true ) {
            this.setState({
                active: true
            });
        } else if ( event && this.state.active == false ) {
            this.setState({
                active: true
            });
        }
    }

    render() {
        return (
            <div className="Folio">
                { !this.state.loaded ? <Wave color="#fdd835" /> : 
                    <Collapse 
                        accordion 
                        destroyInactivePanel
                        onChange={ this.onCollapse } 
                        className={ this.state.active ? 'active' : null }
                    ><Toolbar />
                        { Texts.map(( load, index ) => (
                                <Panel header={ load.name } key={ index }>
                                    <div onClick={this.onPanel}>
                                        { load.text() }
                                    </div>
                                </Panel>
                            )
                        ) } 
                    </Collapse>
                }
            </div>
        );
    }
}

export default Folio