<script setup>
    import Button from 'primevue/button';
    
    import {brandMixin} from '../../../mixins/BrandMixin';
</script>

<script>

export default {
     data(){
        return {search:{}};
    },
   
    mixins:[brandMixin]
}
</script>


<template>
    <form>
         <div>
            <label>Marque</label>
            <Dropdown v-model="search.brandID" 
                :options="brands" optionLabel="name" optionValue="id" />
        </div>
        <div>
            <Button type="submit">Enregistrer</Button>
        </div>
    </form>
</template>