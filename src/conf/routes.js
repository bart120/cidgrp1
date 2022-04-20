import HomePage from '../components/pages/HomePage.vue'
import CarAddPage from '../components/pages/cars/CarAddPage.vue'
import CarListPage from '../components/pages/cars/CarListPage.vue'
import CarSearchPage from '../components/pages/cars/CarSearchPage.vue'
import CarsPage from '../components/pages/cars/CarsPage.vue'

export default [
    {path: '/', component: HomePage},
    /*{path: '/cars/add', component: CarAddPage},
    {path: '/cars/list', component: CarListPage},
    {path: '/cars/search', component: CarSearchPage}*/
    {
        path: '/cars',
        component: CarsPage,
        children:[
            {path: 'add', component: CarAddPage},
            {path: 'list', component: CarListPage},
            {path: 'search', component: CarSearchPage}
        ]
    }
];