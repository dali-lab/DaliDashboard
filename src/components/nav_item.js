import React, { Component } from 'react';
import Ink from 'react-ink';

class NavItem extends Component {

  render() {
    const liClass = this.props.selected === this.props.index ? 'selected' : '';

    return (
      <li onClick={() => this.props.changeSelected(this.props.index)} className={liClass} style={{ position: 'relative' }}>
        <Ink />
        {this.props.title}
      </li>
    );
  }
}
export default NavItem;
