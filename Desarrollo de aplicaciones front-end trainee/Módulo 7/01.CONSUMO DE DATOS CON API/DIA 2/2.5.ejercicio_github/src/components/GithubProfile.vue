<template>
    <h1>Github Profile</h1>
    <div class="profile" v-if="profile">
        <img :src="profile.avatar_url" :alt="profile.name">
        <h2>{{ profile.name }}</h2>
        <a :href="profile.html_url" target="_blank">My website</a>
    </div>
</template>

<script>
import GithubProfile from '@/services/GithubService'

export default {
    name: 'GithubProfile',
    data() {
        return {
            profile: null,
        }
    },
    async mounted() {
        await this.getData()
    },
    methods: {
        async getData() {
            const gitService = new GithubProfile()
            await gitService.setData()
            this.profile = gitService.data.value
            // Accede a los datos con .value después de setData
        },
    },
};
</script>

<style scoped></style>