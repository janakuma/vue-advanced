<template>
    <div>
        <ul>
            <li v-for="(user, index) in users" :key="index">
                {{ user.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import { fetchAskList } from '../api'
export default {
    data() {
        return {
            users: [],
        }
    },
    created() {
        fetchAskList()
            .then((response) => {
                this.users = response.data;
            })
            .catch((error) => {
                console.log(error);
            })
    }

}
</script>

<style>

</style>