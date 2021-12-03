import Hero from "../components/Hero";
import Heroes from "../components/Heroes";

const routes = {
  home: {
    path: '/',
    component: Heroes
  },
  hero: {
    path: '/:heroname',
    component:  Hero
  }
};

export default routes;
