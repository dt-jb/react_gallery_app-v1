import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {

  handleClick = e => {
    e.preventDefault();
    //this.props.onClick(e.target.textContent);
    //console.log(e.target.textContent);
  }

  render(){
    return(
      <nav className="main-nav">
        <ul>
          <li><NavLink to='/cats'>Cats</NavLink></li>
          <li><NavLink to='/dogs'>Dogs</NavLink></li>
          <li><NavLink to='/computers'>Computers</NavLink></li>
        </ul>
      </nav>
    );
  }
}
/*
<li><NavLink to='/cats' onClick={this.handleClick}>Cats</NavLink></li>
<li><NavLink to='/dogs' onClick={this.handleClick}>Dogs</NavLink></li>
<li><NavLink to='/computers' onClick={this.handleClick}>Computers</NavLink></li>
*/
export default Nav;
