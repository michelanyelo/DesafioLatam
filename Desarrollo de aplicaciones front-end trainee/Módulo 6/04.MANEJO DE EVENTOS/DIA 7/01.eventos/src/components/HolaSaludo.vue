<script>
export default {
    name: 'HolaSaludo',
    methods: {
        mostrarNombre() {
            return console.log('Mi nombre es Miguel Ángel')
        },
        alerta() {
            alert('Revisa tu consola ;)')
        }
    }
};
</script>
<template>
    <img @dblclick="alerta(), mostrarNombre()"
        src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcT515JhCeA0rherkIga0J4a3WtNJCFrvMzHYCHEtFW9Moe082VSp_-il10TQ9_bhCcHgdbU3PnjDlU6xT7JD3Q"
        alt="logo">
</template>

<style scoped></style>