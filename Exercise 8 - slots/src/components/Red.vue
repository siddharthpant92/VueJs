<template>
    <div>
    	<h1>No styling for red component</h1>
    	<hr>
    	<slot name="header"></slot>
    	<slot></slot>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>