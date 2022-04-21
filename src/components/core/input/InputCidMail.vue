<script setup>
    import InputCid from './InputCid.vue';
</script>
<script>
    const regMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    export default{
        data(){
            return {value:''}
        },
        watch:{
            value(newVal, oldValue){

            }
        }
    }
</script>

<template>
    <InputCid type="email" v-bind="$attrs" v-model="value" />
    <p v-if="" style="color: red">
        Adresse mail invalide
    </p>
</template>
