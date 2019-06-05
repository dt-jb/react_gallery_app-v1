import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = () => {
  return(
    <React.Fragment>
      <SearchForm />
      <Nav />
    </React.Fragment>
  );
}

export default Header;
