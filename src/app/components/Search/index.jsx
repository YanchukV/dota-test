import React from 'react';
import Styles from './index.module.sass';
import { debounce } from '../../../services/helpers';

const Search = ({handleSearch}) => {

  return (
    <div className={Styles.root}>
      <input type="text" className={Styles.input} onChange={debounce(handleSearch, 10)}/>
    </div>
  );

};

export default Search;