import React, {
  Component,
} from 'react';
import { browserHistory } from 'react-router';

class UserCircle extends Component {
  handleClick() {
    const route = `/members/${this.props.member.id}`;
    browserHistory.push(route);
  }

  render() {
    return (
      <div className="user_circle" onClick={() => this.handleClick()}>
        <img className="rounded" src={this.props.member.photoUrl} alt="." />
      </div>
    );
  }
}

export default UserCircle;
