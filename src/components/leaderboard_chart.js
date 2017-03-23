import React, {
  Component,
} from 'react';
import ChartistGraph from 'react-chartist';

class LeaderBoard extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const data = {
      labels: ['Neuroviz', 'Psych VR', 'Basiic', 'LYCL', 'Grafficity', 'Clearpay', 'Changing Persp', 'Pulse', 'Seabird', 'PB'],
      series: [
        [80000, 2300, 4, 6444, 30000, 732, 88, 9, 10000, 2000],
      ],
    };

    const options = {
      axisY: {
        labelInterpolationFnc(value, index) {
          return index % 3 === 0 ? value : null;
        },
      },
    };

    const type = 'Bar';
    const aspectRatio = 'ct-major-twelfth';

    return (
      <div className="main_card">
        <h4 id="title"> Leaderboard </h4>
        <p id="subtitle"> Some friendly competition </p>
        <ChartistGraph className={aspectRatio} data={data} options={options} type={type} />
      </div>
  );
  }
}

export default LeaderBoard;
