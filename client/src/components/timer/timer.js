const React = require('react')

class Timer extends React.Component {
  state = {
    status: false,
    runningTime: 0
  };
};

this.handleClick = set.state(state => {
  if (state.status) {
    clearInterval(this.timer);
  } else {
    const startTime = Date.now() - this.state.runningTime;
    this.timer = setInterval(() => {
      this.setState({ runningTime: Date.now() - startTime });
    });
  }
});


resetTimer = () => {
    this.setState({ runningTime: 0, status: false });
 };
render = () => {
    return(
    <div>
  <h3>timer: {this.state.time}</h3>
    </div >
  );
}

export default Timer;
