<script setup>
    import BrandService from '../../../services/BrandService';
    import CarService from '../../../services/CarService';
</script>

<script>
    const brandService = new BrandService();
    const carService = new CarService();

    export default {
        data(){
            return {cars:[]};
        },
        methods:{
            displayCars(){
                /*carService.getCars().then(data =>{
                    brandService.getBrands().then(brands =>{
                        data.map(car => car.brand = brands.find(e => e.id == car.brandID).name);
                        //console.log(data);
                    });
                    this.cars = data;
                    //console.log(this.cars);
                }).catch(err => alert(err.message));*/

                carService.getCars().then(data =>{
                     const proms = data.map(car => brandService.getBrandById(car.brandID).then(brand =>{
                        car.brand = brand.name;
                        return car;
                    }));
                    //this.cars = data;

                     Promise.all(proms).then(data =>{
                        this.cars = data;
                    });
                }).catch(err => alert(err.message));

               
            }
        },
        beforeMount(){
            this.displayCars();
        }
    }
</script>


<template>
    <h1>Lister les voitures</h1>
    <table>
        <thead>
            <tr><th>Marque</th><th>Modèle</th><th>Prix</th></tr>
        </thead>
        <tbody>
            <tr v-for="car in cars" :key="car.id">
                <td>{{car.brand}}</td>
                <td>{{car.model}}</td>
                <td>{{car.price}}</td>
            </tr>
        </tbody>
    </table>
</template>