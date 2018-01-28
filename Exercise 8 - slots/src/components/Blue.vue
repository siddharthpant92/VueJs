<template>
    <div>
    	<slot name="header"></slot>
    	<div>
    		<span>Adding some different styling for blue component</span>
    		<hr><hr>
    		<slot></slot>	
    	</div>
    	
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>