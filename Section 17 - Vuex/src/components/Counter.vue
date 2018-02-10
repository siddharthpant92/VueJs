<template>
    <div>
        <button class="btn btn-primary" @click="increment(50)">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment(value) {
                this.$store.commit('increment', value);
            },
            decrement() {
                this.$store.commit('decrement', 1);
            }
        }
    }
</script>