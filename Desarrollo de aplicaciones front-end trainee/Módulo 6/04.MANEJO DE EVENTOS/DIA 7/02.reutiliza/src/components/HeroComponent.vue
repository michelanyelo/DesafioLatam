<script>
export default {
    name: 'HeroComponent',
    data() {
        return {

        };
    },
};
</script>
<template>
    <div id="HeroSection">
        <img src="https://toolset.com/wp-content/uploads/2020/05/toolset-homepage-hero-section-example.png" alt="">
    </div>
</template>

<style scoped>
img {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    transform: translate(0, -180px);
}
</style>