import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [
            { name: 'test', price: 10 },
            { name: 'product', price: 20 },
            { name: 'product', price: 5 }
        ]
    }),
    getters: {
        productCount(state) {
            return state.products.length
        },
        productsCheaperThan(state) {
            return (price:number) => (
                state.products.filter(product =>
                    product.price < price
                )
            )
        },
        productsCheaperThanLength(state) {
            return (price:number) => (
                state.products.filter(product =>
                    product.price < price
                ).length
            )
        }
    },
    actions: {
        addProduct(product:{ name: string, price: number }) {
            this.products.push(product)
        }
    }
});