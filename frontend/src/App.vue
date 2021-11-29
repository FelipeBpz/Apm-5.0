<template>
  <div id="app">
    <layout>
      <template slot="productos">
        <productos-lista></productos-lista>
      </template>
      <template slot="carrito">
        <carrito></carrito>
      </template>
    </layout>
  </div>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue'
import productosLista from '@/components/productosLista.vue'

export default {
  name: 'App',
  components: {
    'layout': BaseLayout, productosLista
  }
}
</script>

