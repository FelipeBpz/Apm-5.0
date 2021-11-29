<template>
<div v-if="productos.length">
    <h1>Productos</h1>
    <paginate name=productos
        :list="productos"
        :per="perPage"
        class="row"
    >
    <b-col cols="4" class="mb-2"
        v-for="item in paginated('productos')"
        :key="item.id"
    >
        <productos-obt :producto="item" @clickBtn="addCarrito" ></productos-obt>
    </b-col>
    </paginate>
    <paginate-links for="productos"
        :classes="{
            'ul': ['pagination', 'justify-content-center'],
            'li': 'page-item',
            'li > a': 'page-link'
        }"
    ></paginate-links>
    </div>
    <b-alert variant="primary" show v-else>No tenemos Nada</b-alert>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import productosObt from '@/components/productosObt.vue'

export default {
    name: "productosLista",
    data(){
        return{
            paginate: ['productos'],
            perPage: 6
        }
    },
    components:{
        productosObt
    },
    computed: {
        ...mapState('productos', ['productos'])
    },
    created(){
        this.fetchProductos();
    },
    methods: {
        ...mapActions('productos', ['fetchProductos']),
        addCarrito(producto){
            console.log('addCarrito ${producto}')
        }
        
        }
    }

</script>
