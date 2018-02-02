<template>
    <div>
    	<slot name="header"></slot>
    	<slot></slot>
    	<hr>
    	<span>Different styling for green component</span>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid green;
        background-color: lightgreen;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>