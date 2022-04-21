import axios from 'axios'

const URL = 'https://formation.inow.fr/demo/api/v1/cars';

export default class CarService{
    
    getCars(){
        return axios.get(URL).then(resp =>{
            if(resp.status == 404){
                return Promise.reject({message: 'ahahah'});
            }
            return Promise.resolve(resp.data);
        });/*.catch(err =>{
            console.warn(err.message);
            return Promise.reject(err);
        });*/
        //return axios.get(URL);
    }

}