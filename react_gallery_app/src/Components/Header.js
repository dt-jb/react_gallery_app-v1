import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = (props) => {

  return(
    <React.Fragment>
      <SearchForm onSearch={props.onSearch} data={props.data} />
      <Nav onClick={props.onClick} data={props.data} />
    </React.Fragment>
  );
}

export default Header;
