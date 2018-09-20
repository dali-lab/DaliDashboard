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
        <Row center="lg">
        {this.state.members.map((member) => {
          return (
            <Col xs={2.5} sm={2.5} md={2.5}>
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
