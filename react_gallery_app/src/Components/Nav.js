import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {

  handleClick = e => {
    console.log(props);
    e.preventDefault();
    this.props.onClick(e.target.value);
  }

  render(){
    return(
      <nav className="main-nav">
        <ul>
          <li><NavLink to='/cats' onClick={this.handleClick}>Cats</NavLink></li>
          <li><NavLink to='/dogs' onClick={this.handleClick}>Dogs</NavLink></li>
          <li><NavLink to='/computers' onClick={this.handleClick}>Computers</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
