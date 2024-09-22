<script setup lang="ts">
import { useProductStore } from '../stores/HomeStore'

const store = useProductStore()

defineProps<{ msg: string }>()

// const count = ref(0)
</script>

<template>
    <h1>{{ msg }}</h1>
    <h2>Test State</h2>

    <ul>
        <li v-for="product in store.products">
            <p>{{ product }}</p>
        </li>
    </ul>
    <p>{{ store.productCount }}</p>
    <ul>
        <li v-for="product in store.productsCheaperThan(10)">
            <p>{{ product }}</p>
        </li>
    </ul>
    <p>{{ store.productsCheaperThanLength(10) }}</p>
    <button @click="store.addProduct({ name: 'aa', price: 15 })">Add</button>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
