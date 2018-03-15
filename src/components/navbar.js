import React, { Component } from 'react';
import NavItem from './nav_item';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import env from './environment';

import DALIblackLogo from '../../Assets/imgs/DALIblackLogo.png';
import DALIblueLogo from '../../Assets/imgs/DALIblueLogo.png';

class NavBar extends Component {
  constructor(props) {
    super(props);

    const token = window.localStorage.getItem('token');
    this.state = {
      selectedIndex: 0,
      width: 0,
      height: 0,
      haveToken: token != null,
      user: null,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    if (token != null) {
      axios.get(`${env.serverURL}/api/users/me`, {
        headers: {
          authorization: token,
        },
      }).then((user) => {
        this.setState({ user: user.data });
      }).catch(() => {
        this.setState({ user: null, haveToken: false });
        window.localStorage.removeItem('token');
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

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  responseGoogle = (thing) => {
    axios.post(`${env.serverURL}/api/signin/code`, thing)
    .then((response) => {
      this.setState({ user: response.data.user, haveToken: true });
      window.localStorage.setItem('token', response.data.token);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  logout = () => {
    window.localStorage.removeItem('token');
    this.setState({ user: null, haveToken: false });
  }

  render() {
    return (
      <ul>
        <NavItem
          id="logo"
          index={0}
          link={'/'}
          selected={this.state.selectedIndex}
          changeSelected={(newIndex) => this.setState({ selectedIndex: 0 })}
        >
          <div id="logo">
            <img alt="DALI" src={this.state.selectedIndex !== 0 ? DALIblackLogo : DALIblueLogo} />
          </div>
        </NavItem>
        <NavItem
          index={1}
          link={'/'}
          selected={this.state.selectedIndex}
          changeSelected={(newIndex) => this.setState({ selectedIndex: 1 })}
        >
        about
        </NavItem>
        <NavItem
          index={2}
          link={'/projects'}
          selected={this.state.selectedIndex}
          changeSelected={(newIndex) => this.setState({ selectedIndex: 2 })}
        >
        projects
        </NavItem>
        <NavItem
          title={"members"}
          index={3}
          link={'/members'}
          selected={this.state.selectedIndex}
          changeSelected={(newIndex) => this.setState({ selectedIndex: 3 })}
        >
          members
        </NavItem>
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
          : <button onClick={this.logout}>Logout</button>
        }
        </li>
      </ul>
    );
  }
}

export default NavBar;
