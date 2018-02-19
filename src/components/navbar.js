import React, { Component } from 'react';
import NavItem from './nav_item';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';
import env from './environment';

import DALIwhiteLogo from '../../Assets/imgs/DALIwhiteLogo.png';

const pages = ['about', 'projects', 'members'/* , 'join us', 'blog'*/];
const links = ['/', '/projects', '/members'/* , 'http://dali.dartmouth.edu/apply/', '/'*/];

class NavBar extends Component {
  constructor(props) {
    super(props);

    const token = window.localStorage.token;
    this.state = {
      selectedIndex: 0,
      width: 0,
      height: 0,
      haveToken: token !== 'undefined',
      user: null,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    if (token !== 'undefined') {
      axios.get(`${env.serverURL}/api/users/me`, {
        headers: {
          authorization: token,
        },
      }).then((user) => {
        this.setState({ user: user.data });
      }).catch(() => {
        this.setState({ user: null, haveToken: false });
        window.localStorage.setItem('token', undefined);
      });
    }
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

  responseGoogle = (thing) => {
    axios.post(`https://www.googleapis.com/oauth2/v4/token?
code=${thing.code}&
client_id=${env.googleClientID}&
client_secret=${env.googleSecret}&
redirect_uri=http://localhost:8080&
grant_type=authorization_code`)
    .then((auth) => {
      return axios.post(`${env.serverURL}/api/signin`, {
        access_token: auth.data.access_token,
        refresh_token: auth.data.refresh_token,
      });
    })
    .then((data) => {
      this.setState({ user: data.data.user, haveToken: true });
      window.localStorage.setItem('token', data.data.token);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  logout = () => {
    window.localStorage.setItem('token', undefined);
    this.setState({ user: null, haveToken: false });
  }

  render() {
    const navItems = this.createNavItems(pages);

    return (
      <ul>
        <li id="logo">
          <div id="logo">
            <img alt="DALI Logo" src={DALIwhiteLogo} />
          </div>
        </li>
        {navItems}
        <li>
          <button onClick={() => { window.location = 'http://dali.dartmouth.edu/apply/'; }}>
            join us
          </button>
        </li>
        <li>
          <button onClick={() => { window.location = 'http://dali.dartmouth.edu/blog/'; }}>
            blog
          </button>
        </li>
        <li id="logo">
        {!this.state.haveToken && !this.state.user ?
          <GoogleLogin
            clientId={env.googleClientID}
            buttonText="Login"
            offline
            responseType="code"
            prompt="consent"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />
          : <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={this.logout}
          />
        }
        </li>
      </ul>
    );
  }
}

export default NavBar;
