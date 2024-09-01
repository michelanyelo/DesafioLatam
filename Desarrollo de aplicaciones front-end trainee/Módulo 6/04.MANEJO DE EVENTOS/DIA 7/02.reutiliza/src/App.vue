<script>
import HeaderComponent from './components/HeaderComponent.vue'
import HeroComponent from './components/HeroComponent.vue'
import PersonaComponent from './components/PersonaComponent.vue'
import InstrumentosComponent from './components/InstrumentosComponent.vue'

export default {
  components: {
    HeaderComponent,
    HeroComponent,
    PersonaComponent,
    InstrumentosComponent
  },
  data() {
    return {
      personas: [
        { nombre: 'Evan You', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2K0w6JxsX19kElGWunW0LH7glDT1gBI1k6Q&s', descripcion: 'Creador de VueJS' },
        { nombre: 'John Doe', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2K0w6JxsX19kElGWunW0LH7glDT1gBI1k6Q&s', descripcion: 'Creador de PHP' },
        { nombre: 'Jane Doe', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2K0w6JxsX19kElGWunW0LH7glDT1gBI1k6Q&s', descripcion: 'Creador de Wordpress' }
      ],
      instrumentos: [
        { nombre: 'bateria electronica', foto: 'https://cdnx.jumpseller.com/colque-audio-pro/image/37175903/resize/1800/1800?1694713705', precio: '$650.990' },
        { nombre: 'guitarra eléctrica', foto: 'https://dojiw2m9tvv09.cloudfront.net/52889/product/capturadepantalla2021-02-23alas11-36-32a-m1084.png', precio: '$429.990' },
        { nombre: 'teclado', foto: 'https://cdnx.jumpseller.com/epic-music/image/21538288/resize/635/635?1676994277', precio: '$399.990' }
      ]
    }
  }
}
</script>

<template>
  <HeaderComponent />
  <HeroComponent />
  <div class="personas">
    <PersonaComponent v-for="(persona, idx) in personas" :key="idx" :nombre="persona.nombre" :foto="persona.foto"
      :descripcion="persona.descripcion" />
  </div>

  <div class="instrumentos">
    <InstrumentosComponent v-for="(instrumento, idx) in instrumentos" :key="idx" :nombre="instrumento.nombre"
      :foto="instrumento.foto" :precio="instrumento.precio" />
  </div>
</template>

<style scoped>
.personas,
.instrumentos {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
