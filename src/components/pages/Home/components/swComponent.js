import ItemList from './test';
import withData from './withData';

const PersonList = withData(ItemList);

const PlanetList = withData(ItemList);

export {
  PersonList,
  PlanetList,
};
