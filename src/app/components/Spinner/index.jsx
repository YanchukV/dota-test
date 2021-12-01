import React from 'react';
import Styles from './index.module.sass';

const Spinner = () => {
  return (
    <div className={Styles.root}>
      <div className={Styles.round} />
    </div>
  );
};

export default Spinner;