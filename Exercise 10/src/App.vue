<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-custom-on="clicked">Custom click directive</button>

                <br><br>
                Note: See instructor example for this!!
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
                    el.addEventListener('click', function()
                    {
                        binding.value();
                    });
                }
            }
        },
        methods:
        {
            clicked: function()
            {
                alert('Custom on-click directive created!!!!')
            }
        }
    }
</script>

<style>
</style>
