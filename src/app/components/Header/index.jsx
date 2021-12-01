import React from 'react';
import Styles from './index.module.sass';

const Header = () => {
  return (
    <header className={Styles.root}>
      <p className={Styles.text}>Heroes of Dota</p>
    </header>
  );
};

export default Header;