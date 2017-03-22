import React, { Component } from 'react';
import Ink from 'react-ink';
import { browserHistory } from 'react-router';

class NavItem extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeSelected(this.props.index);
    browserHistory.push('/members');
  }

  render() {
    const liClass = this.props.selected === this.props.index ? 'selected' : '';

    return (
      <li onClick={this.handleClick} className={liClass} style={{ position: 'relative' }}>
        <Ink />
        {this.props.title}
      </li>
    );
  }
}
export default NavItem;
