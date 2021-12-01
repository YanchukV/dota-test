import api from '../../../services/api';
import { types } from '../types';

export const setIsHeroesLoading = (payload) => ({ type: types.SET_IS_HEROES_LOADING, payload });
export const setIsHeroesError = (payload) => ({ type: types.SET_IS_HEROES_ERROR, payload });
export const setHeroes = (payload) => ({ type: types.SET_HEROES, payload });


export const getHeroesAsync = () => async dispatch => {
  dispatch({
    type: types.GET_HEROES_ASYNC,
  });

  dispatch(setIsHeroesLoading(true));

  const response = await api.app.getHeroes();

  if (response.status === 200) {
    const results = await response.data;
    dispatch(setHeroes(results));
  } else {
    const error = {
      status: response.request.error,
    };
    dispatch(setIsHeroesError(error));
  }

  dispatch(setIsHeroesLoading(false));
};


