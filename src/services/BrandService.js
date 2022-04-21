import axios from 'axios'

const URL = 'https://formation.inow.fr/demo/api/v1/brands';

export default class BrandService{
    
    getBrands(){
        return axios.get(URL).then(resp =>{
            return Promise.resolve(resp.data);
        });
    }

    getBrandById(id){
        return axios.get(`${URL}/${id}`).then(resp =>{
            return Promise.resolve(resp.data);
        });
    }

}