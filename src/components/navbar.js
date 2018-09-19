import React, { Component } from 'react';
import NavItem from './nav_item';
import UserLogout from './user_logout';
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

  renderLogo = (id) => {
    return (
      <div id={id}>
        <img alt="DALI" src={this.state.selectedIndex !== 0 ? DALIblackLogo : DALIblueLogo} />
      </div>
    )
  }

  generateNavBar = (navBarInfo) => {
    let navOptions = navBarInfo.map((item, index) => {
      let visibleContent;
      if (item['renderLogo']) {
        visibleContent = this.renderLogo(item.id);
      } else {
        visibleContent = item.id;
      }
      return (
        <NavItem
          id={item.id}
          index={index}
          link={item.link}
          selected={this.state.selectedIndex}
          changeSelected={(newIndex) => this.setState({ selectedIndex: index })}
          >
            {visibleContent}
          </NavItem>
      )
    })
    navOptions.push(<li id="logo">
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
        : <UserLogout user={this.state.user} logout={this.logout}/>
      }
    </li>)
    return navOptions;
  }

  render() {
    let navBarInfo = [
      {
        id: 'logo',
        link: '/',
        renderLogo: true,
      },
      {
        id: 'about',
        link: '/',
      },
      {
        id: 'projects',
        link: '/projects',
      },
      {
        id: 'members',
        link: '/members',
      },
      {
        id: 'join us',
        link: 'http://dali.dartmouth.edu/apply/',
      },
      {
        id: 'blog',
        link: 'http://dali.dartmouth.edu/blog/',
      }];
    return (
      <ul>
        {this.generateNavBar(navBarInfo)}
      </ul>
    );
  }
}

export default NavBar;
