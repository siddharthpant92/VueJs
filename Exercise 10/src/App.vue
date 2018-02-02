<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-custom-on:click="clicked">Custom click directive</button>
                <br><br>
                <p v-custom-on:mouseover="change">Move mouse over to change color</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives:
        {
            'custom-on':
            {
                bind(el, binding, vnode)
                {
                    var type = binding.arg;
                    var fn = binding.value;
                    el.addEventListener(type, fn);
                }
            }
        },
        methods:
        {
            clicked: function()
            {
                alert('Custom on-click directive created!!!!')
            },
            change: function()
            {
                console.log("asd");
            }
        }
    }
</script>

<style>
</style>
