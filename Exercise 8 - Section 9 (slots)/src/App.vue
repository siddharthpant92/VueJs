<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="isSelected='app-blue'">Load Blue Template</button>
                <button class="btn btn-success" @click="isSelected='app-green'">Load Green Template</button>
                <button class="btn btn-danger" @click="isSelected='app-red'">Load Red Template</button>
                <hr>

                <component :is="isSelected">
                    <h3 slot="header">Header</h3>
                    <p> Component is : {{isSelected}}</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function()
        {
            return {
                isSelected: "app-blue"
            }
        },
        components: {
            'app-blue': Blue,
            'app-green': Green,
            'app-red': Red
        }
    }
</script>

<style>
</style>
