import BrandService from '../services/BrandService'

const bs = new BrandService();

export const brandMixin = {
    data(){
        return {brands:[]};
    },
    beforeMount(){
        bs.getBrands().then(data => this.brands = data);
        console.log(this.$data);
    }
}