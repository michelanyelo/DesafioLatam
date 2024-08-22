<script>
export default {
    name: 'NavBar',
    data() {
        return {
            nombreNegocio: 'Desafio Latam',
            opciones: ["Carreras", "Cursos", "Empresas"],
            sesion: 'Iniciar Sesion',
        }
    }
}
</script>
<template>
    <div>
        <nav>
            <span>{{ nombreNegocio }}</span>
            <div class="opciones">
                <span>{{ opciones[0] }}</span>
                <span>{{ opciones[1] }}</span>
                <span>{{ opciones[2] }}</span>
            </div>
            <div class="sesion">
                <span>{{ sesion }}</span>
            </div>
        </nav>
    </div>
</template>
<style scoped>
nav {
    background-color: #900C3E;
    padding: 0.8rem;
    color: white;
    display: flex;
    justify-content: space-between;
}

.opciones {
    display: flex;
    gap: 1rem;
}
</style>