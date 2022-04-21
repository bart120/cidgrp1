<script setup>
    import InputText from 'primevue/inputtext';
    import { ref, computed, reactive } from 'vue'

    defineProps({
        label: String
    })

    const value = reactive('')

    const stl = computed(() =>{
             return value =='' ? 'background-color: #aaaaaa' : '';
    })
</script>

<script>
export default {
    /*props:{
        label: String
    }*/
    /*data(){
        return {value: ''};
    },*/
    /*computed:{
        stl(){
            return this.value =='' ? 'background-color: #aaaaaa' : '';
        }
    }*/
}
</script>

<template>
        <label>{{this.label}}</label>
        <InputText v-bind="this.$attrs" v-model="this.value" :style="stl" />
</template>