import React, { Component } from 'react';
import { Wave } from 'react-preloading-component';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

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
        }), 2000)
        console.log("::::componentDidMount::::", this.state.active);
    }

    onCollapse() {
        const activePanel = document.getElementsByClassName('ant-collapse-item-active').length;

        // if( !this.state.active ) {
            if ( activePanel == 0 || ( activePanel == 0 && this.state.active == true ) ) {
                this.setState({
                    active: true
                });
                console.log("::::if 1::::", this.state.active);
            } else if ( ( activePanel == 0 && activePanel == 1 ) && this.state.active == true ) {
                this.setState({
                    active: false
                });
                console.log("::::if 2::::", this.state.active);
            } else if ( activePanel == 1 && this.state.active == false) {
                this.setState({
                    active: true
                });
                console.log("::::if 3::::", this.state.active);
            }
        // }


        // console.log("::::activePanel::::", activePanel);
        // console.log("::::this.state.active::::", this.state.active);
    }

    render() {
        const texts = [
            {
                name: 'introduce',
                text: () => (<div>introduce</div>)
            },
            {
                name: 'about',
                text: () => (<div>about</div>)
            },
            {
                name: 'works',
                text: () => (<div>works</div>)
            },
            {
                name: 'contacts',
                text: () => (<div>contacts</div>)

            }
        ];

        

        return (
            <div className="Folio">
                { !this.state.loaded ? <Wave color="#fdd835" /> : 
                    <Collapse 
                        accordion 
                        destroyInactivePanel
                        onChange={ this.onCollapse } 
                        className={ this.state.active ? 'active' : null }
                    >
                        { texts.map(( load, index ) => (
                                <Panel header={ load.name } key={ index } onClick={this.onPanel}>
                                    { load.text() }
                                </Panel>
                            )
                        ) } 
                    </Collapse>
                }
            </div>
        );
    }
}

export default Folio;