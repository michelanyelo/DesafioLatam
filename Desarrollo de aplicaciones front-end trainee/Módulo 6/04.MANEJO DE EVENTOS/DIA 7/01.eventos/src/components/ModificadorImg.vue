<script>
export default {
    name: 'ModificadorImg',
    data() {
        return {
            widthImg: 100,
            heightImg: 100
        };
    },
    methods: {
        incrementarImg() {
            this.widthImg = this.widthImg + 10;
        },

        disminuirImg() {
            this.widthImg = this.widthImg - 10;
        }
    }
};
</script>
<template>
    <div class="container">
        <button class="btn" @click="incrementarImg">Incrementar 10% el tamaño de la imagen</button>
        <button class="btn" @click="disminuirImg">Reducir 10% el tamaño de la imagen</button>
        <div class="img-container">
            <img src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png" alt=""
                :style="{ width: widthImg + '%', height: heightImg + '%' }">
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 50px;
}

.btn {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #007BFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
}

.btn:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

.btn:active {
    background-color: #003f7f;
    transform: scale(1);
}

.img-container {
    width: 100%;
    max-width: 600px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 10px;
}
</style>