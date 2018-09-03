import React, { Component } from 'react';
import { Row, Col, Button, Icon, message } from 'antd';
import { LanguageProvider, Language } from '../../../../utils/language/provider';

const summarySuccess = () => {
    message.info('Summary already downloaded');
};

class Works extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
            <h2 className="uk-accordion-title mobile-fix">
            <span className="uk-margin-right" uk-icon="icon: cog"></span>What can we do?</h2>
          <div className="uk-accordion-content">

            <table className="uk-table uk-table-hover uk-table-responsive uk-table-justify uk-table-divider">
              <thead>
                <tr>
                  <th>Project description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Puzzle game, JavaScript</td>
                  <td>
                    {/* <a target="_blank" href="/src/lab/game/index.html" className="uk-button uk-button-default tm-text-uppercase">
                          <span className="uk-margin-right" uk-icon="icon: sign-out"></span>Live demo
                        </a> */}
                  </td>
                </tr>
                <tr>
                  <td>Corporate project, CMS Joomla 3.6.2</td>
                  <td>
                    <a target="_blank" rel="nofollow" href="http://ekta.ua/" className="uk-button uk-button-default tm-text-uppercase">
                      <span className="uk-margin-right" uk-icon="icon: sign-out"></span>Released
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>LED-screen calculator, Angular + Materialize</td>
                  <td>
                   {/* <a target="_blank" href="/src/lab/calc/index.html" className="uk-button uk-button-default">
                          <span className="uk-margin-right" uk-icon="icon: sign-out"></span>Live demo
                        </a>  */}
                  </td>
                </tr>
                <tr>
                  <td>Analytical project, js + python + Materialize</td>
                  <td>
                    <a target="_blank" href="https://seezislab.com/" className="uk-button uk-button-default">
                      <span className="uk-margin-right" uk-icon="icon: sign-out"></span>Released
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Web presentation, Rreveal.js</td>
                  <td>
                     {/* <a target="_blank" href="/src/lab/presentation/index.html" className="uk-button uk-button-default">
                          <span className="uk-margin-right" uk-icon="icon: sign-out"></span>Live demo
                        </a> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

            </div>
        )
    }
}

export default Works