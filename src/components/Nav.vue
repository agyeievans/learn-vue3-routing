<script setup>
import {RouterLink} from "vue-router"
</script>

<template>
    <div>
        <RouterLink active-class="active" to="/">Home</RouterLink>
        <RouterLink active-class="active" to="/about">About</RouterLink>
    </div>
</template>

<style scoped>
    .active{
        font-weight: bolder;
        color: rgb(153, 104, 14);
        font-size: 20px;
    }
</style>