<script>
export default {
    name: 'FormCondicional',
    data() {
        return {
            errorStyle: {
                color: 'red',
            },
            email: '',
            password: '',
            edad: '',
            telefono: '',
            requisitos: [
                { text: "Dormí 4 horas", checked: false },
                { text: "Tomé 8 vasos de agua", checked: false },
                { text: "Hice ejercicio", checked: false }
            ]
        }
    }
}
</script>

<template>
    <form>
        <!-- email -->
        <input type="email" v-model="email" placeholder="Ingrese su correo electrónico">
        <p v-show="!email.includes('@')" :style="errorStyle">Debes incluir un "@" en tu correo.</p>

        <!-- password -->
        <input type="password" v-model="password" placeholder="Ingrese su contraseña">
        <p v-show="password.length < 8" :style="errorStyle">Debes ingresar 8 dígitos en tu contraseña.</p>

        <!-- edad -->
        <input type="text" v-model="edad" placeholder="Ingrese su edad">
        <p v-show="Number(edad) < 18" :style="errorStyle">Debes ingresar una edad igual o superior a 18 años.</p>

        <!-- telefono -->
        <input type="text" v-model="telefono" placeholder="Ingrese su teléfono">
        <p v-show="!/^\d+$/.test(telefono)" :style="errorStyle">Debes ingresar un teléfono numérico.</p>

        <!-- requisitos -->
        <div v-for="(requisito, idx) in requisitos" :key="idx">
            <input type="checkbox" v-model="requisitos[idx].checked">
            {{ requisito.text }}
        </div>
        <p v-show="requisitos.some(req => !req.checked)" :style="errorStyle">Debes marcar todos los requisitos.</p>

        <!-- Botón de enviar -->
        <button type="submit"
            :disabled="!email.includes('@') || password.length < 8 || Number(edad) < 18 || !/^\d+$/.test(telefono) || requisitos.some(req => !req.checked)">
            Enviar
        </button>
    </form>
</template>

<style scoped></style>
