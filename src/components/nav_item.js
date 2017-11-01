import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class NavItem extends Component {
  handleClick() {
    this.props.changeSelected(this.props.index);
    browserHistory.push(this.props.link);
  }

  render() {
    const liID = this.props.selected === this.props.index ? 'selected' : '';

    return (
      <li onClick={() => this.handleClick()} className="navBarItem" id={liID}>
        {this.props.title}
      </li>
    );
  }
}
export default NavItem;
