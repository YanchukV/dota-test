import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';

import Styles from './index.module.sass';
import { getHeroesAsync } from './actions';
import routes from '../../navigation/routes';
import Search from '../Search';
import Spinner from '../Spinner';
const domain = 'https://api.opendota.com';

const Heroes = () => {

  const dispatch = useDispatch();
  const {heroes} = useSelector((state) => state.heroesReducer);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (!heroes.length) {
      dispatch(getHeroesAsync());
    }
  }, [dispatch, heroes]);

  useEffect(() => {
    setFiltered(prev => [...prev, ...heroes]);
  }, [heroes]);

  const handleSearch = (e) => {
    const filteredHeroes = heroes?.map((hero) => {
      if ((!!e.target.value.length && e.target.value !== ' ') && hero?.localized_name?.includes(e.target.value)) {
        return {...hero, filtered: true};
      }
      return hero;
    });
    setFiltered(filteredHeroes);
  };

  const getHeroesOfAttr = (attr) => {
    return filtered?.filter((hero) => (hero?.primary_attr === attr));
  };

  const heroesColumn = (attr) => {
    return getHeroesOfAttr(attr)?.map((hero) => (
      <Link to={`${routes.home.path}${hero?.name}`} key={hero?.id} className={cx({
        [Styles.link]: true,
        [Styles.filtered]: !!hero.filtered
      })}> <img alt="example" src={`${domain}${hero?.img}`} className={Styles.icon}/> </Link>
    ));
  };

  return (
    <div className={Styles.root}>
      <Search handleSearch={handleSearch}/>
      <div className={Styles.wrapper}>
        {!heroes.length ? <Spinner/> : <>
          <div className={Styles.col}>
            <h2 className={Styles.title}>Agility</h2>
            <div className={Styles.content}>
              {heroesColumn('agi')}
            </div>
          </div>
          <div className={Styles.col}>
            <h2 className={Styles.title}>Strength</h2>
            <div className={Styles.content}>
              {heroesColumn('str')}
            </div>
          </div>
          <div className={Styles.col}>
            <h2 className={Styles.title}>Intelligence</h2>
            <div className={Styles.content}>
              {heroesColumn('int')}
            </div>
          </div>
        </>}
      </div>
    </div>
  );

};

export default Heroes;