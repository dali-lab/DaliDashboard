import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class NavItem extends Component {
  handleClick() {
    this.props.changeSelected(this.props.index);
    // Checking to see if link is internal route or http://
    if (this.props.link.substring(0, 1) !== '/') {
      window.location = this.props.link;
    } else {
      browserHistory.push(this.props.link);
    }
  }

  render() {
    const liID = this.props.selected === this.props.index ? 'selected' : 'unselected';

    return (
      <li onClick={() => this.handleClick()} className="navBarItem" id={liID}>
        {this.props.children}
      </li>
    );
  }
}
export default NavItem;
