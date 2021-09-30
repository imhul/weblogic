import React, { Component } from 'react';
import { history } from '../../redux/store';
// utils
import menu from '../../utils/menu';
// components
import { Menu } from 'antd';

const MenuItem = Menu.Item;

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'Home'
    };
  }

  onClick = e => {
    this.setState({ current: e.key });
    history.push(e.key);
  };

  render() {
    const { current } = this.state;

    return (
      <Menu
        onClick={this.onClick}
        selectedKeys={[current]}
        className="Menu"
        mode="horizontal"
        style={{
          background: 'rgba(42, 65, 76, 0.6)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderBottom: '1px solid rgba(42, 65, 76, 0.4)',
          color: '#bcc8ce',
          zIndex: 1,
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4
        }}
      >
        {menu.map(item => {
          return (
            !item.blank && (
              <MenuItem key={item.url} icon={item.icon}>
                {item.id}
              </MenuItem>
            )
          );
        })}
      </Menu>
    );
  }
}

export default MainMenu;
