<template>
    <div class="tool-bar">
        <router-link to="/news">News</router-link>
        <router-link to="/ask">Ask</router-link>
        <router-link to="/jobs">Jobs</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.tool-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    background-color: #4FDDC3;

    a {
        display: inline-block;
        padding: 0 8px;
    }
}
</style>