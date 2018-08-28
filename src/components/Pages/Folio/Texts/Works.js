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
            <h2 class="uk-accordion-title mobile-fix">
            <span class="uk-margin-right" uk-icon="icon: cog"></span>What can we do?</h2>
          <div class="uk-accordion-content">

            <table class="uk-table uk-table-hover uk-table-responsive uk-table-justify uk-table-divider">
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
                    {/* <a target="_blank" href="/src/lab/game/index.html" class="uk-button uk-button-default tm-text-uppercase">
                          <span class="uk-margin-right" uk-icon="icon: sign-out"></span>Live demo
                        </a> */}
                  </td>
                </tr>
                <tr>
                  <td>Corporate project, CMS Joomla 3.6.2</td>
                  <td>
                    <a target="_blank" rel="nofollow" href="http://ekta.ua/" class="uk-button uk-button-default tm-text-uppercase">
                      <span class="uk-margin-right" uk-icon="icon: sign-out"></span>Released
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>LED-screen calculator, Angular + Materialize</td>
                  <td>
                   {/* <a target="_blank" href="/src/lab/calc/index.html" class="uk-button uk-button-default">
                          <span class="uk-margin-right" uk-icon="icon: sign-out"></span>Live demo
                        </a>  */}
                  </td>
                </tr>
                <tr>
                  <td>Analytical project, js + python + Materialize</td>
                  <td>
                    <a target="_blank" href="https://seezislab.com/" class="uk-button uk-button-default">
                      <span class="uk-margin-right" uk-icon="icon: sign-out"></span>Released
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Web presentation, Rreveal.js</td>
                  <td>
                     {/* <a target="_blank" href="/src/lab/presentation/index.html" class="uk-button uk-button-default">
                          <span class="uk-margin-right" uk-icon="icon: sign-out"></span>Live demo
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