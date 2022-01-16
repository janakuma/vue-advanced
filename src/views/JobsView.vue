<template>
    <div>
        <ul>
            <li v-for="(user, index) in users" :key="index">
                {{ user }}
            </li>
        </ul>
    </div>
</template>

<script>
import { fetchJobsList } from '../api'
export default {
    data() {
        return {
            users: [],
        }
    },
    created() {
        fetchJobsList()
            .then((response) => {
                this.users = response.data;
            })
            .catch((error)=> {
                console.log(error);

            })
    }
}
</script>

<style>

</style>