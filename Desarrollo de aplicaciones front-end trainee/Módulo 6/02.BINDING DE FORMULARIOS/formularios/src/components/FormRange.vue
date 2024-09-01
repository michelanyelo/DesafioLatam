<script>
export default {
    name: 'FormRange',
    data() {
        return {
            calificacion: '',
            calificacionesText: {
                '1': 'Muy Malo',
                '2': 'Malo',
                '3': 'Reguleque',
                '4': 'Bueno',
                '5': 'Traordinario'
            }
        }
    }
}
</script>

<template>
    <form>
        <div class="form-check">
            <input v-model="calificacion" class="form-check-input" type="radio" name="flexRadioDefault"
                id="flexRadioDefault1" value="1">
            <label class="form-check-label" for="flexRadioDefault1">
                Muy Malo
            </label>
        </div>
        <div class="form-check">
            <input v-model="calificacion" class="form-check-input" type="radio" name="flexRadioDefault"
                id="flexRadioDefault2" value="2">
            <label class="form-check-label" for="flexRadioDefault2">
                Malo
            </label>
        </div>
        <div class="form-check">
            <input v-model="calificacion" class="form-check-input" type="radio" name="flexRadioDefault"
                id="flexRadioDefault3" value="3">
            <label class="form-check-label" for="flexRadioDefault3">
                Reguleque
            </label>
        </div>
        <div class="form-check">
            <input v-model="calificacion" class="form-check-input" type="radio" name="flexRadioDefault"
                id="flexRadioDefault4" value="4">
            <label class="form-check-label" for="flexRadioDefault4">
                Bueno
            </label>
        </div>
        <div class="form-check">
            <input v-model="calificacion" class="form-check-input" type="radio" name="flexRadioDefault"
                id="flexRadioDefault5" value="5">
            <label class="form-check-label" for="flexRadioDefault5">
                Traordinario
            </label>
        </div>
    </form>

    <p class="mt-2" v-if="calificacion">Tu selección fue: {{ calificacionesText[calificacion] }}</p>
</template>

<style scoped></style>
