<template>
    <div>
        <button class="btn btn-primary" @click="increment({value: 100, duration: 1000})">Increment</button>
        <button class="btn btn-primary" @click="decrement({value: 100, duration: 3000})">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment(payload)
            {
                this.$store.dispatch('asyncIncrement', payload);
            },
            decrement(payload)
            {
                this.$store.dispatch('asyncDecrement', payload);
            }
        }
    }
</script>