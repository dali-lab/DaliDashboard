import React, {
  Component,
} from 'react';


class UserCircle extends Component {
  constructor(props) {
    super(props);

    this.handleUserClick = this.handleUserClick.bind(this);

    this.state = {
      person_id: '123',
      img_url: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg',
    };
  }

  handleUserClick() {
    console.log('clicked');
  }

  render() {
    return (
      <div className="user_circle">
        <img className="rounded" onClick={this.handleUserClick} src={this.state.img_url} alt="user" />
      </div>
    );
  }
}

export default UserCircle;
