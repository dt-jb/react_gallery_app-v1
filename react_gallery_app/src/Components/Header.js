import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = (props) => {
//onSearch={props.performSearch} data={props.data}
  console.log(props);
  return(
    <React.Fragment>
      <SearchForm onSearch={props.performSearch} data={props.data} />
      <Nav />
    </React.Fragment>
  );
}

export default Header;
