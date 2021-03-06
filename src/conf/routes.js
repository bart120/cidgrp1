import HomePage from '../components/pages/HomePage.vue'
/*import CarAddPage from '../components/pages/cars/CarAddPage.vue'
import CarListPage from '../components/pages/cars/CarListPage.vue'
import CarsPage from '../components/pages/cars/CarsPage.vue'*/
import AuthenticationPage from '../components/pages/auth/AuthenticationPage.vue'

//import CarSearchPage from '../components/pages/cars/CarSearchPage.vue'
const CarSearchPage = () => import(/* webpackChunkName: "pack-cars" */ '../components/pages/cars/CarSearchPage.vue')
const CarAddPage = () => import(/* webpackChunkName: "pack-cars" */ '../components/pages/cars/CarAddPage.vue');
const CarListPage = () => import(/* webpackChunkName: "pack-cars" */'../components/pages/cars/CarListPage.vue');
const CarsPage = () => import(/* webpackChunkName: "pack-cars" */'../components/pages/cars/CarsPage.vue');

export default [
    {path: '/', component: HomePage},
    {path: '/login', component: AuthenticationPage},
    /*{path: '/cars/add', component: CarAddPage},
    {path: '/cars/list', component: CarListPage},
    {path: '/cars/search', component: CarSearchPage}*/
    {
        path: '/cars',
        component: CarsPage,
        children:[
            {path: 'add', component: CarAddPage},
            {path: 'list', component: CarListPage, name:'carlist'},
            {path: 'search', component: CarSearchPage}
        ]
    }
];