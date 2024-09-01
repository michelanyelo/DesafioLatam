<script>
export default {
    name: 'BootstrapCard',
    data() {
        return {
            card: {
                image: '',
                title: '',
                text: '',
                link: '',
                linkText: ''
            }
        }
    }
}
</script>
<template>
    <div class="card" style="width: 18rem;">
        <img :src="card.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">
                {{ card.title }}
            </h5>
            <p class="card-text">
                {{ card.text }}
            </p>
            <a :href="card.link" class="btn btn-primary">{{ card.linkText }}</a>
        </div>
    </div>
</template>
<style scoped></style>