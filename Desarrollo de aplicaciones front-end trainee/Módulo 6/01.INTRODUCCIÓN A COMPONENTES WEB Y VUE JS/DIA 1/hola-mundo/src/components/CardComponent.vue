<script>
export default {
    name: 'CardComponent',
    data() {
        return {
            cardTitle: 'Card title',
            cardBody: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            cardButton: 'Go somewhere'
        }
    }
}
</script>
<template>
    <div class="card" style="width: 18rem;">
        <img src="../assets/logo.svg" class="card-img-top" alt="Logo Card">
        <div class="card-body">
            <h5 class="card-title">{{ cardTitle }}</h5>
            <p class="card-text">{{ cardBody }}</p>
            <a href="https://getbootstrap.com/docs/5.3/components/card/#about" class="btn btn-primary">{{ cardButton
                }}</a>
        </div>
    </div>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

</template>
<style scoped></style>