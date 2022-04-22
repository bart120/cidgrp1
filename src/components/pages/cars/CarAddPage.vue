<script setup>
    import Button from 'primevue/button';
    import InputCid from '../../core/input/InputCid.vue';    
    import Calendar from 'primevue/calendar';
    import Dropdown from 'primevue/dropdown';
    
    import { transformBind } from '@vue/compiler-core';
    import CarService from '../../../services/CarService';
    import {brandMixin} from '../../../mixins/BrandMixin';
</script>

<script>

const cs = new CarService();

export default {
    data(){
        return {car:{}};
    },
    methods:{
        submit(){
            cs.insertCar(this.car).then(data =>{
                alert(`Voiture enregistrée avec l'id ${data.id}`);
            });
        }
    },
    mixins:[brandMixin]
}
</script>


<template>
    <h1>Ajouter une voiture</h1>
    <form novalidate @submit.prevent="submit">
        <div>
            <InputCid label="Modèle" type="text" v-model="car.model" />
        </div>
        <div>
            <InputCid label="Prix" type="number" v-model="car.price" />
        </div>
        <div>
            <label>Mise en circulation</label>
            <Calendar v-model="car.dateOfCirculation" />
        </div>
        <div>
            <label>Marque</label>
            <Dropdown v-model="car.brandID" 
                :options="brands" optionLabel="name" optionValue="id" />
        </div>
        <div>
            <Button type="submit">Enregistrer</Button>
        </div>
    </form>
</template>