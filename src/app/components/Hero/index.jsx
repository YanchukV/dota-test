import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Styles from './index.module.sass';
import { getHeroesAsync } from '../Heroes/actions';
import Spinner from '../Spinner';
const domain = 'https://api.opendota.com';

const Hero = () => {

  const {heroes} = useSelector((state) => state.heroesReducer);
  const {heroname} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroesAsync());
  }, [dispatch]);

  const hero = heroes.find(hero => {
    return hero.name === heroname;
  });

  return (
    <div className={Styles.root}>
      <div className={Styles.wrapper}>
        {!heroes.length ? <Spinner/> : <>
          <h1 className={Styles.title}>{hero?.localized_name}</h1>
          <div className={Styles.image}>
            <img alt="example" src={`${domain}${hero?.img}`}/>
          </div>
          <div className={Styles.head}>
            <div className={Styles.headCol}>
              <div className={Styles.headTitle}>Attack type:</div>
              <div className={Styles.headInfo}>{hero?.attack_type}</div>
            </div>
            <div className={Styles.headCol}>
              <div className={Styles.headTitle}>Roles:</div>
              <div className={Styles.headInfo}>{hero?.roles?.map((role, i) => {
                return <span key={i}>{role}</span>
              })}</div>
            </div>
          </div>
          <div className={Styles.table}>
            <div className={Styles.row}>
              <div className={`${Styles.col} ${Styles.tableTitle}`}>Base health:</div>
              <div className={`${Styles.col} ${Styles.tableInfo}`}>{hero?.base_health}</div>
            </div>
            <div className={Styles.row}>
              <div className={`${Styles.col} ${Styles.tableTitle}`}>Base health regen:</div>
              <div className={`${Styles.col} ${Styles.tableInfo}`}>{hero?.base_health_regen}</div>
            </div>
            <div className={Styles.row}>
              <div className={`${Styles.col} ${Styles.tableTitle}`}>Base mana regen:</div>
              <div className={`${Styles.col} ${Styles.tableInfo}`}>{hero?.base_mana_regen}</div>
            </div>
            <div className={Styles.row}>
              <div className={`${Styles.col} ${Styles.tableTitle}`}>Base attack:</div>
              <div className={`${Styles.col} ${Styles.tableInfo}`}>{hero?.base_attack_min}</div>
            </div>
            <div className={Styles.row}>
              <div className={`${Styles.col} ${Styles.tableTitle}`}>Base str:</div>
              <div className={`${Styles.col} ${Styles.tableInfo}`}>{hero?.base_str}</div>
            </div>
            <div className={Styles.row}>
              <div className={`${Styles.col} ${Styles.tableTitle}`}>Base int:</div>
              <div className={`${Styles.col} ${Styles.tableInfo}`}>{hero?.base_int}</div>
            </div>
            <div className={Styles.row}>
              <div className={`${Styles.col} ${Styles.tableTitle}`}>Base agi:</div>
              <div className={`${Styles.col} ${Styles.tableInfo}`}>{hero?.base_agi}</div>
            </div>
            <div className={Styles.row}>
              <div className={`${Styles.col} ${Styles.tableTitle}`}>Move speed:</div>
              <div className={`${Styles.col} ${Styles.tableInfo}`}>{hero?.move_speed}</div>
            </div>
          </div>
        </>}
      </div>
    </div>
  );
};

export default Hero;