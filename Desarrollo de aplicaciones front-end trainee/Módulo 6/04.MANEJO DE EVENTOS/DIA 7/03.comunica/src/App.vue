<script>
import InstrumentoComp from './components/InstrumentoComp.vue'
import TodoComp from './components/TodoComp.vue'

export default {
  components: {
    InstrumentoComp,
    TodoComp
  },
  data() {
    return {
      instrumentos: [
        { nombre: 'bateria electronica', foto: 'https://cdnx.jumpseller.com/colque-audio-pro/image/37175903/resize/1800/1800?1694713705', precio: '$650.990' },
        { nombre: 'guitarra eléctrica', foto: 'https://dojiw2m9tvv09.cloudfront.net/52889/product/capturadepantalla2021-02-23alas11-36-32a-m1084.png', precio: '$429.990' },
        { nombre: 'teclado', foto: 'https://cdnx.jumpseller.com/epic-music/image/21538288/resize/635/635?1676994277', precio: '$399.990' }
      ],
      listaTareas: ['comprar instrumento', 'practicar', 'vender instrumento']
    }
  },
  methods: {
    eliminarInstrumento(index) {
      this.instrumentos.splice(index, 1)
    },

    cbEliminarTarea(idx) {
      this.listaTareas.splice(idx, 1)
    }
  }
}
</script>

<template>
  <div class="instrumentos">
    <InstrumentoComp v-for="(instrumento, idx) in instrumentos" :key="idx" :nombre="instrumento.nombre"
      :foto="instrumento.foto" :precio="instrumento.precio" :index="idx" @eliminarInstrumento="eliminarInstrumento" />
  </div>
  <TodoComp 
  :listaTareas="listaTareas" 
  @eliminarTarea="cbEliminarTarea" />
</template>

<style scoped>
.instrumentos {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
