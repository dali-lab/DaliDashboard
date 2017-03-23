import React from 'react';


const StatWidget = (props) => {
  return (
    <div className="stat_widgets">
      <div className="stat_icon">
        <i className="material-icons"> face </i>
      </div>
      <div className="stat">
        <h3 className="bold"> 253,110 </h3>
        <h4> LINES OF CODE </h4>
      </div>
    </div>
  );
};

export default StatWidget;
