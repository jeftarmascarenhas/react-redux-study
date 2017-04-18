import React, { Component, PropTypes } from 'react';

const propTypes = {
  interval: React.PropTypes.number,
  dots: React.PropTypes.number
};

const defaultProps = {
  interval: 300,
  dots: 3
};

class LoadingDots extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      frame: 1
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ // eslint-disable-line react/no-did-mount-set-state
        frame: this.state.frame + 1
      });
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let dots = this.state.frame % (this.props.dots + 1),
        text = '';
    while(dots > 0) {
      text += '.';
      dots--;
    }
    return <span {...this.props}>{text}&nbsp;</span>;
  }
}

LoadingDots.propTypes = propTypes;

LoadingDots.defaultProps = defaultProps;

export default LoadingDots;
