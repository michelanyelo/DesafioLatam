<script>
export default {
    name: 'ModificadorTeclas',
    data() {
        return {
            fontSize: 16,
        };
    },
    methods: {
        incrementar() {
            this.fontSize++
        },
        disminuir() {
            this.fontSize--
        }
    }
};
</script>
<template>
    <input type="" :style="{ fontSize: fontSize + 'px' }" @keyup.up="incrementar" @keyup.down="disminuir">
</template>

<style scoped></style>