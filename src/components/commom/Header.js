import React,  {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return(
    <nav>
      <p>
        meu filho
      </p>

      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/products" activeClassName="active">Products</Link>
      {" |  "}
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  );
};

export default Header;
