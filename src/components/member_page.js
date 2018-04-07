import React from 'react';
import TimeLn from './timeline';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ActivityList from './activity_list';
import axios from 'axios';
import env from 'env';

class Member extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    axios.get(`${env.serverURL}/api/users/${this.props.params.id}`, {
      headers: {
        authorization: window.localStorage.token,
      },
    }).then((response) => {
      this.setState({
        user: response.data,
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    if (!this.state.user) {
      return <div />;
    } else {
      return (
        <Grid fluid className="member_page">
          <Col xs={12} className="header">
            <div>
              <img className="profile rounded" src={this.state.user.photoUrl} alt="profile" />
            </div>
            <div>
              <h1>{this.state.user.fullName}</h1>
              <a href={`mailto:${this.state.user.email}`}><h3>{this.state.user.email}</h3></a>
            </div>
          </Col>
          <Col xs={12}>
            <h4> About Me </h4>
          </Col>
          <Col xs={12}>
            <div className="main_card">
              <p>Hello my name is {this.state.user.fullName}.
              I like working at DALI and other stuff that everyone likes.
              If I were to ever develop for mobile, I would prefer iOS to React-Native any day</p>
            </div>
          </Col>
          <Col xs={12}>
            <h4> Activity Feed </h4>
          </Col>
          <Row center="xs">
            <Col center="xs" xs={12} sm={12} md={10} className="two-columns">
              <ActivityList activities={[1, 2, 3, 4]} />
            </Col>
          </Row>
          <Col xs={12}>
            <h4> Milestones </h4>
          </Col>
          <TimeLn />

        </Grid>
      );
    }
  }

}

export default Member;
