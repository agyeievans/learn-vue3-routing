<script setup>
import {useRoute, useRouter, RouterView} from "vue-router"
import cars from "../data/cars.json"

const route = useRoute()
const router = useRouter()

console.log(router)

const carId = parseInt(route.params.id)

const car = cars.find(c => c.id === carId)

const showContact = () => {
    return router.push(`/cars/${carId}/contact`)
}

</script>

<template>
    <div v-if="car">
        <h1>Car View</h1>
        <p>{{ car.name }}</p>
        <p>{{ car.price }}</p>
        <p>{{ car.year }}</p>
        <button @click="showContact">Click for contact</button>
        <RouterView />
    </div>
    <div v-else>
        <h1>Car not found</h1>
    </div>
</template>