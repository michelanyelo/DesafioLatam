<script>
export default {
    name: 'ImgDinamica',
    data() {
        return {
            src: ''
        }
    }
}
</script>
<template>
    <form>
        <select class="form-select" v-model="src">
            <option selected>Selecciona tu ciudad favorita: </option>
            <option value="src/assets/santiago.jfif">Santiago</option>
            <option value="src/assets/londres.jfif">Londres</option>
            <option value="src/assets/paris.jfif">Paris</option>
        </select>
    </form>
    <img :src="src" alt="" class="mt-3">
</template>
<style scoped></style>