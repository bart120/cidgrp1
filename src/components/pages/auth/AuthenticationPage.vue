<script setup>
    import Button from 'primevue/button';
    import InputText from 'primevue/inputtext'
    import InputCid from '../../core/input/InputCid.vue';
    import InputCidMail from '../../core/input/InputCidMail.vue';
</script>

<script>
export default {
    data(){
        return {user:{login:'', password:''}};
    },
    methods:{
        submit(){
            //ev.preventDefault();
            console.log(this.user.login);
            console.log(this);
        }
    }
}
</script>


<template>
    <h1>Connexion</h1>
    <form @submit.prevent="submit" novalidate>
        <div>
            <InputCidMail v-model="user.login" label="Login" />
        </div>
        <div>
            <InputCid v-model="user.password" type="password" label="Mot de passe"/>
        </div>
        <div>
            <Button type="submit">Se connecter</Button>
        </div>
    </form>

</template>