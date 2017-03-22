import React, { Component } from 'react';
import {Link} from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Study React and Redux</h1>
        <p>Sit facere necessitatibus ullam consectetur dolorum. Numquam velit eum delectus voluptatem voluptatibus temporibus aliquam</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
