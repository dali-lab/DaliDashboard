import React, {
  Component,
} from 'react';
import { Link } from 'react-router';

class UserCircle extends Component {
  render() {
    return (
      <Link className="user_circle" to={`/members/${this.props.member.id}`}>
        <img className="rounded" src={this.props.member.photoUrl} alt="." />
      </Link>
    );
  }
}

export default UserCircle;
