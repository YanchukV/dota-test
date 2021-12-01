import { types } from '../types';

export const initHeroes = {
  heroes: [],
  isLoading: false,
  isError: null,
};

export const heroesReducer = (state = initHeroes, action) => {
  switch (action?.type) {

    case types.SET_IS_HEROES_LOADING:
      return { ...state, isLoading: action.payload };

    case types.SET_IS_HEROES_ERROR:
      return { ...state, isLoading: false, isError: action?.payload };

    case types.SET_HEROES:
      return { ...state, heroes: action?.payload, isLoading: false };

    default:
      return state;
  }
};