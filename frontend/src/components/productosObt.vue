<template>
<div>
  <b-card :title="producto.title"
    :img-src="producto.image"
    :img-alt="producto.title"
    img-top
    class="mb-2"
  >
    <p>Col $. {{producto.price}} </p>
    <b-button @click="$emit('clickBtn', producto)" variant="primary">Agregar al carro</b-button>
  </b-card>
</div>
</template>

<script>
export default {
    name: "productosObt",
    props: {
        producto:{
            type: Object,
            required: true
        }
    }
}
</script>