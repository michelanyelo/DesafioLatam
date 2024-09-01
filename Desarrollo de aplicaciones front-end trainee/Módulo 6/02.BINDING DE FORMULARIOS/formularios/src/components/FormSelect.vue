<script>
export default {
    name: 'FormSelect',
    data() {
        return {
            licencia: ''
        }
    }
}
</script>
<template>
    <form>
        <label>Licencia Clase: </label>
        <select v-model="licencia">
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
            <option value="d">D</option>
            <option value="f">F</option>
        </select>
    </form>
</template>
<style scoped></style>