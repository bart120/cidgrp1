<script setup>
    import InputCid from './InputCid.vue';

    defineEmits(['statusChange']);
</script>
<script>
    const regMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    export default{
        data(){
            return {value:'', valid: false}
        },
        watch:{
            value(newVal, oldValue){
                if(! regMail.test(newVal)){
                    this.valid = false;
                    this.$emit('statusChange', 'KO');
                    return;
                }
                this.valid = true;
                this.$emit('statusChange', 'OK');
            }
        },
        //emits: ['statusChange']
    }
</script>

<template>
    <InputCid type="email" v-bind="$attrs" v-model="value" />
    <p v-if="!valid" style="color: red">
        Adresse mail invalide
    </p>
</template>
