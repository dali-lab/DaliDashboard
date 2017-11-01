import React, { Component } from 'react';
import NavItem from './nav_item';

import DALIwhiteLogo from '../../Assets/imgs/DALIwhiteLogo.png';

const pages = ['Overview', 'Projects', 'Members', 'Blog', 'Gallery', 'Leaderboard'];
const links = ['/', '/projects', '/members', '/', '/'];

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  createNavItems(navPages) {
    const navItems = pages.map((page, index) => {
      return <NavItem key={index} title={page} index={index} link={links[index]} selected={this.state.selectedIndex} changeSelected={(newIndex) => this.setState({ selectedIndex: index })} />;
    });
    return navItems;
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const navItems = this.createNavItems(pages);

    const daliImage = (
      <li id="logo">
        <div id="logo">
          <img alt="DALI Logo" src={DALIwhiteLogo} />
        </div>
      </li>
    );

    return (
      <ul>
        {this.state.width <= 900 ? daliImage : null}
        {navItems.slice(0, navItems.length / 2)}
        {this.state.width > 900 ? daliImage : null}
        {navItems.slice(navItems.length / 2, navItems.length)}
      </ul>
    );
  }
}

export default NavBar;
