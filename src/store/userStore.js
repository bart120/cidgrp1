import { defineStore } from "pinia";
import BrandService from '../services/BrandService';
import CarService from '../services/CarService';

export const useUserStore = defineStore({
    id: 'userStore',
    state: () =>{      
        return {
            user: JSON.parse(sessionStorage.getItem('USER')),
            isConnected: sessionStorage.getItem('USER') != null
        }
    },/*
    getters:{
        getUser: (state) => state.user,
        getIsConnected: (state) => state.isConnected
    },*/
    actions:{
        async login(login, password){
            const serviceStore = useServiceStore();
            let brands = await serviceStore.brandService.getBrands();
            //call api server
            //const user = {name: 'Bob', mail: login, token: ''};
            this.user = {name: 'Bob', mail: login, token: ''};
            this.isConnected = true;
            sessionStorage.setItem('USER', JSON.stringify(this.user));
        },
        logout(){
            this.user = null;
            this.isConnected = false;
            sessionStorage.removeItem('USER');
        }
    }
});

export const useServiceStore = defineStore({
    id: 'serviceStore',
    state: () =>{      
        return {
            carService: new CarService(),
            brandService: new BrandService()
        }
    }
});