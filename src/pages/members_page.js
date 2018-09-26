import React from 'react';
import UserCard from '../components/cards/user_card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
import env from '../components/environment';

class Members extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
    };
  }

  componentDidMount() {
    console.log('env: ', env);
    axios.get(`${env.serverURL}/api/users`, { headers: { authorization: window.localStorage.token } }).then((response) => {
      console.log(response);
      this.setState({
        members: response.data,
      });
    });
  }

  render() {
    return (

      <Grid fluid>
        <Row center="xs">
        {this.state.members.map((member) => {
          return (
            <Col xs={12} sm={6} md={4}>
              <UserCard member={member} />
            </Col>
          );
        })}
        </Row>
      </Grid>
    );
  }

}

export default Members;
