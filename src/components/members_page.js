import React from 'react';
import UserCard from './user_card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';


class Members extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
    };
  }

  componentDidMount() {
    axios.get('https://dalilab-api.herokuapp.com/api/users', { headers: { apiKey: process.env.REACT_APP_API_KEY } }).then((response) => {
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
              <UserCard user={member} />
            </Col>
          );
        })}
        </Row>
      </Grid>
    );
  }

}

export default Members;
