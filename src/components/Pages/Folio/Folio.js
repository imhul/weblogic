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
        this.onPanel = this.onPanel.bind(this);
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            loaded: true
        }), 2000)
    }

    onCollapse() {
        this.setState({
            active: !this.state.active
        });
        console.log("::::onCollapse::::", !this.state.active);
    }

    onPanel(index) {
        console.log("::::panel index::::", index);
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