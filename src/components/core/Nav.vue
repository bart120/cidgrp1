<template>
    <nav>
        <Menubar :model="items">
            
        </Menubar>
    </nav>
</template>

<script setup>
import Menubar from 'primevue/menubar';
</script>

<script>
export default {
    data(){
        return {
            items :[
                {
                   label:'Accueil',
                   icon:'pi pi-fw pi-file',
                   to: '/'
                },{
                    label: 'Voitures',
                    items:[
                        {label: 'Ajouter', to:'/cars/add'},
                        {label: 'Lister' , to:'/cars/list'},
                        {label: 'Rechercher', to: '/cars/search'},
                    ]
                }
            ]
        };
    }

}
</script>

