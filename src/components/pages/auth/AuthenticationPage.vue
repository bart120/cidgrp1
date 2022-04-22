<script setup>
    import Button from 'primevue/button';
    import InputText from 'primevue/inputtext'
    import InputCid from '../../core/input/InputCid.vue';
    import InputCidMail from '../../core/input/InputCidMail.vue';
    import {useUserStore} from '../../../store/userStore';

    const {login} = useUserStore();
</script>

<script>
export default {
    data(){
        return {user:{login:'', password:''}, valid: false};
    },
    computed:{
        disa(){
            return !this.valid;
        }
    },
    methods:{
        submit(){
            //ev.preventDefault();
            //console.log(this.user.login);
            //console.log(this);
            this.login(this.user.login, this.user.password);
            this.$router.push({path: '/'});
        },
        changeMail(status){
            this.valid = (status === 'OK');

        }
    }
}
</script>


<template>
    <h1>Connexion</h1>
    <form @submit.prevent="submit" novalidate>
        <div>
            <InputCidMail v-model="user.login" label="Login" @status-change="changeMail" />
        </div>
        <div>
            <InputCid v-model="user.password" type="password" label="Mot de passe"/>
        </div>
        <div>
            <Button type="submit" :disabled="disa" >Se connecter</Button>
        </div>
    </form>

</template>