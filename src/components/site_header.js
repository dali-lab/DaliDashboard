import React from 'react';
import NavBar from './navbar';


const Header = (props) => {
  return (
    <div>
      <div className="nav_bar">
        <NavBar />
      </div>
      {props.children}
    </div>
  );
};

export default Header;
