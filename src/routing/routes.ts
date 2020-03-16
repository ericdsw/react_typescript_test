import createRoute from './createRoute';

import HomePage from '../components/Home/HomePage';
import ItemPage from '../components/Items/ItemListPage';

export default [
  createRoute({ path: '/', component: HomePage, exact: true }),
  createRoute({ path: '/items', component: ItemPage, exact: true })
]
