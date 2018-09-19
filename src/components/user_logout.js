import React, { Component } from 'react';
import axios from 'axios';
import env from './environment';

class UserLogout extends Component {
    constructor(props) {
        super(props);

        const token = window.localStorage.getItem('token');
        this.state = {
            selectedIndex: 0,
            width: 0,
            height: 0,
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

    render() {
        if (this.state.user) {
            return (
                <div className="flex">
                    <img className="rounded small" src={this.state.user.photoUrl} alt="profile" />
                    <button className="logout-header">me</button>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default UserLogout;
