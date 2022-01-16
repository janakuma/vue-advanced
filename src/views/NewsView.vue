<template>
    <div>
        <ul>
            <li v-for="(user, index) in users" :key="index">
                {{ user.id }}
            </li>
        </ul>
    </div>
</template>

<script>
import { fetchNewsList } from '../api'
export default {
    data() {
        return {
            users: [],
        }
    },
    created() {
        fetchNewsList()
            .then((response)=> {
                console.log('success', response.data)
                this.users = response.data;
            })
            .catch((error)=> {
                console.log('error', error)
            })
    }
}
</script>

<style>

</style>