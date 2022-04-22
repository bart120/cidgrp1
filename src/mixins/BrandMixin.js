import BrandService from '../services/BrandService'
import Dropdown from 'primevue/dropdown';

const bs = new BrandService();

export const brandMixin = {
    data(){
        return {brands:[]};
    },
    components:{
        Dropdown
    },
    beforeMount(){
        bs.getBrands().then(data => this.brands = data);
        console.log(this.$data);
    }
}