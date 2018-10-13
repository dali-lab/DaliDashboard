import React, { Component } from 'react';
import axios from 'axios';
import env from './environment';

class UserLogout extends Component {
    constructor(props) {
        super(props);

        const token = window.localStorage.getItem('token');
        this.state = {
            showMenu: false,
            haveToken: token != null,
            user: this.props.user,
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
        console.log(this.props.user);
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

    toggleMenu = () => {
        this.setState({ showMenu: !this.state.showMenu });
    }

    renderMenu = () => {
        if (this.state.showMenu) {
            return (
                <div className="me-menu">
                    <div className="me-menu-header">
                        <img className="rounded medium" src={this.state.user.photoUrl} alt="profile" />
                        <h4 className="me-title">{this.state.user.fullName}</h4>
                    </div>
                    <div className="me-menu-body">
                        <span className="me-menu-option"><a className="profile" href="#">view profile</a></span>
                        <span className="me-menu-option logout" onClick={this.props.logout}>logout</span>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }

    render() {
        if (this.state.user) {
            return (
                <div>
                    <div className="flex" onClick={this.toggleMenu}>
                        <img className="rounded small" src={this.state.user.photoUrl} alt="profile" />
                        <button className="me-header">me</button>
                    </div>
                    {this.renderMenu()}
                </div>
            )
        } else {
            return null;
        }
    }
}

export default UserLogout;
