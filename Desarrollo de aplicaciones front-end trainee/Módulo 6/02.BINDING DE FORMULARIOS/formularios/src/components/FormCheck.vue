<script>
export default {
    name: 'FormCheck',
    data() {
        return {
            lenguajes: []
        }
    }
}
</script>

<template>
    <form>
        <div class="form-check">
            <input v-model="lenguajes" class="form-check-input" type="checkbox" value="HTML" id="flexCheckDefault1">
            <label class="form-check-label" for="flexCheckDefault1">
                HTML
            </label>
        </div>
        <div class="form-check">
            <input v-model="lenguajes" class="form-check-input" type="checkbox" value="CSS" id="flexCheckDefault2">
            <label class="form-check-label" for="flexCheckDefault2">
                CSS
            </label>
        </div>
        <div class="form-check">
            <input v-model="lenguajes" class="form-check-input" type="checkbox" value="JavaScript"
                id="flexCheckDefault3">
            <label class="form-check-label" for="flexCheckDefault3">
                JavaScript
            </label>
        </div>
        <div class="form-check">
            <input v-model="lenguajes" class="form-check-input" type="checkbox" value="Python" id="flexCheckDefault4">
            <label class="form-check-label" for="flexCheckDefault4">
                Python
            </label>
        </div>
        <div class="form-check">
            <input v-model="lenguajes" class="form-check-input" type="checkbox" value="PHP" id="flexCheckDefault5">
            <label class="form-check-label" for="flexCheckDefault5">
                PHP
            </label>
        </div>
        <div class="form-check">
            <input v-model="lenguajes" class="form-check-input" type="checkbox" value="Ruby" id="flexCheckDefault6">
            <label class="form-check-label" for="flexCheckDefault6">
                Ruby
            </label>
        </div>
    </form>
    <p v-if="lenguajes.length">Lenguajes seleccionados: {{ lenguajes.join(', ') }}</p>

</template>

<style scoped></style>
