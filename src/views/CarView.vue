<script setup>
import {useRoute} from "vue-router"
import cars from "../data/cars.json"

const route = useRoute()
const car =  cars.find(c => c.id == parseInt(route.params.id))

</script>

<template>
    <h1>Car View</h1>
    <p>{{ car.name }}</p>
    <p>{{ car.price }}</p>
    <p>{{ car.year }}</p>
</template>