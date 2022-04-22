<template>
    <nav>
        <Menubar :model="items">
            <template #end>
                <div v-if="! isConnected">
                    <router-link to='/login'>Se connecter</router-link>
                </div>
                <div v-else>
                    Bonjour {{user?.name}}
                    <Button type="button" @click="onLogout" >Se déconnecter</Button>
                </div>
            </template>
        </Menubar>
        
    </nav>
</template>

<script setup>
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import {useUserStore} from '../../store/userStore';
import { storeToRefs } from 'pinia';

const {isConnected, user} = storeToRefs(useUserStore());
const {logout} = useUserStore();
</script>

<script>
/*import { storeToRefs } from 'pinia';
import Menubar from 'primevue/menubar';
import {useUserStore} from '../../store/userStore';*/

export default {
    /*setup() {
    
        const userStore = useUserStore()
        return { userStore }
    },
    components: {
        Menubar
    },*/
    mounted(){
        //console.log(this.user.isConnected);
    },
    data(){
        return {
            items :[
                {
                   label: this.$t('menu.home'),
                   icon:'pi pi-fw pi-file',
                   to: '/'
                },{
                    label: this.$t('menu.cars'),
                    items:[
                        {label: 'Ajouter', to:'/cars/add'},
                        {label: 'Lister' , to:{name: 'carlist'}},
                        {label: 'Rechercher', to: '/cars/search'}
                    ]
                }
            ]
        };
    },
    methods:{
        onLogout(){
            this.logout();
        }
    }

}
</script>

